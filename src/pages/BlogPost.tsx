import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Tag, MessageCircle } from "lucide-react";
import { getBlogPostBySlug } from "@/data/blogPosts";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  const handleWhatsApp = () => {
    window.open("https://wa.link/hdn70i", "_blank");
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Artigo não encontrado</h1>
          <p className="text-muted-foreground mb-8">
            O artigo que você está procurando não existe ou foi removido.
          </p>
          <Link to="/blog">
            <Button variant="default">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Blog
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-block px-3 py-1 bg-accent/20 text-accent-foreground text-sm font-medium rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
              {post.content.split('\n').map((paragraph, index) => {
                const trimmed = paragraph.trim();
                if (!trimmed) return null;

                const renderInline = (text: string) =>
                  text.split('**').map((part, i) =>
                    i % 2 === 1 ? <strong key={i} className="text-foreground">{part}</strong> : part
                  );
                
                if (trimmed.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-foreground">
                      {trimmed.replace('## ', '')}
                    </h2>
                  );
                }
                
                if (trimmed.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-bold mt-6 mb-3 text-foreground">
                      {trimmed.replace('### ', '')}
                    </h3>
                  );
                }
                
                if (trimmed.startsWith('#### ')) {
                  return (
                    <h4 key={index} className="text-lg font-bold mt-4 mb-2 text-foreground">
                      {renderInline(trimmed.replace('#### ', ''))}
                    </h4>
                  );
                }
                
                if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
                  return (
                    <li key={index} className="ml-6 text-muted-foreground list-disc">
                      {renderInline(trimmed.replace(/^[-*] /, ''))}
                    </li>
                  );
                }
                
                if (trimmed.match(/^\d+\. /)) {
                  return (
                    <li key={index} className="ml-6 text-muted-foreground list-decimal">
                      {renderInline(trimmed.replace(/^\d+\. /, ''))}
                    </li>
                  );
                }
                
                if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
                  return (
                    <p key={index} className="font-bold text-foreground my-2">
                      {trimmed.replace(/\*\*/g, '')}
                    </p>
                  );
                }
                
                if (trimmed.startsWith('|')) {
                  return null;
                }
                
                return (
                  <p key={index} className="text-muted-foreground my-4 leading-relaxed">
                    {renderInline(trimmed)}
                  </p>
                );
              })}
            </article>

            {/* CTA Section */}
            <div className="mt-16 p-8 bg-primary/5 rounded-2xl border border-primary/10">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Precisa de ajuda com seu benefício?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Nossa equipe de advogados especialistas está pronta para analisar seu caso gratuitamente. 
                  Entre em contato agora e descubra seus direitos.
                </p>
                <Button onClick={handleWhatsApp} variant="cta" size="xl">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Fale com um Advogado Agora
                </Button>
              </div>
            </div>

            {/* Back to Blog */}
            <div className="mt-12 pt-8 border-t border-border">
              <Link to="/blog">
                <Button variant="outline" size="lg">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Ver todos os artigos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};

export default BlogPost;
