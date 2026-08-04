import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://spiereanorte.adv.br";
const BRAND = "Spier & Anorte";
const PAGE_URL = `${SITE_URL}/direito-publico-municipal/`;

const PAGE_TITLE = "Direito Público e Administrativo Municipal | Spier & Anorte";
const PAGE_DESCRIPTION =
  "Assessoria jurídica ao Poder Executivo e Legislativo municipais desde 2012: licitações (Lei 14.133/2021), Tribunais de Contas, processo legislativo, pareceres e contencioso.";

// Garante uma meta tag <meta name=".."/> ou <meta property=".."/> com o valor dado.
const setMeta = (attr: "name" | "property", key: string, value: string) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
};

const atuacao = [
  {
    titulo: "Direito Administrativo e Municipal",
    texto:
      "Organização administrativa, regime jurídico dos servidores, processo administrativo disciplinar, bens públicos, convênios e parcerias voluntárias, transferências e prestação de contas de recursos repassados.",
  },
  {
    titulo: "Licitações e Contratos Administrativos",
    texto:
      "Orientação jurídica em contratações públicas, da fase preparatória à execução; elaboração de minutas de editais; pareceres em impugnações e recursos, alterações contratuais, reequilíbrio econômico-financeiro e processos de responsabilização, com capacitação específica na Lei nº 14.133/2021 junto ao Instituto Rui Barbosa, em parceria com os Tribunais de Contas.",
  },
  {
    titulo: "Pareceres de alta complexidade",
    texto:
      "Pareceres complexos e manifestações fundamentadas em doutrina, jurisprudência e na orientação consolidada dos órgãos de controle e cortes nacionais, oferecendo aos Gestores a motivação necessária para decidir com segurança.",
  },
  {
    titulo: "Processo legislativo",
    texto:
      "Redação de projetos de lei, decretos, resoluções e demais atos normativos; análise de constitucionalidade, vício de iniciativa e adequação orçamentária; orientação e fundamentação de mensagens de veto, acompanhamento de sessões e orientação à Mesa Diretora e aos Vereadores.",
  },
  {
    titulo: "Políticas públicas",
    texto:
      "Estruturação jurídica de programas municipais, com atenção à base normativa, às fontes de custeio e aos requisitos de responsabilidade fiscal.",
  },
  {
    titulo: "Tribunais de Contas",
    texto:
      "Defesas e esclarecimentos em processos de contas, respostas a apontamentos, tomadas especiais de contas e diligências de auditoria e acompanhamento processual, inclusive em favor de gestores e ex-gestores.",
  },
  {
    titulo: "Contencioso de alta complexidade",
    texto:
      "Atuação judicial em demandas estratégicas de elevada complexidade e repercussão econômica para Entes Públicos Municipais e na defesa da legalidade dos atos administrativos questionados em juízo.",
  },
];

const DireitoPublicoMunicipal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = PAGE_TITLE;
    setMeta("name", "description", PAGE_DESCRIPTION);
    setMeta("name", "keywords", "direito público, direito administrativo, direito municipal, licitações, Lei 14.133/2021, Tribunal de Contas, processo legislativo, assessoria a prefeituras e câmaras municipais");
    setMeta("property", "og:title", PAGE_TITLE);
    setMeta("property", "og:description", PAGE_DESCRIPTION);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", PAGE_URL);
    setMeta("name", "twitter:title", PAGE_TITLE);
    setMeta("name", "twitter:description", PAGE_DESCRIPTION);

    // JSON-LD específico da área — Service prestado pela sociedade de advogados.
    // O prerender (puppeteer executa JS) captura este <head> já preenchido.
    const ld = {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "@id": `${PAGE_URL}#service`,
      name: "Direito Público e Administrativo Municipal",
      url: PAGE_URL,
      description: PAGE_DESCRIPTION,
      inLanguage: "pt-BR",
      provider: {
        "@type": "LegalService",
        name: "Spier & Anorte Sociedade de Advogados",
        url: SITE_URL,
        "@id": `${SITE_URL}/#organization`,
      },
      areaServed: [
        { "@type": "State", name: "Rio Grande do Sul" },
        { "@type": "Country", name: "Brasil" },
      ],
      serviceType: "Direito Público e Administrativo Municipal",
      knowsAbout: [
        "Direito Administrativo",
        "Direito Municipal",
        "Licitações e contratos administrativos",
        "Lei nº 14.133/2021",
        "Processo legislativo municipal",
        "Tribunais de Contas",
        "Políticas públicas",
        "Contencioso de direito público",
      ],
      mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
    };
    const LD_ID = "ld-direito-publico";
    let script = document.getElementById(LD_ID) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = LD_ID;
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(ld);

    return () => {
      const s = document.getElementById(LD_ID);
      if (s) s.remove();
    };
  }, []);

  const handleWhatsApp = () => {
    window.open("https://wa.link/hdn70i", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero — Editorial (mesma identidade da home) */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#14110e", paddingTop: 148, paddingBottom: 96 }}
      >
        <div className="relative z-10 mx-auto px-6 md:px-14" style={{ maxWidth: 1100 }}>
          {/* Kicker */}
          <div className="flex items-center gap-3" style={{ marginBottom: 32 }}>
            <span style={{ width: 28, height: 1, backgroundColor: "#d4b888", opacity: 0.6 }} />
            <span
              className="font-mono uppercase"
              style={{ fontSize: 11, letterSpacing: "0.32em", color: "#d4b888" }}
            >
              Área de atuação · desde 2012
            </span>
          </div>

          {/* H1 */}
          <h1
            className="font-display animate-fade-in"
            style={{
              fontSize: "clamp(44px, 6.4vw, 84px)",
              fontWeight: 400,
              lineHeight: 1.02,
              color: "#f4ede0",
              letterSpacing: "-0.01em",
            }}
          >
            Direito Público e Administrativo{" "}
            <em style={{ color: "#d4b888", fontStyle: "italic" }}>Municipal</em>.
          </h1>

          {/* Intro */}
          <p
            className="font-editorial"
            style={{
              fontSize: 20,
              lineHeight: 1.6,
              color: "#b8b1a9",
              maxWidth: 820,
              marginTop: 36,
              textAlign: "justify",
            }}
          >
            O escritório Spier &amp; Anorte Sociedade de Advogados conta com profissionais atuantes no
            Direito Público Municipal desde o ano de 2012. Assessoramos, de maneira permanente, tanto o
            Poder Executivo quanto o Poder Legislativo, em diversos Municípios da região, o que nos confere
            uma compreensão integral do funcionamento do ente público, das relações e da articulação entre
            os Poderes.
          </p>
          <p
            className="font-editorial"
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: "#87807a",
              maxWidth: 820,
              marginTop: 24,
              textAlign: "justify",
            }}
          >
            Para assegurar a excelência e o padrão de atendimento, o escritório dispõe de especialistas
            pós-graduados em Direito Público, Direito Municipal, Direito Social e Gestão Pública, inclusive
            com anterior passagem pelo Ministério Público e Poder Judiciário.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-start gap-4" style={{ marginTop: 44 }}>
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "#d4b888",
                color: "#14110e",
                padding: "16px 28px",
                borderRadius: 999,
                gap: 10,
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: 999, backgroundColor: "#1f7a3d" }} />
              <span
                className="font-mono uppercase"
                style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em" }}
              >
                Falar no WhatsApp
              </span>
            </button>
            <Link
              to="/contato"
              className="inline-flex items-center transition-colors hover:bg-[rgba(212,184,136,0.08)]"
              style={{
                border: "1px solid rgba(212,184,136,0.45)",
                color: "#f4ede0",
                padding: "16px 28px",
                borderRadius: 999,
                gap: 10,
              }}
            >
              <span
                className="font-mono uppercase"
                style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.18em" }}
              >
                Solicitar contato →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Nossa atuação */}
      <section style={{ backgroundColor: "#14110e", padding: "24px 24px 120px" }}>
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <div style={{ marginBottom: 56 }}>
            <div
              className="font-mono uppercase"
              style={{ fontSize: 11, letterSpacing: "0.32em", color: "#d4b888", marginBottom: 20 }}
            >
              Nossa atuação
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 400,
                lineHeight: 1.05,
                color: "#f4ede0",
                letterSpacing: "-0.01em",
                maxWidth: 900,
              }}
            >
              Da gestão administrativa ao{" "}
              <em style={{ fontStyle: "italic", color: "#d4b888" }}>contencioso estratégico</em>.
            </h2>
          </div>

          <div style={{ borderTop: "1px solid rgba(184,153,104,0.18)" }}>
            {atuacao.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-[64px_320px_1fr]"
                style={{
                  padding: "32px 0",
                  borderBottom: "1px solid rgba(184,153,104,0.18)",
                  gap: 24,
                  alignItems: "start",
                }}
              >
                <div
                  className="font-display italic"
                  style={{ fontSize: 32, color: "#d4b888", fontWeight: 400, lineHeight: 1 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3
                  className="font-display"
                  style={{ fontSize: 24, fontWeight: 400, color: "#f4ede0", lineHeight: 1.2 }}
                >
                  {item.titulo}
                </h3>
                <p
                  className="font-editorial"
                  style={{ fontSize: 17, lineHeight: 1.6, color: "#b8b1a9", textAlign: "justify" }}
                >
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section style={{ backgroundColor: "#1f1a15", padding: "100px 24px" }}>
        <div className="mx-auto text-center" style={{ maxWidth: 820 }}>
          <div
            className="font-mono uppercase"
            style={{ fontSize: 11, letterSpacing: "0.32em", color: "#d4b888", marginBottom: 24 }}
          >
            Assessoria a Prefeituras e Câmaras
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(32px, 4.6vw, 56px)",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "#f4ede0",
              letterSpacing: "-0.01em",
            }}
          >
            Segurança jurídica para{" "}
            <em style={{ fontStyle: "italic", color: "#d4b888" }}>decidir</em>.
          </h2>
          <p
            className="font-editorial"
            style={{ fontSize: 19, lineHeight: 1.55, color: "#b8b1a9", marginTop: 24 }}
          >
            Fale com nossa equipe para uma avaliação inicial da demanda do seu Município ou órgão.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4" style={{ marginTop: 40 }}>
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "#d4b888",
                color: "#14110e",
                padding: "16px 28px",
                borderRadius: 999,
                gap: 10,
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: 999, backgroundColor: "#1f7a3d" }} />
              <span
                className="font-mono uppercase"
                style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em" }}
              >
                Falar no WhatsApp
              </span>
            </button>
            <Link
              to="/contato"
              className="inline-flex items-center transition-colors hover:bg-[rgba(212,184,136,0.08)]"
              style={{
                border: "1px solid rgba(212,184,136,0.45)",
                color: "#f4ede0",
                padding: "16px 28px",
                borderRadius: 999,
                gap: 10,
              }}
            >
              <span
                className="font-mono uppercase"
                style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.18em" }}
              >
                Solicitar contato →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DireitoPublicoMunicipal;
