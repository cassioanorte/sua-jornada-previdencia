
## Atualizar o Favicon do Site

### O que sera feito
Substituir o favicon atual do site pela imagem do logo SA enviada, garantindo que todas as paginas utilizem o novo icone.

### Passos

1. **Copiar a imagem enviada** para o diretorio `public/` como `favicon.png`
2. **Atualizar o `index.html`** para garantir que a referencia ao favicon esteja dentro da tag `<head>` (atualmente esta dentro do `<body>`, o que sera corrigido)

### Detalhes tecnicos

- Mover a tag `<link rel="icon">` do `<body>` para o `<head>`
- Referencia: `<link rel="icon" href="/favicon.png" type="image/jpeg">`
- Nenhuma alteracao em layout, estilos ou scripts
- Compativel com todos os navegadores modernos
