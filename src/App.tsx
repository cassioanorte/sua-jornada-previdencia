import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Index from "./pages/Index";
import QuemSomos from "./pages/QuemSomos";
import AreasDeAtuacao from "./pages/AreasDeAtuacao";
import AuxilioDoenca from "./pages/AuxilioDoenca";
import AuxilioMaternidade from "./pages/AuxilioMaternidade";
import QuizAuxilioDoenca from "./pages/QuizAuxilioDoenca";
import QuizAuxilioMaternidade from "./pages/QuizAuxilioMaternidade";
import QuizAuxilioAcidente from "./pages/QuizAuxilioAcidente";
import AuxilioAcidente from "./pages/AuxilioAcidente";
import AposentadoriaIdade from "./pages/AposentadoriaIdade";
import AposentadoriaTempo from "./pages/AposentadoriaTempo";
import AposentadoriaEspecial from "./pages/AposentadoriaEspecial";
import AposentadoriaRural from "./pages/AposentadoriaRural";
import BpcLoas from "./pages/BpcLoas";
import PensaoMorte from "./pages/PensaoMorte";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/areas-de-atuacao" element={<AreasDeAtuacao />} />
          <Route path="/auxilio-doenca" element={<AuxilioDoenca />} />
          <Route path="/auxilio-maternidade" element={<AuxilioMaternidade />} />
          <Route path="/quiz-auxilio-doenca" element={<QuizAuxilioDoenca />} />
          <Route path="/quiz-auxilio-maternidade" element={<QuizAuxilioMaternidade />} />
          <Route path="/auxilio-acidente" element={<AuxilioAcidente />} />
          <Route path="/quiz-auxilio-acidente" element={<QuizAuxilioAcidente />} />
          <Route path="/aposentadoria-idade" element={<AposentadoriaIdade />} />
          <Route path="/aposentadoria-tempo" element={<AposentadoriaTempo />} />
          <Route path="/aposentadoria-especial" element={<AposentadoriaEspecial />} />
          <Route path="/aposentadoria-rural" element={<AposentadoriaRural />} />
          <Route path="/bpc-loas" element={<BpcLoas />} />
          <Route path="/pensao-morte" element={<PensaoMorte />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contato" element={<Contato />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
