import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, CheckCircle, Scale, Clock, Users, Shield, FileText, Building } from "lucide-react";
import { getCityBySlug, cityPages } from "@/data/cityPages";

const services = [
  { name: "Aposentadoria por Idade", href: "/aposentadoria-idade", description: "Para quem atingiu a idade mínima e tempo de contribuição exigidos." },
  { name: "Aposentadoria por Tempo de Contribuição", href: "/aposentadoria-tempo", description: "Para quem completou o tempo mínimo de contribuição ao INSS." },
  { name: "Aposentadoria Especial", href: "/aposentadoria-especial", description: "Para quem trabalhou em condições insalubres ou perigosas." },
  { name: "Aposentadoria Rural", href: "/aposentadoria-rural", description: "Para trabalhadores rurais e segurados especiais." },
  { name: "Auxílio Doença", href: "/auxilio-doenca", description: "Para quem está temporariamente incapaz de trabalhar." },
  { name: "Auxílio Acidente", href: "/auxilio-acidente", description: "Indenização por sequelas de acidente que reduzem a capacidade laboral." },
  { name: "Auxílio Maternidade", href: "/auxilio-maternidade", description: "Benefício para seguradas em licença-maternidade." },
  { name: "BPC/LOAS", href: "/bpc-loas", description: "Benefício assistencial para idosos e pessoas com deficiência." },
  { name: "Pensão por Morte", href: "/pensao-morte", description: "Para dependentes de segurado falecido." },
];

const differentials = [
  { icon: Clock, title: "13+ Anos de Experiência", description: "Mais de uma década atuando exclusivamente em Direito Previdenciário." },
  { icon: Users, title: "Equipe Especializada", description: "Advogados com registro na OAB/RS dedicados ao seu caso." },
  { icon: Shield, title: "Transparência Total", description: "Acompanhamento em tempo real de cada etapa do seu processo." },
  { icon: FileText, title: "Análise Completa", description: "Revisão detalhada do CNIS e de toda documentação antes do pedido." },
];

const CityLandingPage = () => {
  const { city } = useParams<{ city: string }>();
  const cityData = city ? getCityBySlug(city) : undefined;

  useEffect(() => {
    if (cityData) {
      document.title = cityData.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", cityData.metaDescription);
      } else {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = cityData.metaDescription;
        document.head.appendChild(meta);
      }
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute("content", cityData.keywords);
      } else {
        const meta = document.createElement("meta");
        meta.name = "keywords";
        meta.content = cityData.keywords;
        document.head.appendChild(meta);
      }
    }
    window.scrollTo(0, 0);
  }, [cityData]);

  if (!cityData) {
    return <Navigate to="/areas-de-atuacao" replace />;
  }

  const handleWhatsApp = () => {
    window.open("https://wa.link/hdn70i", "_blank");
  };

  const otherCities = cityPages.filter((c) => c.slug !== cityData.slug).slice(0, 5);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">{cityData.hasOffice ? `Escritório em ${cityData.name}` : `Atendemos ${cityData.name}`}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Advogado Previdenciário em {cityData.name}
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              {cityData.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" onClick={handleWhatsApp}>
                <Phone className="w-5 h-5" />
                Consulta Gratuita
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto" style={{ textAlign: "justify" }}>
            <h2 className="text-3xl font-bold mb-6 text-foreground font-display">
              Direito Previdenciário em {cityData.name}
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{cityData.intro}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{cityData.localInfo}</p>
          </div>
        </div>
      </section>

      {/* Office or Proximity Info */}
      {cityData.hasOffice ? (
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl p-8 card-shadow border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 font-display">
                      Nosso Escritório em {cityData.name}
                    </h3>
                    <p className="text-muted-foreground text-lg">{cityData.officeAddress}</p>
                    <p className="text-muted-foreground">{cityData.officeCep}</p>
                    <Button variant="cta" size="lg" onClick={handleWhatsApp} className="mt-4">
                      <Phone className="w-4 h-4" />
                      Agendar Atendimento Presencial
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl p-8 card-shadow border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 font-display">
                      Atendimento para {cityData.name}
                    </h3>
                    <p className="text-muted-foreground text-lg mb-1">
                      {cityData.proximity && `A apenas ${cityData.proximity}.`}
                    </p>
                    <p className="text-muted-foreground mb-1">📍 Escritório Gramado: R. Berna, 715 - Vila Suíça</p>
                    <p className="text-muted-foreground mb-4">📍 Escritório Nova Petrópolis: Av. 15 de Novembro, 1924, Sala 304</p>
                    <p className="text-sm text-muted-foreground mb-4">Também oferecemos atendimento 100% online para sua comodidade.</p>
                    <Button variant="cta" size="lg" onClick={handleWhatsApp}>
                      <Phone className="w-4 h-4" />
                      Fale Conosco
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center text-foreground font-display">
              Serviços Previdenciários em {cityData.name}
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              Atuamos em todas as áreas do Direito Previdenciário para garantir seus direitos junto ao INSS.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 card-shadow hover:shadow-md transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                        {service.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center text-foreground font-display">
              Por que Escolher a Spier & Anorte?
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              Diferenciais que fazem a diferença no resultado do seu processo previdenciário.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {differentials.map((item) => (
                <div key={item.title} className="bg-card rounded-xl p-6 border border-border card-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center text-foreground font-display">
              Nossa Equipe
            </h2>
            <p className="text-center text-muted-foreground mb-10">
              Advogados registrados na OAB/RS com dedicação exclusiva ao Direito Previdenciário.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Cassio Fraga Anorte", oab: "OAB/RS 73.679" },
                { name: "Rodrigo Fernando Shoeler Spier", oab: "OAB/RS 70.421" },
                { name: "Paloma Nicole Schabarum", oab: "OAB/RS 125.105" },
              ].map((lawyer) => (
                <div key={lawyer.name} className="bg-card rounded-xl p-6 border border-border card-shadow text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Scale className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{lawyer.name}</h3>
                  <p className="text-sm text-muted-foreground">{lawyer.oab}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 font-display">
              Precisa de um Advogado Previdenciário em {cityData.name}?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Fale com nossa equipe e descubra como podemos ajudar você a conquistar seu benefício do INSS.
            </p>
            <Button variant="hero" size="xl" onClick={handleWhatsApp}>
              <Phone className="w-5 h-5" />
              Consulta Gratuita via WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Other Cities */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-6 text-foreground font-display">
              Também Atendemos na Serra Gaúcha
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {otherCities.map((c) => (
                <Link
                  key={c.slug}
                  to={`/advogado-previdenciario/${c.slug}`}
                  className="px-4 py-2 rounded-full bg-secondary border border-border text-sm text-foreground hover:border-primary/30 hover:text-primary transition-colors"
                >
                  {c.name}
                </Link>
              ))}
              {cityPages.length - 1 > 5 && (
                <Link
                  to="/areas-de-atuacao"
                  className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium hover:bg-primary/20 transition-colors"
                >
                  Ver Todas →
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo (cidade -> blog) */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-2 text-foreground font-display">
              Tire suas dúvidas sobre o INSS
            </h3>
            <p className="text-muted-foreground mb-6 text-sm">
              Publicamos conteúdo previdenciário atualizado para quem mora em {cityData.name} e região.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/blog"
                className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium hover:bg-primary/20 transition-colors"
              >
                Ver o blog previdenciário →
              </Link>
              <Link
                to="/auxilio-doenca"
                className="px-4 py-2 rounded-full bg-secondary border border-border text-sm text-foreground hover:border-primary/30 hover:text-primary transition-colors"
              >
                Auxílio-doença
              </Link>
              <Link
                to="/aposentadoria-rural"
                className="px-4 py-2 rounded-full bg-secondary border border-border text-sm text-foreground hover:border-primary/30 hover:text-primary transition-colors"
              >
                Aposentadoria rural
              </Link>
              <Link
                to="/bpc-loas"
                className="px-4 py-2 rounded-full bg-secondary border border-border text-sm text-foreground hover:border-primary/30 hover:text-primary transition-colors"
              >
                BPC/LOAS
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CityLandingPage;
