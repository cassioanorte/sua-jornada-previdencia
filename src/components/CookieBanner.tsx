import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Banner de cookies: o Google Analytics (GA4) só carrega depois do "Aceitar".
// A escolha fica em localStorage ("sa_cookie_consent" = granted | denied).
// O carregamento em si está em index.html (window.__loadGA), com Consent Mode v2 negado por padrão.
declare global {
  interface Window {
    __loadGA?: () => void;
  }
}

const KEY = "sa_cookie_consent";

export const openCookiePreferences = () => {
  window.dispatchEvent(new Event("sa:cookie-preferences"));
};

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Não renderiza no prerender (puppeteer), para não gravar o banner no HTML estático.
    if (typeof navigator !== "undefined" && navigator.webdriver) return;
    let saved: string | null = null;
    try {
      saved = window.localStorage.getItem(KEY);
    } catch {
      saved = null;
    }
    if (saved !== "granted" && saved !== "denied") setVisible(true);
    const reopen = () => setVisible(true);
    window.addEventListener("sa:cookie-preferences", reopen);
    return () => window.removeEventListener("sa:cookie-preferences", reopen);
  }, []);

  const choose = (value: "granted" | "denied") => {
    try {
      window.localStorage.setItem(KEY, value);
    } catch {
      /* navegador sem storage: a escolha vale só nesta visita */
    }
    if (value === "granted" && typeof window.__loadGA === "function") window.__loadGA();
    if (value === "denied") {
      // Se já tinha aceitado antes, recarrega para descarregar o GA4.
      if ((window as unknown as { __gaLoaded?: boolean }).__gaLoaded) window.location.reload();
    }
    setVisible(false);
  };

  if (!visible) return null;

  const btn: React.CSSProperties = {
    padding: "10px 18px",
    borderRadius: 999,
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    minHeight: 44,
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      style={{
        position: "fixed",
        left: 16,
        right: 16,
        bottom: 16,
        zIndex: 60,
        maxWidth: 720,
        margin: "0 auto",
        background: "#14110e",
        color: "#f4ede0",
        border: "1px solid rgba(212,184,136,0.35)",
        borderRadius: 8,
        padding: "18px 20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
      }}
    >
      <p style={{ fontSize: 14, lineHeight: 1.55, margin: 0 }}>
        Usamos cookies essenciais para o site funcionar e, se você permitir, o Google Analytics para medir
        de forma agregada as visitas. Nada é ativado sem a sua escolha.{" "}
        <Link to="/privacidade/" style={{ color: "#d4b888", textDecoration: "underline" }}>
          Política de Privacidade
        </Link>
        .
      </p>
      <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap", justifyContent: "flex-start" }}>
        <button
          type="button"
          onClick={() => choose("denied")}
          style={{ ...btn, background: "transparent", color: "#f4ede0", border: "1px solid rgba(244,237,224,0.5)" }}
        >
          Recusar
        </button>
        <button
          type="button"
          onClick={() => choose("granted")}
          style={{ ...btn, background: "#d4b888", color: "#14110e", border: "1px solid #d4b888" }}
        >
          Aceitar
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
