import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Tag, MessageCircle } from "lucide-react";
import { getBlogPostBySlug, blogPosts } from "@/data/blogPosts";
import RelatedPosts from "@/components/RelatedPosts";

// Build a map of keywords → post slugs for auto-linking
const linkableKeywords: { keyword: string; slug: string; title: string }[] = blogPosts
  .map(p => ({ keyword: p.title, slug: p.id, title: p.title }))
  .sort((a, b) => b.keyword.length - a.keyword.length); // longest first to avoid partial matches

// Short aliases for common terms that should link internally to other posts
const shortAliases: { keyword: string; slug: string }[] = [
  // Benefícios por incapacidade
  { keyword: "auxílio-doença", slug: "auxilio-doenca-requisitos" },
  { keyword: "auxílio doença", slug: "auxilio-doenca-requisitos" },
  { keyword: "benefício por incapacidade", slug: "beneficios-por-incapacidade-no-inss" },
  { keyword: "benefícios por incapacidade", slug: "beneficios-por-incapacidade-no-inss" },
  { keyword: "aposentadoria por invalidez", slug: "beneficios-por-incapacidade-no-inss" },
  { keyword: "perícia médica", slug: "pericia-medica-inss-como-preparar" },
  { keyword: "perícia do INSS", slug: "pericia-medica-inss-como-preparar" },
  { keyword: "Atestmed", slug: "atestmed-auxilio-doenca" },
  { keyword: "reabilitação profissional", slug: "plano-de-reabilitacao-profissional" },
  { keyword: "dossiê médico", slug: "dossie-medico-checklist-inss" },
  { keyword: "revisão de benefício", slug: "revisao-beneficio-incapacidade" },

  // Auxílio-acidente
  { keyword: "auxílio-acidente", slug: "auxilio-acidente-inss-quem-tem-direito" },
  { keyword: "auxílio acidente", slug: "auxilio-acidente-inss-quem-tem-direito" },
  { keyword: "DPVAT", slug: "auxilio-acidente-e-dpvat" },
  { keyword: "Tema 416", slug: "stj-beneficio-lesao-minima" },
  { keyword: "lesão mínima", slug: "stj-beneficio-lesao-minima" },

  // Aposentadoria especial e documentos
  { keyword: "aposentadoria especial", slug: "aposentadoria-especial-guia-completo" },
  { keyword: "tempo especial", slug: "aposentadoria-especial-guia-completo" },
  { keyword: "agentes nocivos", slug: "aposentadoria-especial-guia-completo" },
  { keyword: "PPP", slug: "ppp-o-que-e-como-obter" },
  { keyword: "Perfil Profissiográfico Previdenciário", slug: "ppp-o-que-e-como-obter" },
  { keyword: "LTCAT", slug: "ltcat-laudos-tecnicos-aposentadoria-especial" },
  { keyword: "laudo técnico", slug: "ltcat-laudos-tecnicos-aposentadoria-especial" },
  { keyword: "Tema 1291", slug: "reconhecimento-atividade-especial-dentista" },

  // Aposentadorias por categoria
  { keyword: "aposentadoria do professor", slug: "aposentadoria-do-professor" },
  { keyword: "aposentadoria do médico", slug: "aposentadoria-medico" },
  { keyword: "aposentadoria do dentista", slug: "aposentadoria-dentista-contribuinte-individual" },
  { keyword: "aposentadoria do pedreiro", slug: "aposentadoria-do-pedreiro" },
  { keyword: "aposentadoria do caminhoneiro", slug: "aposentadoria-caminhoneiro" },
  { keyword: "aposentadoria do vigilante", slug: "aposentadoria-vigilante" },
  { keyword: "aposentadoria do frentista", slug: "aposentadoria-frentista" },
  { keyword: "operador de máquinas pesadas", slug: "aposentadoria-operador-maquinas-pesadas" },
  { keyword: "aposentadoria por idade", slug: "aposentadoria-por-idade" },
  { keyword: "aposentadoria rural", slug: "aposentadoria-rural" },
  { keyword: "aposentadoria PCD", slug: "aposentadoria-pcd" },
  { keyword: "pessoa com deficiência", slug: "aposentadoria-pcd-direitos" },

  // Outros benefícios
  { keyword: "BPC/LOAS", slug: "bpc-loas-como-solicitar" },
  { keyword: "BPC LOAS", slug: "bpc-loas-como-solicitar" },
  { keyword: "BPC", slug: "bpc-loas-como-solicitar" },
  { keyword: "LOAS", slug: "bpc-loas-como-solicitar" },
  { keyword: "pensão por morte", slug: "pensao-por-morte" },
  { keyword: "auxílio-maternidade", slug: "auxilio-maternidade" },
  { keyword: "auxílio maternidade", slug: "auxilio-maternidade" },
  { keyword: "salário-maternidade", slug: "auxilio-maternidade" },
  { keyword: "licença-paternidade", slug: "licenca-paternidade-lei-15371-2026" },
  { keyword: "salário-paternidade", slug: "licenca-paternidade-lei-15371-2026" },

  // Planejamento e legislação
  { keyword: "CNIS", slug: "conferir-cnis-antes-de-solicitar-aposentadoria" },
  { keyword: "Reforma da Previdência", slug: "reforma-previdencia-mudancas" },
  { keyword: "EC 103", slug: "reforma-previdencia-mudancas" },
];

// External authoritative links (open in new tab)
const externalLinks: { keyword: string; url: string }[] = [
  { keyword: "portal Meu INSS", url: "https://meu.inss.gov.br" },
  { keyword: "Meu INSS", url: "https://meu.inss.gov.br" },
  { keyword: "Diário Oficial da União", url: "https://www.in.gov.br" },
  { keyword: "Superior Tribunal de Justiça", url: "https://www.stj.jus.br" },
  { keyword: "Tribunal Regional Federal da 4ª Região", url: "https://www.trf4.jus.br" },
  { keyword: "Supremo Tribunal Federal", url: "https://www.stf.jus.br" },
  { keyword: "Ministério do Trabalho", url: "https://www.gov.br/trabalho-e-emprego" },
  { keyword: "STJ", url: "https://www.stj.jus.br" },
  { keyword: "TRF4", url: "https://www.trf4.jus.br" },
  { keyword: "STF", url: "https://www.stf.jus.br" },
  { keyword: "OAB", url: "https://www.oab.org.br" },
  { keyword: "gov.br", url: "https://www.gov.br" },
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;
  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    if (post) {
      import("@/data/blogPostContents").then(mod => {
        setContent(mod.default[post.id] || null);
      });
    }
  }, [post]);

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
            <article className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground" style={{ textAlign: 'justify' }}>
              {content ? content.split('\n').map((paragraph, index) => {
                const trimmed = paragraph.trim();
                if (!trimmed) return null;

                const renderInline = (text: string) => {
                  // First handle bold
                  const boldParts = text.split('**');
                  const elements: React.ReactNode[] = [];

                  boldParts.forEach((part, i) => {
                    if (i % 2 === 1) {
                      elements.push(<strong key={`b-${i}`} className="text-foreground">{part}</strong>);
                    } else {
                      // Apply auto-linking to non-bold text
                      elements.push(...renderWithLinks(part, `p-${i}`));
                    }
                  });

                  return elements;
                };

                const renderWithLinks = (text: string, keyPrefix: string): React.ReactNode[] => {
                  if (!text) return [text];

                  // Combine short aliases (check them first, they're more specific terms)
                  const allKeywords = [
                    ...shortAliases.filter(a => a.slug !== post.id),
                  ];

                  let result: React.ReactNode[] = [text];

                  for (const { keyword, slug } of allKeywords) {
                    const newResult: React.ReactNode[] = [];
                    let linkedThisKeyword = false;
                    for (const segment of result) {
                      if (typeof segment !== 'string' || linkedThisKeyword) {
                        newResult.push(segment);
                        continue;
                      }
                      const idx = segment.toLowerCase().indexOf(keyword.toLowerCase());
                      if (idx === -1) {
                        newResult.push(segment);
                        continue;
                      }
                      // Only link first occurrence per keyword
                      linkedThisKeyword = true;
                      const before = segment.slice(0, idx);
                      const match = segment.slice(idx, idx + keyword.length);
                      const after = segment.slice(idx + keyword.length);
                      if (before) newResult.push(before);
                      newResult.push(
                        <Link
                          key={`${keyPrefix}-link-${slug}`}
                          to={`/blog/${slug}`}
                          className="text-primary hover:underline font-medium"
                        >
                          {match}
                        </Link>
                      );
                      if (after) newResult.push(after);
                    }
                    result = newResult;
                  }

                  return result;
                };
                
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
              }) : (
                <div className="flex justify-center py-8">
                  <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                </div>
              )}
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

            {/* Related Posts */}
            <RelatedPosts currentPostId={post.id} />

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

      
      <Footer />
    </div>
  );
};

export default BlogPost;
