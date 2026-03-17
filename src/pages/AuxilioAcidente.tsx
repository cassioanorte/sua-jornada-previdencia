import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, FileText, Calendar, Shield, ClipboardList } from "lucide-react";
import { Link } from "react-router-dom";

const AuxilioAcidente = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.link/hdn70i", "_blank");
  };

  const requirements = [
    "Ter sofrido acidente de qualquer natureza (trabalho, trânsito, doméstico, etc.)",
    "Possuir qualidade de segurado do INSS",
    "Ter sequela permanente que reduza a capacidade para o trabalho",
    "O acidente deve ter relação com a atividade profissional ou ter ocorrido após a filiação ao INSS"
  ];

  const howWeHelp = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Análise do Caso",
      description: "Avaliamos se você tem direito ao auxílio-acidente e qual o melhor caminho"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Documentação Completa",
      description: "Organizamos todos os documentos médicos e comprovantes necessários"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Defesa Jurídica",
      description: "Entramos com o pedido administrativo ou ação judicial para garantir seu direito"
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
              Auxílio Acidente
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Indenização para quem sofreu acidente e ficou com sequelas permanentes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" onClick={handleWhatsApp}>
                <Phone className="w-5 h-5" />
                Fale com Especialista
              </Button>
              <Button variant="hero" size="xl" asChild className="bg-accent hover:bg-accent-hover">
                <Link to="/quiz-auxilio-acidente">
                  <ClipboardList className="w-5 h-5" />
                  Faça o Quiz Gratuito
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What Is */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto" style={{ textAlign: 'justify' }}>
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              O que é o Auxílio Acidente?
            </h2>
            <p className="text-lg text-foreground/80 mb-4">
              O Auxílio Acidente é um benefício previdenciário de natureza indenizatória, 
              pago pelo INSS ao segurado que sofreu um acidente de qualquer natureza e ficou 
              com sequelas permanentes que reduzem sua capacidade para o trabalho.
            </p>
            <p className="text-lg text-foreground/80">
              Diferente do auxílio-doença, este benefício pode ser acumulado com o salário, 
              pois tem caráter indenizatório e é pago até a aposentadoria do segurado.
            </p>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
              Requisitos para o Auxílio Acidente
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
            Sofreu um acidente e ficou com sequelas?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Você pode ter direito ao auxílio-acidente. Fale conosco para uma análise gratuita do seu caso.
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

export default AuxilioAcidente;
