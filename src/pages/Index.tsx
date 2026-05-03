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
  Target,
  TrendingUp,
  Home,
} from "lucide-react";
import teamImage from "@/assets/team.jpg";
import { Link } from "react-router-dom";

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
      
      
      {/* Hero — Editorial */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#14110e", paddingTop: 112, paddingBottom: 96 }}>
        {/* Ghost letters */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 select-none font-display italic"
          style={{
            top: 24,
            fontSize: "clamp(220px, 36vw, 520px)",
            lineHeight: 0.9,
            color: "rgba(184,153,104,0.035)",
            whiteSpace: "nowrap",
            zIndex: 0,
          }}
        >
          S&amp;A
        </div>

        <div className="relative z-10 mx-auto px-6 md:px-14" style={{ maxWidth: 1320 }}>
          {/* Centered content */}
          <div className="mx-auto text-center" style={{ maxWidth: 1100 }}>
            {/* Kicker */}
            <div className="flex items-center justify-center gap-3 mb-10">
              <span style={{ width: 28, height: 1, backgroundColor: "#d4b888", opacity: 0.6 }} />
              <span
                className="font-mono uppercase"
                style={{ fontSize: 11, letterSpacing: "0.32em", color: "#d4b888" }}
              >
                Boutique previdenciário · est. 2014
              </span>
              <span style={{ width: 28, height: 1, backgroundColor: "#d4b888", opacity: 0.6 }} />
            </div>

            {/* H1 */}
            <h1
              className="font-display animate-fade-in"
              style={{
                fontSize: "clamp(52px, 8vw, 100px)",
                fontWeight: 400,
                lineHeight: 0.98,
                color: "#f4ede0",
                letterSpacing: "-0.01em",
              }}
            >
              Cada benefício é um <em style={{ color: "#d4b888", fontStyle: "italic" }}>direito</em>.
              <br />
              Cada cliente, uma <em style={{ color: "#d4b888", fontStyle: "italic" }}>história</em>.
            </h1>

            {/* Subtitle */}
            <p
              className="font-editorial italic mx-auto"
              style={{
                fontSize: 22,
                lineHeight: 1.55,
                color: "#b8b1a9",
                maxWidth: 720,
                marginTop: 36,
              }}
            >
              Defendemos aposentadorias, benefícios por incapacidade, auxílios e revisões com a profundidade técnica
              que cada caso previdenciário exige — e com a escuta humana que ele merece.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4" style={{ marginTop: 48 }}>
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: "#d4b888",
                  color: "#14110e",
                  padding: "16px 28px",
                  borderRadius: 999,
                  gap: 10,
                }}
              >
                <span style={{ width: 7, height: 7, borderRadius: 999, backgroundColor: "#1f7a3d" }} />
                <span
                  className="font-mono uppercase"
                  style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em" }}
                >
                  Falar no WhatsApp
                </span>
              </button>
              <Link
                to="/areas-de-atuacao"
                className="inline-flex items-center transition-colors hover:bg-[rgba(212,184,136,0.08)]"
                style={{
                  border: "1px solid rgba(212,184,136,0.45)",
                  color: "#f4ede0",
                  padding: "16px 28px",
                  borderRadius: 999,
                  gap: 10,
                }}
              >
                <span
                  className="font-mono uppercase"
                  style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.18em" }}
                >
                  Áreas de atuação →
                </span>
              </Link>
            </div>
          </div>

          {/* Team photo */}
          <div className="relative mx-auto" style={{ marginTop: 80, maxWidth: 1320 }}>
            <div className="relative overflow-hidden" style={{ aspectRatio: "21/9" }}>
              <img
                src={teamImage}
                alt="Equipe Spier & Anorte Advogados"
                className="w-full h-full object-cover"
                style={{ filter: "brightness(0.92) contrast(1.08)" }}
                loading="eager"
                fetchPriority="high"
              />
              {/* Inner decorative frame */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute"
                style={{
                  inset: 16,
                  border: "1px solid rgba(212,184,136,0.35)",
                }}
              />
              {/* Caption tag */}
              <div
                className="absolute font-mono uppercase"
                style={{
                  left: 32,
                  bottom: 32,
                  fontSize: 10,
                  letterSpacing: "0.22em",
                  color: "#d4b888",
                  backgroundColor: "rgba(20,17,14,0.55)",
                  backdropFilter: "blur(8px)",
                  padding: "8px 14px",
                  border: "1px solid rgba(212,184,136,0.25)",
                }}
              >
                ● Lucas Spier · Marina Anorte · Rafael Klein
              </div>
            </div>
          </div>

          {/* Metrics row */}
          <div
            className="grid grid-cols-2 md:grid-cols-4"
            style={{
              marginTop: 64,
              paddingTop: 40,
              borderTop: "1px solid rgba(184,153,104,0.18)",
              gap: 24,
            }}
          >
            {[
              { num: "12", label: "Anos", desc: "atuando exclusivamente em previdenciário" },
              { num: "1.4k+", label: "Casos", desc: "concluídos com benefício concedido" },
              { num: "3", label: "Estados", desc: "RS · SC · PR e atendimento remoto" },
              { num: "96%", label: "Satisfação", desc: "de clientes em pesquisa anual" },
            ].map((m, i) => (
              <div
                key={i}
                style={{
                  borderLeft: "1px solid rgba(184,153,104,0.18)",
                  paddingLeft: 24,
                }}
              >
                <div
                  className="font-display italic"
                  style={{ fontSize: 56, color: "#d4b888", fontWeight: 400, lineHeight: 1 }}
                >
                  {m.num}
                </div>
                <div
                  className="font-mono uppercase"
                  style={{ fontSize: 11, letterSpacing: "0.22em", color: "#f4ede0", marginTop: 12 }}
                >
                  {m.label}
                </div>
                <div style={{ fontSize: 13, color: "#b8b1a9", marginTop: 8, lineHeight: 1.5 }}>
                  {m.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section style={{ backgroundColor: "#1f1a15", padding: "120px 24px" }}>
        <div className="mx-auto text-center" style={{ maxWidth: 1100 }}>
          <div
            className="font-mono uppercase"
            style={{ fontSize: 11, letterSpacing: "0.32em", color: "#d4b888", marginBottom: 40 }}
          >
            Capítulo I — Manifesto
          </div>
          <blockquote
            className="font-display italic"
            style={{
              fontSize: "clamp(28px, 4.2vw, 52px)",
              fontWeight: 400,
              lineHeight: 1.18,
              color: "#f4ede0",
              letterSpacing: "-0.005em",
            }}
          >
            <span style={{ color: "#d4b888" }}>“</span>
            Trabalhador rural que perdeu uma aposentadoria por falta de documento. Mãe que teve o auxílio cessado por uma perícia apressada. Servidor cuja revisão o INSS preferiu ignorar.{" "}
            <span style={{ color: "#d4b888" }}>São essas as histórias que nos formaram</span> — e que continuamos defendendo, uma por uma.
            <span style={{ color: "#d4b888" }}>”</span>
          </blockquote>
          <div
            className="font-mono uppercase"
            style={{ fontSize: 10, letterSpacing: "0.28em", color: "#b8b1a9", marginTop: 48 }}
          >
            — Spier &amp; Anorte, sociedade de advogados
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
