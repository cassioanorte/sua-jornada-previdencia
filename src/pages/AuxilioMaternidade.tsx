import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, ClipboardList } from "lucide-react";
import { Link } from "react-router-dom";

const AuxilioMaternidade = () => {
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
              Auxílio Maternidade
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Garantia dos direitos das mães trabalhadoras
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" onClick={handleWhatsApp}>
                <Phone className="w-5 h-5" />
                Fale com Especialista
              </Button>
              <Button variant="hero" size="xl" asChild className="bg-accent hover:bg-accent-hover">
                <Link to="/quiz-auxilio-maternidade">
                  <ClipboardList className="w-5 h-5" />
                  Descubra Agora Mesmo Se Você Tem Direito
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Entenda o Auxílio Maternidade
            </h2>
            <p className="text-lg text-foreground/80">
              O Auxílio Maternidade, também chamado de Salário-Maternidade, é um benefício pago 
              às seguradas da Previdência Social durante o período de licença maternidade.
            </p>
            <p className="text-lg text-foreground/80">
              Têm direito ao benefício: empregadas CLT, trabalhadoras avulsas, empregadas domésticas, 
              contribuintes individuais, facultativas e seguradas especiais (trabalhadoras rurais).
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Dúvidas sobre o Benefício?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Nossa equipe pode esclarecer todas as suas dúvidas e auxiliar no processo de solicitação.
          </p>
          <Button variant="hero" size="xl" onClick={handleWhatsApp}>
            <Phone className="w-5 h-5" />
            Fale Conosco
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AuxilioMaternidade;
