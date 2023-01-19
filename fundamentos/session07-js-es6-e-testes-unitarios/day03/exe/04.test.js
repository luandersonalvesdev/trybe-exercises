const { info, printMessage } = require('./02');

describe('Teste de fluxo de execoes', () => {
  it('Vendo se um erro é disparado.', () => {
    expect(() => { printMessage() }).toThrow();
  });
  it('Vendo se a mensagem é "objeto inválido".', () => {
    expect(() => { printMessage() }).toThrow(new Error('objeto inválido'));
  })
});