import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";
import { getRelatedPosts } from "@/data/blogPosts";

interface RelatedPostsProps {
  currentPostId: string;
}

const RelatedPosts = ({ currentPostId }: RelatedPostsProps) => {
  const related = getRelatedPosts(currentPostId, 3);

  if (related.length === 0) return null;

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold mb-6 text-foreground">
        Artigos Relacionados
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        {related.map((post) => (
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
              <CardContent className="p-4 flex flex-col flex-grow">
                <h4 className="font-bold text-foreground group-hover:text-primary transition-smooth mb-2 line-clamp-2 text-sm">
                  {post.title}
                </h4>
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-smooth" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
