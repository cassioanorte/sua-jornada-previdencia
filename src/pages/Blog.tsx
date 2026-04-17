import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const monthMap: Record<string, number> = {
  janeiro: 0,
  fevereiro: 1,
  março: 2,
  marco: 2,
  abril: 3,
  maio: 4,
  junho: 5,
  julho: 6,
  agosto: 7,
  setembro: 8,
  outubro: 9,
  novembro: 10,
  dezembro: 11,
};

const parseBlogDate = (date: string) => {
  const match = date.toLowerCase().match(/(\d{1,2})\s+de\s+([\p{L}]+)\s+de\s+(\d{4})/u);

  if (!match) {
    return 0;
  }

  const [, day, monthName, year] = match;
  const month = monthMap[monthName];

  if (month === undefined) {
    return 0;
  }

  return new Date(Number(year), month, Number(day)).getTime();
};

const Blog = () => {
  const sortedPosts = [...blogPosts].sort((a, b) => parseBlogDate(b.date) - parseBlogDate(a.date));

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
            {sortedPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <Card className="card-shadow hover:card-shadow-hover transition-smooth cursor-pointer group h-full flex flex-col overflow-hidden">
                  {post.image && (
                    <div className="aspect-[16/9] overflow-hidden flex-shrink-0">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-smooth">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
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
              </Link>
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
