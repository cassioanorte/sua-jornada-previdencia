// Perguntas frequentes de Direito Previdenciário.
// Conteúdo informativo/educativo. Fonte de verdade da seção FAQ (visível)
// e do schema FAQPage (JSON-LD). Escrito em conformidade com o Provimento
// 205/2021 da OAB: tom sóbrio, sem promessa de resultado, sem valores,
// usando linguagem condicional ("pode ter direito", "depende da análise").

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Preciso de advogado para dar entrada em um benefício do INSS?",
    answer:
      "Não é obrigatório para o pedido administrativo, mas o acompanhamento de um advogado previdenciário ajuda a organizar a documentação, evitar erros comuns e escolher o melhor caminho para o seu caso. Cada situação é avaliada individualmente antes de qualquer orientação.",
  },
  {
    question: "O que fazer quando o INSS nega o benefício?",
    answer:
      "A negativa não encerra o assunto. Conforme o caso, é possível apresentar recurso administrativo dentro do prazo ou ingressar com ação judicial. O primeiro passo é analisar a carta de indeferimento para entender o motivo da negativa e avaliar as alternativas cabíveis.",
  },
  {
    question: "Quanto tempo demora um processo previdenciário?",
    answer:
      "O prazo varia conforme a via escolhida e a complexidade do caso. Pedidos administrativos junto ao INSS costumam ter tramitação mais curta que ações judiciais. Não é possível garantir um prazo exato, pois depende de fatores como a análise do órgão e do Judiciário.",
  },
  {
    question: "Vale a pena fazer revisão de um benefício já concedido?",
    answer:
      "A revisão pode ser indicada quando há indícios de que o valor foi calculado de forma incorreta, mas isso só se confirma após a análise do processo e do histórico de contribuições. Cada benefício é examinado individualmente para verificar se há fundamento para revisão, sempre respeitando os prazos legais.",
  },
  {
    question: "O que é o auxílio por incapacidade (auxílio-doença) e quem pode ter direito?",
    answer:
      "É o benefício destinado a quem fica temporariamente incapaz de trabalhar por motivo de doença ou acidente. Em geral, exige qualidade de segurado, cumprimento da carência quando aplicável e comprovação da incapacidade por perícia. O direito depende da análise da situação de cada pessoa.",
  },
  {
    question: "Como funciona o BPC/LOAS?",
    answer:
      "O Benefício de Prestação Continuada (BPC/LOAS) é um amparo assistencial voltado a idosos a partir de 65 anos ou pessoas com deficiência que estejam em situação de vulnerabilidade social. Ele não exige contribuições ao INSS, mas possui critérios próprios de renda familiar e demais requisitos, avaliados caso a caso.",
  },
  {
    question: "Quais documentos são necessários para pedir aposentadoria?",
    answer:
      "Costumam ser solicitados documento de identidade, CPF, comprovante de residência e, principalmente, o CNIS (extrato de contribuições) e documentos que comprovem os vínculos de trabalho. Dependendo do tipo de aposentadoria, outros comprovantes podem ser necessários, o que é definido após a análise do histórico.",
  },
  {
    question: "Vocês atendem online e clientes de outras cidades?",
    answer:
      "Sim. O atendimento é feito 100% online para todo o Brasil, além das unidades físicas em Gramado e Nova Petrópolis (RS). Todo o acompanhamento pode ser realizado a distância, com envio de documentos e reuniões por meios digitais.",
  },
  {
    question: "Como funcionam a aposentadoria por idade, por tempo de contribuição e a especial?",
    answer:
      "São modalidades distintas. A aposentadoria por idade considera idade mínima somada a um tempo de contribuição; a por tempo de contribuição observa as regras de transição posteriores à reforma de 2019; e a especial se refere a quem trabalhou exposto a agentes nocivos à saúde. A regra aplicável a cada pessoa depende da análise do seu histórico contributivo.",
  },
  {
    question: "O escritório atende em Gramado e Nova Petrópolis?",
    answer:
      "Sim. Há unidades físicas em Gramado (R. Berna, 715 - Vila Suíça) e em Nova Petrópolis (Av. 15 de Novembro, 1924, Sala 304, Centro), ambas no Rio Grande do Sul. O atendimento presencial nessas cidades é combinado com a possibilidade de acompanhamento online.",
  },
  {
    question: "Como funciona a primeira avaliação do caso?",
    answer:
      "A primeira conversa serve para entender a sua situação e reunir as informações necessárias, como o histórico de contribuições. A partir dessa análise, é possível esclarecer as possibilidades e os caminhos aplicáveis ao seu caso, de forma individual e sem compromisso.",
  },
];
