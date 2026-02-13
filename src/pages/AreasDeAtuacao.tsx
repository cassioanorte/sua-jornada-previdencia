import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Heart, Clock, Shield, Users, Briefcase, FileText, Baby, Home } from "lucide-react";

const AreasDeAtuacao = () => {
  const services = [
    {
      title: "Auxílio Doença",
      description: "Suporte completo para quem está temporariamente incapacitado para o trabalho devido a problemas de saúde.",
      icon: <Heart className="w-6 h-6" />,
      href: "/auxilio-doenca"
    },
    {
      title: "Auxílio Maternidade",
      description: "Garantia dos direitos das mães trabalhadoras durante o período de licença maternidade.",
      icon: <Baby className="w-6 h-6" />,
      href: "/auxilio-maternidade"
    },
    {
      title: "Aposentadoria por Idade",
      description: "Orientação completa para conquistar sua aposentadoria quando atingir a idade mínima exigida.",
      icon: <Users className="w-6 h-6" />,
      href: "/aposentadoria-idade"
    },
    {
      title: "Aposentadoria por Tempo de Contribuição",
      description: "Maximização do valor do seu benefício através da análise detalhada do tempo de contribuição.",
      icon: <Clock className="w-6 h-6" />,
      href: "/aposentadoria-tempo"
    },
    {
      title: "Aposentadoria Especial",
      description: "Reconhecimento do direito de quem trabalhou exposto a agentes nocivos à saúde.",
      icon: <Shield className="w-6 h-6" />,
      href: "/aposentadoria-especial"
    },
    {
      title: "Aposentadoria Rural",
      description: "Defesa dos direitos dos trabalhadores rurais com experiência comprovada em casos complexos.",
      icon: <Briefcase className="w-6 h-6" />,
      href: "/aposentadoria-rural"
    },
    {
      title: "Auxílio Acidente",
      description: "Indenização para quem sofreu acidente e ficou com sequelas que reduzem a capacidade de trabalho.",
      icon: <Shield className="w-6 h-6" />,
      href: "/auxilio-acidente"
    },
    {
      title: "BPC/LOAS",
      description: "Assistência para garantir o benefício de prestação continuada para idosos e pessoas com deficiência.",
      icon: <FileText className="w-6 h-6" />,
      href: "/bpc-loas"
    },
    {
      title: "Pensão por Morte",
      description: "Suporte jurídico para dependentes que têm direito ao benefício após o falecimento do segurado.",
      icon: <Home className="w-6 h-6" />,
      href: "/pensao-morte"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Áreas de Atuação
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Especialistas em todos os tipos de benefícios previdenciários
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 max-w-3xl mx-auto text-center">
            <p className="text-lg text-foreground/80">
              Com mais de 13 anos de experiência exclusiva em Direito Previdenciário, 
              nossa equipe está preparada para atender todas as suas necessidades relacionadas 
              aos benefícios do INSS. Cada área é tratada com o máximo de profissionalismo, 
              transparência e dedicação.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Não encontrou o que procura?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Entre em contato conosco. Estamos prontos para analisar seu caso 
              e encontrar a melhor solução para garantir seus direitos.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AreasDeAtuacao;
