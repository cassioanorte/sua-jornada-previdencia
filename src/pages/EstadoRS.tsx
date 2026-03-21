import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, CheckCircle, Clock, Users, Shield, FileText, Building } from "lucide-react";
import { cityPages } from "@/data/cityPages";

const serraGauchaSlug = [
  "gramado", "canela", "nova-petropolis", "caxias-do-sul", "bento-goncalves",
  "sao-francisco-de-paula", "carlos-barbosa", "garibaldi", "farroupilha", "flores-da-cunha"
];

const valeParanhanaSlugs = [
  "tres-coroas", "igrejinha", "taquara", "parobe", "sapiranga", "campo-bom"
];

const metropolitanaSlugs = [
  "novo-hamburgo", "sao-leopoldo", "canoas", "gravatai", "porto-alegre"
];

const serraGaucha = cityPages.filter(c => serraGauchaSlug.includes(c.slug));
const valeParanhana = cityPages.filter(c => valeParanhanaSlugs.includes(c.slug));
const metropolitana = cityPages.filter(c => metropolitanaSlugs.includes(c.slug));

const services = [
  { name: "Aposentadoria por Idade", href: "/aposentadoria-idade" },
  { name: "Aposentadoria por Tempo de Contribuição", href: "/aposentadoria-tempo" },
  { name: "Aposentadoria Especial", href: "/aposentadoria-especial" },
  { name: "Aposentadoria Rural", href: "/aposentadoria-rural" },
  { name: "Auxílio Doença", href: "/auxilio-doenca" },
  { name: "Auxílio Acidente", href: "/auxilio-acidente" },
  { name: "Auxílio Maternidade", href: "/auxilio-maternidade" },
  { name: "BPC/LOAS", href: "/bpc-loas" },
  { name: "Pensão por Morte", href: "/pensao-morte" },
];

const differentials = [
  { icon: Clock, title: "13+ Anos de Experiência", description: "Mais de uma década de atuação exclusiva em Direito Previdenciário no Rio Grande do Sul." },
  { icon: Users, title: "Equipe com OAB/RS", description: "Advogados registrados na OAB/RS com dedicação total ao seu caso." },
  { icon: Shield, title: "Atendimento Presencial e Online", description: "Escritórios em Gramado e Nova Petrópolis, além de atendimento 100% online para todo o RS." },
  { icon: FileText, title: "Análise Completa do CNIS", description: "Revisão detalhada de toda documentação antes de qualquer pedido ao INSS." },
];

const CityGrid = ({ title, cities }: { title: string; cities: typeof cityPages }) => (
  <div className="mb-8">
    <h3 className="text-xl font-bold mb-4 text-foreground font-display">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {cities.map((city) => (
        <Link
          key={city.slug}
          to={`/advogado-previdenciario/${city.slug}`}
          className="flex items-center gap-2 px-4 py-3 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all group"
        >
          <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
          <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{city.name}</span>
        </Link>
      ))}
    </div>
  </div>
);

const EstadoRS = () => {
  useEffect(() => {
    document.title = "Advogado Previdenciário RS | Spier & Anorte Advocacia";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = "Advogado previdenciário no Rio Grande do Sul. Escritórios em Gramado e Nova Petrópolis. Atendemos Serra Gaúcha, Vale do Paranhana e Região Metropolitana. Consulta gratuita.";
    if (metaDesc) {
      metaDesc.setAttribute("content", content);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = content;
      document.head.appendChild(meta);
    }
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsApp = () => {
    window.open("https://wa.link/hdn70i", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">21 cidades atendidas no RS</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Advogado Previdenciário no Rio Grande do Sul
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Escritórios em Gramado e Nova Petrópolis com atendimento presencial e online para todo o estado. Mais de 13 anos defendendo os direitos previdenciários dos gaúchos.
            </p>
            <Button variant="hero" size="xl" onClick={handleWhatsApp}>
              <Phone className="w-5 h-5" />
              Consulta Gratuita
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto" style={{ textAlign: "justify" }}>
            <h2 className="text-3xl font-bold mb-6 text-foreground font-display">
              Especialistas em Direito Previdenciário em Todo o RS
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              A Spier & Anorte Advogados Associados é referência em Direito Previdenciário no Rio Grande do Sul. Com escritórios físicos em Gramado e Nova Petrópolis, atendemos presencialmente moradores da Serra Gaúcha, Vale do Paranhana e Região Metropolitana de Porto Alegre, além de oferecer atendimento 100% online para todo o estado.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nossa equipe é formada por advogados com registro na OAB/RS e dedicação exclusiva ao Direito Previdenciário. Isso significa que cada caso recebe atenção especializada, desde a análise do CNIS até a conclusão do processo junto ao INSS, garantindo a melhor estratégia para conquistar o benefício que você merece.
            </p>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground font-display">
              Nossos Escritórios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-2xl p-8 card-shadow border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 font-display">Gramado</h3>
                    <p className="text-muted-foreground">R. Berna, 715 - Vila Suíça</p>
                    <p className="text-muted-foreground text-sm">CEP 95670-554</p>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-2xl p-8 card-shadow border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 font-display">Nova Petrópolis</h3>
                    <p className="text-muted-foreground">Av. 15 de Novembro, 1924, Sala 304</p>
                    <p className="text-muted-foreground text-sm">CEP 95150-000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities by Region */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center text-foreground font-display">
              Cidades Atendidas no RS
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              Clique na sua cidade para ver informações detalhadas sobre nosso atendimento na sua região.
            </p>
            <CityGrid title="Serra Gaúcha" cities={serraGaucha} />
            <CityGrid title="Vale do Paranhana" cities={valeParanhana} />
            <CityGrid title="Região Metropolitana de Porto Alegre" cities={metropolitana} />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center text-foreground font-display">
              Nossos Serviços Previdenciários
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              Atuamos em todas as áreas do Direito Previdenciário para garantir seus direitos junto ao INSS.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  className="flex items-center gap-3 px-5 py-4 rounded-xl bg-card border border-border hover:border-primary/30 card-shadow hover:shadow-md transition-all group"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {service.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-foreground font-display">
              Por que Escolher a Spier & Anorte?
            </h2>
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

      {/* CTA */}
      <section className="py-16 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 font-display">
              Precisa de um Advogado Previdenciário no RS?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Fale com nossa equipe e descubra como podemos ajudar você a conquistar seu benefício do INSS, esteja você em qualquer cidade do Rio Grande do Sul.
            </p>
            <Button variant="hero" size="xl" onClick={handleWhatsApp}>
              <Phone className="w-5 h-5" />
              Consulta Gratuita via WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EstadoRS;
