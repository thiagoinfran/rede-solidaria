const itens = [
  { titulo: 'Inclusão digital', categoria: 'educacao', descricao: 'Atividades para desenvolver habilidades digitais na comunidade.' },
  { titulo: 'Oficinas de aprendizagem', categoria: 'educacao', descricao: 'Encontros para compartilhar conhecimentos.' },
  { titulo: 'Apoio comunitário', categoria: 'comunidade', descricao: 'Ações de colaboração entre moradores e voluntários.' }
];

export function inicio() {
  const secao = document.createElement('section');
  secao.innerHTML = '<h1>Bem-vindo à Rede Solidária</h1><p>Conheça projetos comunitários e participe das nossas ações.</p><a href="#projetos">Conhecer projetos</a><figure><img src="imagens/oficina-inclusao-digital.png" alt="Instrutora orienta participantes em uma oficina de inclusão digital com computadores." loading="lazy" decoding="async" style="display:block;max-width:100%;height:auto;border-radius:12px;margin-top:1.5rem"><figcaption>Oficina de inclusão digital — imagem ilustrativa.</figcaption></figure>';
  return secao;
}

export function projetos() {
  const secao = document.createElement('section');
  secao.innerHTML = '<h1>Projetos</h1><label for="categoria">Filtrar por categoria</label><select id="categoria"><option value="todos">Todas</option><option value="educacao">Educação</option><option value="comunidade">Comunidade</option></select><div id="lista-projetos" class="grade"></div>';
  return secao;
}

export function cadastro() {
  const secao = document.createElement('section');
  secao.innerHTML = '<h1>Cadastro de interesse</h1><p>Este formulário é uma demonstração: não envia nem armazena dados pessoais.</p><form id="form-cadastro" novalidate><label for="nome">Nome</label><input id="nome" name="nome" autocomplete="name" required minlength="2" maxlength="100" aria-describedby="mensagem-cadastro"><label for="email">E-mail</label><input id="email" name="email" type="email" autocomplete="email" required aria-describedby="mensagem-cadastro"><label for="interesse">Área de interesse</label><select id="interesse" name="interesse" required aria-describedby="mensagem-cadastro"><option value="">Selecione</option><option value="educacao">Educação</option><option value="comunidade">Comunidade</option></select><button type="submit">Verificar cadastro</button><p id="mensagem-cadastro" class="mensagem" role="status" aria-live="polite"></p></form>';
  return secao;
}
