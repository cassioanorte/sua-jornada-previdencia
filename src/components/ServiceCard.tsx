import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

const ServiceCard = ({ title, description, icon, href }: ServiceCardProps) => {
  return (
    <Link to={href} className="group">
      <Card className="h-full card-shadow hover:card-shadow-hover hover-lift transition-all duration-300 border-border/50 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 shadow-sm">
              {icon}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300 font-display">
                {title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {description}
              </p>
              <div className="flex items-center text-primary text-sm font-semibold group-hover:gap-2 transition-all duration-300">
                Saiba mais
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ServiceCard;
