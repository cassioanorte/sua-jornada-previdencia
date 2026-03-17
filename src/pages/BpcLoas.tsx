import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const BpcLoas = () => {
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
              BPC/LOAS
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Benefício de Prestação Continuada para Idosos e Pessoas com Deficiência
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
          <div className="max-w-4xl mx-auto space-y-6" style={{ textAlign: 'justify' }}>
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              O que é o BPC/LOAS?
            </h2>
            <p className="text-lg text-foreground/80">
              O Benefício de Prestação Continuada (BPC), também conhecido como LOAS, 
              garante um salário mínimo mensal a idosos com 65 anos ou mais e a pessoas 
              com deficiência de qualquer idade que comprovem não possuir meios de se sustentar.
            </p>
            <p className="text-lg text-foreground/80">
              Importante: não é necessário ter contribuído ao INSS para ter direito ao BPC/LOAS.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-foreground">
              Requisitos Principais
            </h2>
            <div className="space-y-4">
              <div className="p-6 bg-card rounded-xl card-shadow">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Para Idosos:</h3>
                <p className="text-foreground/80">
                  Ter 65 anos ou mais e comprovar que a renda familiar per capita é inferior a 1/4 do salário mínimo.
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl card-shadow">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Para Pessoas com Deficiência:</h3>
                <p className="text-foreground/80">
                  Comprovar impedimento de longo prazo (mínimo de 2 anos) que impossibilite participação 
                  plena e efetiva na sociedade, além da condição de renda familiar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Teve o BPC/LOAS Negado?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Muitos pedidos são negados indevidamente. Podemos reverter essa decisão e garantir seu direito.
          </p>
          <Button variant="hero" size="xl" onClick={handleWhatsApp}>
            <Phone className="w-5 h-5" />
            Solicite uma Reavaliação
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BpcLoas;
