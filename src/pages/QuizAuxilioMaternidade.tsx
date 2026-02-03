import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Quiz, { QuizQuestion, QuizResult } from "@/components/Quiz";
import { Heart } from "lucide-react";

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
  
  // Situação atual
  const situacaoLabels: Record<string, string> = {
    gravida: "Gestante",
    adocao: "Adoção ou guarda judicial",
    aborto: "Aborto não criminoso",
    pai_solteiro: "Pai solteiro"
  };
  if (answers.situacao_atual) {
    highlights.push(situacaoLabels[answers.situacao_atual] || "");
  }
  
  // Situação trabalhista
  const trabalhoLabels: Record<string, string> = {
    clt: "Trabalhadora CLT",
    autonomo: "Contribuinte individual",
    mei: "MEI",
    domestico: "Trabalhador(a) doméstico(a)"
  };
  if (answers.situacao_trabalhista && answers.situacao_trabalhista !== "desempregado") {
    highlights.push(trabalhoLabels[answers.situacao_trabalhista] || "");
  }
  
  // Contribuições
  if (answers.contribuicoes === "em_dia") {
    highlights.push("Contribuições em dia");
  }
  
  // Tempo de contribuição
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

const QuizAuxilioMaternidade = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-12 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/20 rounded-full mb-6">
              <Heart className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Descubra se Você Tem Direito ao Salário-Maternidade
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Responda algumas perguntas simples e descubra se você pode receber o benefício
            </p>
          </div>
        </div>
      </section>

      {/* Quiz */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Quiz
            title="Quiz Salário-Maternidade"
            subtitle="Descubra se você tem direito"
            questions={questions}
            getResult={getResult}
            whatsappLink="https://wa.link/hdn70i"
            benefitName="Salário-Maternidade"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuizAuxilioMaternidade;
