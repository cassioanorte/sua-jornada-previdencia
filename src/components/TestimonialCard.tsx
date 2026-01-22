import { Card, CardContent } from "@/components/ui/card";
import { Star, CheckCircle2, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
  rating?: number;
}

const TestimonialCard = ({ name, location, text, rating = 5 }: TestimonialCardProps) => {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2);
  
  return (
    <Card className="card-shadow hover:card-shadow-hover hover-lift transition-all duration-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 text-primary/5">
        <Quote className="w-24 h-24 transform rotate-12" />
      </div>
      <CardContent className="p-8 relative">
        <div className="flex gap-1 mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-accent text-accent" />
          ))}
        </div>
        <p className="text-foreground mb-6 leading-relaxed text-base">"{text}"</p>
        <div className="flex items-center gap-3 pt-4 border-t border-border/50">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold shadow-sm">
            {initials}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <p className="font-semibold text-foreground">{name}</p>
              <CheckCircle2 className="w-4 h-4 text-accent" />
            </div>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
