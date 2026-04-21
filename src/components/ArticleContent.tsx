import React, { useMemo } from "react";
import { Link } from "react-router-dom";

// Internal aliases — keyword → blog post slug
const shortAliases: { keyword: string; slug: string }[] = [
  // Benefícios por incapacidade
  { keyword: "auxílio-doença", slug: "auxilio-doenca-requisitos" },
  { keyword: "auxílio doença", slug: "auxilio-doenca-requisitos" },
  { keyword: "benefícios por incapacidade", slug: "beneficios-por-incapacidade-no-inss" },
  { keyword: "benefício por incapacidade", slug: "beneficios-por-incapacidade-no-inss" },
  { keyword: "aposentadoria por invalidez", slug: "beneficios-por-incapacidade-no-inss" },
  { keyword: "perícia médica", slug: "pericia-medica-inss-como-preparar" },
  { keyword: "perícia do INSS", slug: "pericia-medica-inss-como-preparar" },
  { keyword: "Atestmed", slug: "atestmed-auxilio-doenca" },
  { keyword: "reabilitação profissional", slug: "plano-de-reabilitacao-profissional" },
  { keyword: "dossiê médico", slug: "dossie-medico-checklist-inss" },
  { keyword: "revisão de benefício", slug: "revisao-beneficio-incapacidade" },

  // Auxílio-acidente
  { keyword: "auxílio-acidente", slug: "auxilio-acidente-inss-quem-tem-direito" },
  { keyword: "auxílio acidente", slug: "auxilio-acidente-inss-quem-tem-direito" },
  { keyword: "DPVAT", slug: "auxilio-acidente-e-dpvat" },
  { keyword: "Tema 416", slug: "stj-beneficio-lesao-minima" },
  { keyword: "lesão mínima", slug: "stj-beneficio-lesao-minima" },

  // Aposentadoria especial e documentos
  { keyword: "Perfil Profissiográfico Previdenciário", slug: "ppp-o-que-e-como-obter" },
  { keyword: "aposentadoria especial", slug: "aposentadoria-especial-guia-completo" },
  { keyword: "tempo especial", slug: "aposentadoria-especial-guia-completo" },
  { keyword: "agentes nocivos", slug: "aposentadoria-especial-guia-completo" },
  { keyword: "PPP", slug: "ppp-o-que-e-como-obter" },
  { keyword: "LTCAT", slug: "ltcat-laudos-tecnicos-aposentadoria-especial" },
  { keyword: "laudo técnico", slug: "ltcat-laudos-tecnicos-aposentadoria-especial" },
  { keyword: "Tema 1291", slug: "reconhecimento-atividade-especial-dentista" },

  // Aposentadorias por categoria
  { keyword: "aposentadoria do professor", slug: "aposentadoria-do-professor" },
  { keyword: "aposentadoria do médico", slug: "aposentadoria-medico" },
  { keyword: "aposentadoria do dentista", slug: "aposentadoria-dentista-contribuinte-individual" },
  { keyword: "aposentadoria do pedreiro", slug: "aposentadoria-do-pedreiro" },
  { keyword: "aposentadoria do caminhoneiro", slug: "aposentadoria-caminhoneiro" },
  { keyword: "aposentadoria do vigilante", slug: "aposentadoria-vigilante" },
  { keyword: "aposentadoria do frentista", slug: "aposentadoria-frentista" },
  { keyword: "operador de máquinas pesadas", slug: "aposentadoria-operador-maquinas-pesadas" },
  { keyword: "aposentadoria por idade", slug: "aposentadoria-por-idade" },
  { keyword: "aposentadoria rural", slug: "aposentadoria-rural" },
  { keyword: "aposentadoria PCD", slug: "aposentadoria-pcd" },
  { keyword: "pessoa com deficiência", slug: "aposentadoria-pcd-direitos" },

  // Outros benefícios
  { keyword: "BPC/LOAS", slug: "bpc-loas-como-solicitar" },
  { keyword: "BPC LOAS", slug: "bpc-loas-como-solicitar" },
  { keyword: "BPC", slug: "bpc-loas-como-solicitar" },
  { keyword: "LOAS", slug: "bpc-loas-como-solicitar" },
  { keyword: "pensão por morte", slug: "pensao-por-morte" },
  { keyword: "auxílio-maternidade", slug: "auxilio-maternidade" },
  { keyword: "auxílio maternidade", slug: "auxilio-maternidade" },
  { keyword: "salário-maternidade", slug: "auxilio-maternidade" },
  { keyword: "licença-paternidade", slug: "licenca-paternidade-lei-15371-2026" },
  { keyword: "salário-paternidade", slug: "licenca-paternidade-lei-15371-2026" },

  // Planejamento e legislação
  { keyword: "CNIS", slug: "conferir-cnis-antes-de-solicitar-aposentadoria" },
  { keyword: "Reforma da Previdência", slug: "reforma-previdencia-mudancas" },
  { keyword: "EC 103", slug: "reforma-previdencia-mudancas" },
];

// External authoritative links (open in new tab)
const externalLinks: { keyword: string; url: string }[] = [
  { keyword: "portal Meu INSS", url: "https://meu.inss.gov.br" },
  { keyword: "Diário Oficial da União", url: "https://www.in.gov.br" },
  { keyword: "Superior Tribunal de Justiça", url: "https://www.stj.jus.br" },
  { keyword: "Tribunal Regional Federal da 4ª Região", url: "https://www.trf4.jus.br" },
  { keyword: "Supremo Tribunal Federal", url: "https://www.stf.jus.br" },
  { keyword: "Ministério do Trabalho", url: "https://www.gov.br/trabalho-e-emprego" },
  { keyword: "Meu INSS", url: "https://meu.inss.gov.br" },
  { keyword: "STJ", url: "https://www.stj.jus.br" },
  { keyword: "TRF4", url: "https://www.trf4.jus.br" },
  { keyword: "STF", url: "https://www.stf.jus.br" },
  { keyword: "OAB", url: "https://www.oab.org.br" },
  { keyword: "gov.br", url: "https://www.gov.br" },
];

interface ArticleContentProps {
  content: string | null;
  currentPostId: string;
}

const ArticleContent = ({ content, currentPostId }: ArticleContentProps) => {
  // Build the active keyword list once, sorted longest-first for greedy matching
  const keywords = useMemo(() => {
    const internal = shortAliases
      .filter(a => a.slug !== currentPostId)
      .map(a => ({ keyword: a.keyword, type: "internal" as const, target: a.slug }));
    const external = externalLinks.map(e => ({
      keyword: e.keyword,
      type: "external" as const,
      target: e.url,
    }));
    return [...internal, ...external].sort((a, b) => b.keyword.length - a.keyword.length);
  }, [currentPostId]);

  if (!content) {
    return (
      <article className="prose prose-lg max-w-none">
        <div className="flex justify-center py-8">
          <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      </article>
    );
  }

  // Track keywords already linked across the entire article (1 link per term per post)
  const linkedKeywords = new Set<string>();

  const renderWithLinks = (text: string, keyPrefix: string): React.ReactNode[] => {
    if (!text) return [text];
    let result: React.ReactNode[] = [text];

    for (const { keyword, type, target } of keywords) {
      const keyLower = keyword.toLowerCase();
      if (linkedKeywords.has(keyLower)) continue;

      const newResult: React.ReactNode[] = [];
      let linkedHere = false;

      for (const segment of result) {
        if (typeof segment !== "string" || linkedHere) {
          newResult.push(segment);
          continue;
        }
        const idx = segment.toLowerCase().indexOf(keyLower);
        if (idx === -1) {
          newResult.push(segment);
          continue;
        }
        // Word-boundary check to avoid linking inside larger words (e.g. "STF" inside "GESTFLOW")
        const charBefore = idx > 0 ? segment[idx - 1] : " ";
        const charAfter = segment[idx + keyword.length] ?? " ";
        const isWordChar = (c: string) => /[\p{L}\p{N}]/u.test(c);
        if (isWordChar(charBefore) || isWordChar(charAfter)) {
          newResult.push(segment);
          continue;
        }

        linkedHere = true;
        linkedKeywords.add(keyLower);
        const before = segment.slice(0, idx);
        const match = segment.slice(idx, idx + keyword.length);
        const after = segment.slice(idx + keyword.length);
        if (before) newResult.push(before);

        if (type === "internal") {
          newResult.push(
            <Link
              key={`${keyPrefix}-int-${target}`}
              to={`/blog/${target}`}
              className="text-primary hover:underline font-medium"
            >
              {match}
            </Link>
          );
        } else {
          newResult.push(
            <a
              key={`${keyPrefix}-ext-${target}`}
              href={target}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              {match}
            </a>
          );
        }

        if (after) newResult.push(after);
      }
      result = newResult;
    }
    return result;
  };

  const renderInline = (text: string, keyPrefix: string): React.ReactNode[] => {
    const boldParts = text.split("**");
    const elements: React.ReactNode[] = [];
    boldParts.forEach((part, i) => {
      if (i % 2 === 1) {
        elements.push(
          <strong key={`${keyPrefix}-b-${i}`} className="text-foreground">
            {renderWithLinks(part, `${keyPrefix}-b-${i}`)}
          </strong>
        );
      } else {
        elements.push(...renderWithLinks(part, `${keyPrefix}-t-${i}`));
      }
    });
    return elements;
  };

  return (
    <article
      className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground"
      style={{ textAlign: "justify" }}
    >
      {content.split("\n").map((paragraph, index) => {
        const trimmed = paragraph.trim();
        if (!trimmed) return null;

        if (trimmed.startsWith("## ")) {
          return (
            <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-foreground">
              {trimmed.replace("## ", "")}
            </h2>
          );
        }
        if (trimmed.startsWith("### ")) {
          return (
            <h3 key={index} className="text-xl font-bold mt-6 mb-3 text-foreground">
              {trimmed.replace("### ", "")}
            </h3>
          );
        }
        if (trimmed.startsWith("#### ")) {
          return (
            <h4 key={index} className="text-lg font-bold mt-4 mb-2 text-foreground">
              {renderInline(trimmed.replace("#### ", ""), `h4-${index}`)}
            </h4>
          );
        }
        if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
          return (
            <li key={index} className="ml-6 text-muted-foreground list-disc">
              {renderInline(trimmed.replace(/^[-*] /, ""), `li-${index}`)}
            </li>
          );
        }
        if (trimmed.match(/^\d+\. /)) {
          return (
            <li key={index} className="ml-6 text-muted-foreground list-decimal">
              {renderInline(trimmed.replace(/^\d+\. /, ""), `ol-${index}`)}
            </li>
          );
        }
        if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
          return (
            <p key={index} className="font-bold text-foreground my-2">
              {trimmed.replace(/\*\*/g, "")}
            </p>
          );
        }
        if (trimmed.startsWith("|")) return null;

        return (
          <p key={index} className="text-muted-foreground my-4 leading-relaxed">
            {renderInline(trimmed, `p-${index}`)}
          </p>
        );
      })}
    </article>
  );
};

export default ArticleContent;
