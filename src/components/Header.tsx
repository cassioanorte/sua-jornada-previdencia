import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Áreas", href: "/areas-de-atuacao" },
    { name: "Direito Público", href: "/direito-publico-municipal" },
    { name: "Sócios", href: "/quem-somos" },
    { name: "Casos", href: "/quem-somos#casos" },
    { name: "Conteúdo", href: "/blog" },
    { name: "FAQ", href: "/contato#faq" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleWhatsApp = () => {
    window.open("https://wa.link/hdn70i", "_blank");
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: "#14110e",
        borderBottom: "1px solid rgba(184,153,104,0.18)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1320px", padding: "20px 24px" }}>
        <div className="flex items-center justify-between gap-8 lg:px-8">
          {/* LEFT — Monogram + Wordmark */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <div
              className="flex items-center justify-center flex-shrink-0"
              style={{
                width: 38,
                height: 38,
                backgroundColor: "#d4b888",
                borderRadius: 2,
              }}
              aria-hidden="true"
            >
              <span className="font-display italic leading-none" style={{ fontSize: 22, color: "#14110e" }}>
                S
              </span>
              <span
                className="font-display italic leading-none"
                style={{ fontSize: 22, color: "#4a2e1f", marginLeft: -3 }}
              >
                A
              </span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display italic" style={{ fontSize: 20, color: "#fcfaf5" }}>
                Spier <span style={{ color: "#d4b888" }}>&</span> Anorte
              </span>
              <span
                className="font-mono"
                style={{
                  fontSize: 9,
                  letterSpacing: "0.28em",
                  color: "#d4b888",
                  textTransform: "uppercase",
                  marginTop: 2,
                }}
              >
                Direito Previdenciário
              </span>
            </div>
          </Link>

          {/* CENTER — Nav */}
          <nav className="hidden lg:flex items-center" style={{ gap: 32 }}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="font-mono uppercase transition-colors hover:text-[#d4b888]"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  color: isActive(item.href) ? "#d4b888" : "#b8b1a9",
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* RIGHT — Phone + WhatsApp pill */}
          <div className="hidden lg:flex items-center" style={{ gap: 20 }}>
            <a
              href="tel:+5554999870786"
              className="font-mono"
              style={{ fontSize: 11, color: "#b8b1a9", letterSpacing: "0.08em" }}
            >
              (54) 99987-0786
            </a>
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "#d4b888",
                color: "#14110e",
                padding: "11px 18px",
                borderRadius: 999,
                gap: 8,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 999,
                  backgroundColor: "#3ddc84",
                  display: "inline-block",
                }}
              />
              <span
                className="font-mono"
                style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}
              >
                WhatsApp
              </span>
            </button>
          </div>

          {/* Mobile — WhatsApp pill + Hamburger */}
          <div className="lg:hidden flex items-center" style={{ gap: 10 }}>
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center transition-opacity hover:opacity-90"
              aria-label="Falar no WhatsApp"
              style={{
                backgroundColor: "#d4b888",
                color: "#14110e",
                padding: "8px 14px",
                borderRadius: 999,
                gap: 6,
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: 999, backgroundColor: "#3ddc84", display: "inline-block" }} />
              <span
                className="font-mono"
                style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}
              >
                WhatsApp
              </span>
            </button>
            <button
              className="p-2"
              style={{ color: "#fcfaf5" }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden py-6 animate-fade-in"
            style={{ borderTop: "1px solid rgba(184,153,104,0.18)" }}
          >
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-mono uppercase py-2"
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.2em",
                    color: isActive(item.href) ? "#d4b888" : "#b8b1a9",
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center w-full mt-4"
                style={{
                  backgroundColor: "#d4b888",
                  color: "#14110e",
                  padding: "13px 18px",
                  borderRadius: 999,
                  gap: 8,
                }}
              >
                <span
                  style={{ width: 6, height: 6, borderRadius: 999, backgroundColor: "#3ddc84" }}
                />
                <span
                  className="font-mono"
                  style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}
                >
                  WhatsApp
                </span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
