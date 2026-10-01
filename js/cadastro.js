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
    mensagem.removeAttribute('role');
    mensagem.setAttribute('role', 'status');
    campos.forEach((campo) => campo.removeAttribute('aria-invalid'));
  }

  function validarNome() {
    nome.setCustomValidity(nome.value.trim().length >= 2 ? '' : 'Informe um nome com pelo menos 2 caracteres, sem contar espaços nas pontas.');
  }

  function validarEmail() {
    const valor = email.value.trim();
    const dominioCompleto = /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/.test(valor);
    email.setCustomValidity(!valor || (email.validity.typeMismatch || dominioCompleto) ? '' : 'Informe um e-mail com domínio completo, como nome@dominio.com.');
  }

  form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    limparMensagem();
    validarNome();
    validarEmail();
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
    email.setCustomValidity('');
    interesse.setCustomValidity('');
  }, { signal: controlador.signal });

  nome.addEventListener('input', () => { nome.setCustomValidity(''); limparMensagem(); }, { signal: controlador.signal });
  email.addEventListener('input', () => { email.setCustomValidity(''); limparMensagem(); }, { signal: controlador.signal });
  interesse.addEventListener('change', () => { interesse.setCustomValidity(''); limparMensagem(); }, { signal: controlador.signal });
  return () => controlador.abort();
}
