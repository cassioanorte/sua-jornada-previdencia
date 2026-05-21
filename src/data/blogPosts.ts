export type BlogCluster = 
  | "incapacidade"
  | "aposentadorias"
  | "aposentadoria-especial"
  | "assistencial"
  | "acidente"
  | "planejamento"
  | "legislacao"
  | "maternidade"
  | "pcd";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author: string;
  image?: string;
  cluster?: BlogCluster;
}

export const blogPosts: BlogPost[] = [
  {
    id: "alta-sem-sequela-reconhecida-inss",
    image: "/blog/alta-sem-sequela-reconhecida-inss.jpg",
    title: "Alta do INSS sem reconhecimento de sequela: o erro que prejudica trabalhadores",
    excerpt: "Recebeu alta do INSS sem que o perito reconhecesse a sequela do acidente? Esse erro é mais comum do que parece — e tem como corrigir mesmo depois da alta.",
    date: "21 de maio de 2026",
    category: "Benefícios por Incapacidade",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "auxilio-acidente-vs-auxilio-doenca",
    image: "/blog/auxilio-acidente-vs-auxilio-doenca.jpg",
    title: "Auxílio-acidente x auxílio-doença: diferenças e quando pedir cada um",
    excerpt: "Auxílio-doença e auxílio-acidente têm nomes parecidos mas funcionam de forma muito diferente. Saiba qual é qual e em que momento cada um se aplica.",
    date: "20 de maio de 2026",
    category: "Benefícios por Incapacidade",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "revisao-da-vida-toda-vale-a-pena",
    image: "/blog/revisao-da-vida-toda-vale-a-pena.jpg",
    title: "Revisão da vida toda: quando ela aumenta sua aposentadoria",
    excerpt: "A revisão da vida toda pode aumentar sua aposentadoria incluindo contribuições anteriores a 1994. Entenda quem tem direito e por que muita gente ainda não pediu.",
    date: "14 de maio de 2026",
    category: "Aposentadoria",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "regras-de-transicao-previdencia-reforma",
    image: "/blog/regras-de-transicao-previdencia-reforma.jpg",
    title: "As 4 regras de transição da reforma previdenciária: qual é a sua?",
    excerpt: "A reforma de 2019 criou 4 regras de transição para aposentadoria. Descubra qual se aplica a você e se ela pode ser mais vantajosa do que a regra definitiva.",
    date: "13 de maio de 2026",
    category: "Aposentadoria",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "posso-me-aposentar-hoje-2026",
    image: "/blog/posso-me-aposentar-hoje-2026.jpg",
    title: "Tenho 62 ou 65 anos: posso me aposentar hoje? Entenda as regras",
    excerpt: "Chegou na idade mínima de aposentadoria e quer saber se já pode parar de trabalhar? As regras de 2026 exigem mais do que só a idade — veja o que falta.",
    date: "12 de maio de 2026",
    category: "Aposentadoria",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "aposentadoria-por-idade-regras-2026",
    image: "/blog/aposentadoria-por-idade-regras-2026.jpg",
    title: "Aposentadoria por idade em 2026: regras, idades e como planejar",
    excerpt: "As regras da aposentadoria por idade mudaram com a reforma de 2019. Entenda as idades mínimas, o tempo de contribuição e como planejar sua saída em 2026.",
    date: "11 de maio de 2026",
    category: "Aposentadoria",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "stj-tema-1157-inss-cancelar-beneficio",
    image: "/blog/stj-tema-1157-inss-cancelar-beneficio.jpg",
    title: "STJ decide: INSS pode cancelar benefício concedido na Justiça sem ação revisional",
    excerpt: "A 1ª Seção do STJ decidiu que o INSS pode rever e cancelar administrativamente benefícios por incapacidade concedidos judicialmente, mesmo após trânsito em julgado. Entenda o Tema 1.157.",
    date: "9 de maio de 2026",
    category: "Jurisprudência",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "auxilio-doenca-negado-como-reverter",
    cluster: "incapacidade" as BlogCluster,
    image: "/blog/auxilio-doenca-negado-como-reverter.jpg",
    title: "Auxílio-doença negado na 1ª tentativa? Ainda tem caminhos",
    excerpt: "Recebeu negativa do INSS no auxílio-doença? Saiba que a primeira negativa não é o fim — existem caminhos administrativos e judiciais para reverter.",
    date: "8 de maio de 2026",
    category: "Benefícios por Incapacidade",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "pericia-medica-inss-negada-o-que-fazer",
    cluster: "incapacidade" as BlogCluster,
    image: "/blog/pericia-medica-inss-negada-o-que-fazer.jpg",
    title: "Perícia médica do INSS negada: o que fazer e como recorrer",
    excerpt: "O médico perito do INSS negou seu benefício mesmo estando doente? Entenda por que isso acontece, seus direitos e como recorrer com mais chances.",
    date: "7 de maio de 2026",
    category: "Benefícios por Incapacidade",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "como-pedir-auxilio-doenca-passo-a-passo",
    cluster: "incapacidade" as BlogCluster,
    image: "/blog/como-pedir-auxilio-doenca-passo-a-passo.jpg",
    title: "Como pedir auxílio-doença no INSS: passo a passo em 2026",
    excerpt: "Precisa pedir auxílio-doença mas não sabe por onde começar? Veja o passo a passo atualizado para 2026, da documentação até a perícia médica.",
    date: "6 de maio de 2026",
    category: "Benefícios por Incapacidade",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "trabalhar-recebendo-auxilio-doenca",
    cluster: "incapacidade" as BlogCluster,
    image: "/blog/trabalhar-recebendo-auxilio-doenca.jpg",
    title: "Trabalhei enquanto recebia auxílio-doença: o que pode acontecer?",
    excerpt: "Voltou ao trabalho antes da alta do INSS ou fez bicos enquanto recebia auxílio-doença? Entenda os riscos reais e o que a lei diz sobre isso.",
    date: "5 de maio de 2026",
    category: "Benefícios por Incapacidade",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "auxilio-doenca-guia-completo-2026",
    cluster: "incapacidade" as BlogCluster,
    image: "/blog/auxilio-doenca-guia-completo-2026.jpg",
    title: "Auxílio-doença 2026: guia completo para quem não pode trabalhar",
    excerpt: "Parou de trabalhar por doença e não sabe o que fazer? Entenda como funciona o auxílio-doença em 2026, quem tem direito e como pedir ao INSS.",
    date: "4 de maio de 2026",
    category: "Benefícios por Incapacidade",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "auxilio-acidente-beneficio-vitalicio",
    cluster: "acidente" as BlogCluster,
    image: "/blog/auxilio-acidente-beneficio-vitalicio.jpg",
    title: "Auxílio-Acidente: sequelas do trabalho geram direito a benefício vitalício",
    excerpt: "Entenda como funciona o auxílio-acidente, quem tem direito e como recorrer se o INSS negar.",
    date: "3 de maio de 2026",
    category: "Acidente de Trabalho",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "conversao-tempo-especial-comum",
    cluster: "aposentadoria-especial" as BlogCluster,
    image: "/blog/conversao-tempo-especial-comum.jpg",
    title: "Conversão do tempo especial em tempo comum: quando compensa e como pedir",
    excerpt: "Entenda quando a conversão de tempo especial para comum compensa e como requerer.",
    date: "24 de abril de 2026",
    category: "Aposentadoria Especial",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "aposentadoria-especial-regras-transicao",
    cluster: "aposentadoria-especial" as BlogCluster,
    image: "/blog/aposentadoria-especial-regras-transicao.jpg",
    title: "Aposentadoria Especial: regras de transição, reformas e como calcular seu benefício hoje",
    excerpt: "Entenda as regras de transição da aposentadoria especial, impactos das reformas e como calcular seu benefício atualmente.",
    date: "23 de abril de 2026",
    category: "Aposentadoria Especial",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "aposentadoria-invalidez-valor-reduzido-ec103",
    cluster: "incapacidade" as BlogCluster,
    image: "/blog/aposentadoria-invalidez-valor-reduzido-ec103.jpg",
    title: "O INSS cortou o valor da sua aposentadoria por invalidez? Entenda por que isso acontece — e o que fazer",
    excerpt: "Desde a Reforma da Previdência (EC 103/2019), a aposentadoria por incapacidade pode vir com valor reduzido. Saiba quando é possível reverter e receber 100% do benefício.",
    date: "22 de abril de 2026",
    category: "Benefícios por Incapacidade",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "ltcat-laudos-tecnicos-aposentadoria-especial",
    cluster: "aposentadoria-especial" as BlogCluster,
    image: "/blog/ltcat-laudos-tecnicos-aposentadoria-especial.jpg",
    title: "LTCAT e laudos técnicos: como esses documentos influenciam a aposentadoria especial",
    excerpt: "LTCAT e laudos técnicos — entenda como funcionam e por que são fundamentais na comprovação do tempo especial.",
    date: "21 de abril de 2026",
    category: "Aposentadoria Especial",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "licenca-paternidade-lei-15371-2026",
    cluster: "legislacao" as BlogCluster,
    image: "/blog/licenca-paternidade-lei-15371-2026.jpg",
    title: "Nova Lei da Licença-Paternidade (Lei 15.371/26): Entenda o que muda e os novos prazos",
    excerpt: "A Lei 15.371/2026 institui o salário-paternidade, amplia os prazos da licença até 2029 e garante estabilidade no emprego. Entenda o que muda e como garantir seu direito.",
    date: "20 de abril de 2026",
    category: "Legislação Previdenciária",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "ppp-o-que-e-como-obter",
    cluster: "aposentadoria-especial" as BlogCluster,
    image: "/blog/ppp-o-que-e-como-obter.jpg",
    title: "PPP: o que é, por que é essencial e como obter quando a empresa não fornece",
    excerpt: "PPP (Perfil Profissiográfico Previdenciário) — entenda sua importância para aposentadoria especial e como conseguir o documento.",
    date: "20 de abril de 2026",
    category: "Aposentadoria Especial",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "aposentadoria-especial-guia-completo",
    cluster: "aposentadoria-especial" as BlogCluster,
    image: "/blog/aposentadoria-especial-guia-completo.jpg",
    title: "Aposentadoria Especial: guia completo sobre requisitos, comprovação e cálculo",
    excerpt: "Aposentadoria Especial — entenda requisitos, tempo especial, comprovação e como calcular seu benefício.",
    date: "19 de abril de 2026",
    category: "Guia Pilar",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "dossie-medico-checklist-inss",
    cluster: "incapacidade" as BlogCluster,
    image: "/blog/dossie-medico-checklist-inss.jpg",
    title: "Dossiê médico para benefícios do INSS: checklist prático e modelo para download",
    excerpt: "Dossiê médico para INSS: checklist prático com documentos essenciais para facilitar pedido de benefício por incapacidade.",
    date: "18 de abril de 2026",
    category: "Guia Prático",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "revisao-beneficio-incapacidade",
    cluster: "incapacidade" as BlogCluster,
    image: "/blog/revisao-beneficio-incapacidade.jpg",
    title: "Revisão de benefício por incapacidade: quando pedir e como fundamentar o recurso",
    excerpt: "Revisão de benefício por incapacidade: saiba quando requerer, prazos e como fundamentar recurso no INSS.",
    date: "17 de abril de 2026",
    category: "Recursos e Revisões",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "aposentadoria-especial-direito",
    cluster: "aposentadoria-especial" as BlogCluster,
    image: "/blog/aposentadoria-especial-direito.jpg",
    title: "Como saber se tenho direito à aposentadoria especial?",
    excerpt: "Entenda os requisitos e como comprovar que você trabalhou exposto a agentes nocivos à saúde.",
    date: "15 de março de 2025",
    category: "Guia de Benefícios",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "bpc-loas-como-solicitar",
    cluster: "assistencial" as BlogCluster,
    image: "/blog/bpc-loas-como-solicitar.jpg",
    title: "BPC LOAS: quem tem direito e como solicitar",
    excerpt: "Tudo o que você precisa saber sobre o Benefício de Prestação Continuada para idosos e pessoas com deficiência.",
    date: "10 de março de 2025",
    category: "Guia de Benefícios",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "erros-auxilio-doenca",
    cluster: "incapacidade" as BlogCluster,
    image: "/blog/erros-auxilio-doenca.jpg",
    title: "5 erros que fazem o INSS negar o auxílio-doença",
    excerpt: "Conheça os erros mais comuns e saiba como evitá-los na hora de solicitar seu benefício.",
    date: "5 de março de 2025",
    category: "Dicas Práticas",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "aumentar-valor-aposentadoria",
    cluster: "planejamento" as BlogCluster,
    image: "/blog/aumentar-valor-aposentadoria.jpg",
    title: "Como aumentar o valor da sua aposentadoria",
    excerpt: "Estratégias legais para maximizar o valor do seu benefício previdenciário.",
    date: "28 de fevereiro de 2025",
    category: "Dicas Práticas",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "diferenca-aposentadoria-tempo-idade",
    cluster: "aposentadorias" as BlogCluster,
    image: "/blog/diferenca-aposentadoria-tempo-idade.jpg",
    title: "Diferença entre aposentadoria por tempo e por idade",
    excerpt: "Entenda as diferenças entre esses dois tipos de aposentadoria e qual é melhor para você.",
    date: "20 de fevereiro de 2025",
    category: "Guia de Benefícios",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "reforma-previdencia-mudancas",
    cluster: "legislacao" as BlogCluster,
    image: "/blog/reforma-previdencia-mudancas.jpg",
    title: "Reforma da Previdência: o que mudou?",
    excerpt: "Principais mudanças trazidas pela Reforma da Previdência e como elas afetam seus direitos.",
    date: "15 de fevereiro de 2025",
    category: "Atualizações do INSS",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "auxilio-acidente-inss-quem-tem-direito",
    cluster: "acidente" as BlogCluster,
    image: "/blog/auxilio-acidente-inss-quem-tem-direito.jpg",
    title: "Auxílio-Acidente: Quem Tem Direito, Valor do Benefício e Como Solicitar no INSS em 2026",
    excerpt: "Saiba o que é o auxílio-acidente, quem tem direito, valor do benefício e como solicitar no INSS. Guia completo atualizado para trabalhadores e segurados.",
    date: "9 de março de 2026",
    category: "Guia de Benefícios",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "stj-beneficio-lesao-minima",
    cluster: "acidente" as BlogCluster,
    image: "/blog/stj-beneficio-lesao-minima.jpg",
    title: "STJ reconhece direito a benefício mesmo com lesão mínima",
    excerpt: "O Superior Tribunal de Justiça decidiu que basta a existência de lesão que reduza a capacidade para o trabalho habitual, mesmo que mínima, para a concessão do auxílio-acidente.",
    date: "9 de março de 2026",
    category: "Jurisprudência",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "auxilio-acidente",
    cluster: "acidente" as BlogCluster,
    image: "/blog/auxilio-acidente.jpg",
    title: "Auxílio-Acidente: Você Sabia que Placas e Próteses Podem Dar Direito a um Benefício?",
    excerpt: "Você com placa, prótese ou limitação após acidente pode ter direito ao auxílio-acidente do INSS. Saiba como comprovar e pedir o benefício.",
    date: "11 de março de 2026",
    category: "Auxílio-Acidente",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "auxilio-maternidade",
    cluster: "maternidade" as BlogCluster,
    image: "/blog/auxilio-maternidade.jpg",
    title: "Auxílio-maternidade: como garantir seu direito ao benefício do INSS",
    excerpt: "Auxílio-maternidade: entenda quem tem direito, como pedir ao INSS e documentos necessários para garantir o benefício.",
    date: "11 de março de 2026",
    category: "Auxílio-Maternidade",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "documentos-auxilio-acidente-checklist",
    cluster: "acidente" as BlogCluster,
    image: "/blog/documentos-auxilio-acidente-checklist.jpg",
    title: "Documentos essenciais para pedir auxílio-acidente: checklist completo",
    excerpt: "Confira o checklist completo de documentos para pedir auxílio-acidente ao INSS e aumente suas chances de aprovação na perícia.",
    date: "12 de março de 2026",
    category: "Auxílio-Acidente",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "auxilio-acidente-e-dpvat",
    cluster: "acidente" as BlogCluster,
    image: "/blog/auxilio-acidente-e-dpvat.jpg",
    title: "Auxílio-acidente e DPVAT: 7 passos para garantir seus direitos",
    excerpt: "Entenda auxílio-acidente e DPVAT: quem tem direito, como pedir indenização DPVAT e solicitar o benefício do INSS.",
    date: "12 de março de 2026",
    category: "Auxílio-Acidente",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "plano-de-reabilitacao-profissional",
    cluster: "incapacidade" as BlogCluster,
    image: "/blog/plano-de-reabilitacao-profissional.jpg",
    title: "Plano de Reabilitação Profissional e o Papel no Pedido de Benefício: Obrigatoriedade do INSS antes da Aposentadoria por Invalidez",
    excerpt: "Plano de reabilitação profissional: entenda a obrigatoriedade do INSS em oferecer PRP antes da aposentadoria por invalidez e os efeitos da omissão.",
    date: "17 de março de 2026",
    category: "Reabilitação Profissional",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "aposentadoria-do-professor",
    cluster: "aposentadoria-especial" as BlogCluster,
    image: "/blog/aposentadoria-do-professor.jpg",
    title: "Aposentadoria do Professor: Guia Completo das Regras e Opções",
    excerpt: "Aposentadoria do professor: entenda regras, requisitos e opções para docentes da rede pública e privada.",
    date: "17 de março de 2026",
    category: "Aposentadoria",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "pensao-por-morte",
    cluster: "legislacao" as BlogCluster,
    image: "/blog/pensao-por-morte.jpg",
    title: "Pensão por Morte: Guia Completo para Entender Direitos e Como Solicitar",
    excerpt: "Entenda quem tem direito à pensão por morte, requisitos, valor do benefício, documentação necessária e como solicitar no INSS. Guia completo e atualizado.",
    date: "17 de Março de 2026",
    category: "Pensão por Morte",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "conferir-cnis-antes-de-solicitar-aposentadoria",
    cluster: "planejamento" as BlogCluster,
    image: "/blog/conferir-cnis-antes-de-solicitar-aposentadoria.jpg",
    title: "Conferir o CNIS Antes de Pedir Aposentadoria: Por Que é Essencial",
    excerpt: "Importância de conferir o CNIS antes de solicitar aposentadoria: evite erros, garanta tempo de contribuição e maximize seu benefício.",
    date: "18 de Março de 2026",
    category: "Aposentadoria",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "aposentadoria-rural",
    cluster: "aposentadorias" as BlogCluster,
    image: "/blog/aposentadoria-rural.jpg",
    title: "Aposentadoria Rural: Guia Completo para Trabalhadores do Campo",
    excerpt: "Aposentadoria rural: saiba requisitos, tipos, documentos e como solicitar o benefício do INSS para trabalhadores do campo.",
    date: "18 de Março de 2026",
    category: "Aposentadoria Rural",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "aposentadoria-por-idade",
    cluster: "aposentadorias" as BlogCluster,
    image: "/blog/aposentadoria-por-idade.jpg",
    title: "Aposentadoria por Idade: Guia Prático para Garantir Seu Benefício",
    excerpt: "Saiba requisitos, prazos, cálculo e como solicitar a aposentadoria por idade no INSS de forma prática.",
    date: "20 de Março de 2026",
    category: "Aposentadoria por Idade",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "consultar-profissional-antes-pedir-beneficio-previdenciario",
    cluster: "planejamento" as BlogCluster,
    image: "/blog/consultar-profissional-antes-pedir-beneficio-previdenciario.jpg",
    title: "10 Razões para Consultar um Profissional Antes de Pedir um Benefício Previdenciário",
    excerpt: "Descubra por que buscar orientação especializada antes de solicitar um benefício previdenciário pode aumentar suas chances de sucesso e evitar prejuízos.",
    date: "20 de Março de 2026",
    category: "Orientação Previdenciária",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "aposentadoria-pcd",
    cluster: "pcd" as BlogCluster,
    image: "/blog/aposentadoria-pcd.jpg",
    title: "Aposentadoria PCD: Guia Prático para Garantir Seus Direitos",
    excerpt: "Aposentadoria PCD: entenda requisitos, tipos, comprovação da deficiência e como solicitar o benefício no INSS.",
    date: "21 de Março de 2026",
    category: "Aposentadoria PCD",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "aposentadoria-frentista",
    cluster: "aposentadoria-especial" as BlogCluster,
    image: "/blog/aposentadoria-frentista.jpg",
    title: "Aposentadoria Frentista: Guia Completo para Garantir Seus Direitos",
    excerpt: "Saiba as regras, tempo de contribuição, riscos ocupacionais e como solicitar a aposentadoria de frentista no INSS.",
    date: "21 de Março de 2026",
    category: "Aposentadoria Especial",
    author: "Equipe Spier & Anorte"
  }
  ,
  {
    id: "aposentadoria-vigilante",
    cluster: "aposentadoria-especial" as BlogCluster,
    image: "/blog/aposentadoria-vigilante.jpg",
    title: "Aposentadoria Vigilante: Direitos e Como Solicitar",
    excerpt: "Entenda regras, reconhecimento de atividade especial, documentação e como pedir o benefício no INSS sendo vigilante.",
    date: "21 de Março de 2026",
    category: "Aposentadoria Especial",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "aposentadoria-caminhoneiro",
    cluster: "aposentadoria-especial" as BlogCluster,
    image: "/blog/aposentadoria-caminhoneiro.jpg",
    title: "Aposentadoria do Caminhoneiro: Entenda Seus Direitos",
    excerpt: "Guia completo sobre aposentadoria para caminhoneiros: requisitos, cálculos, documentação e dicas para garantir seu benefício no INSS.",
    date: "23 de Março de 2026",
    category: "Aposentadoria",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "aposentadoria-do-pedreiro",
    cluster: "aposentadoria-especial" as BlogCluster,
    image: "/blog/aposentadoria-do-pedreiro.jpg",
    title: "9 Passos Simples para Conquistar a Aposentadoria do Pedreiro sem Perder Tempo!",
    excerpt: "Tudo sobre aposentadoria do pedreiro: regras especiais INSS, tempo de contribuição, cálculo e como solicitar em 2026 para garantir seus direitos.",
    date: "24 de Março de 2026",
    category: "Aposentadoria",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "aposentadoria-operador-maquinas-pesadas",
    cluster: "aposentadoria-especial" as BlogCluster,
    image: "/blog/aposentadoria-operador-maquinas-pesadas.jpg",
    title: "Aposentadoria de Operador de Máquinas Pesadas: Saiba Seus Direitos",
    excerpt: "Saiba tudo sobre a aposentadoria especial do operador de máquinas pesadas: requisitos, documentos, PPP e como garantir seu direito no INSS.",
    date: "25 de Março de 2026",
    category: "Aposentadoria",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "atestmed-auxilio-doenca",
    cluster: "incapacidade" as BlogCluster,
    image: "/blog/atestmed-auxilio-doenca.jpg",
    title: "Atestmed Agora Concede Auxílio-Doença por Até 3 Meses: Entenda as Mudanças",
    excerpt: "O INSS ampliou o prazo do Atestmed para até 90 dias. Saiba como solicitar o auxílio-doença sem perícia presencial e o que fazer se for negado.",
    date: "26 de Março de 2026",
    category: "Auxílio-Doença",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "aposentadoria-dentista-contribuinte-individual",
    cluster: "aposentadoria-especial" as BlogCluster,
    image: "/blog/aposentadoria-dentista.jpg",
    title: "Aposentadoria do Dentista Contribuinte Individual: Guia Completo para Garantir Seus Direitos",
    excerpt: "Dentista autônomo ou dono de clínica? Saiba como funciona a aposentadoria do contribuinte individual dentista, quais são as regras, valores e como um advogado previdenciário pode te ajudar.",
    date: "27 de Março de 2026",
    category: "Aposentadoria Especial",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "reconhecimento-atividade-especial-dentista",
    cluster: "aposentadoria-especial" as BlogCluster,
    image: "/blog/atividade-especial-dentista.jpg",
    title: "Reconhecimento de Atividade Especial para Dentista Contribuinte Individual: O Que a Justiça Já Decidiu",
    excerpt: "O INSS nega administrativamente a aposentadoria especial do dentista autônomo — mas a Justiça garante esse direito. Entenda os precedentes, o Tema 1291 do STJ e como um advogado pode te ajudar.",
    date: "27 de Março de 2026",
    category: "Aposentadoria Especial",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "aposentadoria-pcd-direitos",
    cluster: "pcd" as BlogCluster,
    image: "/blog/aposentadoria-pcd-direitos.jpg",
    title: "Aposentadoria para Pessoa com Deficiência (PCD): Saiba Como Garantir Seu Direito",
    excerpt: "Entenda as regras da aposentadoria PCD, os graus de deficiência, tempo de contribuição exigido e como dar entrada no INSS sem perder seus direitos.",
    date: "28 de Março de 2026",
    category: "Aposentadoria PCD",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "aposentadoria-medico",
    cluster: "aposentadoria-especial" as BlogCluster,
    image: "/blog/aposentadoria-medico.jpg",
    title: "Aposentadoria de Médico: Tudo o Que Você Precisa Saber Para Garantir Seus Direitos",
    excerpt: "Médico pode se aposentar com 25 anos de contribuição especial. Entenda as regras, tipos de aposentadoria e como garantir o melhor benefício no INSS.",
    date: "30 de Março de 2026",
    category: "Aposentadoria Especial",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "atividade-especial-medico-contribuinte-individual",
    cluster: "aposentadoria-especial" as BlogCluster,
    image: "/blog/atividade-especial-medico.jpg",
    title: "Atividade Especial para Médico Contribuinte Individual",
    excerpt: "Requisitos, documentos, comprovação e passo a passo para reconhecer tempo especial junto ao INSS sendo médico autônomo.",
    date: "30 de Março de 2026",
    category: "Aposentadoria Especial",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "doencas-que-geram-direito-aposentadoria-pcd",
    cluster: "pcd" as BlogCluster,
    image: "/blog/doencas-aposentadoria-pcd.jpg",
    title: "Doenças que Geram Direito a Aposentadoria PCD",
    excerpt: "Lista prática de doenças que geram direito à aposentadoria PCD, requisitos, documentos e passo a passo para solicitar junto ao INSS.",
    date: "1 de Abril de 2026",
    category: "Aposentadoria PCD",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "periculosidade-motoboy-entra-em-vigor-hoje",
    cluster: "acidente" as BlogCluster,
    image: "/blog/periculosidade-motoboy.jpg",
    title: "Periculosidade para Motoboys: O Que Muda com a Portaria MTE nº 2.021/2025",
    excerpt: "Entrou em vigor hoje (03/04/2026) o adicional de periculosidade de 30% para motoboys CLT. Saiba quem tem direito, como calcular e o que empresas devem fazer.",
    date: "3 de Abril de 2026",
    category: "Direito Trabalhista",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "atividade-de-risco-motoboy-beneficio-inss-sequelas-permanentes",
    cluster: "acidente" as BlogCluster,
    image: "/blog/atividade-risco-motoboy-beneficio-inss.jpg",
    title: "Atividade de risco de motoboy pode gerar benefício do INSS em caso de acidente com sequelas permanentes?",
    excerpt: "Saiba quando a atividade de risco de motoboy pode gerar benefício do INSS após acidente com sequelas permanentes: direitos, documentos e passos práticos.",
    date: "7 de Abril de 2026",
    category: "Direito Previdenciário",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "fim-da-renovacao-de-laudo-medico-para-autistas",
    cluster: "assistencial" as BlogCluster,
    image: "/blog/fim-renovacao-laudo-autistas.jpg",
    title: "Fim da Renovação de Laudo Médico para Autistas: Impactos Práticos e Orientações",
    excerpt: "Entenda o que muda com o fim da exigência de renovação periódica de laudos médicos para pessoas com TEA, seus impactos nos benefícios do INSS e orientações práticas para famílias.",
    date: "8 de Abril de 2026",
    category: "Direito Previdenciário",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "beneficios-por-incapacidade-no-inss",
    cluster: "incapacidade" as BlogCluster,
    image: "/blog/beneficios-por-incapacidade-inss.jpg",
    title: "Benefícios por incapacidade no INSS: guia completo para ter seus direitos garantidos",
    excerpt: "Benefícios por incapacidade no INSS — entenda requisitos, documentos e como solicitar para garantir seus direitos.",
    date: "10 de Abril de 2026",
    category: "Direito Previdenciário",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "auxilio-doenca-requisitos",
    cluster: "incapacidade" as BlogCluster,
    image: "/blog/auxilio-doenca-requisitos.jpg",
    title: "Auxílio-doença: quem tem direito, documentos e passo a passo para solicitar",
    excerpt: "Auxílio-doença: aprenda quem tem direito, quais documentos reunir e como solicitar ao INSS.",
    date: "10 de Abril de 2026",
    category: "Direito Previdenciário",
    author: "Equipe Spier & Anorte"
  },
  {
    id: "aposentadoria-por-invalidez-como-pedir",
    cluster: "incapacidade" as BlogCluster,
    image: "/blog/aposentadoria-por-invalidez.jpg",
    title: "Aposentadoria por invalidez: condições, provas e como requerer ao INSS",
    excerpt: "Saiba quando pedir aposentadoria por invalidez, quais provas apresentar e como proceder no INSS para garantir seus direitos.",
    date: "11 de Abril de 2026",
    category: "Benefícios por Incapacidade",
    author: "Dra. Fabíola Marques"
  },
  {
    id: "pericia-medica-inss-como-preparar",
    cluster: "incapacidade" as BlogCluster,
    image: "/blog/pericia-medica-inss.jpg",
    title: "Perícia médica do INSS: dicas práticas para se preparar e evitar indeferimentos",
    excerpt: "Saiba como se preparar para a perícia médica do INSS, que documentos levar e como aumentar as chances de concessão do benefício.",
    date: "14 de Abril de 2026",
    category: "Benefícios por Incapacidade",
    author: "Spier & Anorte Advogados"
  },
  {
    id: "bpc-vs-beneficios-inss",
    cluster: "assistencial" as BlogCluster,
    image: "/blog/bpc-vs-beneficios-inss.jpg",
    title: "BPC vs. benefícios do INSS: entenda as diferenças e quem tem direito",
    excerpt: "BPC x benefícios do INSS por incapacidade: diferenças, requisitos e como escolher o melhor caminho.",
    date: "2025-07-15",
    category: "BPC/LOAS",
    author: "Spier & Anorte Advogados"
  },
  {
    id: "reabilitacao-profissional-inss",
    cluster: "incapacidade" as BlogCluster,
    image: "/blog/reabilitacao-profissional-inss.jpg",
    title: "Reabilitação profissional do INSS: direitos, procedimentos e como acessar",
    excerpt: "Reabilitação profissional INSS: conheça os direitos, etapas do programa e como solicitar apoio para retornar ao trabalho.",
    date: "2025-07-20",
    category: "Benefícios por Incapacidade",
    author: "Spier & Anorte Advogados"
  },
  {
    id: "trf4-amplia-tempo-rural-mantem-atividade-especial",
    cluster: "aposentadoria-especial" as BlogCluster,
    image: "/blog/trf4-rural-especial-reconhecimento.jpg",
    title: "TRF4 amplia tempo rural e mantém atividade especial: o que essa decisão significa para sua aposentadoria",
    excerpt: "Decisão do TRF4 reconhece trabalho rural desde 1982 com base em documentos familiares e mantém atividade especial mesmo com falhas formais no PPP. Entenda o impacto para segurados do INSS.",
    date: "6 de maio de 2026",
    category: "Aposentadoria Especial",
    author: "Equipe Spier & Anorte"
  }
,
  {
    id: "contribuindo-errado-para-o-inss",
    image: "/blog/contribuindo-errado-para-o-inss.jpg",
    title: "Contribuindo errado para o INSS? Como descobrir antes que seja tarde",
    excerpt: "Muita gente contribui para o INSS sem saber que está fazendo errado — e só descobre na hora de se aposentar. Veja como identificar falhas antes que virem problemas.",
    date: "15 de maio de 2026",
    category: "Aposentadoria",
    author: "Equipe Spier & Anorte",
    conteudo_ref: "post_contribuindo_errado_para_o_inss",
  }
,
  {
    id: "auxilio-acidente-o-que-e-quem-tem-direito",
    image: "/blog/auxilio-acidente-o-que-e-quem-tem-direito.jpg",
    title: "Auxílio-acidente: o benefício previdenciário que ninguém te contou",
    excerpt: "Teve um acidente, se recuperou, mas ficou com alguma limitação? O auxílio-acidente existe para esse caso — e a maioria das pessoas não sabe que tem direito.",
    date: "18 de maio de 2026",
    category: "Benefícios por Incapacidade",
    author: "Equipe Spier & Anorte",
    conteudo_ref: "post_auxilio_acidente_o_que_e_quem_tem_direito",
  }
,
  {
    id: "tipos-de-acidente-que-dao-auxilio-acidente",
    image: "/blog/tipos-de-acidente-que-dao-auxilio-acidente.jpg",
    title: "Quais acidentes dão direito ao auxílio-acidente? Os 3 tipos",
    excerpt: "Nem todo acidente gera auxílio-acidente — mas a lei é mais abrangente do que parece. Conheça os 3 tipos de acidente reconhecidos e se o seu se encaixa.",
    date: "20 de maio de 2026",
    category: "Benefícios por Incapacidade",
    author: "Equipe Spier & Anorte",
    conteudo_ref: "post_tipos_de_acidente_que_dao_auxilio_acidente",
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === slug);
};

export const getRelatedPosts = (currentId: string, maxPosts: number = 3): BlogPost[] => {
  const current = blogPosts.find(p => p.id === currentId);
  if (!current) return [];
  const sameCluster = current.cluster
    ? blogPosts.filter(p => p.id !== currentId && p.cluster === current.cluster)
    : [];
  if (sameCluster.length >= maxPosts) {
    return sameCluster.slice(-maxPosts).reverse();
  }
  // Fallback: complete with other posts so newly added posts (sem cluster) sempre exibam relacionados
  const others = blogPosts.filter(
    p => p.id !== currentId && !sameCluster.find(s => s.id === p.id)
  );
  return [...sameCluster.slice(-maxPosts).reverse(), ...others].slice(0, maxPosts);
};
