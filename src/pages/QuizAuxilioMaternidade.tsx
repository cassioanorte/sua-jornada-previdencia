import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Quiz, { QuizQuestion, QuizResult } from "@/components/Quiz";
import { Heart } from "lucide-react";

const questions: QuizQuestion[] = [
  {
    id: "situacao_trabalho",
    question: "Qual sua situação de trabalho atual?",
    options: [
      { label: "Empregada CLT", value: "clt", points: 3 },
      { label: "Autônoma / MEI", value: "autonoma", points: 2 },
      { label: "Desempregada", value: "desempregada", points: 1 },
      { label: "Trabalhadora rural", value: "rural", points: 2 }
    ]
  },
  {
    id: "contribuicao",
    question: "Você contribui ou já contribuiu para o INSS?",
    options: [
      { label: "Sim, atualmente contribuo", value: "sim_atual", points: 3 },
      { label: "Sim, mas parei de contribuir", value: "sim_parou", points: 2 },
      { label: "Nunca contribuí", value: "nunca", points: 0 }
    ]
  },
  {
    id: "tempo_contribuicao",
    question: "Há quanto tempo você contribui ou contribuiu para o INSS?",
    options: [
      { label: "Menos de 10 meses", value: "menos_10", points: 1 },
      { label: "10 meses a 2 anos", value: "10_24", points: 2 },
      { label: "Mais de 2 anos", value: "mais_24", points: 3 }
    ]
  },
  {
    id: "motivo",
    question: "Qual o motivo do benefício?",
    options: [
      { label: "Nascimento de filho", value: "nascimento", points: 3 },
      { label: "Adoção", value: "adocao", points: 3 },
      { label: "Guarda judicial para fins de adoção", value: "guarda", points: 3 }
    ]
  },
  {
    id: "status_pedido",
    question: "Já deu entrada no pedido do benefício?",
    options: [
      { label: "Não, ainda não solicitei", value: "nao", points: 2 },
      { label: "Sim, estou aguardando resposta", value: "aguardando", points: 2 },
      { label: "Sim, mas foi negado", value: "negado", points: 3 }
    ]
  }
];

const getResult = (answers: Record<string, string>, totalPoints: number): QuizResult => {
  const highlights: string[] = [];
  
  if (answers.situacao_trabalho === "clt") {
    highlights.push("Empregada com carteira assinada");
  } else if (answers.situacao_trabalho === "autonoma") {
    highlights.push("Contribuinte individual/MEI");
  } else if (answers.situacao_trabalho === "rural") {
    highlights.push("Trabalhadora rural (segurada especial)");
  }
  
  if (answers.contribuicao === "sim_atual") {
    highlights.push("Contribuinte ativa do INSS");
  } else if (answers.contribuicao === "sim_parou") {
    highlights.push("Possui histórico de contribuição");
  }
  
  if (answers.tempo_contribuicao === "mais_24" || answers.tempo_contribuicao === "10_24") {
    highlights.push("Carência de contribuição atendida");
  }
  
  if (answers.motivo) {
    const motivoLabels: Record<string, string> = {
      nascimento: "Nascimento de filho",
      adocao: "Adoção",
      guarda: "Guarda judicial"
    };
    highlights.push(motivoLabels[answers.motivo] || "");
  }
  
  if (answers.status_pedido === "negado") {
    highlights.push("Possibilidade de recurso/revisão");
  }

  if (totalPoints >= 12) {
    return {
      level: "high",
      title: "Ótima notícia!",
      description: `Você tem ALTA PROBABILIDADE de ter direito ao Salário-Maternidade! Suas respostas indicam que você atende aos principais requisitos do benefício.`,
      highlights
    };
  } else if (totalPoints >= 8) {
    return {
      level: "medium",
      title: "Caso promissor!",
      description: `Você tem MÉDIA PROBABILIDADE de ter direito ao benefício. Vamos analisar alguns detalhes para confirmar sua elegibilidade.`,
      highlights
    };
  } else {
    return {
      level: "low",
      title: "Vamos analisar seu caso",
      description: `Seu caso NECESSITA DE AVALIAÇÃO especializada. Existem situações especiais que podem garantir seu direito ao benefício.`,
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
              Responda 5 perguntas rápidas e saiba se você pode solicitar o benefício
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
