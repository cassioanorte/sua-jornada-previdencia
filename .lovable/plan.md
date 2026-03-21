

## Plano: Landing Pages por Cidade — Serra Gaúcha (10 cidades)

### Objetivo
Criar 10 landing pages otimizadas para SEO, uma para cada cidade da Serra Gaúcha, para ranquear em buscas como "advogado previdenciário em [cidade]".

### Cidades
Gramado, Canela, Nova Petrópolis, Caxias do Sul, Bento Gonçalves, São Francisco de Paula, Carlos Barbosa, Garibaldi, Farroupilha, Flores da Cunha.

### Estrutura de cada página

Cada página seguirá o mesmo layout das páginas de serviço existentes (Header, Hero, conteúdo, CTA, Footer) com conteúdo personalizado por cidade:

- **URL:** `/advogado-previdenciario-[cidade]` (ex: `/advogado-previdenciario-gramado`)
- **Hero:** "Advogado Previdenciário em [Cidade] - Spier & Anorte"
- **Seções:**
  1. Apresentação do escritório e atuação na cidade
  2. Lista de serviços oferecidos (aposentadorias, auxílios, BPC/LOAS, pensão)
  3. Diferenciais (13+ anos de experiência, atendimento presencial/online, equipe com OABs)
  4. Para cidades com escritório físico (Gramado, Nova Petrópolis): endereço destacado
  5. Para demais cidades: menção de proximidade e atendimento presencial/online
  6. CTA WhatsApp
- **Meta tags SEO:** title, description e keywords personalizados por cidade

### Implementação técnica

1. **Criar arquivo de dados das cidades** (`src/data/cityPages.ts`) com informações de cada cidade (nome, slug, descrição personalizada, se tem escritório físico, distância aproximada)

2. **Criar componente de template** (`src/pages/CityLandingPage.tsx`) — uma única página que recebe os dados da cidade via parâmetro de rota e renderiza conteúdo personalizado

3. **Adicionar rota dinâmica** no `App.tsx`: `/advogado-previdenciario/:city`

4. **Adicionar links no Footer** — seção "Atendemos na Serra Gaúcha" com links para todas as cidades

5. **Meta tags dinâmicas** — usar `document.title` e meta description por cidade via `useEffect`

### Nota sobre abordagem
Usaremos uma **página dinâmica com dados estáticos por cidade** — cada cidade tem conteúdo único no arquivo de dados (não é conteúdo duplicado), mas usa um único componente React. Isso dá o melhor equilíbrio entre SEO (conteúdo único por cidade) e manutenibilidade (um só template).

### Arquivos a criar/modificar
- **Criar:** `src/data/cityPages.ts` (dados das 10 cidades)
- **Criar:** `src/pages/CityLandingPage.tsx` (template da landing page)
- **Modificar:** `src/App.tsx` (adicionar rota)
- **Modificar:** `src/components/Footer.tsx` (adicionar seção de cidades)

