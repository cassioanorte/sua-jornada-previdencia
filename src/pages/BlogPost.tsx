import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Tag, MessageCircle } from "lucide-react";
import { getBlogPostBySlug } from "@/data/blogPosts";
import RelatedPosts from "@/components/RelatedPosts";
import ArticleContent from "@/components/ArticleContent";

const SITE_URL = "https://spiereanorte.adv.br";
const BRAND = "Spier & Anorte";

// Converte a data em pt-BR ("29 de maio de 2026", "17 de Março de 2026")
// ou ISO ("2025-07-15") para o formato ISO 8601 (YYYY-MM-DD) exigido pelo schema.
// Se não conseguir interpretar, retorna null (não inventa data).
const MESES_PT: Record<string, string> = {
  janeiro: "01", fevereiro: "02", "março": "03", marco: "03", abril: "04",
  maio: "05", junho: "06", julho: "07", agosto: "08", setembro: "09",
  outubro: "10", novembro: "11", dezembro: "12",
};
const toIsoDate = (raw?: string): string | null => {
  if (!raw) return null;
  if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) return raw;
  const m = raw
    .toLowerCase()
    .match(/(\d{1,2})\s+de\s+([a-zçã]+)\s+de\s+(\d{4})/i);
  if (!m) return null;
  const dia = m[1].padStart(2, "0");
  const mes = MESES_PT[m[2]];
  const ano = m[3];
  if (!mes) return null;
  return `${ano}-${mes}-${dia}`;
};

// Garante uma meta tag <meta name=".."/> ou <meta property=".."/> com o valor dado.
const setMeta = (attr: "name" | "property", key: string, value: string) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
};

// Gera uma descrição a partir do início do conteúdo quando não há excerpt.
const descFromContent = (content: string | null): string => {
  if (!content) return "";
  const firstText = content
    .split("\n")
    .map(l => l.trim())
    .find(l => l && !l.startsWith("#") && !l.startsWith("|") && !l.startsWith("-") && !l.startsWith("*"));
  if (!firstText) return "";
  const clean = firstText.replace(/\*\*/g, "");
  return clean.length > 160 ? clean.slice(0, 157).trimEnd() + "..." : clean;
};

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

  // SEO por post: title/description/OG únicos + JSON-LD BlogPosting.
  // O prerender (puppeteer executa JS) captura esse <head> já preenchido.
  useEffect(() => {
    if (!post) return;

    const url = `${SITE_URL}/blog/${post.id}/`;
    const description = (post.excerpt && post.excerpt.trim()) || descFromContent(content);
    // Título ~50-60 chars: título do artigo + marca. Encurta o título se muito longo.
    const maxTitleLen = 60 - (BRAND.length + 3); // reserva " | Spier & Anorte"
    const shortTitle =
      post.title.length > maxTitleLen
        ? post.title.slice(0, maxTitleLen - 1).trimEnd() + "…"
        : post.title;
    const fullTitle = `${shortTitle} | ${BRAND}`;
    const image = post.image ? `${SITE_URL}${post.image}` : `${SITE_URL}/og-image.jpg`;
    const datePublished = toIsoDate(post.date);

    document.title = fullTitle;
    setMeta("name", "description", description);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "article");
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", image);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);

    // JSON-LD BlogPosting específico do post.
    const ld: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title.length > 110 ? post.title.slice(0, 110) : post.title,
      description,
      inLanguage: "pt-BR",
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      author: { "@type": "Organization", name: "Spier & Anorte Sociedade de Advogados", url: SITE_URL },
      publisher: {
        "@type": "Organization",
        name: "Spier & Anorte Sociedade de Advogados",
        logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.png` },
      },
      articleSection: post.category,
      image,
    };
    if (datePublished) {
      ld.datePublished = datePublished;
      ld.dateModified = datePublished;
    }
    const LD_ID = "ld-blogposting";
    let script = document.getElementById(LD_ID) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = LD_ID;
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(ld);

    return () => {
      // Restaura og:type ao sair do post (evita "article" vazar para outras rotas em SPA).
      setMeta("property", "og:type", "website");
      const s = document.getElementById(LD_ID);
      if (s) s.remove();
    };
  }, [post, content]);

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
            <ArticleContent content={content} currentPostId={post.id} />

            {/* CTA */}
            <div className="mt-16 p-8 bg-primary/5 rounded-2xl border border-primary/10">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Precisa de ajuda com seu benefício?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Nossa equipe de advogados especialistas está pronta para analisar seu caso.
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
