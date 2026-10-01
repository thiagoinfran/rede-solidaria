import { inicio, projetos, cadastro } from './templates.js';
import { iniciarProjetos } from './projetos.js';
import { iniciarCadastro } from './cadastro.js';

const rotas = { '#/': inicio, '#/projetos': projetos, '#/cadastro': cadastro };
const inicializadores = { '#/projetos': iniciarProjetos, '#/cadastro': iniciarCadastro };
let limparTela = () => {};

export function renderizar() {
  limparTela();
  limparTela = () => {};
  const rota = location.hash || '#/';
  const rotaAtual = Object.hasOwn(rotas, rota) ? rota : '#/';
  const app = document.querySelector('#app');
  app.replaceChildren(rotas[rotaAtual]());
  document.title = `${app.querySelector('h1')?.textContent || 'Início'} | Rede Solidária`;
  limparTela = inicializadores[rotaAtual]?.(app) || (() => {});
}

export function iniciarRoteador() {
  document.addEventListener('click', (evento) => {
    if (evento.defaultPrevented || evento.button !== 0 || evento.metaKey || evento.ctrlKey || evento.shiftKey || evento.altKey || !(evento.target instanceof Element)) return;
    const link = evento.target.closest('a[href^="#/"]');
    if (!link || !Object.hasOwn(rotas, link.getAttribute('href'))) return;
    evento.preventDefault();
    const destino = link.getAttribute('href');
    if (location.hash === destino) renderizar();
    else location.hash = destino;
  });
  window.addEventListener('hashchange', renderizar);
  renderizar();
}