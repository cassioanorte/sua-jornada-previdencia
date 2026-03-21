import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Scale } from "lucide-react";
import logo from "@/assets/logo-spier-anorte.jpeg";
import { cityPages } from "@/data/cityPages";

const Footer = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.link/hdn70i", "_blank");
  };

  return (
    <footer className="bg-gradient-to-b from-card to-secondary/20 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <img src={logo} alt="Logo" className="h-12 w-auto mb-6" />
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Especialistas em Direito Previdenciário há mais de 13 anos, 
              ajudando brasileiros a conquistar seus benefícios do INSS com transparência e dedicação.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-foreground font-display">Links Rápidos</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Início
                </Link>
              </li>
              <li>
                <Link to="/quem-somos" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to="/areas-de-atuacao" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Áreas de Atuação
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-foreground font-display">Serviços</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/auxilio-doenca" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Auxílio Doença
                </Link>
              </li>
              <li>
                <Link to="/aposentadoria-idade" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Aposentadoria por Idade
                </Link>
              </li>
              <li>
                <Link to="/aposentadoria-tempo" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Aposentadoria por Tempo
                </Link>
              </li>
              <li>
                <Link to="/aposentadoria-especial" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Aposentadoria Especial
                </Link>
              </li>
              <li>
                <Link to="/bpc-loas" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  BPC/LOAS
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-foreground font-display">Contato e Informações</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Telefone</p>
                  <button onClick={handleWhatsApp} className="text-sm font-medium text-foreground hover:text-primary transition-colors">(54) 99987-0786</button>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">E-mail</p>
                  <a href="mailto:cassio@spiereanorte.adv.br" className="text-sm font-medium text-foreground hover:text-primary transition-colors break-all">cassio@spiereanorte.adv.br</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Atendimento</p>
                  <p className="text-sm font-medium text-foreground">100% online em todo o Brasil</p>
                  <p className="text-xs text-muted-foreground mt-2 mb-1">Unidades Físicas</p>
                  <p className="text-sm font-medium text-foreground">Gramado - RS</p>
                  <p className="text-xs text-muted-foreground">R. Berna, 715 - Vila Suíça, CEP 95670-554</p>
                  <p className="text-sm font-medium text-foreground mt-1">Nova Petrópolis - RS</p>
                  <p className="text-xs text-muted-foreground">Av. 15 de Novembro, 1924, Sala 304, Centro, CEP 95150-000</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Scale className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-2">Sociedade</p>
                  <p className="text-sm font-medium text-foreground">Spier e Anorte Advogados Associados</p>
                  <p className="text-xs text-muted-foreground">OAB/RS nº 4.809</p>
                  <p className="text-xs text-muted-foreground mt-3 mb-1">Advogados</p>
                  <p className="text-sm font-medium text-foreground">Cassio Fraga Anorte</p>
                  <p className="text-xs text-muted-foreground">OAB/RS 73.679</p>
                  <p className="text-sm font-medium text-foreground mt-1">Rodrigo Fernando Shoeler Spier</p>
                  <p className="text-xs text-muted-foreground">OAB/RS 70.421</p>
                  <p className="text-sm font-medium text-foreground mt-1">Paloma Nicole Schabarum</p>
                  <p className="text-xs text-muted-foreground">OAB/RS 125.105</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Cities */}
        <div className="border-t border-border mt-12 pt-8 pb-8">
          <h3 className="text-lg font-bold mb-4 text-foreground font-display text-center">Atendemos na Serra Gaúcha</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {cityPages.map((city) => (
              <Link
                key={city.slug}
                to={`/advogado-previdenciario-${city.slug}`}
                className="px-3 py-1.5 rounded-full bg-secondary border border-border text-xs text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Spier & Anorte Advogados. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="px-3 py-1 bg-primary/5 rounded-full border border-primary/10">🔒 Dados Protegidos</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
