

## Plano: Sistema de Quiz de Qualificação

Vou criar um sistema de quiz interativo com landing pages dedicadas para Auxílio Doença e Auxílio Maternidade, permitindo que clientes descubram se têm direito ao benefício.

---

### Estrutura do Sistema

```text
/quiz-auxilio-doenca        --> Quiz Auxílio Doença
/quiz-auxilio-maternidade   --> Quiz Auxílio Maternidade
```

Cada quiz terá:
- Barra de progresso visual
- Perguntas com opções de múltipla escolha
- Resultado personalizado baseado nas respostas
- CTA para WhatsApp ao final

---

### 1. Componente Reutilizável de Quiz
**Novo arquivo:** `src/components/Quiz.tsx`

Componente genérico que recebe:
- Lista de perguntas com opções
- Lógica de pontuação
- Mensagens de resultado personalizadas

Funcionalidades:
- Navegação entre perguntas (próximo/anterior)
- Barra de progresso animada
- Transições suaves entre etapas
- Tela de resultado com qualificação

---

### 2. Landing Page - Quiz Auxílio Doença
**Novo arquivo:** `src/pages/QuizAuxilioDoenca.tsx`

Perguntas do quiz:

| # | Pergunta | Opções |
|---|----------|--------|
| 1 | Você contribui ou já contribuiu para o INSS? | Sim, atualmente / Sim, mas parei / Nunca contribuí |
| 2 | Há quanto tempo você contribui/contribuiu? | Menos de 1 ano / 1 a 5 anos / Mais de 5 anos |
| 3 | Você está impossibilitado de trabalhar por doença ou acidente? | Sim, totalmente / Parcialmente / Não |
| 4 | Há quanto tempo está afastado ou com dificuldade para trabalhar? | Menos de 15 dias / 15 a 30 dias / Mais de 30 dias |
| 5 | Possui laudos ou atestados médicos? | Sim, atualizados / Sim, antigos / Não tenho |

Resultados possíveis:
- **Alta probabilidade**: Você atende aos requisitos principais!
- **Média probabilidade**: Alguns pontos precisam ser avaliados
- **Necessita análise**: Recomendamos uma consulta para avaliar seu caso

---

### 3. Landing Page - Quiz Auxílio Maternidade
**Novo arquivo:** `src/pages/QuizAuxilioMaternidade.tsx`

Perguntas do quiz:

| # | Pergunta | Opções |
|---|----------|--------|
| 1 | Qual sua situação de trabalho atual? | CLT / Autônoma/MEI / Desempregada / Trabalhadora rural |
| 2 | Você contribui ou já contribuiu para o INSS? | Sim, atualmente / Sim, mas parei / Nunca contribuí |
| 3 | Há quanto tempo contribui/contribuiu? | Menos de 10 meses / 10 meses a 2 anos / Mais de 2 anos |
| 4 | Qual o motivo do benefício? | Nascimento de filho / Adoção / Guarda judicial |
| 5 | Já deu entrada no pedido do benefício? | Não ainda / Sim, aguardando / Sim, foi negado |

Resultados possíveis:
- **Alta probabilidade**: Você provavelmente tem direito!
- **Média probabilidade**: Vamos analisar alguns detalhes
- **Necessita análise**: Seu caso precisa de avaliação especializada

---

### 4. Atualizar Rotas
**Arquivo:** `src/App.tsx`

Adicionar novas rotas:
```tsx
<Route path="/quiz-auxilio-doenca" element={<QuizAuxilioDoenca />} />
<Route path="/quiz-auxilio-maternidade" element={<QuizAuxilioMaternidade />} />
```

---

### 5. Links nas Páginas de Serviço
**Arquivos:** `AuxilioDoenca.tsx` e `AuxilioMaternidade.tsx`

Adicionar botão "Faça o Quiz" que direciona para as landing pages do quiz.

---

### Design Visual do Quiz

```text
┌────────────────────────────────────────┐
│           HEADER DO SITE               │
├────────────────────────────────────────┤
│                                        │
│   🩺 Quiz: Você tem direito ao         │
│      Auxílio Doença?                   │
│                                        │
│   ████████░░░░░░░░░░░░  40%           │
│                                        │
│   Pergunta 2 de 5                      │
│                                        │
│   Há quanto tempo você contribui       │
│   ou já contribuiu para o INSS?        │
│                                        │
│   ┌──────────────────────────┐        │
│   │ ○ Menos de 1 ano         │        │
│   └──────────────────────────┘        │
│   ┌──────────────────────────┐        │
│   │ ○ 1 a 5 anos             │        │
│   └──────────────────────────┘        │
│   ┌──────────────────────────┐        │
│   │ ● Mais de 5 anos         │  ✓     │
│   └──────────────────────────┘        │
│                                        │
│   [ ← Anterior ]     [ Próximo → ]    │
│                                        │
├────────────────────────────────────────┤
│              FOOTER                    │
└────────────────────────────────────────┘
```

---

### Tela de Resultado

```text
┌────────────────────────────────────────┐
│                                        │
│   ✅ Boa notícia!                      │
│                                        │
│   Você tem ALTA PROBABILIDADE          │
│   de ter direito ao Auxílio Doença!    │
│                                        │
│   Baseado nas suas respostas:          │
│   • Contribuinte ativo                 │
│   • Tempo de contribuição adequado     │
│   • Incapacidade comprovada            │
│                                        │
│   ┌──────────────────────────┐        │
│   │ 📱 Falar com Advogado    │        │
│   │    pelo WhatsApp         │        │
│   └──────────────────────────┘        │
│                                        │
│   [ Refazer Quiz ]                     │
│                                        │
└────────────────────────────────────────┘
```

---

### Arquivos a Serem Criados/Modificados

| Arquivo | Ação |
|---------|------|
| `src/components/Quiz.tsx` | Criar (componente reutilizável) |
| `src/pages/QuizAuxilioDoenca.tsx` | Criar |
| `src/pages/QuizAuxilioMaternidade.tsx` | Criar |
| `src/pages/AuxilioDoenca.tsx` | Modificar (adicionar link) |
| `src/pages/AuxilioMaternidade.tsx` | Modificar (adicionar link) |
| `src/App.tsx` | Modificar (novas rotas) |

---

### Benefícios do Sistema

- **Qualificação automática**: Filtra leads antes do contato
- **Experiência interativa**: Engaja o visitante
- **Conversão otimizada**: CTA no momento certo
- **Reutilizável**: O componente Quiz pode ser usado para outros benefícios no futuro

