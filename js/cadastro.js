export function iniciarCadastro(app) {
  const form = app.querySelector('#form-cadastro');
  const mensagem = app.querySelector('#mensagem-cadastro');
  const nome = form.elements.namedItem('nome');
  const email = form.elements.namedItem('email');
  const interesse = form.elements.namedItem('interesse');
  const campos = [nome, email, interesse];
  const controlador = new AbortController();

  function limparMensagem() {
    mensagem.textContent = '';
    mensagem.setAttribute('role', 'status');
    campos.forEach((campo) => campo.removeAttribute('aria-invalid'));
  }

  function validarNome() {
    nome.setCustomValidity(nome.value.trim().length >= 2 ? '' : 'Informe um nome com pelo menos 2 caracteres, sem contar espaços nas pontas.');
  }

  form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    limparMensagem();
    validarNome();
    if (!['', 'educacao', 'comunidade'].includes(interesse.value)) {
      interesse.setCustomValidity('Selecione uma área de interesse válida.');
    } else {
      interesse.setCustomValidity('');
    }

    const primeiroInvalido = campos.find((campo) => !campo.checkValidity());
    if (primeiroInvalido) {
      campos.filter((campo) => !campo.checkValidity()).forEach((campo) => campo.setAttribute('aria-invalid', 'true'));
      mensagem.setAttribute('role', 'alert');
      mensagem.textContent = primeiroInvalido.validationMessage || 'Confira os campos obrigatórios.';
      primeiroInvalido.focus();
      return;
    }

    mensagem.textContent = 'Dados conferidos. Nenhuma informação foi enviada ou salva.';
    form.reset();
    nome.setCustomValidity('');
    interesse.setCustomValidity('');
  }, { signal: controlador.signal });

  nome.addEventListener('input', () => { nome.setCustomValidity(''); limparMensagem(); }, { signal: controlador.signal });
  email.addEventListener('input', limparMensagem, { signal: controlador.signal });
  interesse.addEventListener('change', () => { interesse.setCustomValidity(''); limparMensagem(); }, { signal: controlador.signal });
  return () => controlador.abort();
}
