import { projetosDados } from './templates.js';
import { lerCategoria, salvarCategoria } from './storage.js';

export function iniciarProjetos(app) {
  const filtro = app.querySelector('#filtro-categoria');
  const lista = app.querySelector('#lista-projetos');
  const controlador = new AbortController();
  filtro.value = lerCategoria();

  function atualizar() {
    const selecionados = projetosDados.filter((projeto) => filtro.value === 'todos' || projeto.categoria === filtro.value);
    lista.replaceChildren(...selecionados.map((projeto) => {
      const card = document.createElement('article');
      card.className = 'card';
      const titulo = document.createElement('h2');
      titulo.textContent = projeto.titulo;
      const texto = document.createElement('p');
      texto.textContent = projeto.descricao;
      card.append(titulo, texto);
      return card;
    }));
  }

  filtro.addEventListener('change', () => { salvarCategoria(filtro.value); atualizar(); }, { signal: controlador.signal });
  atualizar();
  return () => controlador.abort();
}