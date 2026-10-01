# Rede Solidária

SPA demonstrativa em HTML, CSS e JavaScript nativo, com telas Início, Projetos e Cadastro. Não representa uma organização real. O formulário apenas verifica os campos; não envia nem guarda nome e e-mail.

## Pré-requisitos

- Node.js 22 (mesma versão dos workflows)
- npm 10+

## Instalação

```bash
npm ci
```

## Comandos

```bash
# testes + verificações de sintaxe
npm run check

# build de produção (Vite + minificação explícita de HTML)
npm run build

# pré-visualizar o dist localmente
npm run preview
```

## Publicação no GitHub Pages

- O build usa `base: '/rede-solidaria/'` (arquivo `vite.config.js`), mantendo navegação por hash (`#/`).
- O workflow `.github/workflows/pages.yml` executa checks, gera `dist` e só publica em push para `main`.
- Antes de publicar de fato no repositório, é necessário configurar manualmente em **Settings > Pages**:
  - Source: **GitHub Actions**
  - Branch padrão correta (`main`) e permissões de Actions habilitadas no repositório.
- Este repositório mantém o workflow `checks.yml` intacto; o deploy foi separado em workflow próprio.

## Usar

Navegue pelos links Início, Projetos e Cadastro. Em Projetos, o seletor filtra cards e guarda apenas a categoria escolhida no `localStorage`. Em Cadastro, preencha nome, e-mail e área de interesse e use Verificar cadastro. O formulário demonstra validação local; não existe backend ou inscrição real.

## Estrutura e manutenção

- `index.html`: ponto de entrada e região `#app`.
- `css/estilos.css`: estilos e estados visuais.
- `js/app.js`: inicia o roteador.
- `js/router.js`: rotas por hash, renderização e limpeza de listeners específicos.
- `js/templates.js`: telas e dados de exemplo, incluindo a imagem da página inicial.
- `js/projetos.js`: filtro e cards.
- `js/cadastro.js`: validação e retorno acessível.
- `js/storage.js`: lê e grava somente a categoria de projetos.
- `public/imagens/oficina-inclusao-digital.webp`: imagem ilustrativa otimizada para produção.
- `.github/workflows/pages.yml`: checks + build + deploy para GitHub Pages via Actions.

Para modificar telas e categorias, mantenha sincronizados `templates.js` e a lista de valores aceitos em `storage.js`. Atualize a documentação e faça alterações em branch própria; abra um PR para revisão antes de integrar à `main`. Nunca salve dados pessoais no armazenamento do navegador.

## Verificação antes da publicação

- Testar por teclado: ordem de foco, foco visível, links e campos do formulário.
- Testar navegação por hash e histórico Voltar/Avançar.
- Testar filtro após recarga e quando o armazenamento estiver bloqueado.
- Testar formulário vazio, nome com espaços, e-mail inválido e valores válidos.
- Avaliar contraste, zoom de 200%, leitor de tela e ferramenta automatizada de acessibilidade.
- Confirmar carregamento, descrição alternativa e comportamento responsivo da imagem; otimizá-la para produção.

## Evidências de tamanho (medição real)

### Fontes antes do build

- `index.html`: 660 B
- `css/estilos.css`: 1.680 B
- `js/*.js` (total): 8.503 B
- `imagens/oficina-inclusao-digital.png`: 1.942.968 B

### Artefatos de produção (`dist/`)

- `dist/index.html`: 669 B
- `dist/assets/index-*.css`: 1.476 B
- `dist/assets/index-*.js`: 6.304 B
- `dist/imagens/oficina-inclusao-digital.webp`: 88.708 B

### Reduções observadas

- HTML: 660 B → 669 B (+9 B)
- CSS: 1.680 B → 1.476 B (−204 B)
- JS total: 8.503 B → 6.304 B (−2.199 B)
- Imagem principal: 1.942.968 B → 88.708 B (−1.854.260 B)

## Limitações desta preparação

- O deploy automático depende da configuração de Pages no repositório (passo manual descrito acima).
- A URL pública não foi aberta nem verificada neste ambiente; portanto, este documento não afirma deploy funcional já publicado.
