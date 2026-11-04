import { useEffect } from "react";
import type { FaqItem } from "@/data/faq";

// Bloco de FAQ com schema FAQPage (JSON-LD). O JSON-LD é injetado no <head>
// e o prerender grava no HTML estático.
interface Props {
  id: string;
  items: FaqItem[];
  dark?: boolean;
  title?: string;
}

const BenefitFaq = ({ id, items, dark = false, title = "Perguntas frequentes" }: Props) => {
  useEffect(() => {
    const scriptId = `faq-jsonld-${id}`;
    document.getElementById(scriptId)?.remove();
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = scriptId;
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    });
    document.head.appendChild(script);
    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, [id, items]);

  if (dark) {
    return (
      <section id="faq" style={{ backgroundColor: "#14110e", padding: "120px 24px" }}>
        <div className="mx-auto" style={{ maxWidth: 1000 }}>
          <div
            className="font-mono uppercase"
            style={{ fontSize: 11, letterSpacing: "0.32em", color: "#d4b888", marginBottom: 24 }}
          >
            Capítulo VI — Perguntas frequentes
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(40px, 6vw, 72px)",
              fontWeight: 400,
              lineHeight: 1.04,
              color: "#f4ede0",
              letterSpacing: "-0.01em",
              marginBottom: 56,
            }}
          >
            Dúvidas <em style={{ fontStyle: "italic", color: "#d4b888" }}>comuns</em> sobre o INSS.
          </h2>
          <div style={{ borderTop: "1px solid rgba(184,153,104,0.18)" }}>
            {items.map((item, i) => (
              <details
                key={i}
                className="group"
                style={{ borderBottom: "1px solid rgba(184,153,104,0.18)", padding: "24px 0" }}
                {...(i === 0 ? { open: true } : {})}
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                  <h3
                    className="font-display"
                    style={{ fontSize: 24, fontWeight: 400, color: "#f4ede0", lineHeight: 1.25 }}
                  >
                    {item.question}
                  </h3>
                  <span
                    className="flex-shrink-0 transition-transform group-open:rotate-45"
                    aria-hidden="true"
                    style={{ fontSize: 28, lineHeight: 1, color: "#d4b888" }}
                  >
                    +
                  </span>
                </summary>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: "#b8b1a9", marginTop: 16 }}>
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
          <p style={{ fontSize: 13, color: "#87807a", marginTop: 32, lineHeight: 1.6 }}>
            Informações de caráter geral e educativo, que não substituem a análise individual do seu caso.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="faq" className="py-16 bg-accent/5 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">{title}</h2>
          <div className="space-y-4">
            {items.map((item, i) => (
              <details
                key={i}
                className="group bg-card rounded-xl border border-accent/20 card-shadow"
                {...(i === 0 ? { open: true } : {})}
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5">
                  <h3 className="text-lg font-semibold text-foreground">{item.question}</h3>
                  <span
                    className="flex-shrink-0 text-accent transition-transform group-open:rotate-45"
                    aria-hidden="true"
                    style={{ fontSize: 24, lineHeight: 1 }}
                  >
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 -mt-1">
                  <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center mt-8 max-w-2xl mx-auto">
            Informações de caráter geral e educativo, que não substituem a análise individual do seu caso.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitFaq;
