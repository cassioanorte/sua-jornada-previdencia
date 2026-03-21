import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";

import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Clock, 
  Shield, 
  Users, 
  Briefcase, 
  FileText,
  Phone,
  CheckCircle,
  Award,
  Target,
  TrendingUp,
  Home,
  Baby
} from "lucide-react";
import heroImage from "@/assets/hero-law.jpg";

const Index = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.link/hdn70i", "_blank");
  };

  const services = [
    {
      title: "Auxílio Doença",
      description: "Garantimos seu direito ao benefício quando você mais precisa. Agilidade e transparência em todo o processo.",
      icon: <Heart className="w-6 h-6" />,
      href: "/auxilio-doenca"
    },
    {
      title: "Auxílio Maternidade",
      description: "Proteção para mães trabalhadoras. Garantimos seu salário-maternidade com segurança e agilidade.",
      icon: <Heart className="w-6 h-6" />,
      href: "/auxilio-maternidade"
    },
    {
      title: "Auxílio Acidente",
      description: "Indenização para quem sofreu acidente de trabalho. Defesa dos seus direitos com experiência.",
      icon: <Shield className="w-6 h-6" />,
      href: "/auxilio-acidente"
    },
    {
      title: "Aposentadoria por Idade",
      description: "Conquiste sua aposentadoria com segurança. Análise completa do seu caso e documentação.",
      icon: <Users className="w-6 h-6" />,
      href: "/aposentadoria-idade"
    },
    {
      title: "Aposentadoria por Tempo de Contribuição",
      description: "Maximize o valor do seu benefício. Revisão completa do tempo de contribuição.",
      icon: <Clock className="w-6 h-6" />,
      href: "/aposentadoria-tempo"
    },
    {
      title: "Aposentadoria Especial",
      description: "Para quem trabalhou em condições especiais. Garantimos o reconhecimento do seu direito.",
      icon: <Shield className="w-6 h-6" />,
      href: "/aposentadoria-especial"
    },
    {
      title: "Aposentadoria Rural",
      description: "Direitos garantidos para trabalhadores rurais. Experiência comprovada em casos rurais.",
      icon: <Briefcase className="w-6 h-6" />,
      href: "/aposentadoria-rural"
    },
    {
      title: "BPC/LOAS",
      description: "Assistência para idosos e pessoas com deficiência. Dignidade e respeito em todo o atendimento.",
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

  const testimonials = [
    {
      name: "Maria Silva",
      location: "São Paulo - SP",
      text: "Fui atendida com muito profissionalismo e honestidade. Consegui minha aposentadoria em apenas 6 meses!"
    },
    {
      name: "João Santos",
      location: "Rio de Janeiro - RJ",
      text: "Depois de 2 negativas do INSS, encontrei este escritório. Hoje estou aposentado graças ao trabalho dedicado deles."
    },
    {
      name: "Ana Costa",
      location: "Belo Horizonte - MG",
      text: "Atendimento 100% online e humanizado. Sempre responderam minhas dúvidas com clareza e paciência."
    }
  ];

  const benefits = [
    "Mais de 13 anos de experiência exclusiva em Direito Previdenciário",
    "Atendimento 100% digital em todo o Brasil",
    "Transparência e honestidade em primeiro lugar",
    "Consulta inicial gratuita"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      
      {/* Hero Section */}
      <section className="relative hero-gradient text-primary-foreground pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.15]">
          <img src={heroImage} alt="Equipe de advogados" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Badge de Experiência */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary-foreground/20 animate-scale-in">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold text-primary-foreground">13+ Anos de Excelência</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in leading-tight">
              Seu direito previdenciário garantido com rapidez, honestidade e experiência
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-primary-foreground leading-relaxed animate-fade-in-up font-body font-medium">
              Há mais de 13 anos ajudando brasileiros a conquistar seus benefícios do INSS com segurança e transparência
            </p>
            
            {/* Estatísticas */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-10 animate-fade-in-up">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">+3.000</div>
                <div className="text-sm text-primary-foreground/80">Casos Atendidos</div>
              </div>
              <div className="text-center border-x border-primary-foreground/20">
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">98%</div>
                <div className="text-sm text-primary-foreground/80">Taxa de Sucesso</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">100%</div>
                <div className="text-sm text-primary-foreground/80">Digital</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" onClick={handleWhatsApp} className="shadow-xl hover:shadow-2xl">
                <Phone className="w-5 h-5" />
                Agende sua Consulta
              </Button>
              <Button variant="outline" size="xl" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-2 shadow-lg">
                <a href="#servicos">Conheça Nossos Serviços</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-background via-secondary/30 to-background relative">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center gap-4 p-6 bg-card rounded-xl card-shadow hover-lift group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm font-semibold text-foreground leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full mb-4">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Nossas Especialidades</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Áreas de Atuação
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Especializados em garantir seus direitos previdenciários com transparência e agilidade
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full mb-4">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Histórias Reais</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              O que nossos clientes dizem
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Transparência e resultados que transformam vidas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 hero-gradient text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Pronto para conquistar seus direitos?
            </h2>
            <p className="text-xl mb-10 text-primary-foreground/95 max-w-2xl mx-auto leading-relaxed">
              Converse com um advogado especialista agora mesmo pelo WhatsApp. Atendimento rápido, honesto e 100% online.
            </p>
            <Button variant="hero" size="xl" onClick={handleWhatsApp} className="shadow-2xl hover:shadow-3xl animate-scale-in">
              <Phone className="w-5 h-5" />
              Fale com um Advogado Agora
            </Button>
            <p className="mt-6 text-sm text-primary-foreground/70">
              ✓ Resposta em minutos ✓ Primeira consulta gratuita ✓ Sem compromisso
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
