// Conteúdo aprofundado das páginas de cidade prioritárias (out/2026).
// Cada cidade tem texto próprio: contexto local, seções por benefício, FAQ
// (com schema FAQPage), cidades vizinhas e posts do blog relacionados.
// Regras: Provimento 205/2021 da OAB (informativo, sem promessa de resultado,
// sem preço), nada de endereço/telefone/número de casos que não esteja no site.

export interface CityServiceBlock {
  title: string;
  text: string;
  href: string;
}

export interface CityFaq {
  question: string;
  answer: string;
}

export interface CityBlogLink {
  slug: string;
  label: string;
}

export interface CityExtra {
  /** Como funciona o atendimento do INSS para quem mora na cidade. */
  inssInfo: string;
  /** Como o escritório atende quem mora na cidade (presencial/online). */
  howWeServe: string;
  services: CityServiceBlock[];
  faq: CityFaq[];
  /** Slugs de outras páginas de cidade (vizinhas), na ordem de exibição. */
  neighbors: string[];
  blog: CityBlogLink[];
}

export const cityExtras: Record<string, CityExtra> = {
  "caxias-do-sul": {
    inssInfo:
      "Caxias do Sul tem agência própria da Previdência Social (APS), mas a maior parte dos pedidos hoje começa pelo Meu INSS ou pelo telefone 135. A agência e o horário de perícia ou de atendimento presencial são definidos no agendamento, de acordo com o endereço informado. Quando o pedido é negado e o caso vai para a Justiça, as ações contra o INSS tramitam, em regra, na Justiça Federal; as que envolvem acidente de trabalho seguem para a Justiça Estadual.",
    howWeServe:
      "Para quem mora em Caxias do Sul, a análise pode ser feita totalmente online, com envio de documentos e reuniões por vídeo, ou presencialmente nos nossos escritórios de Nova Petrópolis e Gramado, na mesma região da Serra. Atendemos também quem mora nos distritos e no interior do município, como Ana Rech, Vila Cristina, Fazenda Souza e Criúva.",
    services: [
      {
        title: "Aposentadoria especial na indústria de Caxias do Sul",
        text: "Metalúrgicos, soldadores, torneiros, pintores industriais e trabalhadores de fundição costumam ter períodos com exposição a ruído, calor, fumos metálicos ou produtos químicos. Esse tempo pode contar como especial, desde que bem documentado no PPP e no LTCAT da empresa. Antes do pedido, vale conferir se os formulários descrevem corretamente cada função e cada período.",
        href: "/aposentadoria-especial",
      },
      {
        title: "Auxílio-acidente para quem ficou com sequela",
        text: "Acidentes com máquinas, prensas e ferramentas fazem parte da rotina industrial da cidade. Quem fica com sequela permanente que reduz a capacidade para o trabalho pode ter direito ao auxílio-acidente, que tem natureza indenizatória e pode ser recebido junto com o salário. O acidente não precisa ter ocorrido no trabalho: acidentes de trânsito e domésticos também podem ser analisados.",
        href: "/auxilio-acidente",
      },
      {
        title: "Auxílio-doença e perícia médica",
        text: "Lesões por esforço repetitivo, problemas de coluna e doenças ocupacionais são frequentes entre trabalhadores da indústria e do comércio caxiense. O pedido de benefício por incapacidade depende da perícia do INSS ou da análise documental do Atestmed, e a qualidade dos laudos e exames faz diferença na avaliação.",
        href: "/auxilio-doenca",
      },
      {
        title: "BPC/LOAS para idosos e pessoas com deficiência",
        text: "O BPC é um benefício assistencial de um salário mínimo para pessoas com 65 anos ou mais e pessoas com deficiência de baixa renda, sem exigência de contribuição. O Cadastro Único precisa estar atualizado no CRAS que atende o bairro da família antes do pedido ao INSS.",
        href: "/bpc-loas",
      },
      {
        title: "Pensão por morte",
        text: "Cônjuges, companheiros e filhos de segurado falecido podem pedir a pensão por morte. Para companheiros, a comprovação da união estável costuma ser o ponto mais delicado, e o prazo do pedido influencia a partir de quando o benefício é pago.",
        href: "/pensao-morte",
      },
    ],
    faq: [
      {
        question: "Moro em Caxias do Sul. Preciso ir até o escritório para ser atendido?",
        answer: "Não. O atendimento pode ser feito de forma online, com envio de documentos e reuniões por vídeo. Quem prefere atendimento presencial pode agendar nos escritórios de Nova Petrópolis ou Gramado.",
      },
      {
        question: "Trabalho em metalúrgica em Caxias do Sul. Meu tempo pode contar como especial?",
        answer: "Pode, se houver exposição a agentes nocivos como ruído acima do limite, calor ou produtos químicos, comprovada por PPP e LTCAT. Cada período e cada função são analisados separadamente, e as regras mudaram com a reforma da Previdência de 2019, por isso a análise do histórico completo é importante.",
      },
      {
        question: "A empresa onde trabalhei em Caxias fechou. Como consigo o PPP?",
        answer: "Quando a empresa encerra as atividades, existem caminhos alternativos, como buscar documentos com o síndico da massa falida, usar laudos de empresas do mesmo ramo ou produzir prova técnica no processo judicial. A viabilidade depende do caso concreto.",
      },
      {
        question: "Tive um acidente fora do trabalho e fiquei com sequela. Tenho direito ao auxílio-acidente?",
        answer: "O auxílio-acidente pode ser concedido em acidentes de qualquer natureza, inclusive de trânsito ou domésticos, quando a sequela reduz a capacidade para o trabalho habitual. É devido a empregados, empregados domésticos, trabalhadores avulsos e segurados especiais.",
      },
      {
        question: "O INSS negou meu auxílio-doença em Caxias do Sul. O que posso fazer?",
        answer: "É possível apresentar recurso administrativo, fazer novo pedido com documentação médica mais completa ou, conforme o caso, ingressar com ação judicial. A escolha do caminho depende do motivo da negativa e dos documentos disponíveis.",
      },
      {
        question: "Quem mora no interior de Caxias e trabalha na agricultura pode pedir aposentadoria rural?",
        answer: "Sim. Produtores rurais em regime de economia familiar podem ser segurados especiais e se aposentar por idade com 60 anos (homens) ou 55 anos (mulheres), comprovando 15 anos de atividade rural. Se houver também tempo urbano, a aposentadoria híbrida pode ser uma alternativa.",
      },
    ],
    neighbors: ["farroupilha", "flores-da-cunha", "bento-goncalves", "nova-petropolis", "gramado"],
    blog: [
      { slug: "aposentadoria-especial-soldador-metalurgico", label: "Aposentadoria especial do soldador e do metalúrgico" },
      { slug: "ppp-ltcat-aposentadoria-especial-empresa-fechou", label: "PPP e LTCAT: e se a empresa fechou?" },
      { slug: "auxilio-acidente-sequela-permanente-o-que-e", label: "Auxílio-acidente: pago junto com o salário" },
      { slug: "inss-negou-auxilio-doenca-o-que-fazer", label: "INSS negou o auxílio-doença: o que fazer" },
    ],
  },

  "bento-goncalves": {
    inssInfo:
      "Bento Gonçalves conta com agência própria da Previdência Social (APS). Mesmo assim, o pedido de benefício normalmente é feito pelo Meu INSS ou pelo telefone 135, e a agência para perícia ou atendimento presencial é indicada no agendamento conforme o endereço do segurado. Se o caso precisar ir para a Justiça, as ações contra o INSS tramitam, em regra, na Justiça Federal, e as de acidente de trabalho na Justiça Estadual.",
    howWeServe:
      "Moradores de Bento Gonçalves podem ser atendidos de forma online, com reuniões por vídeo e envio digital de documentos, ou presencialmente nos nossos escritórios de Nova Petrópolis e Gramado. Atendemos também famílias do interior do município, como o Vale dos Vinhedos, Faria Lemos, Tuiuty e São Pedro.",
    services: [
      {
        title: "Aposentadoria rural e híbrida na viticultura",
        text: "Muitas famílias de Bento Gonçalves trabalham há gerações no cultivo da uva. Quem atua em regime de economia familiar pode ser segurado especial e ter direito à aposentadoria rural por idade. Notas de produtor, bloco do produtor rural e documentos da propriedade ajudam a comprovar o período. Quem alternou trabalho na roça e na cidade pode avaliar a aposentadoria híbrida.",
        href: "/aposentadoria-rural",
      },
      {
        title: "Aposentadoria especial no polo moveleiro e industrial",
        text: "Trabalhadores da indústria de móveis podem ter exposição a ruído de serras e máquinas, poeira de madeira, colas, vernizes e solventes. Esses períodos podem ser reconhecidos como especiais quando o PPP e o LTCAT registram a exposição de forma adequada.",
        href: "/aposentadoria-especial",
      },
      {
        title: "Auxílio-acidente após acidente com sequela",
        text: "Cortes, amputações e lesões em máquinas da indústria moveleira, ou acidentes na lavoura, podem deixar sequelas que reduzem a capacidade para o trabalho. Nesses casos, o auxílio-acidente pode ser analisado, inclusive para segurados especiais rurais.",
        href: "/auxilio-acidente",
      },
      {
        title: "Auxílio-doença",
        text: "Para quem precisa se afastar por doença ou lesão, o benefício por incapacidade temporária depende da perícia do INSS ou da análise documental do Atestmed. Laudos detalhados, com CID, limitações e tempo estimado de afastamento, ajudam na avaliação.",
        href: "/auxilio-doenca",
      },
      {
        title: "BPC/LOAS e pensão por morte",
        text: "O BPC/LOAS atende idosos a partir de 65 anos e pessoas com deficiência de baixa renda, com Cadastro Único atualizado no CRAS do município. Já a pensão por morte é destinada aos dependentes do segurado falecido, com regras de duração que variam conforme a idade do cônjuge e o tempo de união.",
        href: "/bpc-loas",
      },
    ],
    faq: [
      {
        question: "Vocês atendem moradores de Bento Gonçalves sem precisar viajar?",
        answer: "Sim. Todo o atendimento pode ser feito online. Para quem prefere conversar pessoalmente, há atendimento presencial com agendamento nos escritórios de Nova Petrópolis e Gramado.",
      },
      {
        question: "Trabalhei na colônia com a família e depois fui para a indústria. Posso somar os dois tempos?",
        answer: "Pode ser possível pela aposentadoria por idade híbrida, que soma o tempo rural e o urbano. Nela, a idade exigida é a da aposentadoria urbana. A análise considera os documentos que comprovam o período na agricultura.",
      },
      {
        question: "Quais documentos ajudam a comprovar o trabalho na uva para o INSS?",
        answer: "Notas fiscais de venda da produção, bloco do produtor rural, cadastro em cooperativa ou vinícola, documentos da terra (matrícula, ITR, contrato de arrendamento), declarações de sindicato e registros civis com a profissão de agricultor. Quanto mais documentos ao longo do tempo, melhor.",
      },
      {
        question: "Trabalho em fábrica de móveis. Posso ter direito à aposentadoria especial?",
        answer: "Depende da exposição registrada no PPP e no LTCAT, como ruído acima do limite de tolerância ou contato com agentes químicos. Cada função e cada período são avaliados separadamente.",
      },
      {
        question: "O auxílio-acidente impede que eu continue trabalhando?",
        answer: "Não. O auxílio-acidente tem natureza indenizatória e pode ser recebido junto com o salário. Ele é pago até a aposentadoria.",
      },
      {
        question: "Quem atende questões de família em Bento Gonçalves?",
        answer: "A Spier & Anorte atua em Direito Previdenciário. Questões como divórcio, guarda e pensão alimentícia não fazem parte das nossas áreas de atuação. Se a sua dúvida envolver pensão por morte do INSS, BPC ou outro benefício previdenciário, podemos analisar o seu caso.",
      },
    ],
    neighbors: ["garibaldi", "carlos-barbosa", "farroupilha", "caxias-do-sul", "flores-da-cunha"],
    blog: [
      { slug: "aposentadoria-rural-segurado-especial-como-comprovar", label: "Aposentadoria rural: como comprovar" },
      { slug: "aposentadoria-idade-hibrida-rural-urbano", label: "Aposentadoria híbrida: tempo rural e urbano" },
      { slug: "por-que-inss-nega-aposentadoria-rural", label: "Por que o INSS nega a aposentadoria rural" },
      { slug: "aposentadoria-especial-agente-nocivo-como-comprovar", label: "Aposentadoria especial: como comprovar" },
    ],
  },

  gramado: {
    inssInfo:
      "Quem mora em Gramado faz o pedido de benefício pelo Meu INSS ou pelo telefone 135. Quando há perícia médica ou atendimento presencial, a agência e o horário são definidos no agendamento, conforme o endereço informado. Por isso, conferir o endereço cadastrado e acompanhar os avisos no Meu INSS evita perder perícias marcadas.",
    howWeServe:
      "Temos sede própria em Gramado, na Rua Berna, 715, Vila Suíça, com atendimento presencial agendado. Quem preferir pode ser atendido de forma online. Atendemos moradores do centro, dos bairros e do interior do município, além de quem vive nas cidades vizinhas.",
    services: [
      {
        title: "Aposentadorias para quem trabalha no turismo",
        text: "Hotelaria, gastronomia, comércio e eventos movem a economia de Gramado, com muitos vínculos sazonais, períodos sem registro e trabalho como autônomo ou MEI. Antes de pedir a aposentadoria, conferir o CNIS ajuda a identificar vínculos faltando, salários incorretos e contribuições em atraso que podem fazer diferença no valor.",
        href: "/aposentadoria-tempo",
      },
      {
        title: "Auxílio-acidente",
        text: "Quedas, fraturas, cortes em cozinhas industriais e acidentes de trânsito na serra podem deixar sequelas permanentes. Quando a sequela reduz a capacidade para o trabalho, o auxílio-acidente pode ser analisado, mesmo que a pessoa tenha voltado a trabalhar.",
        href: "/auxilio-acidente",
      },
      {
        title: "Auxílio-doença",
        text: "Quem precisa se afastar por doença ou lesão depende da perícia do INSS ou da análise documental do Atestmed. Para trabalhadores com contrato temporário de temporada, verificar a qualidade de segurado na data da incapacidade é um ponto importante.",
        href: "/auxilio-doenca",
      },
      {
        title: "BPC/LOAS",
        text: "Idosos a partir de 65 anos e pessoas com deficiência de baixa renda podem pedir o BPC, sem precisar ter contribuído ao INSS. O Cadastro Único deve estar atualizado no CRAS de Gramado antes do pedido.",
        href: "/bpc-loas",
      },
      {
        title: "Pensão por morte",
        text: "A pensão por morte é destinada aos dependentes do segurado falecido. A duração do benefício varia conforme a idade do cônjuge ou companheiro e o tempo de união, e pedir dentro do prazo legal influencia a data de início do pagamento.",
        href: "/pensao-morte",
      },
    ],
    faq: [
      {
        question: "Onde fica o escritório em Gramado?",
        answer: "Na Rua Berna, 715, Vila Suíça, Gramado/RS, CEP 95670-554. O atendimento presencial é feito com agendamento pelo WhatsApp (54) 99987-0786 ou pelo telefone (54) 3286-7220.",
      },
      {
        question: "Trabalho por temporada em hotel ou restaurante. Esses períodos contam para a aposentadoria?",
        answer: "Contam, desde que registrados ou com contribuição recolhida. É comum que vínculos curtos não apareçam corretamente no CNIS, por isso vale conferir o extrato e reunir carteira de trabalho, contracheques e termos de rescisão.",
      },
      {
        question: "Sou MEI em Gramado. Tenho direito a benefícios do INSS?",
        answer: "O MEI que paga o DAS em dia tem direito a aposentadoria por idade, auxílio-doença, salário-maternidade e, para os dependentes, pensão por morte. A contribuição do MEI, em regra, não vale para aposentadoria por tempo de contribuição sem complementação.",
      },
      {
        question: "Fiquei com sequela depois de um acidente. Posso receber auxílio-acidente e continuar trabalhando?",
        answer: "Sim. O auxílio-acidente tem natureza indenizatória e pode ser recebido junto com o salário. É devido a empregados, empregados domésticos, trabalhadores avulsos e segurados especiais.",
      },
      {
        question: "Moro em Gramado e não consigo ir até o escritório. Posso ser atendido?",
        answer: "Sim. O atendimento online inclui reunião por vídeo e envio de documentos pelo WhatsApp ou e-mail.",
      },
      {
        question: "Quanto tempo depois do falecimento posso pedir a pensão por morte?",
        answer: "O pedido pode ser feito a qualquer momento, mas o prazo influencia a data de início do pagamento. Feito em até 90 dias do óbito (ou 180 dias para filhos menores de 16 anos), o benefício é pago desde a data do falecimento; depois disso, a partir da data do pedido.",
      },
    ],
    neighbors: ["canela", "nova-petropolis", "tres-coroas", "caxias-do-sul", "sao-francisco-de-paula"],
    blog: [
      { slug: "conferir-cnis-antes-de-solicitar-aposentadoria", label: "Conferir o CNIS antes de pedir a aposentadoria" },
      { slug: "auxilio-acidente-quem-tem-direito", label: "Auxílio-acidente: quem tem direito" },
      { slug: "como-pedir-auxilio-doenca-passo-a-passo", label: "Como pedir auxílio-doença: passo a passo" },
      { slug: "pensao-por-morte", label: "Pensão por morte: guia completo" },
    ],
  },

  canela: {
    inssInfo:
      "Em Canela, o pedido de benefício começa pelo Meu INSS ou pelo telefone 135. Se houver perícia médica ou atendimento presencial, a agência é indicada no agendamento conforme o endereço do segurado. Muitos serviços, como o Atestmed para afastamentos mais curtos, podem ser feitos sem sair de casa.",
    howWeServe:
      "Nosso escritório fica em Gramado, a cerca de 7 km de Canela, com atendimento presencial agendado. Também atendemos de forma online. Muitos moradores de Canela trabalham em Gramado e vice-versa, e atendemos as duas pontas dessa rotina.",
    services: [
      {
        title: "Aposentadorias de quem trabalha no turismo e no comércio",
        text: "Em Canela, é comum alternar empregos em parques, hotéis, restaurantes e lojas, com períodos como autônomo. Esses vínculos nem sempre aparecem corretamente no CNIS, e a conferência antes do pedido pode evitar uma aposentadoria com valor menor ou um indeferimento por falta de tempo.",
        href: "/aposentadoria-idade",
      },
      {
        title: "Auxílio-acidente",
        text: "Sequelas de fraturas, lesões em mãos e joelhos ou acidentes de trânsito podem reduzir a capacidade para o trabalho habitual. Nesses casos, o auxílio-acidente pode ser analisado, inclusive quando a pessoa já voltou a trabalhar após a alta do INSS.",
        href: "/auxilio-acidente",
      },
      {
        title: "Auxílio-doença",
        text: "O benefício por incapacidade temporária exige, em regra, 12 contribuições, salvo em acidentes e em algumas doenças graves. A documentação médica precisa mostrar por que a doença impede o trabalho, e não apenas qual é o diagnóstico.",
        href: "/auxilio-doenca",
      },
      {
        title: "BPC/LOAS",
        text: "Idosos a partir de 65 anos e pessoas com deficiência de baixa renda podem pedir o BPC. O Cadastro Único deve estar atualizado no CRAS de Canela, e a renda considerada é a do grupo familiar que mora na mesma casa.",
        href: "/bpc-loas",
      },
      {
        title: "Pensão por morte",
        text: "Dependentes do segurado falecido podem pedir a pensão. Para companheiros, documentos como conta conjunta, comprovantes de mesmo endereço e declaração de dependente em plano de saúde ajudam a comprovar a união estável.",
        href: "/pensao-morte",
      },
    ],
    faq: [
      {
        question: "Vocês têm escritório em Canela?",
        answer: "O escritório mais próximo fica em Gramado, na Rua Berna, 715, Vila Suíça, a cerca de 7 km de Canela. O atendimento também pode ser feito de forma online.",
      },
      {
        question: "Trabalhei sem carteira assinada em Canela. Esse tempo pode contar?",
        answer: "O trabalho sem registro pode ser reconhecido se houver provas, como recibos, documentos da empresa e testemunhas, normalmente em ação judicial. Também é possível, em algumas situações, recolher contribuições em atraso como autônomo.",
      },
      {
        question: "Meu pedido de BPC foi negado por causa da renda. Ainda há alternativa?",
        answer: "A lei usa como referência a renda por pessoa de até um quarto do salário mínimo, mas a Justiça admite, em muitos casos, a análise de outros elementos de vulnerabilidade, como gastos com remédios e tratamentos. Cada situação é avaliada individualmente.",
      },
      {
        question: "Recebi alta do INSS, mas ainda tenho sequela. O que posso fazer?",
        answer: "Se a sequela é permanente e reduz a capacidade para o trabalho, o auxílio-acidente pode ser analisado. Se a incapacidade continua, é possível pedir prorrogação, recorrer ou fazer novo pedido com documentação atualizada.",
      },
      {
        question: "Como companheira, tenho direito à pensão por morte?",
        answer: "Sim, desde que comprovada a união estável. A lei exige início de prova documental, e a duração da pensão varia conforme a idade da companheira e o tempo de união e de contribuição do falecido.",
      },
      {
        question: "Quais documentos separar antes de falar com o escritório?",
        answer: "Documento de identidade e CPF, carteiras de trabalho, extrato do CNIS (disponível no Meu INSS), cartas e decisões do INSS e, se for benefício por incapacidade, laudos e exames. Se não tiver tudo, a equipe orienta o que buscar.",
      },
    ],
    neighbors: ["gramado", "sao-francisco-de-paula", "tres-coroas", "nova-petropolis", "igrejinha"],
    blog: [
      { slug: "recebi-alta-do-inss-mas-fiquei-com-sequela", label: "Recebi alta do INSS, mas fiquei com sequela" },
      { slug: "bpc-loas-como-solicitar", label: "BPC/LOAS: quem tem direito e como pedir" },
      { slug: "auxilio-doenca-guia-completo-2026", label: "Auxílio-doença: guia completo" },
      { slug: "pensao-por-morte", label: "Pensão por morte: guia completo" },
    ],
  },

  "nova-petropolis": {
    inssInfo:
      "Em Nova Petrópolis, os pedidos ao INSS são feitos pelo Meu INSS ou pelo telefone 135. Quando o benefício exige perícia ou atendimento presencial, a agência é definida no agendamento conforme o endereço do segurado. Para os agricultores do município, a documentação rural reunida antes do pedido costuma ser o que mais pesa na análise.",
    howWeServe:
      "Temos escritório em Nova Petrópolis, na Av. 15 de Novembro, 1924, Sala 304, Centro, com atendimento presencial agendado, além do atendimento online. Recebemos moradores do centro e das linhas e comunidades do interior, como Linha Imperial, Pinhal Alto e Linha Brasil.",
    services: [
      {
        title: "Aposentadoria rural da agricultura familiar",
        text: "A agricultura familiar é parte importante da história de Nova Petrópolis. Quem trabalha com a família na propriedade, sem empregados permanentes, pode ser segurado especial e se aposentar por idade com 60 anos (homens) ou 55 anos (mulheres), com 15 anos de atividade rural comprovada.",
        href: "/aposentadoria-rural",
      },
      {
        title: "Aposentadorias de quem trabalha nas malharias e no comércio",
        text: "O setor de malhas e confecções emprega muitos moradores da cidade, com vínculos que às vezes se misturam com trabalho por produção em casa. Conferir o CNIS e reunir documentos de cada período ajuda a planejar a aposentadoria pela regra mais adequada.",
        href: "/aposentadoria-tempo",
      },
      {
        title: "Auxílio-acidente",
        text: "Acidentes com máquinas agrícolas, quedas e acidentes de trânsito podem deixar sequelas permanentes. O auxílio-acidente também pode ser pedido por segurados especiais rurais, quando a sequela reduz a capacidade para o trabalho.",
        href: "/auxilio-acidente",
      },
      {
        title: "Auxílio-doença",
        text: "Problemas de coluna, lesões por esforço repetitivo nas confecções e doenças que impedem o trabalho na lavoura podem justificar o afastamento. O segurado especial rural também tem direito ao benefício, comprovando a atividade no campo.",
        href: "/auxilio-doenca",
      },
      {
        title: "BPC/LOAS e pensão por morte",
        text: "O BPC/LOAS é destinado a idosos a partir de 65 anos e pessoas com deficiência de baixa renda, com Cadastro Único atualizado no CRAS. A pensão por morte atende dependentes do segurado falecido, inclusive de agricultores segurados especiais.",
        href: "/pensao-morte",
      },
    ],
    faq: [
      {
        question: "Onde fica o escritório em Nova Petrópolis?",
        answer: "Na Av. 15 de Novembro, 1924, Sala 304, Centro, Nova Petrópolis/RS, CEP 95150-000. O atendimento presencial é agendado pelo WhatsApp (54) 99987-0786 ou pelo telefone (54) 3286-7220.",
      },
      {
        question: "Sou agricultor em Nova Petrópolis. Como comprovo a atividade rural?",
        answer: "Notas de venda da produção, bloco do produtor, documentos da terra, cadastro em cooperativa, declaração de sindicato e certidões com a profissão de agricultor ajudam a comprovar. A autodeclaração do segurado especial também faz parte do pedido.",
      },
      {
        question: "Minha esposa trabalha comigo na propriedade. Ela também pode se aposentar como rural?",
        answer: "Sim. Os membros da família que trabalham juntos em regime de economia familiar podem ser segurados especiais. Documentos em nome do marido ou do pai podem servir de prova para os demais integrantes do grupo familiar, conforme o caso.",
      },
      {
        question: "Trabalhei na roça e depois em malharia. Qual aposentadoria posso pedir?",
        answer: "Pode ser possível a aposentadoria híbrida, que soma o tempo rural e o urbano, com a idade da regra urbana. Também é preciso avaliar se o tempo urbano sozinho permite outra regra mais vantajosa.",
      },
      {
        question: "Vocês atendem quem mora no interior de Nova Petrópolis?",
        answer: "Sim. Atendemos moradores das linhas e comunidades do interior, presencialmente no escritório do Centro ou de forma online.",
      },
      {
        question: "O auxílio-acidente vale para quem trabalha na agricultura?",
        answer: "Vale para o segurado especial rural, quando um acidente deixa sequela permanente que reduz a capacidade para o trabalho. O benefício tem natureza indenizatória e é pago até a aposentadoria.",
      },
    ],
    neighbors: ["gramado", "caxias-do-sul", "carlos-barbosa", "canela", "bento-goncalves"],
    blog: [
      { slug: "aposentadoria-rural-segurado-especial-como-comprovar", label: "Aposentadoria rural: como comprovar" },
      { slug: "aposentadoria-idade-hibrida-rural-urbano", label: "Aposentadoria híbrida: tempo rural e urbano" },
      { slug: "trf4-amplia-tempo-rural-mantem-atividade-especial", label: "TRF4 e o tempo rural" },
      { slug: "auxilio-acidente-ou-auxilio-doenca-diferenca", label: "Auxílio-acidente ou auxílio-doença?" },
    ],
  },

  "tres-coroas": {
    inssInfo:
      "Em Três Coroas, o pedido de benefício é feito pelo Meu INSS ou pelo telefone 135. Quando há perícia ou atendimento presencial, a agência é indicada no agendamento de acordo com o endereço informado, e pode ficar em outra cidade da região. Vale conferir o local antes do dia marcado para não perder a perícia.",
    howWeServe:
      "Nosso escritório mais próximo fica em Gramado, a cerca de 35 km de Três Coroas, com atendimento presencial agendado. O atendimento também pode ser feito de forma online, com reuniões por vídeo e envio de documentos pelo WhatsApp.",
    services: [
      {
        title: "Aposentadoria especial no setor calçadista",
        text: "Três Coroas tem forte tradição na indústria de calçados. Trabalhadores de fábricas e ateliês podem ter tido contato com colas, solventes e ruído de máquinas. Esses períodos podem ser analisados como especiais, a partir do PPP e do LTCAT de cada empresa.",
        href: "/aposentadoria-especial",
      },
      {
        title: "Auxílio-doença por lesões do trabalho repetitivo",
        text: "Tendinites, bursites e problemas de coluna são comuns em linhas de produção. O benefício por incapacidade depende da perícia do INSS ou do Atestmed, e laudos que descrevem as limitações para a função exercida ajudam na avaliação.",
        href: "/auxilio-doenca",
      },
      {
        title: "Auxílio-acidente",
        text: "Lesões em mãos e dedos em máquinas de corte e costura, ou acidentes de trânsito na região, podem deixar sequelas permanentes. Nesses casos, o auxílio-acidente pode ser analisado e recebido junto com o salário.",
        href: "/auxilio-acidente",
      },
      {
        title: "BPC/LOAS",
        text: "Idosos a partir de 65 anos e pessoas com deficiência de baixa renda podem pedir o BPC, com Cadastro Único atualizado no CRAS de Três Coroas. Não é preciso ter contribuído ao INSS.",
        href: "/bpc-loas",
      },
      {
        title: "Pensão por morte",
        text: "Dependentes de segurado falecido podem pedir a pensão por morte. Se o falecido estava desempregado, é importante verificar se ainda mantinha a qualidade de segurado na data do óbito.",
        href: "/pensao-morte",
      },
    ],
    faq: [
      {
        question: "Moro em Três Coroas. Como funciona o atendimento?",
        answer: "O atendimento pode ser online, com reunião por vídeo e envio de documentos, ou presencial no escritório de Gramado, com agendamento pelo WhatsApp (54) 99987-0786.",
      },
      {
        question: "Trabalhei a vida toda em fábrica de calçados. Posso ter aposentadoria especial?",
        answer: "Depende da exposição a agentes nocivos registrada no PPP e no LTCAT, como solventes, colas e ruído acima do limite. Cada empresa e cada função são analisadas separadamente, e as regras mudaram com a reforma da Previdência de 2019.",
      },
      {
        question: "A fábrica onde trabalhei fechou. Ainda consigo comprovar o tempo especial?",
        answer: "Há alternativas, como laudos de empresas similares, documentos sindicais e perícia técnica no processo judicial. A viabilidade depende de cada caso.",
      },
      {
        question: "Tenho tendinite por causa do trabalho. Posso pedir auxílio-doença?",
        answer: "Se a tendinite impede o trabalho, o benefício por incapacidade pode ser pedido. Quando a doença tem relação com o trabalho, isso também deve constar na documentação, pois traz efeitos próprios, como dispensa de carência.",
      },
      {
        question: "Meu marido faleceu desempregado. Tenho direito à pensão?",
        answer: "Pode ter, se ele ainda estava no chamado período de graça, que mantém a qualidade de segurado por um tempo após a última contribuição, ou se já tinha direito a alguma aposentadoria. É preciso analisar o histórico de contribuições.",
      },
      {
        question: "O auxílio-acidente é vitalício?",
        answer: "O auxílio-acidente é pago até a aposentadoria ou até o óbito do segurado. Ele não impede o trabalho e pode ser recebido junto com o salário.",
      },
    ],
    neighbors: ["igrejinha", "gramado", "canela", "taquara", "parobe"],
    blog: [
      { slug: "aposentadoria-especial-agente-nocivo-como-comprovar", label: "Aposentadoria especial: como comprovar" },
      { slug: "ppp-o-que-e-como-obter", label: "PPP: o que é e como obter" },
      { slug: "auxilio-acidente-vitalicio-cumula-salario", label: "Auxílio-acidente acumula com o salário" },
      { slug: "pericia-medica-inss-por-que-negam-como-se-preparar", label: "Perícia do INSS: como se preparar" },
    ],
  },

  igrejinha: {
    inssInfo:
      "Em Igrejinha, os pedidos ao INSS começam pelo Meu INSS ou pelo telefone 135. A agência para perícia ou atendimento presencial é definida no agendamento, conforme o endereço do segurado, e pode ser em outra cidade do Vale do Paranhana. Acompanhar o Meu INSS evita perder convocações e prazos.",
    howWeServe:
      "Atendemos moradores de Igrejinha de forma online, com reunião por vídeo e envio de documentos pelo WhatsApp, ou presencialmente no escritório de Gramado, com agendamento.",
    services: [
      {
        title: "Aposentadoria especial na indústria calçadista",
        text: "A indústria de calçados e componentes marcou a trajetória profissional de muitas famílias de Igrejinha. Funções com exposição a solventes, colas e ruído podem ser reconhecidas como especiais quando a exposição está registrada no PPP e no LTCAT.",
        href: "/aposentadoria-especial",
      },
      {
        title: "Aposentadoria por tempo e regras de transição",
        text: "Quem começou a trabalhar cedo nas fábricas pode estar perto de uma das regras de transição da reforma de 2019. Somar corretamente os vínculos, inclusive os períodos de menor de idade e os de tempo especial convertidos, muda a regra e a data possível.",
        href: "/aposentadoria-tempo",
      },
      {
        title: "Auxílio-acidente",
        text: "Sequelas em mãos, braços e pernas após acidentes em máquinas ou no trânsito podem reduzir a capacidade para o trabalho. Nesses casos, o auxílio-acidente pode ser analisado, mesmo que o trabalhador tenha voltado à função.",
        href: "/auxilio-acidente",
      },
      {
        title: "Auxílio-doença",
        text: "Para afastamentos por doença ou lesão, o pedido passa pela perícia do INSS ou pelo Atestmed. Atestados com CID, descrição das limitações e tempo estimado de afastamento são indispensáveis.",
        href: "/auxilio-doenca",
      },
      {
        title: "BPC/LOAS e pensão por morte",
        text: "O BPC atende idosos a partir de 65 anos e pessoas com deficiência de baixa renda, com Cadastro Único atualizado no CRAS do município. A pensão por morte é destinada aos dependentes do segurado falecido.",
        href: "/bpc-loas",
      },
    ],
    faq: [
      {
        question: "Vocês atendem em Igrejinha?",
        answer: "Sim. O atendimento pode ser feito de forma online ou presencialmente no escritório de Gramado, com agendamento pelo WhatsApp (54) 99987-0786.",
      },
      {
        question: "Comecei a trabalhar com 14 anos em fábrica de calçados. Esse tempo conta?",
        answer: "O trabalho registrado conta normalmente. Mesmo períodos anteriores à idade mínima permitida podem ser reconhecidos, conforme entendimento da Justiça, quando houver prova do trabalho.",
      },
      {
        question: "Posso converter tempo especial em comum para me aposentar antes?",
        answer: "A conversão de tempo especial em comum é permitida para períodos trabalhados até 13 de novembro de 2019. Esse tempo convertido pode antecipar o acesso a uma regra de transição.",
      },
      {
        question: "Minha perícia foi marcada em outra cidade. Isso é normal?",
        answer: "Sim. O INSS distribui as perícias entre as agências da região. O local aparece no comprovante de agendamento no Meu INSS. Se não puder comparecer, é importante remarcar antes da data.",
      },
      {
        question: "Quem recebe BPC pode deixar pensão para a família?",
        answer: "Não. O BPC é um benefício assistencial e não gera pensão por morte. Por isso, em alguns casos, vale verificar se a pessoa tinha direito a um benefício previdenciário em vez do BPC.",
      },
      {
        question: "O auxílio-acidente é pago para quem tem MEI?",
        answer: "O auxílio-acidente não é devido ao contribuinte individual nem ao MEI. Ele é pago a empregados, empregados domésticos, trabalhadores avulsos e segurados especiais. Se a pessoa era empregada na data do acidente, esse é o vínculo considerado.",
      },
    ],
    neighbors: ["tres-coroas", "taquara", "parobe", "gramado", "sapiranga"],
    blog: [
      { slug: "conversao-tempo-especial-comum", label: "Conversão do tempo especial em comum" },
      { slug: "aposentadoria-tempo-contribuicao-regras-transicao", label: "Regras de transição da aposentadoria por tempo" },
      { slug: "auxilio-acidente-o-que-e-quem-tem-direito", label: "Auxílio-acidente: o que é e quem tem direito" },
      { slug: "bpc-vs-beneficios-inss", label: "BPC x benefícios do INSS" },
    ],
  },

  taquara: {
    inssInfo:
      "Em Taquara, o pedido de benefício é feito pelo Meu INSS ou pelo telefone 135. Quando há perícia médica ou atendimento presencial, a agência e o horário são informados no agendamento, conforme o endereço do segurado. Guardar os protocolos e acompanhar as exigências no Meu INSS evita que o pedido seja arquivado.",
    howWeServe:
      "Atendemos moradores de Taquara de forma online, com reunião por vídeo e envio de documentos pelo WhatsApp, ou presencialmente no escritório de Gramado, com agendamento. Recebemos também moradores do interior do município, onde a agricultura ainda é presente.",
    services: [
      {
        title: "Aposentadoria rural e híbrida",
        text: "No interior de Taquara, muitas famílias trabalham ou trabalharam na agricultura. Quem atua em regime de economia familiar pode ser segurado especial. Quem saiu da roça para a indústria ou o comércio pode avaliar a aposentadoria híbrida, que soma os dois tempos.",
        href: "/aposentadoria-rural",
      },
      {
        title: "Aposentadoria especial na indústria",
        text: "Trabalhadores da indústria calçadista, metalúrgica e de outros setores do Vale do Paranhana podem ter períodos com exposição a agentes nocivos. O reconhecimento depende do PPP e do LTCAT de cada empresa.",
        href: "/aposentadoria-especial",
      },
      {
        title: "Auxílio-acidente",
        text: "Quem ficou com sequela permanente após acidente de trabalho, de trânsito ou doméstico, com redução da capacidade para o trabalho, pode ter o auxílio-acidente analisado. O benefício pode ser recebido junto com o salário.",
        href: "/auxilio-acidente",
      },
      {
        title: "Auxílio-doença",
        text: "Para quem precisa se afastar, o pedido passa pela perícia do INSS ou pelo Atestmed. Quando o benefício é negado, é possível recorrer ou fazer novo pedido com documentação médica mais completa.",
        href: "/auxilio-doenca",
      },
      {
        title: "BPC/LOAS e pensão por morte",
        text: "O BPC atende idosos a partir de 65 anos e pessoas com deficiência de baixa renda, com Cadastro Único atualizado no CRAS de Taquara. A pensão por morte é destinada aos dependentes do segurado falecido.",
        href: "/bpc-loas",
      },
    ],
    faq: [
      {
        question: "Como é o atendimento para quem mora em Taquara?",
        answer: "Pode ser online, com reunião por vídeo e envio de documentos, ou presencial no escritório de Gramado, com agendamento pelo WhatsApp (54) 99987-0786 ou pelo telefone (54) 3286-7220.",
      },
      {
        question: "Trabalhei na roça com meus pais quando jovem. Esse tempo pode contar?",
        answer: "Pode, se houver documentos da época que indiquem a atividade rural da família, como notas de produtor, documentos da terra e certidões. O tempo rural pode ser usado na aposentadoria rural, na híbrida e, em alguns casos, na aposentadoria por tempo de contribuição.",
      },
      {
        question: "O INSS negou minha aposentadoria rural. Por que isso acontece?",
        answer: "Os motivos mais comuns são falta de documentos em nome próprio ou da família, períodos sem prova, renda de outra atividade no grupo familiar e divergências na autodeclaração. Entender o motivo da negativa ajuda a definir o caminho.",
      },
      {
        question: "Fiquei com sequela de acidente de moto. Posso pedir auxílio-acidente?",
        answer: "Sim, se você era empregado, doméstico, avulso ou segurado especial na data do acidente e a sequela reduz a capacidade para o seu trabalho habitual. O acidente não precisa ter relação com o trabalho.",
      },
      {
        question: "Meu filho tem deficiência. Podemos pedir o BPC?",
        answer: "O BPC pode ser pedido para pessoa com deficiência de qualquer idade, desde que a família tenha baixa renda e o Cadastro Único esteja atualizado. O INSS faz avaliação médica e social.",
      },
      {
        question: "Quanto tempo dura a pensão por morte para o cônjuge?",
        answer: "Depende da idade do cônjuge na data do óbito e do tempo de casamento ou união e de contribuição do falecido. Em alguns casos é paga por quatro meses; em outros, por prazos maiores ou de forma vitalícia.",
      },
    ],
    neighbors: ["igrejinha", "parobe", "tres-coroas", "sapiranga", "gramado"],
    blog: [
      { slug: "por-que-inss-nega-aposentadoria-rural", label: "Por que o INSS nega a aposentadoria rural" },
      { slug: "aposentadoria-idade-hibrida-rural-urbano", label: "Aposentadoria híbrida: tempo rural e urbano" },
      { slug: "tipos-de-acidente-que-dao-auxilio-acidente", label: "Quais acidentes dão auxílio-acidente" },
      { slug: "bpc-loas-como-solicitar", label: "BPC/LOAS: quem tem direito e como pedir" },
    ],
  },
};

export const getCityExtra = (slug: string): CityExtra | undefined => cityExtras[slug];
