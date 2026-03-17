import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone } from "lucide-react";

const AposentadoriaIdade = () => {
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
              Aposentadoria por Idade
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Conquiste sua aposentadoria com segurança jurídica
            </p>
            <Button variant="hero" size="xl" onClick={handleWhatsApp}>
              <Phone className="w-5 h-5" />
              Descubra se Você Tem Direito
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto" style={{ textAlign: 'justify' }}>
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              O que é a Aposentadoria por Idade?
            </h2>
            <p className="text-lg text-foreground/80 mb-4">
              A Aposentadoria por Idade é um benefício concedido ao trabalhador que atinge 
              a idade mínima estabelecida pela legislação previdenciária e comprova o tempo 
              mínimo de contribuição ao INSS.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
              Requisitos Atualizados (Reforma da Previdência)
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-card rounded-lg card-shadow">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Idade Mínima:</p>
                  <p className="text-foreground/80">65 anos para homens e 62 anos para mulheres (regra geral)</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-card rounded-lg card-shadow">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Carência:</p>
                  <p className="text-foreground/80">Mínimo de 15 anos (180 meses) de contribuição ao INSS</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-card rounded-lg card-shadow">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Qualidade de Segurado:</p>
                  <p className="text-foreground/80">Estar contribuindo ou em período de graça no momento do pedido</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Como Podemos Ajudar?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Analisamos seu histórico completo de contribuições, identificamos períodos não 
            computados e maximizamos o valor do seu benefício.
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

export default AposentadoriaIdade;
