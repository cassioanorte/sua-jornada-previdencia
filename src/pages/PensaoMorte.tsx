import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const PensaoMorte = () => {
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
              Pensão por Morte
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Suporte jurídico para dependentes do segurado falecido
            </p>
            <Button variant="hero" size="xl" onClick={handleWhatsApp}>
              <Phone className="w-5 h-5" />
              Saiba Mais
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6" style={{ textAlign: 'justify' }}>
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              O que é a Pensão por Morte?
            </h2>
            <p className="text-lg text-foreground/80">
              A Pensão por Morte é um benefício pago aos dependentes do segurado do INSS que 
              faleceu, seja aposentado ou não. Este benefício garante uma renda aos dependentes 
              para auxiliar no sustento da família.
            </p>
            <p className="text-lg text-foreground/80">
              Os dependentes podem incluir cônjuge, companheiro(a), filhos menores de 21 anos ou 
              inválidos, pais e irmãos, conforme a ordem de prioridade estabelecida pela lei.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Precisa de Orientação?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Estamos aqui para ajudar você neste momento difícil, garantindo seus direitos com respeito e empatia.
          </p>
          <Button variant="hero" size="xl" onClick={handleWhatsApp}>
            <Phone className="w-5 h-5" />
            Converse Conosco
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PensaoMorte;
