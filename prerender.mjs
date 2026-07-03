// Prerender estático (SSG) das rotas do site.
// Serve o /dist com um servidor local, abre cada rota no Chromium via puppeteer,
// espera o React montar, e salva o HTML já renderizado em /dist/<rota>/index.html.
// Assim crawlers/IAs leem o conteúdo sem executar JS.

import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import puppeteer from "puppeteer";

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

async function run() {
  const server = serve();
  await new Promise((r) => server.listen(PORT, r));
  const routes = readRoutes();
  console.log(`Prerender de ${routes.length} rotas...`);

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
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
