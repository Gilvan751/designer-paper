---
inclusion: always
---

# Designer Paper — Projetos Construídos

Contexto completo de tudo que foi criado neste workspace. Use como referência rápida ao retomar o trabalho.

---

## Estrutura de Pastas

```
Designer Paper/
├── landing-templatemonster/
│   └── index.html          ← Landing PaperPlugin (PT-BR, copy persuasivo)
├── landing-pluma/
│   └── index.html          ← Landing Pluma (fintech IA, animações)
└── landing-thenew/
    └── index.html          ← Landing The New (jornal digital)
```

---

## 1. landing-templatemonster

**Produto:** PaperPlugin — importa design systems de qualquer site para o Paper  
**Framework copy:** PAS (Problema → Agitação → Solução)  
**Idioma:** Português do Brasil

### Design System
| Token | Valor |
|---|---|
| Cor primária | `#2D394B` (azul escuro) |
| Cor acento | `#31AF36` (verde) |
| Cor destaque | `#F9430A` (laranja) |
| Texto muted | `#B0BEC5` |
| Fonte | Inter |
| Botões | `border-radius: 6px` |

### Seções
1. **Navbar** — logo + links + botões entrar/começar grátis
2. **Hero** — H1 "Pare de recriar design systems do zero", badge animado, 2 CTAs
3. **Stats Bar** — verde `#31AF36`, 4 métricas (50K+, 200K+, 4.9★, 2min)
4. **Features** — 3 cards: Variáveis de Cor, Tipografia, Tokens de Espaçamento
5. **How It Works** — 3 passos com linha conectora
6. **Pricing** — Free / Pro (destacado) / Enterprise
7. **Testimonials** — 3 cards com avatares coloridos
8. **CTA Final** — fundo verde, 2 botões
9. **Footer** — fundo `#243238`, 3 colunas de links

### Recursos técnicos
- Scroll reveal com `IntersectionObserver` em todos os elementos
- Hover lift nos cards (`translateY(-6px)`)
- Botões com `box-shadow` verde no hover

---

## 2. landing-pluma

**Produto:** Pluma — assistente financeiro com IA (Open Finance + chat)  
**Público:** Brasileiros que querem entender suas finanças sem complicação  
**Framework copy:** BAB (Before → After → Bridge)

### Design System (tokens do design.json)
| Token | Valor |
|---|---|
| Forest (primário) | `#1C3F3A` |
| Lime (acento) | `#C4F233` |
| Cream | `#F8F7F2` |
| Warm gradient | `#EBE8D8` |
| Texto primário | `#0A0F1C` |
| Texto secundário | `#4A5568` |
| Fonte | Inter |
| Botões | `border-radius: 9999px` (pill) |
| Cards | `border-radius: 24px` |

### Seções
1. **Navbar** — sticky, blur, botões pill
2. **Hero** — 55/45 split, H1 word-by-word reveal, phone mockup inclinado
3. **Why Pluma** — fundo cream, 3 feature cards com hover lift
4. **Chat Demo** — fundo `#1C3F3A`, chat UI com 5 suggestion chips
5. **Safety** — gradiente warm, 2×2 grid de trust cards
6. **CTA Final** — card `#1C3F3A` com checklist + botão lime
7. **Footer** — fundo `#0A0F1C`, badges Open Finance + LGPD

### Recursos técnicos
- **Phone mockup inclinado** `rotate(-8deg)` com `drop-shadow`
- **Floating card 1** — animação `floatA` 3.2s (Meta atingida!)
- **Floating card 2** — animação `floatB` 3.8s delay 0.6s (R$ 2.800)
- **Hero title** — palavras aparecem uma a uma com `transition-delay` escalonado
- **Online dot** — pulse animado `pulse-dot` 2s
- Scroll reveal geral com `IntersectionObserver`

---

## 3. landing-thenew

**Produto:** The New — maior jornal digital do Brasil (newsletter gratuita)  
**Site original:** thenewscc.com.br  
**Estilo:** Editorial minimalista, tipografia gigante

### Design System (tokens do TSX extraído)
| Token | Valor |
|---|---|
| Accent/preto | `#111111` |
| Amarelo | `#F9D029` |
| Amarelo hover | `#e8c020` |
| Background | `#FFFFFF` |
| Gray 100 | `#F5F5F5` |
| Border | `#E5E7EB` |
| Fonte | `Helvetica Now Display` / `Helvetica Neue` |
| H1 | `120px`, weight 600, letter-spacing `-0.04em` |
| H2 | `52px`, weight 700 |
| Botões | `border-radius: 9999px` (pill) |
| Cards | `border-radius: 8px` |
| Transição | `0.15s cubic-bezier(0.4, 0, 0.2, 1)` |

### Seções
1. **Navbar** — logo `thenew` (amarelo no "new"), links + botões pill
2. **Hero** — H1 120px "o **maior** jornal digital do país", form email pill
3. **Ticker** — fundo preto, categorias em branco/amarelo, animação scroll
4. **Stats Bar** — 4 métricas com números grandes e accent amarelo
5. **Problem** — 2 colunas: texto + inbox visual (The New vs. emails chatos)
6. **Features** — grid 3×2 com numeração amarela estilo editorial
7. **Testimonials** — fundo `#F5F5F5`, 3 cards com avatares
8. **CTA Final** — fundo `#111111`, H1 100px "comece a ler **hoje**"
9. **Footer** — branco, 3 colunas, bottom bar com legal links

### Recursos técnicos
- Ticker com animação CSS `@keyframes tick` infinita
- Inbox visual com `border-left: 3px solid #F9D029` no item destacado
- Itens "chatos" com `opacity: 0.38`
- FAQ accordion com `toggle()` JS
- Scroll reveal com `IntersectionObserver`

---

## Artboards no Paper

| Artboard | ID | Dimensões |
|---|---|---|
| Landing Page — TemplateMonster | `2-0` | 1440 × 5200px |
| Pluma — Landing Page | `7N-0` | 1440 × 4200px |
| The New — Landing Page | `EN-0` | 1440 × 4800px |

---

## Padrões Reutilizáveis

### Scroll Reveal (todos os projetos)
```js
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); });
}, { threshold: 0.1 });
document.querySelectorAll('.r').forEach(el => obs.observe(el));
```

### Email Form Pill
```html
<div style="display:flex;border:1.5px solid #E5E7EB;border-radius:9999px;overflow:hidden;">
  <input type="email" placeholder="seu email" />
  <button>inscreva-se</button>
</div>
```

### Floating Card Animation (Pluma)
```css
@keyframes floatA {
  0%, 100% { transform: translateY(0px) rotate(-2deg); }
  50%       { transform: translateY(-14px) rotate(-2deg); }
}
```

### Word-by-word Reveal (Pluma hero)
```js
const words = title.split(' ');
el.innerHTML = words.map((w, i) =>
  `<span style="transition-delay:${i * 0.06}s">${w} </span>`
).join('');
setTimeout(() => el.querySelectorAll('span').forEach(s => s.classList.add('show')), 300);
```

---

## Próximos Passos Sugeridos

- [ ] Adicionar seção de edições recentes na landing The New
- [ ] Criar versão mobile das 3 landings
- [ ] Adicionar tabela comparativa na landing TemplateMonster
- [ ] Criar componente de FAQ na landing Pluma
- [ ] Exportar design tokens do Paper para CSS variables
