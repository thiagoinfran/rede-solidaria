export function iniciarCadastro(app) {
  const form = app.querySelector('#form-cadastro');
  const mensagem = app.querySelector('#mensagem-cadastro');
  const nome = form.elements.namedItem('nome');
  const email = form.elements.namedItem('email');
  const interesse = form.elements.namedItem('interesse');
  const controlador = new AbortController();

  function limparMensagem() {
    mensagem.textContent = '';
    mensagem.removeAttribute('role');
  }

  form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    limparMensagem();
    nome.setCustomValidity(nome.value.trim().length >= 2 ? '' : 'Informe um nome com pelo menos 2 caracteres.');

    if (!form.reportValidity()) {
      mensagem.textContent = 'Confira os campos destacados antes de continuar.';
      mensagem.setAttribute('role', 'alert');
      return;
    }

    if (!['educacao', 'comunidade'].includes(interesse.value)) {
      mensagem.textContent = 'Selecione uma área de interesse válida.';
      mensagem.setAttribute('role', 'alert');
      interesse.focus();
      return;
    }

    mensagem.textContent = `Dados conferidos para ${nome.value.trim()} (${email.value.trim()}). Nenhuma informação foi enviada ou salva.`;
    form.reset();
    nome.setCustomValidity('');
  }, { signal: controlador.signal });

  nome.addEventListener('input', () => { nome.setCustomValidity(''); limparMensagem(); }, { signal: controlador.signal });
  email.addEventListener('input', limparMensagem, { signal: controlador.signal });
  interesse.addEventListener('change', limparMensagem, { signal: controlador.signal });
  return () => controlador.abort();
}
