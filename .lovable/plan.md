

## Plano: Criar sitemap.xml completo

### O que será feito
Criar um arquivo `public/sitemap.xml` estático com todas as URLs do site, incluindo:
- Página inicial e páginas institucionais (6 URLs)
- Páginas de serviços previdenciários (9 URLs)
- Páginas de quiz (3 URLs)
- 21 landing pages de cidades
- Página do blog + 14 posts individuais
- **Total: ~53 URLs**

### Detalhes técnicos

**Arquivo:** `public/sitemap.xml`
- Base URL: `https://direitoprevidenciario.com.br`
- Páginas principais com `priority` 1.0 e `changefreq` monthly
- Páginas de serviços com `priority` 0.8
- Landing pages de cidades com `priority` 0.7
- Blog posts com `priority` 0.6
- Data `lastmod` definida como a data atual

**Arquivo:** `public/robots.txt` (atualizar)
- Adicionar linha `Sitemap: https://direitoprevidenciario.com.br/sitemap.xml`

### Arquivos
- **Criar:** `public/sitemap.xml`
- **Modificar:** `public/robots.txt` (adicionar referência ao sitemap)

