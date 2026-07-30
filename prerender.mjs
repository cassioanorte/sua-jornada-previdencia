// Prerender estático (SSG) das rotas do site.
// Serve o /dist com um servidor local, abre cada rota no Chromium via puppeteer,
// espera o React montar, e salva o HTML já renderizado em /dist/<rota>/index.html.
// Assim crawlers/IAs leem o conteúdo sem executar JS.

import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, "dist");
const PORT = 4567;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".mp3": "audio/mpeg",
  ".xml": "application/xml",
  ".txt": "text/plain",
};

// Servidor SPA: arquivos reais servem direto; qualquer rota desconhecida cai no index.html.
function serve() {
  return http.createServer((req, res) => {
    try {
      const urlPath = decodeURIComponent(req.url.split("?")[0]);
      let filePath = path.join(DIST, urlPath);
      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
        fs.createReadStream(filePath).pipe(res);
        return;
      }
      // fallback SPA
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      fs.createReadStream(path.join(DIST, "index.html")).pipe(res);
    } catch (e) {
      res.writeHead(500);
      res.end("err");
    }
  });
}

// Lê as rotas do sitemap.xml (fonte de verdade do site) + garante rotas-chave.
function readRoutes() {
  const sitemap = fs.readFileSync(path.join(DIST, "sitemap.xml"), "utf-8");
  const locs = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  const routes = new Set(["/"]);
  for (const loc of locs) {
    try {
      const u = new URL(loc);
      // Só rotas do domínio oficial (ignora eventuais domínios alternativos)
      if (u.hostname.includes("spiereanorte")) {
        let p = u.pathname;
        if (p !== "/" && p.endsWith("/")) p = p.slice(0, -1);
        routes.add(p);
      }
    } catch {}
  }
  return [...routes];
}

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

// Procura um Chromium do Playwright no cache do usuário atual (fallback local).
// Retorna o caminho do binário executável mais recente, ou null se não achar.
function findLocalChromium() {
  const home = process.env.HOME || "";
  const base = path.join(home, ".cache", "ms-playwright");
  try {
    if (!fs.existsSync(base)) return null;
    const dirs = fs.readdirSync(base)
      .filter((d) => d.startsWith("chromium-"))
      .sort()
      .reverse(); // versão mais recente primeiro
    for (const d of dirs) {
      const bin = path.join(base, d, "chrome-linux64", "chrome");
      try {
        fs.accessSync(bin, fs.constants.X_OK);
        return bin;
      } catch {}
    }
  } catch {}
  return null;
}

async function run() {
  const server = serve();
  await new Promise((r) => server.listen(PORT, r));
  const routes = readRoutes();
  console.log(`Prerender de ${routes.length} rotas...`);

  // @sparticuz/chromium traz um Chromium autocontido (com as libs junto), então
  // funciona em ambientes de build/CI (Netlify, GitHub Actions, lambda) que NÃO têm
  // as bibliotecas de sistema do Chromium (libatk, libgbm, etc.) instaladas.
  // Permite override via PUPPETEER_EXECUTABLE_PATH (Chrome do sistema) quando existir.
  let executablePath =
    process.env.PUPPETEER_EXECUTABLE_PATH || (await chromium.executablePath());

  // Fallback defensivo (ambiente local multi-usuário): o @sparticuz/chromium extrai
  // sempre para /tmp/chromium. Se esse arquivo já existir e pertencer a OUTRO usuário
  // (ex.: /tmp/chromium do naialex, modo 700), o spawn falha com EACCES. Nesse caso,
  // sem PUPPETEER_EXECUTABLE_PATH definido, procuramos um Chromium do Playwright no
  // cache do usuário atual. No CI (Netlify/Actions) o /tmp/chromium é acessível, então
  // este bloco NÃO dispara e o comportamento original é preservado.
  if (!process.env.PUPPETEER_EXECUTABLE_PATH) {
    try {
      fs.accessSync(executablePath, fs.constants.X_OK);
    } catch {
      const fb = findLocalChromium();
      if (fb) {
        console.warn(`[prerender] ${executablePath} inacessível (EACCES); usando fallback local: ${fb}`);
        executablePath = fb;
        // O Chromium do Playwright precisa de libs de sistema que, nesta VPS sem sudo,
        // vivem em local persistente (/opt/athena/tools/chrome-libs). Injeta no
        // LD_LIBRARY_PATH se existirem, para o binário conseguir subir.
        const libBase = "/opt/athena/tools/chrome-libs";
        const libDirs = [
          `${libBase}/playwright-libs/usr/lib/x86_64-linux-gnu`,
          `${libBase}/atk-libs/usr/lib/x86_64-linux-gnu`,
        ].filter((d) => fs.existsSync(d));
        if (libDirs.length) {
          process.env.LD_LIBRARY_PATH = process.env.LD_LIBRARY_PATH
            ? `${libDirs.join(":")}:${process.env.LD_LIBRARY_PATH}`
            : libDirs.join(":");
          console.warn(`[prerender] LD_LIBRARY_PATH ajustado para libs locais: ${libDirs.join(":")}`);
        }
      }
    }
  }

  const browser = await puppeteer.launch({
    executablePath,
    headless: chromium.headless,
    args: [
      ...chromium.args,
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
    ],
  });

  let ok = 0;
  for (const route of routes) {
    const page = await browser.newPage();
    try {
      await page.goto(`http://127.0.0.1:${PORT}${route}`, {
        waitUntil: "networkidle0",
        timeout: 45000,
      });
      // Espera o React montar conteúdo real dentro de #root.
      await page.waitForFunction(
        () => {
          const r = document.getElementById("root");
          return r && r.innerText && r.innerText.trim().length > 200;
        },
        { timeout: 20000 }
      ).catch(() => {});
      await wait(400);

      let html = await page.content();

      // Corrige canonical/og:url por rota. O template index.html traz esses
      // valores fixos apontando para a home; sem isso, o Google trata toda
      // página como duplicata da home e não indexa (canonical = home).
      //
      // CONVENÇÃO CANÔNICA = COM BARRA FINAL (trailing slash).
      // O prerender grava dist/<rota>/index.html (diretório), e o Netlify serve
      // essa página em /<rota>/ com HTTP 200. A URL SEM barra sofre 301 -> /<rota>/.
      // Por isso canonical e og:url DEVEM terminar em "/" para bater exatamente
      // com a URL 200 servida (sem redirect intermediário). O sitemap.xml também
      // usa barra final. Assim sitemap == URL servida == canonical, sem loop.
      const canonicalUrl =
        "https://spiereanorte.adv.br" +
        (route === "/" ? "/" : route.replace(/\/?$/, "/"));
      html = html.replace(
        /(<link[^>]*rel=["']canonical["'][^>]*href=["'])[^"']*(["'])/i,
        `$1${canonicalUrl}$2`
      );
      html = html.replace(
        /(<meta[^>]*property=["']og:url["'][^>]*content=["'])[^"']*(["'])/i,
        `$1${canonicalUrl}$2`
      );

      const outDir = route === "/" ? DIST : path.join(DIST, route);
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, "index.html"), html, "utf-8");
      ok++;
      console.log(`ok ${route}`);
    } catch (e) {
      console.log(`FALHA ${route}: ${e.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.close();
  console.log(`Prerender concluído: ${ok}/${routes.length} rotas.`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
