// FAQ por página de benefício e da home. Conteúdo informativo, de caráter geral,
// sem promessa de resultado, sem valores e sem prazo de resultado (Provimento 205/2021 OAB).
import type { FaqItem } from "./faq";

const prazoEAtendimento: FaqItem = {
  question: "Qual o prazo de análise do INSS e como o escritório atende?",
  answer:
    "O prazo de análise do INSS varia conforme o tipo de benefício, a agência e a necessidade de perícia ou de documentos complementares, e não é possível prevê-lo com precisão. O andamento pode ser acompanhado pelo Meu INSS ou pelo telefone 135. No escritório, a primeira conversa é pelo WhatsApp (retornamos em até 24 horas úteis) e o atendimento é presencial em Gramado e Nova Petrópolis (RS) ou online, em todo o Brasil. Cada caso é analisado individualmente, sem promessa de resultado.",
};

export const homeFaq: FaqItem[] = [
  {
    question: "Quais benefícios do INSS o escritório atende?",
    answer:
      "A atuação é exclusiva em Direito Previdenciário: aposentadorias (por idade, por tempo de contribuição, especial e rural), auxílio por incapacidade (auxílio-doença), auxílio-acidente, salário-maternidade, BPC/LOAS, pensão por morte, revisões e recursos contra decisões do INSS.",
  },
  {
    question: "Preciso de advogado para pedir um benefício ao INSS?",
    answer:
      "Não é obrigatório para o pedido administrativo, que pode ser feito pelo Meu INSS ou pelo telefone 135. O advogado previdenciário ajuda a analisar o histórico de contribuições (CNIS), organizar a documentação e, quando necessário, atuar em recurso administrativo ou ação judicial. Cada situação é avaliada individualmente.",
  },
  {
    question: "Quais documentos costumam ser necessários?",
    answer:
      "Em geral: documento de identificação com foto, CPF, comprovante de residência, CNIS, carteira de trabalho e comprovantes de contribuição. Conforme o benefício, podem ser exigidos também laudos médicos, certidões, formulários de atividade especial ou documentos de atividade rural. A lista exata depende do caso.",
  },
  {
    question: "O que fazer se o INSS negar o pedido?",
    answer:
      "O primeiro passo é ler a carta de indeferimento para entender o motivo. Conforme o caso, é possível apresentar recurso administrativo dentro do prazo (em regra, 30 dias da ciência da decisão) ou ingressar com ação judicial. Cada alternativa depende da análise do caso concreto.",
  },
  {
    question: "Como funciona o atendimento do escritório?",
    answer:
      "O atendimento é presencial em Gramado e Nova Petrópolis (RS) e online, em todo o Brasil. A primeira conversa é pelo WhatsApp, para entender o seu caso, e retornamos em até 24 horas úteis. Cada caso é analisado individualmente, sem promessa de resultado.",
  },
];

export const benefitFaqs: Record<string, FaqItem[]> = {
  "aposentadoria-idade": [
    {
      question: "Quais são os requisitos gerais da aposentadoria por idade?",
      answer:
        "Em regra, exige idade mínima (65 anos para homens e 62 para mulheres) e tempo mínimo de contribuição, chamado de carência. O prazo de carência e as regras de transição podem variar conforme a data de filiação ao INSS, por isso o histórico de cada pessoa precisa ser analisado individualmente.",
    },
    {
      question: "Quem pode pedir a aposentadoria por idade?",
      answer:
        "O segurado que atinge a idade mínima e cumpre a carência exigida. Trabalhadores rurais têm regras próprias, com idade reduzida, tratadas na página de aposentadoria rural. Quem ainda não cumpre os requisitos pode avaliar, com um planejamento, qual o melhor momento para pedir.",
    },
    {
      question: "Quais documentos são necessários?",
      answer:
        "Geralmente: documento de identificação com foto, CPF, comprovante de residência, CNIS (disponível no Meu INSS), carteira de trabalho e comprovantes de contribuição, como carnês e guias. Documentos adicionais podem ser pedidos conforme o caso.",
    },
    {
      question: "E se faltarem contribuições ou houver erros no CNIS?",
      answer:
        "O CNIS pode ter lacunas ou informações incorretas. Quando isso ocorre, pode ser possível pedir a inclusão ou a correção de vínculos e contribuições com documentos como carteira de trabalho, contracheques e recibos, pela via administrativa ou, se necessário, judicial. A viabilidade depende da análise dos documentos.",
    },
    prazoEAtendimento,
  ],
  "aposentadoria-tempo": [
    {
      question: "Ainda existe aposentadoria por tempo de contribuição?",
      answer:
        "Com a Reforma da Previdência (Emenda Constitucional 103/2019, em vigor desde 13/11/2019), a aposentadoria apenas por tempo de contribuição deixou de existir como regra permanente para quem se filiou depois da reforma. Quem já era segurado até essa data pode ter direito adquirido ou se enquadrar em regras de transição. Cada caso exige análise individual.",
    },
    {
      question: "O que são as regras de transição?",
      answer:
        "São regras criadas para quem já contribuía antes da reforma. Combinam tempo de contribuição com idade, pontuação ou um período adicional de contribuição (pedágio). Qual delas se aplica, e se alguma é possível, depende do histórico de cada segurado.",
    },
    {
      question: "Como saber quanto tempo de contribuição eu tenho?",
      answer:
        "O ponto de partida é o CNIS, disponível no Meu INSS, somado à carteira de trabalho e a carnês ou guias de contribuição. Com esses documentos é possível identificar o tempo registrado e períodos que talvez não tenham sido computados, o que ajuda a avaliar as alternativas disponíveis.",
    },
    {
      question: "Quais documentos são necessários para o pedido?",
      answer:
        "Em geral: documento de identificação com foto, CPF, comprovante de residência, CNIS, carteira de trabalho e comprovantes de contribuição. Para períodos especiais ou rurais, podem ser necessários documentos específicos, como PPP ou notas de produtor.",
    },
    prazoEAtendimento,
  ],
  "aposentadoria-especial": [
    {
      question: "O que é a aposentadoria especial?",
      answer:
        "É o benefício destinado a quem trabalhou exposto, de forma habitual e permanente, a agentes nocivos à saúde, como ruído, calor, agentes químicos ou biológicos. O tempo exigido pode ser reduzido (15, 20 ou 25 anos), conforme o grau de exposição. A análise considera o caso concreto.",
    },
    {
      question: "Como se comprova o trabalho em condições especiais?",
      answer:
        "Normalmente por documentos emitidos pela empresa e baseados em laudos técnicos, como o PPP (Perfil Profissiográfico Previdenciário) e o LTCAT (Laudo Técnico das Condições Ambientais do Trabalho). Em alguns casos, outros laudos e provas podem complementar essa comprovação.",
    },
    {
      question: "A aposentadoria especial mudou com a Reforma da Previdência?",
      answer:
        "Sim. Depois da Emenda Constitucional 103/2019, a aposentadoria especial passou a exigir, em regra, idade mínima combinada com o tempo de exposição, com regras de transição para quem já era segurado. Qual regra se aplica depende da data de início das atividades e do histórico de cada pessoa.",
    },
    {
      question: "Qualquer profissão pode ter tempo especial reconhecido?",
      answer:
        "O que importa é a exposição comprovada a agentes nocivos, e não apenas o nome da profissão. Em períodos mais antigos, o enquadramento podia ocorrer por categoria profissional; nos mais recentes, exige-se a comprovação da exposição. Por isso cada vínculo de trabalho é analisado separadamente.",
    },
    prazoEAtendimento,
  ],
  "aposentadoria-rural": [
    {
      question: "Quem pode pedir a aposentadoria rural?",
      answer:
        "Trabalhadores que exerceram atividade rural, como segurados especiais (agricultura em regime de economia familiar) e empregados rurais, entre outras situações. A aposentadoria por idade rural tem idade mínima reduzida em relação à urbana e exige a comprovação do exercício da atividade rural pelo período previsto em lei.",
    },
    {
      question: "Quais documentos ajudam a comprovar a atividade rural?",
      answer:
        "Notas fiscais de produtor, bloco de produtor rural, declaração de sindicato rural, contratos de arrendamento ou parceria, documentos da propriedade, certidões que indiquem a profissão e carteira de trabalho com vínculo rural. Em geral, exige-se um início de prova material, que pode ser complementado por testemunhas.",
    },
    {
      question: "Posso usar documentos em nome de familiares?",
      answer:
        "Em muitos casos, documentos em nome de pais, cônjuge ou outros familiares que vivem na mesma atividade podem servir como início de prova material. A aceitação depende do conjunto das provas e da análise do caso.",
    },
    {
      question: "E quem trabalhou parte no campo e parte na cidade?",
      answer:
        "Existe a aposentadoria por idade híbrida, que permite somar períodos de trabalho rural e urbano. As exigências dependem do histórico de cada pessoa e precisam ser conferidas no caso concreto.",
    },
    prazoEAtendimento,
  ],
  "auxilio-doenca": [
    {
      question: "Quem pode receber o auxílio-doença?",
      answer:
        "O segurado do INSS que fica temporariamente incapaz para o trabalho por doença ou acidente. Em regra, exige qualidade de segurado, carência de 12 contribuições (dispensada em algumas situações, como acidentes e certas doenças) e incapacidade comprovada em perícia médica. Hoje o benefício é também chamado de auxílio por incapacidade temporária.",
    },
    {
      question: "Como funciona a perícia médica do INSS?",
      answer:
        "O médico perito avalia se existe incapacidade para a atividade habitual. Costuma-se levar documento de identificação com foto, laudos, exames, atestados e receitas atualizados, que descrevam a doença, o tratamento e as limitações para o trabalho.",
    },
    {
      question: "Quais documentos são necessários para o pedido?",
      answer:
        "Documento de identificação com foto, CPF, comprovantes de contribuição ou vínculo de trabalho e a documentação médica (atestados com CID, laudos, exames e receitas). Para empregados, os primeiros 15 dias de afastamento costumam ser pagos pelo empregador.",
    },
    {
      question: "O que fazer se o benefício for negado ou cessado?",
      answer:
        "É possível pedir reconsideração ou nova perícia, apresentar recurso administrativo dentro do prazo ou ingressar com ação judicial, na qual pode haver perícia médica judicial. A escolha depende do motivo da negativa e dos documentos do caso.",
    },
    prazoEAtendimento,
  ],
  "auxilio-acidente": [
    {
      question: "O que é o auxílio-acidente?",
      answer:
        "É um benefício de natureza indenizatória, pago ao segurado que, após a consolidação das lesões de um acidente de qualquer natureza, fica com sequela permanente que reduz sua capacidade para o trabalho que exercia. Não exige carência mínima, mas depende da comprovação da sequela e do nexo com o acidente.",
    },
    {
      question: "Quem pode pedir o auxílio-acidente?",
      answer:
        "A lei restringe o benefício a algumas categorias de segurados, como empregados, trabalhadores avulsos e segurados especiais, e exige qualidade de segurado na data do acidente. A elegibilidade deve ser conferida no caso concreto.",
    },
    {
      question: "O auxílio-acidente pode ser recebido junto com o salário?",
      answer:
        "Sim, por ter natureza indenizatória, pode ser recebido enquanto a pessoa continua trabalhando. Em regra, é pago até a aposentadoria do segurado.",
    },
    {
      question: "Quais documentos ajudam a comprovar o direito?",
      answer:
        "Documento de identificação com foto, CNIS ou carteira de trabalho, Comunicação de Acidente de Trabalho (CAT), quando houver, laudos e exames que descrevam a sequela, prontuários e relatórios médicos. Em acidentes fora do trabalho, boletim de ocorrência e registros do atendimento também podem ajudar.",
    },
    prazoEAtendimento,
  ],
  "auxilio-maternidade": [
    {
      question: "Quem tem direito ao salário-maternidade?",
      answer:
        "Seguradas do INSS: empregadas, domésticas, trabalhadoras avulsas, contribuintes individuais, facultativas e seguradas especiais (trabalhadoras rurais). O benefício também pode ser concedido em casos de adoção ou guarda judicial para fins de adoção, conforme as regras do INSS.",
    },
    {
      question: "Existe carência para o salário-maternidade?",
      answer:
        "Para empregadas, domésticas e avulsas, em regra não há carência. Para contribuintes individuais, facultativas e seguradas especiais, a regra geral exige 10 contribuições mensais (ou 10 meses de atividade rural, no caso da segurada especial), com redução em situações como parto antecipado.",
    },
    {
      question: "Por quanto tempo o benefício é pago?",
      answer:
        "Em regra, por 120 dias, e o afastamento pode começar até 28 dias antes do parto. Em situações específicas, como adoção, as condições seguem regras próprias.",
    },
    {
      question: "Quais documentos são necessários?",
      answer:
        "Documento de identificação com foto, CPF, certidão de nascimento da criança (ou documentos do parto, adoção ou guarda) e comprovantes da condição de segurada, como carteira de trabalho, guias de contribuição ou documentos de atividade rural. O pedido é feito pelo Meu INSS ou pelo telefone 135.",
    },
    prazoEAtendimento,
  ],
  "bpc-loas": [
    {
      question: "O que é o BPC/LOAS e quem pode pedir?",
      answer:
        "É um benefício assistencial de um salário mínimo mensal para pessoas idosas (65 anos ou mais) e pessoas com deficiência em situação de baixa renda. Não exige contribuição ao INSS e não é uma aposentadoria, pois tem regras próprias.",
    },
    {
      question: "Como é analisado o critério de renda?",
      answer:
        "A regra legal considera a renda por pessoa da família inferior a 1/4 do salário mínimo. A análise envolve a composição do grupo familiar e é feita caso a caso, a partir das informações do Cadastro Único (CadÚnico).",
    },
    {
      question: "Como é avaliada a deficiência?",
      answer:
        "Por avaliação social e perícia médica do INSS, que verificam se há impedimento de longo prazo (mínimo de 2 anos) que, em interação com barreiras, dificulte a participação plena e efetiva na sociedade em igualdade com as demais pessoas.",
    },
    {
      question: "Quais documentos costumam ser necessários?",
      answer:
        "Cadastro Único (CadÚnico) atualizado, documentos de identificação e CPF do requerente e dos integrantes da família, comprovante de residência e, no caso de pessoa com deficiência, laudos, exames e relatórios médicos.",
    },
    {
      question: "O que fazer se o BPC for negado? E qual o prazo de análise?",
      answer:
        "É possível apresentar recurso administrativo dentro do prazo ou buscar a via judicial, conforme o motivo da negativa. O prazo de análise do INSS varia e pode depender de perícia e avaliação social; o andamento pode ser acompanhado pelo Meu INSS ou pelo 135. No escritório, a primeira conversa é pelo WhatsApp (retornamos em até 24 horas úteis), com atendimento presencial em Gramado e Nova Petrópolis (RS) ou online. Cada caso é analisado individualmente, sem promessa de resultado.",
    },
  ],
  "pensao-morte": [
    {
      question: "Quem tem direito à pensão por morte?",
      answer:
        "Os dependentes do segurado falecido, que esteja aposentado ou não, desde que ele tivesse qualidade de segurado na data do óbito. A lei organiza os dependentes em classes: cônjuge ou companheiro(a) e filhos não emancipados menores de 21 anos ou com deficiência; depois os pais; depois os irmãos nas mesmas condições. A existência de dependentes de uma classe anterior pode excluir os da classe seguinte.",
    },
    {
      question: "Por quanto tempo a pensão é paga?",
      answer:
        "Depende do dependente. Para cônjuge ou companheiro(a), a duração leva em conta fatores como a idade na data do óbito, o tempo de casamento ou de união estável e o número de contribuições do segurado. Para filhos, em regra, vai até a maioridade previdenciária, salvo invalidez ou deficiência. Por isso a análise é individual.",
    },
    {
      question: "Existe prazo para pedir a pensão por morte?",
      answer:
        "Sim. Em regra, o pedido feito em até 90 dias do óbito (180 dias para filhos menores de 16 anos) gera efeitos desde a data do falecimento. Depois desse prazo, o pagamento tende a valer a partir da data do requerimento. Vale procurar orientação o quanto antes.",
    },
    {
      question: "Quais documentos são necessários?",
      answer:
        "Certidão de óbito, documentos de identificação do requerente e do falecido, certidão de casamento ou prova de união estável, certidão de nascimento dos filhos e, para pais e irmãos, documentos que comprovem a dependência econômica.",
    },
    {
      question: "Como comprovar a união estável e o que fazer se o pedido for negado?",
      answer:
        "A união estável pode ser demonstrada por documentos como contas no mesmo endereço, filhos em comum, dependência em plano de saúde, declarações e outros registros da vida em comum. Se o pedido for negado, é possível recorrer administrativamente ou buscar a via judicial, conforme o caso. Cada situação é analisada individualmente, sem promessa de resultado.",
    },
  ],
};
