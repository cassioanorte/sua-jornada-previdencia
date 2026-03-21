import { lazy, Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

import Index from "./pages/Index";

// Lazy load other pages
const pageImports = {
  QuemSomos: () => import("./pages/QuemSomos"),
  AreasDeAtuacao: () => import("./pages/AreasDeAtuacao"),
  AuxilioDoenca: () => import("./pages/AuxilioDoenca"),
  AuxilioMaternidade: () => import("./pages/AuxilioMaternidade"),
  QuizAuxilioDoenca: () => import("./pages/QuizAuxilioDoenca"),
  QuizAuxilioMaternidade: () => import("./pages/QuizAuxilioMaternidade"),
  QuizAuxilioAcidente: () => import("./pages/QuizAuxilioAcidente"),
  AuxilioAcidente: () => import("./pages/AuxilioAcidente"),
  AposentadoriaIdade: () => import("./pages/AposentadoriaIdade"),
  AposentadoriaTempo: () => import("./pages/AposentadoriaTempo"),
  AposentadoriaEspecial: () => import("./pages/AposentadoriaEspecial"),
  AposentadoriaRural: () => import("./pages/AposentadoriaRural"),
  BpcLoas: () => import("./pages/BpcLoas"),
  PensaoMorte: () => import("./pages/PensaoMorte"),
  Blog: () => import("./pages/Blog"),
  BlogPost: () => import("./pages/BlogPost"),
  Contato: () => import("./pages/Contato"),
  NotFound: () => import("./pages/NotFound"),
  CityLandingPage: () => import("./pages/CityLandingPage"),
};

const QuemSomos = lazy(pageImports.QuemSomos);
const AreasDeAtuacao = lazy(pageImports.AreasDeAtuacao);
const AuxilioDoenca = lazy(pageImports.AuxilioDoenca);
const AuxilioMaternidade = lazy(pageImports.AuxilioMaternidade);
const QuizAuxilioDoenca = lazy(pageImports.QuizAuxilioDoenca);
const QuizAuxilioMaternidade = lazy(pageImports.QuizAuxilioMaternidade);
const QuizAuxilioAcidente = lazy(pageImports.QuizAuxilioAcidente);
const AuxilioAcidente = lazy(pageImports.AuxilioAcidente);
const AposentadoriaIdade = lazy(pageImports.AposentadoriaIdade);
const AposentadoriaTempo = lazy(pageImports.AposentadoriaTempo);
const AposentadoriaEspecial = lazy(pageImports.AposentadoriaEspecial);
const AposentadoriaRural = lazy(pageImports.AposentadoriaRural);
const BpcLoas = lazy(pageImports.BpcLoas);
const PensaoMorte = lazy(pageImports.PensaoMorte);
const Blog = lazy(pageImports.Blog);
const BlogPost = lazy(pageImports.BlogPost);
const Contato = lazy(pageImports.Contato);
const NotFound = lazy(pageImports.NotFound);

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 border-3 border-primary border-t-transparent rounded-full animate-spin" />
      <span className="text-sm text-muted-foreground">Carregando...</span>
    </div>
  </div>
);

// Prefetch all pages after initial load
const usePrefetchPages = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      Object.values(pageImports).forEach(fn => fn());
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
};

const App = () => {
  usePrefetchPages();
  return (
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
};

export default App;
