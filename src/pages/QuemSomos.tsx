import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, Heart, Zap, Users, Phone } from "lucide-react";
import teamImage from "@/assets/team.jpg";

const QuemSomos = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.link/hdn70i", "_blank");
  };

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Honestidade",
      description: "A verdade e a transparência vêm em primeiro lugar em tudo que fazemos."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Rapidez",
      description: "Agilidade no atendimento e nos processos, sem perder a qualidade."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Empatia",
      description: "Tratamos cada caso com a dedicação e o respeito que você merece."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Tecnologia Humanizada",
      description: "Usamos tecnologia para facilitar sua vida, sempre com atendimento pessoal."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Quem Somos
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Mais de 13 anos dedicados exclusivamente ao Direito Previdenciário
            </p>
          </div>
        </div>
      </section>

      {/* Team Photo */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <img 
              src={teamImage} 
              alt="Nossa equipe de advogados" 
              className="w-full h-auto rounded-2xl card-shadow-hover"
            />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
              Nossa História
            </h2>
            <div className="space-y-6 text-lg text-foreground/80" style={{ textAlign: 'justify' }}>
              <p>
                Há mais de 13 anos, iniciamos nossa trajetória com um propósito muito claro: 
                <strong className="text-primary"> assegurar que cada brasileiro tenha acesso aos seus direitos previdenciários de forma justa, transparente e digna</strong>.
              </p>
              <p>
                Desde então, já ajudamos milhares de pessoas em todo o país a conquistarem seus benefícios junto ao INSS. 
                Cada história atendida reforça o nosso compromisso com a verdade, a ética e a responsabilidade — valores que não são apenas princípios, mas a base de tudo o que fazemos.
              </p>
              <p>
                Acreditamos que <strong className="text-primary">o Direito deve ser um instrumento de transformação e dignidade, jamais um obstáculo</strong>. 
                Por isso, escolhemos atuar de forma exclusiva no Direito Previdenciário, aprofundando nosso conhecimento e nos tornando especialistas em cada detalhe dessa área essencial para a vida das pessoas.
              </p>
              <p>
                Com a evolução da tecnologia, ampliamos nossa atuação para todo o Brasil por meio de um atendimento 100% online — sem abrir mão do cuidado, da proximidade e da atenção individual. 
                Aqui, cada cliente é tratado de forma única, com escuta ativa, respeito e dedicação genuína.
              </p>
              <p>
                <strong className="text-primary">Mais do que processos, cuidamos de pessoas.</strong> E é isso que nos move todos os dias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">
              Nossos Valores
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Princípios que guiam cada decisão e cada atendimento
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 p-6 bg-card rounded-xl card-shadow hover:card-shadow-hover transition-smooth"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-card p-8 md:p-12 rounded-2xl card-shadow">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Nossa Mensagem para Você
              </h2>
              <p className="text-lg text-foreground/80 mb-8 italic">
                "Sabemos que lidar com questões previdenciárias pode ser desafiador e, muitas vezes, frustrante. 
                É por isso que estamos aqui: para simplificar esse processo, lutar pelos seus direitos e 
                garantir que você receba o que é seu por lei. Com honestidade, rapidez e dedicação, 
                transformamos dificuldades em conquistas."
              </p>
              <Button variant="cta" size="lg" onClick={handleWhatsApp}>
                <Phone className="w-5 h-5" />
                Converse com Nossa Equipe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuemSomos;
