import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.link/hdn70i", "_blank");
  };

  return (
    <Button
      onClick={handleWhatsApp}
      size="lg"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-[#25D366] hover:bg-[#20BA5A] text-white border-0 animate-scale-in"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};

export default FloatingWhatsApp;
