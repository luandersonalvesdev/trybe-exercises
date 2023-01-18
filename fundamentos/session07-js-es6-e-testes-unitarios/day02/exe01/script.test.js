// const { it } = require('node:test');
const myRemove = require('./script');

describe('Funcao myRemove()', () => {
  it('Deve voltar um array somente com os items diferentes do item passado.', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('Deve NÃO retornar o proprio array que lhe foi passado.', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4], 3);
  });
  it('Deve retornar o próprio array que lhe foi passado.', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});