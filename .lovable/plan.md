

## Plano: Adicionar Imagens Geradas por IA aos Cards do Blog

### O que será feito
Gerar automaticamente ~15 imagens temáticas (uma por post) usando IA e adicioná-las aos cards do blog. Você não precisa inserir nada manualmente.

### Como funciona
1. **Gerar imagens por IA** — Para cada post, gero uma imagem profissional relacionada ao tema (ex: documentos previdenciários, pessoa idosa, trabalhador rural, etc.) usando o modelo de geração de imagens
2. **Salvar as imagens** na pasta `public/blog/` do projeto
3. **Adicionar campo `image`** na interface BlogPost em `src/data/blogPosts.ts`
4. **Atualizar cada post** com o caminho da imagem correspondente
5. **Atualizar o card do Blog** (`src/pages/Blog.tsx`) para exibir a imagem no topo de cada card

### Visual do card atualizado
```text
┌─────────────────────┐
│  [Imagem gerada IA] │
├─────────────────────┤
│ [Categoria]         │
│ Título do Post      │
│ Resumo breve...     │
│ 📅 Data        →    │
└─────────────────────┘
```

### Arquivos
- **Criar:** ~15 imagens em `public/blog/`
- **Modificar:** `src/data/blogPosts.ts` (adicionar campo image + caminhos)
- **Modificar:** `src/pages/Blog.tsx` (renderizar imagem no card)

