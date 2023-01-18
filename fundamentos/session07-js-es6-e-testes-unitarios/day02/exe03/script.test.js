const {
  encode,
  decode,
} = require('./script');

describe('3 Funcoes para teste:', () => {
  it('Analisando se DECODE é uma funcao.', () => {
    expect(typeof decode === 'function').toBe(true);
  });
  it('Testando se ENCODE é uma funcao.', () => {
    expect(typeof encode === 'function').toBe(true);
  });
  it('Deve retornar 1, 2, 3, 4, 5.', () => {
    expect(encode('a,e,i,o,u')).toEqual('1,2,3,4,5');
  });
  it('Deve retornar a,e,i,o,u.', () => {
    expect(decode('1,2,3,4,5')).toEqual('a,e,i,o,u');
  });
  it('Deve retornar 1b2lh1.', () => {
    expect(encode('abelha')).toBe('1b2lh1');
  });
  it('Deve retornar iiee', () => {
    expect(decode('3322')).toBe('iiee');
  });
  it('Deve retornar o mesmo numero de caracteres passado como parametro.', () => {
    expect(encode('paralelepipedo').length).toBe(14);
  });
  it('Deve retornar o mesmo numero de caracteres passado como parametro', () => {
    expect(decode('242312673').length).toBe(9);
  })
})