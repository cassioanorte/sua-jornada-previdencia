// Eventos GA4 de contato. Não envia nome, telefone, e-mail nem texto de mensagem:
// apenas o nome do evento e a página (pathname) de origem.
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    __trackingReady?: boolean;
    __gaLoaded?: boolean;
  }
}

export const trackEvent = (name: string, params: Record<string, string> = {}) => {
  try {
    // Só envia evento se o visitante aceitou os cookies (GA4 carregado).
    if (window.__gaLoaded && typeof window.gtag === "function") {
      window.gtag("event", name, { pagina: window.location.pathname, ...params });
    }
  } catch {
    /* nunca quebrar a navegação por causa de métrica */
  }
};

const classify = (href: string): string | null => {
  const h = (href || "").trim().toLowerCase();
  if (!h) return null;
  if (h.startsWith("tel:")) return "contato_telefone";
  if (h.startsWith("mailto:")) return "contato_email";
  if (/^https?:\/\/(wa\.me|wa\.link|api\.whatsapp\.com|web\.whatsapp\.com|chat\.whatsapp\.com)(\/|$|\?)/.test(h)) {
    return "contato_whatsapp";
  }
  return null;
};

export const initTracking = () => {
  if (typeof window === "undefined" || window.__trackingReady) return;
  window.__trackingReady = true;

  // Links <a> (tel:, mailto:, wa.me, api.whatsapp, wa.link)
  document.addEventListener(
    "click",
    (e) => {
      const target = e.target as Element | null;
      const a = target && target.closest ? target.closest("a[href]") : null;
      if (!a) return;
      const ev = classify(a.getAttribute("href") || "");
      if (ev) trackEvent(ev);
    },
    true
  );

  // Botões que abrem o WhatsApp via window.open (maioria dos CTAs do site)
  const originalOpen = window.open.bind(window);
  window.open = ((url?: string | URL, ...rest: unknown[]) => {
    const ev = classify(String(url ?? ""));
    if (ev) trackEvent(ev);
    return originalOpen(url as string, ...(rest as [string?, string?]));
  }) as typeof window.open;
};
