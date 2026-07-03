import { useEffect } from "react";
import { faqItems } from "@/data/faq";

// Seção de Perguntas Frequentes (FAQ) de Direito Previdenciário.
// Renderiza o conteúdo visível e injeta o schema FAQPage (JSON-LD) no <head>,
// para que o prerender (Puppeteer) capture o schema no HTML cru e as IAs/crawlers
// leiam as perguntas e respostas sem executar JS.

const SCHEMA_ID = "faq-jsonld";

const FaqSection = () => {
  useEffect(() => {
    // Evita duplicar o schema em navegações client-side.
    if (document.getElementById(SCHEMA_ID)) return;

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://spiereanorte.adv.br/contato#faq",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = SCHEMA_ID;
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById(SCHEMA_ID);
      if (el) el.remove();
    };
  }, []);

  return (
    <section id="faq" className="py-16 bg-accent/5 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Dúvidas comuns sobre benefícios do INSS e Direito Previdenciário.
              As respostas têm caráter informativo e cada caso é avaliado individualmente.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <details
                key={index}
                className="group bg-card rounded-xl border border-accent/20 card-shadow"
                {...(index === 0 ? { open: true } : {})}
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.question}
                  </h3>
                  <span
                    className="flex-shrink-0 text-accent transition-transform group-open:rotate-45"
                    aria-hidden="true"
                    style={{ fontSize: 24, lineHeight: 1 }}
                  >
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 -mt-2">
                  <p className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>

          <p className="text-sm text-muted-foreground text-center mt-10 max-w-2xl mx-auto">
            As informações desta página são de caráter geral e educativo e não
            substituem a análise individual do seu caso. Para uma avaliação da sua
            situação, entre em contato com o escritório.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
