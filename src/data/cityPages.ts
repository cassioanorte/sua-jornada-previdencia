export interface CityData {
  name: string;
  slug: string;
  title: string;
  metaDescription: string;
  keywords: string;
  hasOffice: boolean;
  officeAddress?: string;
  officeCep?: string;
  heroSubtitle: string;
  intro: string;
  localInfo: string;
  proximity?: string;
}

export const cityPages: CityData[] = [
  {
    name: "Gramado",
    slug: "gramado",
    title: "Advogado Previdenciário em Gramado - Spier & Anorte",
    metaDescription: "Advogado previdenciário em Gramado/RS. Escritório com sede própria. Aposentadorias, auxílios, BPC/LOAS e pensão por morte. Consulta gratuita.",
    keywords: "advogado previdenciário gramado, advogado INSS gramado, aposentadoria gramado",
    hasOffice: true,
    officeAddress: "R. Berna, 715 - Vila Suíça",
    officeCep: "CEP 95670-554",
    heroSubtitle: "Escritório com sede própria em Gramado — atendimento presencial e online para garantir seus direitos previdenciários.",
    intro: "Se você mora em Gramado ou região e precisa de orientação sobre benefícios do INSS, a Spier & Anorte Advogados tem sede própria na cidade, com atendimento presencial e online. Nossa equipe atua há mais de 13 anos exclusivamente em Direito Previdenciário, ajudando moradores de Gramado a conquistar aposentadorias, auxílios e outros benefícios.",
    localInfo: "Com escritório localizado na Vila Suíça, atendemos segurados de toda a região de Gramado, incluindo distritos como Linha Nova, Caravaggio e Planalto. Conhecemos as particularidades dos trabalhadores locais — do setor hoteleiro e gastronômico ao comércio e prestação de serviços que movem a economia turística da cidade.",
  },
  {
    name: "Canela",
    slug: "canela",
    title: "Advogado Previdenciário em Canela - Spier & Anorte",
    metaDescription: "Advogado previdenciário em Canela/RS. Aposentadorias, auxílio-doença, BPC/LOAS e pensão por morte. Atendimento presencial em Gramado e online.",
    keywords: "advogado previdenciário canela, advogado INSS canela, aposentadoria canela",
    hasOffice: false,
    heroSubtitle: "Atendimento próximo para moradores de Canela — escritório em Gramado a poucos minutos de distância.",
    intro: "Moradores de Canela contam com o atendimento especializado da Spier & Anorte Advogados em Direito Previdenciário. Com escritório em Gramado, a apenas 7 km de Canela, oferecemos atendimento presencial e 100% online para garantir seus benefícios junto ao INSS.",
    localInfo: "Canela e Gramado formam um polo turístico integrado, e muitos trabalhadores da região atuam em ambas as cidades. Atendemos profissionais do turismo, hotelaria, gastronomia, comércio e serviços que são a base econômica da cidade, além de trabalhadores rurais da região.",
    proximity: "7 km do nosso escritório em Gramado",
  },
  {
    name: "Nova Petrópolis",
    slug: "nova-petropolis",
    title: "Advogado Previdenciário em Nova Petrópolis - Spier & Anorte",
    metaDescription: "Advogado previdenciário em Nova Petrópolis/RS. Escritório com sede própria. Aposentadorias, auxílios, BPC/LOAS. Consulta gratuita.",
    keywords: "advogado previdenciário nova petrópolis, advogado INSS nova petrópolis, aposentadoria nova petrópolis",
    hasOffice: true,
    officeAddress: "Av. 15 de Novembro, 1924, Sala 304, Centro",
    officeCep: "CEP 95150-000",
    heroSubtitle: "Escritório com sede própria em Nova Petrópolis — atendimento presencial e online em Direito Previdenciário.",
    intro: "A Spier & Anorte Advogados tem sede própria em Nova Petrópolis, com atendimento presencial e online voltado exclusivamente para questões previdenciárias. Se você precisa de aposentadoria, auxílio-doença, BPC/LOAS ou qualquer outro benefício do INSS, nossa equipe com mais de 13 anos de experiência está pronta para ajudar.",
    localInfo: "Localizado no centro de Nova Petrópolis, na Avenida 15 de Novembro, nosso escritório atende segurados da cidade e região. Conhecemos a realidade dos trabalhadores locais — do setor de malhas e confecções ao turismo rural e à agricultura familiar que caracterizam o município.",
  },
  {
    name: "Caxias do Sul",
    slug: "caxias-do-sul",
    title: "Advogado Previdenciário em Caxias do Sul - Spier & Anorte",
    metaDescription: "Advogado previdenciário em Caxias do Sul/RS. Aposentadorias, auxílios, BPC/LOAS e pensão por morte. Atendimento presencial e online. Consulta gratuita.",
    keywords: "advogado previdenciário caxias do sul, advogado INSS caxias do sul, aposentadoria caxias do sul",
    hasOffice: false,
    heroSubtitle: "Especialistas em Direito Previdenciário atendendo moradores de Caxias do Sul com excelência e proximidade.",
    intro: "Moradores de Caxias do Sul podem contar com a Spier & Anorte Advogados para questões previdenciárias. Com escritórios em Gramado e Nova Petrópolis — a cerca de 70 km — oferecemos atendimento presencial e 100% online, atendendo trabalhadores da indústria, comércio e serviços da maior cidade da Serra Gaúcha.",
    localInfo: "Caxias do Sul é o maior polo industrial da Serra Gaúcha, com forte presença nos setores metalúrgico, automotivo, moveleiro e de alimentos. Atendemos trabalhadores desses setores em questões como aposentadoria especial por insalubridade, auxílio-doença por doenças ocupacionais e aposentadoria por tempo de contribuição.",
    proximity: "70 km dos nossos escritórios",
  },
  {
    name: "Bento Gonçalves",
    slug: "bento-goncalves",
    title: "Advogado Previdenciário em Bento Gonçalves - Spier & Anorte",
    metaDescription: "Advogado previdenciário em Bento Gonçalves/RS. Aposentadorias, auxílios, BPC/LOAS. Atendimento presencial e online. Consulta gratuita.",
    keywords: "advogado previdenciário bento gonçalves, advogado INSS bento gonçalves, aposentadoria bento gonçalves",
    hasOffice: false,
    heroSubtitle: "Atendimento especializado em Direito Previdenciário para moradores de Bento Gonçalves e região.",
    intro: "A Spier & Anorte Advogados oferece atendimento em Direito Previdenciário para moradores de Bento Gonçalves. Com escritórios em Gramado e Nova Petrópolis, atendemos presencialmente e online trabalhadores da capital brasileira do vinho.",
    localInfo: "Bento Gonçalves é referência na vitivinicultura e no enoturismo, além de ter forte presença nos setores moveleiro e industrial. Atendemos trabalhadores rurais da viticultura, funcionários da indústria e profissionais do turismo em suas demandas previdenciárias, incluindo aposentadoria rural e aposentadoria especial.",
    proximity: "50 km dos nossos escritórios",
  },
  {
    name: "São Francisco de Paula",
    slug: "sao-francisco-de-paula",
    title: "Advogado Previdenciário em São Francisco de Paula - Spier & Anorte",
    metaDescription: "Advogado previdenciário em São Francisco de Paula/RS. Aposentadorias, auxílios, BPC/LOAS. Atendimento presencial e online.",
    keywords: "advogado previdenciário são francisco de paula, advogado INSS são francisco de paula",
    hasOffice: false,
    heroSubtitle: "Atendimento próximo e especializado para moradores de São Francisco de Paula.",
    intro: "Moradores de São Francisco de Paula contam com a Spier & Anorte Advogados para todas as questões previdenciárias. Com escritório em Gramado, a cerca de 60 km, oferecemos atendimento presencial e 100% online para trabalhadores urbanos e rurais do município.",
    localInfo: "São Francisco de Paula tem forte tradição na pecuária, silvicultura e turismo ecológico. Atendemos trabalhadores rurais, pequenos produtores e segurados especiais da região, auxiliando em aposentadorias rurais, BPC/LOAS e outros benefícios que exigem comprovação da atividade no campo.",
    proximity: "60 km do nosso escritório em Gramado",
  },
  {
    name: "Carlos Barbosa",
    slug: "carlos-barbosa",
    title: "Advogado Previdenciário em Carlos Barbosa - Spier & Anorte",
    metaDescription: "Advogado previdenciário em Carlos Barbosa/RS. Aposentadorias, auxílios, BPC/LOAS. Atendimento presencial e online. Consulta gratuita.",
    keywords: "advogado previdenciário carlos barbosa, advogado INSS carlos barbosa, aposentadoria carlos barbosa",
    hasOffice: false,
    heroSubtitle: "Especialistas em Direito Previdenciário atendendo moradores de Carlos Barbosa e região.",
    intro: "A Spier & Anorte Advogados oferece atendimento especializado em Direito Previdenciário para moradores de Carlos Barbosa. Com escritórios em Gramado e Nova Petrópolis, atendemos presencialmente e online, ajudando trabalhadores a conquistar seus benefícios junto ao INSS.",
    localInfo: "Carlos Barbosa é conhecida pela forte presença do cooperativismo e da indústria de laticínios. Atendemos trabalhadores da indústria, cooperativas e do setor agropecuário em demandas como aposentadoria por tempo de contribuição, auxílio-doença e aposentadoria especial.",
    proximity: "40 km dos nossos escritórios",
  },
  {
    name: "Garibaldi",
    slug: "garibaldi",
    title: "Advogado Previdenciário em Garibaldi - Spier & Anorte",
    metaDescription: "Advogado previdenciário em Garibaldi/RS. Aposentadorias, auxílios, BPC/LOAS e pensão por morte. Atendimento presencial e online.",
    keywords: "advogado previdenciário garibaldi, advogado INSS garibaldi, aposentadoria garibaldi",
    hasOffice: false,
    heroSubtitle: "Atendimento especializado em Direito Previdenciário para moradores de Garibaldi.",
    intro: "Moradores de Garibaldi podem contar com a experiência da Spier & Anorte Advogados em questões previdenciárias. Com escritórios em Gramado e Nova Petrópolis, oferecemos atendimento presencial e 100% online para trabalhadores da capital brasileira do espumante.",
    localInfo: "Garibaldi é a capital do espumante e tem economia diversificada entre a vitivinicultura, indústria e turismo. Atendemos trabalhadores rurais, profissionais da indústria vinícola e demais segurados em aposentadorias, auxílios e outros benefícios previdenciários.",
    proximity: "55 km dos nossos escritórios",
  },
  {
    name: "Farroupilha",
    slug: "farroupilha",
    title: "Advogado Previdenciário em Farroupilha - Spier & Anorte",
    metaDescription: "Advogado previdenciário em Farroupilha/RS. Aposentadorias, auxílios, BPC/LOAS. Atendimento presencial e online. Consulta gratuita.",
    keywords: "advogado previdenciário farroupilha, advogado INSS farroupilha, aposentadoria farroupilha",
    hasOffice: false,
    heroSubtitle: "Especialistas em Direito Previdenciário atendendo moradores de Farroupilha com dedicação e proximidade.",
    intro: "A Spier & Anorte Advogados oferece atendimento em Direito Previdenciário para moradores de Farroupilha. Com escritórios em Gramado e Nova Petrópolis, ajudamos trabalhadores a conquistar aposentadorias, auxílios e outros benefícios do INSS.",
    localInfo: "Farroupilha se destaca nos setores metalúrgico, plástico e no cultivo de kiwi. Atendemos trabalhadores da indústria que necessitam de aposentadoria especial por condições insalubres, além de profissionais do comércio, agricultura e serviços em suas demandas previdenciárias.",
    proximity: "65 km dos nossos escritórios",
  },
  {
    name: "Flores da Cunha",
    slug: "flores-da-cunha",
    title: "Advogado Previdenciário em Flores da Cunha - Spier & Anorte",
    metaDescription: "Advogado previdenciário em Flores da Cunha/RS. Aposentadorias, auxílios, BPC/LOAS. Atendimento presencial e online.",
    keywords: "advogado previdenciário flores da cunha, advogado INSS flores da cunha, aposentadoria flores da cunha",
    hasOffice: false,
    heroSubtitle: "Atendimento especializado em Direito Previdenciário para moradores de Flores da Cunha e região.",
    intro: "Moradores de Flores da Cunha contam com a Spier & Anorte Advogados para questões previdenciárias. Com escritórios em Gramado e Nova Petrópolis, oferecemos atendimento presencial e 100% online para ajudar você a garantir seus direitos.",
    localInfo: "Flores da Cunha é a maior produtora de uvas e vinhos do Brasil, com forte tradição agrícola e industrial. Atendemos trabalhadores rurais da vitivinicultura, profissionais da indústria e segurados especiais em aposentadorias rurais, aposentadoria especial e demais benefícios previdenciários.",
    proximity: "60 km dos nossos escritórios",
  },
];

export const getCityBySlug = (slug: string): CityData | undefined => {
  return cityPages.find((city) => city.slug === slug);
};
