# Rede Solidária

SPA demonstrativa em HTML, CSS e JavaScript nativo, com telas Início, Projetos e Cadastro. Não representa uma organização real. O formulário apenas verifica os campos; não envia nem guarda nome e e-mail.

## Executar localmente

Requer um navegador moderno e um servidor HTTP local para carregar módulos JavaScript. Clone o repositório com `git clone <URL-DO-REPOSITORIO>`, entre na pasta e execute `python3 -m http.server 8000`. Acesse `http://localhost:8000/` no navegador. Não abra `index.html` por `file://`.

## Usar

Navegue pelos links Início, Projetos e Cadastro. Em Projetos, o seletor filtra cards e guarda apenas a categoria escolhida no `localStorage`. Em Cadastro, preencha nome, e-mail e área de interesse e use Verificar cadastro. O formulário demonstra validação local; não existe backend ou inscrição real.

## Estrutura e manutenção

- `index.html`: ponto de entrada e região `#app`.
- `css/estilos.css`: estilos e estados visuais.
- `js/app.js`: inicia o roteador.
- `js/router.js`: rotas por hash, renderização e limpeza de listeners específicos.
- `js/templates.js`: telas e dados de exemplo.
- `js/projetos.js`: filtro e cards.
- `js/cadastro.js`: validação e retorno acessível.
- `js/storage.js`: lê e grava somente a categoria de projetos.
- `imagens/README.md`: instrução para adicionar a imagem, que ainda não está no repositório.

Para modificar telas e categorias, mantenha sincronizados `templates.js` e a lista de valores aceitos em `storage.js`. Atualize a documentação e faça alterações em branch própria; abra um PR para revisão antes de integrar à `main`. Nunca salve dados pessoais no armazenamento do navegador.

## Verificação antes da publicação

- Testar por teclado: ordem de foco, foco visível, links e campos do formulário.
- Testar navegação por hash e histórico Voltar/Avançar.
- Testar filtro após recarga e quando o armazenamento estiver bloqueado.
- Testar formulário vazio, nome com espaços, e-mail inválido e valores válidos.
- Avaliar contraste, zoom de 200%, leitor de tela e ferramenta automatizada de acessibilidade.
- Confirmar caminhos dos arquivos e otimizar a imagem antes de incorporá-la.

Nenhum teste de navegador, auditoria WCAG 2.1 completa ou deploy de produção foi realizado nesta etapa. Não existe build: os arquivos estáticos são servidos diretamente. Se for criado um build no futuro, documente os comandos e teste o artefato final.
