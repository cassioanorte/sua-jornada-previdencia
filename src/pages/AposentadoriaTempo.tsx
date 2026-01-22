import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const AposentadoriaTempo = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Tenho dúvidas sobre Aposentadoria por Tempo de Contribuição.", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-12 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Aposentadoria por Tempo de Contribuição
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Maximize o valor do seu benefício
            </p>
            <Button variant="hero" size="xl" onClick={handleWhatsApp}>
              <Phone className="w-5 h-5" />
              Calcule sua Aposentadoria
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Entenda a Aposentadoria por Tempo de Contribuição
            </h2>
            <p className="text-lg text-foreground/80">
              Após a Reforma da Previdência de 2019, as regras mudaram significativamente. 
              No entanto, existem regras de transição que podem ser mais vantajosas para você.
            </p>
            <p className="text-lg text-foreground/80">
              Nossa equipe especializada analisa todas as possibilidades, incluindo pedágios, 
              pontos e idade mínima progressiva, para encontrar a melhor opção e o maior valor possível 
              para seu benefício.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Não Perca Dinheiro!
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Uma análise incorreta pode resultar em anos recebendo um valor menor. 
            Garanta o melhor benefício possível.
          </p>
          <Button variant="hero" size="xl" onClick={handleWhatsApp}>
            <Phone className="w-5 h-5" />
            Solicite uma Análise Completa
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AposentadoriaTempo;
