export function iniciarCadastro(app) {
  const form = app.querySelector('#form-cadastro');
  const mensagem = app.querySelector('#mensagem-cadastro');
  const controlador = new AbortController();

  form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    mensagem.textContent = '';
    mensagem.removeAttribute('role');
    const nome = form.elements.namedItem('nome');
    nome.setCustomValidity(nome.value.trim().length >= 2 ? '' : 'Informe um nome com pelo menos 2 caracteres.');
    if (!form.reportValidity()) {
      mensagem.textContent = 'Confira os campos destacados antes de continuar.';
      mensagem.setAttribute('role', 'alert');
      return;
    }
    const email = form.elements.namedItem('email');
    const interesse = form.elements.namedItem('interesse');
    if (!['educacao', 'comunidade'].includes(interesse.value)) {
      mensagem.textContent = 'Selecione uma área de interesse válida.';
      mensagem.setAttribute('role', 'alert');
      return;
    }
    mensagem.textContent = `Dados conferidos para ${nome.value.trim()} (${email.value.trim()}). Nenhuma informação foi enviada ou salva.`;
    form.reset();
  }, { signal: controlador.signal });

  form.elements.namedItem('nome').addEventListener('input', (evento) => evento.target.setCustomValidity(''), { signal: controlador.signal });
  return () => controlador.abort();
}