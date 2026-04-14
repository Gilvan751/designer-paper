---
inclusion: manual
---

# Deploy Workflow — GitHub + Vercel

Guia completo de tudo que foi configurado e como operar o projeto do zero.

---

## Estado Atual do Projeto

| Item | Status | Detalhe |
|---|---|---|
| Repositório GitHub | ✅ Ativo | `designer-paper` |
| Deploy Vercel | ✅ Ativo | `designer-paper.vercel.app` |
| CI/CD | ✅ Automático | Cada `git push` → redeploy |
| `gh` CLI | ✅ Instalado | PowerShell apenas |
| Autenticação GitHub | ✅ HTTPS | `gh auth login` feito |

---

## URLs em Produção

| Landing | URL |
|---|---|
| The New | `https://designer-paper.vercel.app` |
| Pluma | `https://designer-paper.vercel.app/pluma` |
| PaperPlugin | `https://designer-paper.vercel.app/templatemonster` |

---

## Estrutura de Arquivos

```
Designer Paper/
├── .env                          ← variáveis locais (NÃO commitado)
├── .env.example                  ← estrutura sem valores (commitado)
├── .gitignore                    ← arquivos ignorados pelo Git
├── vercel.json                   ← rotas, cache e headers de segurança
├── landing-thenew/
│   ├── index.html
│   ├── styles.css
│   └── scripts.js
├── landing-pluma/
│   ├── index.html
│   ├── styles.css
│   └── scripts.js
└── landing-templatemonster/
    ├── index.html
    ├── styles.css
    └── scripts.js
```

---

## Fluxo de Trabalho Diário

### Fazer uma alteração e publicar

```powershell
git add .
git commit -m "fix: descrição do que mudou"
git push
```

A Vercel detecta o push e faz redeploy automático em menos de 1 minuto.

### Criar um projeto novo do zero

```powershell
git init
git add .
git commit -m "feat: descrição do projeto"
gh repo create nome-do-projeto --public --push --source=.
```

---

## Configuração do vercel.json

O arquivo `vercel.json` na raiz controla:

- **Rewrites** — mapeia URLs limpas para os arquivos HTML
- **Headers de segurança** — X-Frame-Options, XSS Protection etc.
- **Cache** — CSS/JS ficam em cache por 1 ano, HTML nunca fica em cache

```json
{
  "rewrites": [
    { "source": "/",               "destination": "/landing-thenew/index.html" },
    { "source": "/thenew",         "destination": "/landing-thenew/index.html" },
    { "source": "/pluma",          "destination": "/landing-pluma/index.html" },
    { "source": "/templatemonster","destination": "/landing-templatemonster/index.html" }
  ]
}
```

Para adicionar uma nova landing page:
1. Cria a pasta `landing-nomedoprojeto/` com `index.html`, `styles.css`, `scripts.js`
2. Adiciona o rewrite no `vercel.json`
3. Garante que os caminhos de CSS e JS no HTML são absolutos: `/landing-nomedoprojeto/styles.css`
4. Faz `git push`

---

## Variáveis de Ambiente

| Variável | Valor | Onde fica |
|---|---|---|
| `SITE_URL` | `https://designer-paper.vercel.app` | Vercel Dashboard + `.env` local |

Para adicionar nova variável:
- **Local:** edita o arquivo `.env`
- **Produção:** Vercel Dashboard → Settings → Environment Variables

---

## Configuração do gh CLI (PowerShell)

O `gh` foi instalado como admin e o PATH foi corrigido manualmente.

Se abrir um PowerShell novo e o `gh` não funcionar, roda:

```powershell
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
```

O executável fica em: `C:\Program Files\GitHub CLI\gh.exe`

---

## Diferença entre Rotas e Subdomínios

| Tipo | Exemplo | Quando usar |
|---|---|---|
| Rota (atual) | `designer-paper.vercel.app/pluma` | Portfólio, projetos relacionados |
| Subdomínio | `pluma.seudominio.com.br` | Produtos independentes, domínio próprio |

Para ter subdomínios reais é necessário um domínio próprio configurado na Vercel.

---

## Próximos Passos Sugeridos

- [ ] Adicionar domínio próprio na Vercel (ex: `gilvan.com.br`)
- [ ] Criar formulário de email funcional com Resend ou Mailchimp
- [ ] Migrar para Next.js quando precisar de backend ou CMS
- [ ] Adicionar Google Analytics (`NEXT_PUBLIC_GA_ID` no `.env`)
- [ ] Criar página índice em `/` com links para as 3 landings
