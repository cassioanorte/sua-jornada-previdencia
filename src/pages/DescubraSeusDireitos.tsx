import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Stethoscope, Baby, ClipboardList } from "lucide-react";

const quizzes = [
  {
    title: "Auxílio-Acidente",
    description: "Sofreu um acidente e ficou com sequelas? Descubra se tem direito.",
    icon: <AlertTriangle className="w-7 h-7" />,
    href: "/quiz-auxilio-acidente/",
  },
  {
    title: "Auxílio-Doença",
    description: "Está afastado ou incapaz de trabalhar por doença? Veja se tem direito.",
    icon: <Stethoscope className="w-7 h-7" />,
    href: "/quiz-auxilio-doenca/",
  },
  {
    title: "Salário-Maternidade",
    description: "Teve um filho, adoção ou está grávida? Veja se tem direito ao benefício.",
    icon: <Baby className="w-7 h-7" />,
    href: "/quiz-auxilio-maternidade/",
  },
];

const DescubraSeusDireitos = () => {
  useEffect(() => {
    document.title = "Descubra Seus Direitos | Teste Grátis de Benefícios do INSS | Spier & Anorte";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute(
        "content",
        "Responda alguns minutos e descubra se você tem direito a auxílio-acidente, auxílio-doença ou salário-maternidade. Teste gratuito do escritório Spier & Anorte."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-12 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Descubra Seus Direitos</h1>
            <p className="text-xl text-primary-foreground/90">
              Responda alguns minutos e descubra se você tem direito a um benefício do INSS
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {quizzes.map((q) => (
              <div
                key={q.href}
                className="bg-card rounded-xl p-6 card-shadow border-t-4 border-accent flex flex-col text-center hover:-translate-y-1 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-full mb-4 mx-auto text-accent">
                  {q.icon}
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-3">{q.title}</h2>
                <p className="text-muted-foreground mb-6 flex-1">{q.description}</p>
                <Button variant="hero" size="lg" asChild className="w-full bg-accent hover:bg-accent-hover">
                  <Link to={q.href}>
                    <ClipboardList className="w-5 h-5 flex-shrink-0" />
                    Fazer o teste
                  </Link>
                </Button>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center max-w-2xl mx-auto mt-10">
            O teste é gratuito, leva poucos minutos e tem caráter meramente informativo. Não substitui a análise individual do seu caso por um advogado.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DescubraSeusDireitos;
