import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Quiz, { QuizQuestion, QuizResult } from "@/components/Quiz";
import { Heart, UserCheck, Clock, DollarSign, Baby, FileText, Shield, Scale } from "lucide-react";

const questions: QuizQuestion[] = [
  {
    id: "situacao_atual",
    question: "Qual é sua situação atual?",
    options: [
      { label: "Estou grávida", value: "gravida", points: 3 },
      { label: "Adotei uma criança ou obtive guarda judicial", value: "adocao", points: 3 },
      { label: "Tive aborto não criminoso", value: "aborto", points: 2 },
      { label: "Sou pai solteiro", value: "pai_solteiro", points: 3 }
    ]
  },
  {
    id: "situacao_trabalhista",
    question: "Qual é sua situação trabalhista?",
    options: [
      { label: "Trabalhadora com carteira assinada (CLT)", value: "clt", points: 3 },
      { label: "Trabalhador autônomo/contribuinte individual", value: "autonomo", points: 2 },
      { label: "Estou desempregado(a)", value: "desempregado", points: 1 },
      { label: "Microempreendedor Individual (MEI)", value: "mei", points: 2 },
      { label: "Trabalhador(a) doméstico(a)", value: "domestico", points: 3 }
    ]
  },
  {
    id: "contribuicoes",
    question: "Você está em dia com as contribuições ao INSS?",
    options: [
      { label: "Sim, estou em dia", value: "em_dia", points: 3 },
      { label: "Estou com algumas contribuições em atraso", value: "algumas_atraso", points: 2 },
      { label: "Não, estou com muitas contribuições em atraso", value: "muitas_atraso", points: 1 },
      { label: "Não tenho certeza", value: "incerto", points: 1 }
    ]
  },
  {
    id: "tempo_contribuicao",
    question: "Há quanto tempo você contribui para o INSS?",
    options: [
      { label: "Menos de 3 meses", value: "menos_3", points: 0 },
      { label: "De 3 a 12 meses", value: "3_12", points: 2 },
      { label: "Mais de 12 meses", value: "mais_12", points: 3 },
      { label: "Não tenho certeza", value: "incerto", points: 1 }
    ]
  }
];

const getResult = (answers: Record<string, string>, totalPoints: number): QuizResult => {
  const highlights: string[] = [];
  
  const situacaoLabels: Record<string, string> = {
    gravida: "Gestante",
    adocao: "Adoção ou guarda judicial",
    aborto: "Aborto não criminoso",
    pai_solteiro: "Pai solteiro"
  };
  if (answers.situacao_atual) {
    highlights.push(situacaoLabels[answers.situacao_atual] || "");
  }
  
  const trabalhoLabels: Record<string, string> = {
    clt: "Trabalhadora CLT",
    autonomo: "Contribuinte individual",
    mei: "MEI",
    domestico: "Trabalhador(a) doméstico(a)"
  };
  if (answers.situacao_trabalhista && answers.situacao_trabalhista !== "desempregado") {
    highlights.push(trabalhoLabels[answers.situacao_trabalhista] || "");
  }
  
  if (answers.contribuicoes === "em_dia") {
    highlights.push("Contribuições em dia");
  }
  
  if (answers.tempo_contribuicao === "mais_12") {
    highlights.push("Mais de 12 meses de contribuição");
  } else if (answers.tempo_contribuicao === "3_12") {
    highlights.push("Carência em análise");
  }

  if (totalPoints >= 10) {
    return {
      level: "high",
      title: "Parabéns! Você tem grandes chances de receber o auxílio maternidade!",
      description: "Com base nas suas respostas, você atende aos principais requisitos para solicitar o benefício. Entre em contato conosco para uma análise detalhada do seu caso.",
      highlights
    };
  } else if (totalPoints >= 6) {
    return {
      level: "medium",
      title: "Seu caso merece atenção!",
      description: "Suas respostas indicam que você pode ter direito ao benefício, mas alguns pontos precisam ser analisados por um especialista.",
      highlights
    };
  } else {
    return {
      level: "low",
      title: "Vamos analisar seu caso com cuidado",
      description: "Seu caso requer uma avaliação especializada. Existem situações e exceções que podem garantir seu direito ao benefício.",
      highlights
    };
  }
};

const updates = [
  {
    icon: Baby,
    title: "Ampliação para mães adotivas e pais",
    description: "O STF decidiu que o auxílio maternidade deve ser concedido também para pais solteiros e mães adotivas em condições equiparadas às mães biológicas, independentemente de estado civil."
  },
  {
    icon: FileText,
    title: "Extensão para casos de aborto não criminoso",
    description: "Mulheres que sofrem aborto espontâneo têm direito a 14 dias de auxílio maternidade, desde que comprovada a situação através de atestado médico."
  },
  {
    icon: Shield,
    title: "Benefício para gestantes de alto risco",
    description: "Gestantes com comprovação médica de alto risco agora podem solicitar o afastamento antecipado do trabalho, com direito ao benefício integral."
  },
  {
    icon: Scale,
    title: "Prazos de carência flexibilizados",
    description: "Para trabalhadoras informais e MEI, os prazos de carência foram flexibilizados em casos específicos, facilitando o acesso ao benefício."
  }
];

const features = [
  {
    icon: UserCheck,
    title: "Especialistas no Tema",
    description: "Advogados especializados em direito previdenciário com anos de experiência em auxílio maternidade."
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

const QuizAuxilioMaternidade = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero com Quiz */}
      <section className="pt-32 pb-16 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/20 rounded-full mb-6">
              <Heart className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Auxílio Maternidade - Seu Direito Garantido
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Descubra agora mesmo se você pode receber o benefício e garanta seus direitos com nossa assessoria especializada.
            </p>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Você tem direito ao auxílio maternidade?
            </h2>
            <p className="text-muted-foreground text-lg">
              Responda algumas perguntas simples e descubra se você pode receber o benefício
            </p>
          </div>
          <Quiz
            title="Quiz Auxílio Maternidade"
            subtitle="Descubra se você tem direito"
            questions={questions}
            getResult={getResult}
            whatsappLink="https://wa.link/hdn70i"
            benefitName="Auxílio Maternidade"
          />
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
                className="bg-card rounded-xl p-6 card-shadow text-center border-t-4 border-accent hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-full mb-4">
                  <feature.icon className="w-7 h-7 text-accent" />
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

      {/* Updates Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Principais Atualizações do Auxílio Maternidade em 2025
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {updates.map((update, index) => (
              <div 
                key={index}
                className="bg-card rounded-lg p-6 border-l-4 border-primary card-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <update.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {update.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {update.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entenda o Benefício */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
              Entenda o Auxílio Maternidade
            </h2>
            <div className="bg-card rounded-xl p-8 card-shadow">
              <p className="text-lg text-foreground/80 mb-4">
                O Auxílio Maternidade, também chamado de Salário-Maternidade, é um benefício pago 
                às seguradas da Previdência Social durante o período de licença maternidade.
              </p>
              <p className="text-lg text-foreground/80 mb-4">
                <strong>Têm direito ao benefício:</strong> empregadas CLT, trabalhadoras avulsas, empregadas domésticas, 
                contribuintes individuais, facultativas, seguradas especiais (trabalhadoras rurais), e também pais solteiros em casos de adoção.
              </p>
              <p className="text-lg text-foreground/80">
                <strong>Duração do benefício:</strong> 120 dias para nascimento ou adoção, podendo ser estendido em casos especiais. 
                Para aborto não criminoso, são 14 dias de benefício.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuizAuxilioMaternidade;
