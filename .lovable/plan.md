
## Plano de Atualizações do Site

### Resumo das Alterações
Este plano implementa 5 alterações principais: favicon, atualizações do rodapé, e sistema de páginas de leitura para o blog.

---

### 1. Favicon do Site
**Arquivo:** `index.html` e `public/favicon.png`

- Copiar a imagem enviada (`user-uploads://1.png`) para `public/favicon.png`
- Atualizar o `index.html` para referenciar o novo favicon:
```html
<link rel="icon" href="/favicon.png" type="image/png">
```

---

### 2. Remover Redes Sociais do Rodapé
**Arquivo:** `src/components/Footer.tsx`

- Remover os ícones e links de Facebook, Instagram e LinkedIn (linhas 21-31)
- Remover as importações não utilizadas de `Facebook`, `Instagram`, `Linkedin` do lucide-react

---

### 3. Atualizar Seção de Contato no Rodapé
**Arquivo:** `src/components/Footer.tsx`

Alterar o título de "Contato" para "Contato e Informações" e atualizar os dados:

| Campo | Valor Atual | Novo Valor |
|-------|-------------|------------|
| Título | Contato | Contato e Informações |
| Telefone | (11) 99999-9999 | (54) 99987-0786 |
| E-mail | contato@direitoprevidenciario.com.br | cassio@spiereanorte.adv.br |

Adicionar os registros OAB dos advogados:
- **Cassio Fraga Anorte** : OAB/RS 73.679
- **Rodrigo Fernando Shoeler Spier** : OAB/RS 70.421

---

### 4. Remover OAB Antigo do Rodapé
**Arquivo:** `src/components/Footer.tsx`

- Remover o badge "OAB/SP 123.456" da barra inferior do rodapé (linha 150)
- Manter apenas o badge "Dados Protegidos"

---

### 5. Sistema de Páginas de Leitura do Blog

#### 5.1 Criar Arquivo de Dados dos Posts
**Novo arquivo:** `src/data/blogPosts.ts`

Centralizar os dados dos posts do blog com campos completos:
- `id` (slug para URL)
- `title`
- `excerpt`
- `content` (texto completo do artigo)
- `date`
- `category`
- `author`

#### 5.2 Criar Página de Leitura Individual
**Novo arquivo:** `src/pages/BlogPost.tsx`

Página dedicada para leitura de cada artigo contendo:
- Título do post
- Data e categoria
- Conteúdo completo formatado
- Botão de CTA para WhatsApp
- Link para voltar ao blog

#### 5.3 Atualizar Página do Blog
**Arquivo:** `src/pages/Blog.tsx`

- Importar dados do novo arquivo centralizado
- Adicionar links (`<Link>`) nos cards para navegar até a página de leitura

#### 5.4 Adicionar Rota no App
**Arquivo:** `src/App.tsx`

```tsx
import BlogPost from "./pages/BlogPost";
// ...
<Route path="/blog/:slug" element={<BlogPost />} />
```

---

### Estrutura Final de Navegação do Blog

```text
/blog               --> Lista de todos os posts (Blog.tsx)
/blog/:slug         --> Página de leitura individual (BlogPost.tsx)

Exemplos:
/blog/aposentadoria-especial-direito
/blog/bpc-loas-como-solicitar
/blog/erros-auxilio-doenca
```

---

### Arquivos a Serem Modificados/Criados

| Arquivo | Ação |
|---------|------|
| `public/favicon.png` | Criar (copiar imagem) |
| `index.html` | Modificar (adicionar link favicon) |
| `src/components/Footer.tsx` | Modificar (várias alterações) |
| `src/data/blogPosts.ts` | Criar (dados centralizados) |
| `src/pages/BlogPost.tsx` | Criar (página de leitura) |
| `src/pages/Blog.tsx` | Modificar (adicionar links) |
| `src/App.tsx` | Modificar (nova rota) |

---

### Sobre Links do WhatsApp
O link `https://api.whatsapp.com/send?phone=5554999870786` **não existe** no código atual. Todos os botões já estão usando o link correto: `https://wa.link/hdn70i`
