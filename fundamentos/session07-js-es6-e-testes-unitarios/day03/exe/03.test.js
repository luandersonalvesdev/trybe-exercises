// printMessageTest.test.js
const { info, printMessage } = require('./02');

describe('Exercício de teste seção 7.3', () => {
  it('teste objeto info', () => {
    expect(info).toHaveProperty('personagem');
  });
  it('Se contem "Boas vindas, " antes de chamar o personagem', () => {
    expect(printMessage(info)).toMatch('Boas vindas, ');
  })
});