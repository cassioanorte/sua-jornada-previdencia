import { useEffect } from "react";

// Define title, meta description e og/twitter por página.
// Roda no cliente; o prerender (puppeteer) grava o resultado no HTML estático.
const setMeta = (attr: "name" | "property", key: string, value: string) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
};

export const applySeo = (title: string, description: string) => {
  document.title = title;
  setMeta("name", "description", description);
  setMeta("property", "og:title", title);
  setMeta("property", "og:description", description);
  setMeta("name", "twitter:title", title);
  setMeta("name", "twitter:description", description);
};

export const useSeo = (title: string, description: string) => {
  useEffect(() => {
    applySeo(title, description);
  }, [title, description]);
};
