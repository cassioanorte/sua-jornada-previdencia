import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const AposentadoriaEspecial = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Tenho dúvidas sobre Aposentadoria Especial.", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-12 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Aposentadoria Especial
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Para quem trabalhou em condições prejudiciais à saúde
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
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Trabalhou Exposto a Agentes Nocivos?
            </h2>
            <p className="text-lg text-foreground/80">
              A Aposentadoria Especial é um benefício destinado a trabalhadores que exerceram 
              atividades expostos a agentes químicos, físicos ou biológicos prejudiciais à saúde, 
              como ruído, calor, frio, produtos químicos, radiação, entre outros.
            </p>
            <p className="text-lg text-foreground/80">
              Este tipo de aposentadoria permite a redução do tempo de contribuição necessário, 
              podendo ser de 15, 20 ou 25 anos, dependendo do nível de exposição aos agentes nocivos.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-foreground">
              Comprovação da Atividade Especial
            </h2>
            <p className="text-lg text-foreground/80 text-center mb-8">
              A comprovação é feita através de documentos como PPP (Perfil Profissiográfico Previdenciário), 
              LTCAT (Laudo Técnico das Condições Ambientais do Trabalho) e outros laudos técnicos.
            </p>
            <p className="text-lg text-foreground/80 text-center">
              Nossa equipe está preparada para reunir toda a documentação necessária e, 
              se preciso, obter laudos retrospectivos para períodos antigos.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Reconheça seu Direito
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Muitos trabalhadores não sabem que têm direito à Aposentadoria Especial. 
            Descubra se você se enquadra.
          </p>
          <Button variant="hero" size="xl" onClick={handleWhatsApp}>
            <Phone className="w-5 h-5" />
            Consulte um Especialista
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AposentadoriaEspecial;
