import test from 'node:test';
import assert from 'node:assert/strict';

const memoria = new Map();
globalThis.localStorage = {
  getItem(chave) { return memoria.has(chave) ? memoria.get(chave) : null; },
  setItem(chave, valor) { memoria.set(chave, String(valor)); }
};

const { lerCategoria, salvarCategoria } = await import('../js/storage.js');

test('sem preferencia salva retorna todos', () => {
  memoria.clear();
  assert.equal(lerCategoria(), 'todos');
});

test('salva e recupera categoria permitida', () => {
  memoria.clear();
  salvarCategoria('educacao');
  assert.equal(lerCategoria(), 'educacao');
});

test('ignora categoria invalida', () => {
  memoria.clear();
  salvarCategoria('invalida');
  assert.equal(lerCategoria(), 'todos');
  memoria.set('rede-solidaria:categoria', 'invalida');
  assert.equal(lerCategoria(), 'todos');
});

test('continua funcional se armazenamento falhar', () => {
  const anterior = globalThis.localStorage;
  globalThis.localStorage = {
    getItem() { throw Error('bloqueado'); },
    setItem() { throw Error('bloqueado'); }
  };
  try {
    assert.equal(lerCategoria(), 'todos');
    assert.doesNotThrow(() => salvarCategoria('comunidade'));
  } finally {
    globalThis.localStorage = anterior;
  }
});
