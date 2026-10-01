export const projetosDados = [
  { titulo: 'Inclusão digital', categoria: 'educacao', descricao: 'Atividades para desenvolver habilidades digitais na comunidade.' },
  { titulo: 'Apoio comunitário', categoria: 'comunidade', descricao: 'Ações de colaboração entre moradores e voluntários.' },
  { titulo: 'Oficinas de aprendizagem', categoria: 'educacao', descricao: 'Encontros para compartilhar conhecimentos.' }
];

export function inicio() {
  const secao = document.createElement('section');
  const titulo = document.createElement('h1');
  titulo.textContent = 'Bem-vindo à Rede Solidária';
  const texto = document.createElement('p');
  texto.textContent = 'Conheça projetos comunitários e participe das nossas ações.';
  const link = document.createElement('a');
  link.href = '#/projetos';
  link.textContent = 'Conhecer projetos';
  secao.append(titulo, texto, link);
  return secao;
}

export function projetos() {
  const secao = document.createElement('section');
  secao.innerHTML = '<h1>Projetos</h1><label for="filtro-categoria">Filtrar por categoria</label><select id="filtro-categoria"><option value="todos">Todos</option><option value="educacao">Educação</option><option value="comunidade">Comunidade</option></select><div id="lista-projetos" class="grade" aria-live="polite"></div>';
  return secao;
}

export function cadastro() {
  const secao = document.createElement('section');
  secao.innerHTML = '<h1>Cadastro de interesse</h1><p>Este formulário é uma demonstração: não envia nem armazena dados pessoais.</p><form id="form-cadastro" novalidate><label for="nome">Nome</label><input id="nome" name="nome" autocomplete="name" required minlength="2" maxlength="100" aria-describedby="mensagem-cadastro"><label for="email">E-mail</label><input id="email" name="email" type="email" autocomplete="email" required aria-describedby="mensagem-cadastro"><label for="interesse">Área de interesse</label><select id="interesse" name="interesse" required aria-describedby="mensagem-cadastro"><option value="">Selecione</option><option value="educacao">Educação</option><option value="comunidade">Comunidade</option></select><button type="submit">Verificar cadastro</button><p id="mensagem-cadastro" class="mensagem" role="status" aria-live="polite"></p></form>';
  return secao;
}
