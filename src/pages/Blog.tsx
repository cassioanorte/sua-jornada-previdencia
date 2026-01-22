import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Como saber se tenho direito à aposentadoria especial?",
      excerpt: "Entenda os requisitos e como comprovar que você trabalhou exposto a agentes nocivos à saúde.",
      date: "15 de março de 2025",
      category: "Guia de Benefícios"
    },
    {
      title: "BPC LOAS: quem tem direito e como solicitar",
      excerpt: "Tudo o que você precisa saber sobre o Benefício de Prestação Continuada para idosos e pessoas com deficiência.",
      date: "10 de março de 2025",
      category: "Guia de Benefícios"
    },
    {
      title: "5 erros que fazem o INSS negar o auxílio-doença",
      excerpt: "Conheça os erros mais comuns e saiba como evitá-los na hora de solicitar seu benefício.",
      date: "5 de março de 2025",
      category: "Dicas Práticas"
    },
    {
      title: "Como aumentar o valor da sua aposentadoria",
      excerpt: "Estratégias legais para maximizar o valor do seu benefício previdenciário.",
      date: "28 de fevereiro de 2025",
      category: "Dicas Práticas"
    },
    {
      title: "Diferença entre aposentadoria por tempo e por idade",
      excerpt: "Entenda as diferenças entre esses dois tipos de aposentadoria e qual é melhor para você.",
      date: "20 de fevereiro de 2025",
      category: "Guia de Benefícios"
    },
    {
      title: "Reforma da Previdência: o que mudou?",
      excerpt: "Principais mudanças trazidas pela Reforma da Previdência e como elas afetam seus direitos.",
      date: "15 de fevereiro de 2025",
      category: "Atualizações do INSS"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Conteúdos atualizados sobre Direito Previdenciário para ajudar você a entender seus direitos
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={index} className="card-shadow hover:card-shadow-hover transition-smooth cursor-pointer group">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-smooth">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-smooth" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Fique Por Dentro das Novidades
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Receba conteúdos exclusivos e atualizações sobre Direito Previdenciário diretamente no seu WhatsApp
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
