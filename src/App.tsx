import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

// Eagerly load the homepage for fastest initial render
import Index from "./pages/Index";

// Lazy load all other pages for code splitting
const QuemSomos = lazy(() => import("./pages/QuemSomos"));
const AreasDeAtuacao = lazy(() => import("./pages/AreasDeAtuacao"));
const AuxilioDoenca = lazy(() => import("./pages/AuxilioDoenca"));
const AuxilioMaternidade = lazy(() => import("./pages/AuxilioMaternidade"));
const QuizAuxilioDoenca = lazy(() => import("./pages/QuizAuxilioDoenca"));
const QuizAuxilioMaternidade = lazy(() => import("./pages/QuizAuxilioMaternidade"));
const QuizAuxilioAcidente = lazy(() => import("./pages/QuizAuxilioAcidente"));
const AuxilioAcidente = lazy(() => import("./pages/AuxilioAcidente"));
const AposentadoriaIdade = lazy(() => import("./pages/AposentadoriaIdade"));
const AposentadoriaTempo = lazy(() => import("./pages/AposentadoriaTempo"));
const AposentadoriaEspecial = lazy(() => import("./pages/AposentadoriaEspecial"));
const AposentadoriaRural = lazy(() => import("./pages/AposentadoriaRural"));
const BpcLoas = lazy(() => import("./pages/BpcLoas"));
const PensaoMorte = lazy(() => import("./pages/PensaoMorte"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Contato = lazy(() => import("./pages/Contato"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 border-3 border-primary border-t-transparent rounded-full animate-spin" />
      <span className="text-sm text-muted-foreground">Carregando...</span>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <FloatingWhatsApp />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
