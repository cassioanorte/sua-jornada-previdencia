import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const AposentadoriaRural = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.link/hdn70i", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-12 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Aposentadoria Rural
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Direitos garantidos para trabalhadores rurais
            </p>
            <Button variant="hero" size="xl" onClick={handleWhatsApp}>
              <Phone className="w-5 h-5" />
              Verifique seu Direito
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6" style={{ textAlign: 'justify' }}>
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Aposentadoria para Trabalhadores Rurais
            </h2>
            <p className="text-lg text-foreground/80">
              Trabalhadores rurais têm direitos específicos na Previdência Social. 
              A aposentadoria rural pode ser por idade ou por tempo de contribuição, 
              com regras diferenciadas que consideram as particularidades do trabalho no campo.
            </p>
            <p className="text-lg text-foreground/80">
              Nossa equipe possui ampla experiência em comprovar atividade rural através de 
              documentos como notas fiscais, declarações sindicais, contratos de arrendamento, 
              e outros meios de prova aceitos pelo INSS.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Dificuldades em Comprovar Atividade Rural?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Sabemos como reunir as provas necessárias, mesmo quando os documentos são antigos ou escassos.
          </p>
          <Button variant="hero" size="xl" onClick={handleWhatsApp}>
            <Phone className="w-5 h-5" />
            Fale com um Especialista
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AposentadoriaRural;
