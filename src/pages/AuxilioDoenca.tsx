import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, FileText, Calendar, Shield } from "lucide-react";

const AuxilioDoenca = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.link/hdn70i", "_blank");
  };

  const requirements = [
    "Qualidade de segurado do INSS (estar contribuindo ou em período de graça)",
    "Carência mínima de 12 contribuições (em alguns casos, não há carência)",
    "Incapacidade temporária para o trabalho comprovada por perícia médica",
    "Doença ou acidente que impeça as atividades profissionais por mais de 15 dias"
  ];

  const howWeHelp = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Análise Completa",
      description: "Avaliamos toda sua documentação e histórico para identificar o melhor caminho"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Preparação para Perícia",
      description: "Orientamos você sobre o que levar e como proceder na perícia médica"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Recursos e Defesa",
      description: "Caso o benefício seja negado, entramos com recurso administrativo ou judicial"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-12 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Auxílio Doença
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Garantimos seu direito ao benefício quando você mais precisa
            </p>
            <Button variant="hero" size="xl" onClick={handleWhatsApp}>
              <Phone className="w-5 h-5" />
              Descubra se Você Tem Direito
            </Button>
          </div>
        </div>
      </section>

      {/* What Is */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              O que é o Auxílio Doença?
            </h2>
            <p className="text-lg text-foreground/80 mb-4">
              O Auxílio Doença, também conhecido como Auxílio por Incapacidade Temporária, 
              é um benefício pago pelo INSS ao trabalhador que fica temporariamente incapaz 
              de exercer suas atividades profissionais devido a doença ou acidente.
            </p>
            <p className="text-lg text-foreground/80">
              Este benefício garante uma renda mensal enquanto você se recupera e não pode trabalhar, 
              proporcionando segurança financeira durante um período delicado.
            </p>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
              Requisitos para o Auxílio Doença
            </h2>
            <div className="grid gap-4">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg card-shadow">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground/80">{req}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
              Como Ajudamos Você
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {howWeHelp.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full text-accent mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Teve seu Auxílio Doença negado?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Não desista! Podemos reverter essa decisão através de recursos ou ação judicial.
          </p>
          <Button variant="hero" size="xl" onClick={handleWhatsApp}>
            <Phone className="w-5 h-5" />
            Fale com um Especialista Agora
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AuxilioDoenca;
