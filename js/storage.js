const CHAVE = 'rede-solidaria:categoria';
const categorias = new Set(['todos', 'educacao', 'comunidade']);

export function lerCategoria() {
  try {
    const valor = localStorage.getItem(CHAVE);
    return categorias.has(valor) ? valor : 'todos';
  } catch {
    return 'todos';
  }
}

export function salvarCategoria(valor) {
  if (!categorias.has(valor)) return;
  try { localStorage.setItem(CHAVE, valor); } catch { /* Armazenamento indisponível: filtro continua funcionando. */ }
}