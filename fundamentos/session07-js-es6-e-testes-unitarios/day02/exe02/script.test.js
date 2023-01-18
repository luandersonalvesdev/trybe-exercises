// const { describe, it } = require('node:test');
const myFizzBuzz = require('./script');

describe('Funcao myFizzBuzz() em teste: ', () => {
  it('Testando primeiro IF.', () => {
    expect(myFizzBuzz('A')).toBe(false);
  });
  it('Testando segundo IF.', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('Testando o terceiro IF.', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });
  it('Testando o último IF.', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });
  it('Testando o retorno do proprio numero.', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });
});