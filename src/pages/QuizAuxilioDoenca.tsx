import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Quiz, { QuizQuestion, QuizResult } from "@/components/Quiz";
import { Stethoscope } from "lucide-react";

const questions: QuizQuestion[] = [
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
      { label: "Menos de 1 ano", value: "menos_1", points: 1 },
      { label: "1 a 5 anos", value: "1_5", points: 2 },
      { label: "Mais de 5 anos", value: "mais_5", points: 3 }
    ]
  },
  {
    id: "incapacidade",
    question: "Você está impossibilitado de trabalhar por doença ou acidente?",
    options: [
      { label: "Sim, totalmente impossibilitado", value: "total", points: 3 },
      { label: "Parcialmente impossibilitado", value: "parcial", points: 2 },
      { label: "Não estou impossibilitado", value: "nao", points: 0 }
    ]
  },
  {
    id: "tempo_afastamento",
    question: "Há quanto tempo está afastado ou com dificuldade para trabalhar?",
    options: [
      { label: "Menos de 15 dias", value: "menos_15", points: 1 },
      { label: "15 a 30 dias", value: "15_30", points: 2 },
      { label: "Mais de 30 dias", value: "mais_30", points: 3 }
    ]
  },
  {
    id: "documentos",
    question: "Possui laudos ou atestados médicos?",
    options: [
      { label: "Sim, atualizados (últimos 3 meses)", value: "atualizados", points: 3 },
      { label: "Sim, mas são antigos", value: "antigos", points: 2 },
      { label: "Não tenho documentos médicos", value: "nao_tenho", points: 1 }
    ]
  }
];

const getResult = (answers: Record<string, string>, totalPoints: number): QuizResult => {
  const highlights: string[] = [];
  
  if (answers.contribuicao === "sim_atual") {
    highlights.push("Contribuinte ativo do INSS");
  } else if (answers.contribuicao === "sim_parou") {
    highlights.push("Possui histórico de contribuição");
  }
  
  if (answers.tempo_contribuicao === "mais_5") {
    highlights.push("Tempo de contribuição adequado");
  } else if (answers.tempo_contribuicao === "1_5") {
    highlights.push("Carência pode ser atendida");
  }
  
  if (answers.incapacidade === "total" || answers.incapacidade === "parcial") {
    highlights.push("Incapacidade para o trabalho identificada");
  }
  
  if (answers.tempo_afastamento === "mais_30") {
    highlights.push("Período de afastamento superior a 15 dias");
  }
  
  if (answers.documentos === "atualizados") {
    highlights.push("Documentação médica atualizada");
  }

  if (totalPoints >= 12) {
    return {
      level: "high",
      title: "Boa notícia!",
      description: `Você tem ALTA PROBABILIDADE de ter direito ao Auxílio Doença! Suas respostas indicam que você atende aos principais requisitos do benefício.`,
      highlights
    };
  } else if (totalPoints >= 8) {
    return {
      level: "medium",
      title: "Caso promissor!",
      description: `Você tem MÉDIA PROBABILIDADE de ter direito ao benefício. Alguns pontos precisam ser avaliados por um especialista para confirmar sua elegibilidade.`,
      highlights
    };
  } else {
    return {
      level: "low",
      title: "Vamos analisar seu caso",
      description: `Seu caso NECESSITA DE ANÁLISE especializada. Recomendamos uma consulta para avaliar todas as possibilidades e alternativas disponíveis.`,
      highlights
    };
  }
};

const QuizAuxilioDoenca = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-12 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/20 rounded-full mb-6">
              <Stethoscope className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Descubra se Você Tem Direito ao Auxílio Doença
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
            title="Quiz Auxílio Doença"
            subtitle="Descubra se você tem direito"
            questions={questions}
            getResult={getResult}
            whatsappLink="https://wa.link/hdn70i"
            benefitName="Auxílio Doença"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuizAuxilioDoenca;
