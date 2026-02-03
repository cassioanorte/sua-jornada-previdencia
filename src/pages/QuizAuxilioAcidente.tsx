import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Quiz, { QuizQuestion, QuizResult } from "@/components/Quiz";
import { AlertTriangle, UserCheck, Clock, DollarSign, Scale, FileText, Shield, Briefcase } from "lucide-react";

const questions: QuizQuestion[] = [
  {
    id: "sofreu_acidente",
    question: "Você sofreu algum tipo de acidente nos últimos 5 anos?",
    options: [
      { label: "Sim", value: "sim", points: 3 },
      { label: "Não", value: "nao", points: 0 }
    ]
  },
  {
    id: "sequelas",
    question: "O acidente resultou em sequelas permanentes que reduziram sua capacidade de trabalho?",
    options: [
      { label: "Sim", value: "sim", points: 3 },
      { label: "Não", value: "nao", points: 0 },
      { label: "Não tenho certeza", value: "incerto", points: 2 }
    ]
  },
  {
    id: "situacao_trabalho",
    question: "Você estava trabalhando com carteira assinada no momento do acidente?",
    options: [
      { label: "Sim", value: "sim", points: 3 },
      { label: "Não", value: "nao", points: 1 },
      { label: "Trabalhava como autônomo", value: "autonomo", points: 2 }
    ]
  },
  {
    id: "auxilio_doenca",
    question: "Você recebeu auxílio-doença por conta desse acidente?",
    options: [
      { label: "Sim", value: "sim", points: 3 },
      { label: "Não", value: "nao", points: 1 },
      { label: "Tentei, mas não consegui", value: "tentou", points: 2 }
    ]
  },
  {
    id: "dificuldades_atuais",
    question: "Você ainda possui dificuldades para exercer suas atividades profissionais devido às sequelas?",
    options: [
      { label: "Sim", value: "sim", points: 3 },
      { label: "Não", value: "nao", points: 0 },
      { label: "Em algumas atividades", value: "algumas", points: 2 }
    ]
  }
];

const getResult = (answers: Record<string, string>, totalPoints: number): QuizResult => {
  const highlights: string[] = [];
  
  if (answers.sofreu_acidente === "sim") {
    highlights.push("Sofreu acidente nos últimos 5 anos");
  }
  
  if (answers.sequelas === "sim") {
    highlights.push("Sequelas permanentes identificadas");
  } else if (answers.sequelas === "incerto") {
    highlights.push("Possíveis sequelas a serem avaliadas");
  }
  
  if (answers.situacao_trabalho === "sim") {
    highlights.push("Trabalhador CLT no momento do acidente");
  } else if (answers.situacao_trabalho === "autonomo") {
    highlights.push("Contribuinte autônomo");
  }
  
  if (answers.auxilio_doenca === "sim") {
    highlights.push("Histórico de auxílio-doença");
  }
  
  if (answers.dificuldades_atuais === "sim" || answers.dificuldades_atuais === "algumas") {
    highlights.push("Limitações funcionais persistentes");
  }

  if (totalPoints >= 12) {
    return {
      level: "high",
      title: "Você tem fortes indícios de direito ao Auxílio Acidente!",
      description: "Com base nas suas respostas, você apresenta características que indicam possível direito ao benefício. Recomendamos uma avaliação detalhada do seu caso por nossos especialistas.",
      highlights
    };
  } else if (totalPoints >= 7) {
    return {
      level: "medium",
      title: "Seu caso merece uma análise especializada!",
      description: "Suas respostas indicam que você pode ter direito ao benefício, mas alguns pontos precisam ser avaliados por um advogado especialista.",
      highlights
    };
  } else {
    return {
      level: "low",
      title: "Vamos analisar seu caso com atenção",
      description: "Com o novo entendimento do STJ, mesmo sequelas mínimas podem garantir o direito ao benefício. Consulte nossos especialistas para uma avaliação completa.",
      highlights
    };
  }
};

const infoCards = [
  {
    icon: AlertTriangle,
    title: "O que é o Auxílio-Acidente",
    description: "O auxílio-acidente é um benefício previdenciário pago ao segurado do INSS que, após sofrer um acidente (de qualquer natureza), fica com sequelas permanentes que reduzem sua capacidade para o trabalho habitual, ainda que de forma parcial."
  },
  {
    icon: Scale,
    title: "Novo Entendimento do STJ",
    description: "O STJ consolidou o entendimento de que não é necessário haver redução significativa da capacidade laboral. Agora, mesmo sequelas mínimas, desde que comprovadas por laudo médico e relacionadas ao acidente, podem justificar o pagamento do auxílio-acidente."
  },
  {
    icon: FileText,
    title: "Resumo Importante",
    description: "Basta que exista qualquer limitação funcional decorrente do acidente, ainda que pequena, para o segurado ter direito ao benefício. Isso ampliou significativamente o número de pessoas que podem receber."
  }
];

const features = [
  {
    icon: UserCheck,
    title: "Especialistas no Tema",
    description: "Advogados especializados em direito previdenciário com ampla experiência em casos de auxílio-acidente."
  },
  {
    icon: Clock,
    title: "Agilidade no Processo",
    description: "Atuamos para que seu benefício seja concedido no menor tempo possível, respeitando os prazos legais."
  },
  {
    icon: DollarSign,
    title: "Sem Custos Iniciais",
    description: "Atendemos com honorários condicionados ao sucesso da sua solicitação. Você não paga nada antecipadamente."
  }
];

const requirements = [
  {
    icon: Shield,
    title: "Qualidade de Segurado",
    description: "Estar contribuindo para o INSS no momento do acidente ou estar no período de graça."
  },
  {
    icon: AlertTriangle,
    title: "Acidente de Qualquer Natureza",
    description: "Pode ser acidente de trabalho, de trânsito, doméstico ou qualquer outro tipo de acidente."
  },
  {
    icon: Briefcase,
    title: "Sequela Permanente",
    description: "A sequela deve ser permanente e reduzir, ainda que minimamente, a capacidade para o trabalho."
  }
];

const QuizAuxilioAcidente = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/20 rounded-full mb-6">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Auxílio Acidente: Garanta o seu direito!
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              O novo entendimento sobre o auxílio-acidente ampliou significativamente o número de segurados com direito ao benefício, alcançando também aqueles que ficaram com sequelas leves ou mínimas.
            </p>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Descubra se Você Tem Direito ao Auxílio Acidente
            </h2>
            <p className="text-muted-foreground text-lg">
              Responda algumas perguntas simples e descubra se você pode receber o benefício
            </p>
          </div>
          <Quiz
            title="Quiz Auxílio Acidente"
            subtitle="Descubra se você tem direito"
            questions={questions}
            getResult={getResult}
            whatsappLink="https://wa.link/hdn70i"
            benefitName="Auxílio Acidente"
          />
        </div>
      </section>

      {/* Info Cards - O que é, Novo Entendimento, Resumo */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Entenda o Auxílio-Acidente
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {infoCards.map((card, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 card-shadow hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                  <card.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {card.title}
                </h3>
                <p className="text-muted-foreground">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Requisitos para o Benefício
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {requirements.map((req, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 card-shadow border-t-4 border-accent text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-full mb-4">
                  <req.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {req.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {req.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Por que contar com nossa assessoria?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 card-shadow text-center border-t-4 border-primary hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Importante Section */}
      <section className="py-16 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Importante: Novo Entendimento Amplia Direitos
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-4">
              Com a decisão do STJ, mesmo sequelas consideradas "leves" ou "mínimas" agora podem garantir o direito ao auxílio-acidente.
            </p>
            <p className="text-lg text-primary-foreground/80">
              Isso significa que se você sofreu um acidente e ficou com qualquer tipo de limitação, por menor que seja, você pode ter direito ao benefício. Não deixe de buscar seus direitos!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuizAuxilioAcidente;
