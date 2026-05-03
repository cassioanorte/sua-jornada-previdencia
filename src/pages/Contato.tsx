import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Shield } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório").max(100, "Nome muito longo"),
  email: z.string().trim().email("E-mail inválido").max(255, "E-mail muito longo"),
  phone: z.string().trim().min(10, "Telefone inválido").max(20, "Telefone inválido"),
  message: z.string().trim().min(10, "Mensagem muito curta").max(1000, "Mensagem muito longa")
});

const Contato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleWhatsApp = () => {
    window.open("https://wa.link/hdn70i", "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
      
      const message = `Olá! Meu nome é ${formData.name}.%0A%0A${formData.message}%0A%0AE-mail: ${formData.email}%0ATelefone: ${formData.phone}`;
      window.open("https://wa.link/hdn70i", "_blank");
      
      setFormData({ name: "", email: "", phone: "", message: "" });
      toast.success("Redirecionando para o WhatsApp...");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Estamos prontos para ajudar você a conquistar seus direitos
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground">
                Fale Conosco
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Telefone / WhatsApp</h3>
                    <button 
                      onClick={handleWhatsApp}
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      (54) 99987-0786
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                    <a 
                      href="mailto:cassio@spiereanorte.adv.br"
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      cassio@spiereanorte.adv.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Atendimento</h3>
                    <p className="text-muted-foreground">
                      100% online em todo o Brasil
                    </p>
                    <p className="text-muted-foreground mt-2 font-semibold text-foreground text-sm">Unidades Físicas:</p>
                    <p className="text-muted-foreground text-sm">
                      <strong>Gramado - RS:</strong> R. Berna, 715 - Vila Suíça, CEP 95670-554
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      <strong>Nova Petrópolis - RS:</strong> Av. 15 de Novembro, 1924, Sala 304, Centro, CEP 95150-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Horário</h3>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 9h às 18h<br />
                      Sábado: 9h às 13h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Advogados Responsáveis</h3>
                    <p className="text-muted-foreground">
                      Cassio Fraga Anorte – OAB/RS 73.679<br />
                      Rodrigo Fernando Shoeler Spier – OAB/RS 70.421
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-accent/5 rounded-xl border border-accent/20">
                <p className="text-foreground/80 text-sm">
                  <strong className="text-foreground">Atendimento rápido, honesto e 100% online.</strong><br />
                  A primeira consulta é sem compromisso. 
                  Fale com um especialista agora mesmo!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-card p-8 rounded-xl card-shadow">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Envie sua Mensagem
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Nome Completo</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Seu nome"
                      required
                      maxLength={100}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu@email.com"
                      required
                      maxLength={255}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-foreground">Telefone / WhatsApp</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(11) 99999-9999"
                      required
                      maxLength={20}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">Mensagem</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Conte-nos sobre seu caso..."
                      required
                      maxLength={1000}
                      rows={6}
                      className="mt-2 resize-none"
                    />
                  </div>

                  <Button type="submit" variant="cta" size="lg" className="w-full">
                    <Phone className="w-5 h-5" />
                    Enviar pelo WhatsApp
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
