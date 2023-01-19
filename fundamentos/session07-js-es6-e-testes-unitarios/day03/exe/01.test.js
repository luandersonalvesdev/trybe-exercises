const sum = require('./01');

describe('Funcao sum', () => {
  it('Passando (4,5) retorna 9', () => {
    expect(sum(4,5)).toBe(9);
  });
  it('Passando (0,0) retorna 0', () => {
    expect(sum(0,0)).toBe(0);
  });
  it('Passando (4,"5") retorna erro', () => {
    expect(() => {sum(4,'5')}).toThrow();
  });
  it('Passando (4,5) retorna 9', () => {
    expect(() => {sum(4,'5')}).toThrow(new Error('parameters must be numbers'));
  });
});