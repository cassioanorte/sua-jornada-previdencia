import { Link } from "react-router-dom";
import { cityPages } from "@/data/cityPages";

const colHeader: React.CSSProperties = {
  fontFamily: '"JetBrains Mono", monospace',
  fontSize: 10,
  letterSpacing: "0.28em",
  textTransform: "uppercase",
  color: "#d4b888",
  marginBottom: 20,
};

const linkStyle: React.CSSProperties = {
  fontFamily: '"Cormorant Garamond", Georgia, serif',
  fontSize: 15,
  color: "#b8b1a9",
  display: "block",
  padding: "5px 0",
};

const areas = [
  { label: "Aposentadorias", to: "/areas-de-atuacao" },
  { label: "Incapacidade", to: "/auxilio-doenca" },
  { label: "Rural", to: "/aposentadoria-rural" },
  { label: "Pensões", to: "/pensao-morte" },
  { label: "Maternidade", to: "/auxilio-maternidade" },
  { label: "Revisões", to: "/areas-de-atuacao" },
];

const escritorio = [
  { label: "Sócios", to: "/quem-somos" },
  { label: "Conteúdo", to: "/blog" },
  { label: "Casos", to: "/quem-somos#casos" },
  { label: "FAQ", to: "/contato#faq" },
  { label: "Privacidade", to: "/contato" },
];

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#14110e",
        borderTop: "3px solid #d4b888",
        padding: "64px 24px 28px",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 1320 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]" style={{ gap: 56 }}>
          {/* Brand */}
          <div>
            <div className="font-display italic" style={{ fontSize: 32, color: "#f4ede0", lineHeight: 1.1 }}>
              Spier <span style={{ color: "#d4b888" }}>&</span> Anorte
            </div>
            <div
              className="font-mono uppercase"
              style={{ fontSize: 9, letterSpacing: "0.32em", color: "#d4b888", marginTop: 10 }}
            >
              Advogados Associados · OAB/RS 4.809
            </div>
            <p
              className="font-editorial italic"
              style={{
                fontSize: 16,
                lineHeight: 1.55,
                color: "#b8b1a9",
                marginTop: 24,
                maxWidth: 360,
                textAlign: "justify",
              }}
            >
              Sociedade de advogados com atuação exclusiva em direito previdenciário desde 2013.
              Gramado · Nova Petrópolis · atendimento em todo o Brasil.
            </p>
          </div>

          {/* Áreas */}
          <div>
            <div style={colHeader}>Áreas</div>
            <nav>
              {areas.map((a) => (
                <Link key={a.label} to={a.to} style={linkStyle} className="hover:text-[#d4b888] transition-colors">
                  {a.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Escritório */}
          <div>
            <div style={colHeader}>Escritório</div>
            <nav>
              {escritorio.map((a) => (
                <Link key={a.label} to={a.to} style={linkStyle} className="hover:text-[#d4b888] transition-colors">
                  {a.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contato */}
          <div>
            <div style={colHeader}>Contato</div>
            <a
              href="https://wa.link/hdn70i"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              className="hover:text-[#d4b888] transition-colors"
            >
              (54) 99987-0786
            </a>
            <a
              href="mailto:cassio@spiereanorte.adv.br"
              style={linkStyle}
              className="hover:text-[#d4b888] transition-colors"
            >
              cassio@spiereanorte.adv.br
            </a>
            <span style={linkStyle}>Gramado · RS</span>
            <span style={linkStyle}>Nova Petrópolis · RS</span>
          </div>
        </div>

        {/* Cities (SEO) */}
        <div style={{ marginTop: 56, paddingTop: 32, borderTop: "1px solid rgba(184,153,104,0.18)" }}>
          <Link
            to="/advogado-previdenciario-rs"
            className="font-mono uppercase"
            style={{
              fontSize: 10,
              letterSpacing: "0.28em",
              color: "#d4b888",
              display: "block",
              marginBottom: 16,
            }}
          >
            Atendemos no Rio Grande do Sul →
          </Link>
          <div className="flex flex-wrap" style={{ gap: 8 }}>
            {cityPages.map((city) => (
              <Link
                key={city.slug}
                to={`/advogado-previdenciario/${city.slug}`}
                className="font-mono uppercase hover:text-[#d4b888] hover:border-[#d4b888]/40 transition-colors"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.18em",
                  padding: "5px 10px",
                  border: "1px solid rgba(184,153,104,0.18)",
                  color: "#b8b1a9",
                  borderRadius: 2,
                }}
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3"
          style={{
            marginTop: 44,
            paddingTop: 24,
            borderTop: "1px solid rgba(184,153,104,0.18)",
          }}
        >
          <span
            className="font-mono uppercase"
            style={{ fontSize: 10, letterSpacing: "0.18em", color: "#87807a" }}
          >
            © {new Date().getFullYear()} Spier &amp; Anorte Advogados Associados
          </span>
          <span
            className="font-mono uppercase"
            style={{ fontSize: 10, letterSpacing: "0.18em", color: "#87807a" }}
          >
            Provimento 205/2021 OAB
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
