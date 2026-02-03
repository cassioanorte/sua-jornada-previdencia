import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ChevronLeft, ChevronRight, Phone, RotateCcw, CheckCircle, AlertCircle, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface QuizOption {
  label: string;
  value: string;
  points: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

export interface QuizResult {
  level: "high" | "medium" | "low";
  title: string;
  description: string;
  highlights: string[];
}

interface QuizProps {
  title: string;
  subtitle: string;
  questions: QuizQuestion[];
  getResult: (answers: Record<string, string>, totalPoints: number) => QuizResult;
  whatsappLink: string;
  benefitName: string;
}

const Quiz = ({ title, subtitle, questions, getResult, whatsappLink, benefitName }: QuizProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const progress = ((currentStep + 1) / questions.length) * 100;
  const currentQuestion = questions[currentStep];
  const selectedAnswer = answers[currentQuestion?.id];

  const calculateTotalPoints = (): number => {
    return questions.reduce((total, question) => {
      const answer = answers[question.id];
      const option = question.options.find(opt => opt.value === answer);
      return total + (option?.points || 0);
    }, 0);
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
  };

  const handleWhatsApp = () => {
    window.open(whatsappLink, "_blank");
  };

  if (showResult) {
    const totalPoints = calculateTotalPoints();
    const result = getResult(answers, totalPoints);
    
    const resultConfig = {
      high: {
        icon: <CheckCircle className="w-16 h-16 text-accent" />,
        bgColor: "bg-accent/10",
        borderColor: "border-accent/30",
        titleColor: "text-accent"
      },
      medium: {
        icon: <AlertCircle className="w-16 h-16 text-primary" />,
        bgColor: "bg-primary/10",
        borderColor: "border-primary/30",
        titleColor: "text-primary"
      },
      low: {
        icon: <HelpCircle className="w-16 h-16 text-muted-foreground" />,
        bgColor: "bg-muted",
        borderColor: "border-border",
        titleColor: "text-foreground"
      }
    };

    const config = resultConfig[result.level];

    return (
      <div className="max-w-2xl mx-auto">
        <div className={cn("rounded-2xl p-8 border-2 text-center", config.bgColor, config.borderColor)}>
          <div className="flex justify-center mb-6">
            {config.icon}
          </div>
          
          <h2 className={cn("text-2xl md:text-3xl font-bold mb-4", config.titleColor)}>
            {result.title}
          </h2>
          
          <p className="text-lg text-foreground/80 mb-6">
            {result.description}
          </p>

          {result.highlights.length > 0 && (
            <div className="bg-background/80 rounded-lg p-4 mb-8 text-left">
              <p className="font-semibold mb-2 text-foreground">Baseado nas suas respostas:</p>
              <ul className="space-y-1">
                {result.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="space-y-4">
            <Button variant="cta" size="xl" onClick={handleWhatsApp} className="w-full">
              <Phone className="w-5 h-5" />
              Falar com Advogado pelo WhatsApp
            </Button>
            
            <Button variant="outline" onClick={handleReset} className="w-full">
              <RotateCcw className="w-4 h-4" />
              Refazer Quiz
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">
            Pergunta {currentStep + 1} de {questions.length}
          </span>
          <span className="text-sm font-medium text-accent">
            {Math.round(progress)}%
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question */}
      <div className="bg-card rounded-2xl p-6 md:p-8 card-shadow mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
          {currentQuestion.question}
        </h2>

        <RadioGroup
          value={selectedAnswer || ""}
          onValueChange={handleAnswer}
          className="space-y-3"
        >
          {currentQuestion.options.map((option) => (
            <div key={option.value}>
              <Label
                htmlFor={option.value}
                className={cn(
                  "flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all",
                  selectedAnswer === option.value
                    ? "border-accent bg-accent/10"
                    : "border-border hover:border-accent/50 hover:bg-muted/50"
                )}
              >
                <RadioGroupItem value={option.value} id={option.value} />
                <span className="text-foreground">{option.label}</span>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Navigation */}
      <div className="flex justify-between gap-4">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="flex-1"
        >
          <ChevronLeft className="w-4 h-4" />
          Anterior
        </Button>
        
        <Button
          variant="default"
          onClick={handleNext}
          disabled={!selectedAnswer}
          className="flex-1"
        >
          {currentStep === questions.length - 1 ? "Ver Resultado" : "Próximo"}
          {currentStep < questions.length - 1 && <ChevronRight className="w-4 h-4" />}
        </Button>
      </div>
    </div>
  );
};

export default Quiz;
