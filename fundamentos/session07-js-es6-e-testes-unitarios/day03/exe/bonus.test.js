const { searchEmployee } = require('./bonus');

describe('Funcao searchEmployee sobre o ID: ', () => {
  it('A funcao busca um ID existente', () => {
    expect(searchEmployee('1256-4', 'lastName')).toEqual('Bezos');
  });
  it('Se retorna um ERRO com "ID não identificada."', () => {
    expect(() => { searchEmployee('12345-6') }).toThrow(new Error('ID não identificada.'));
  });
});

describe('Funcao searchEmployee sobre a informacao', () => {
  it('Se retorna o primeiro nome', () => {
    expect(searchEmployee('1256-4', 'firstName')).toBe('Linda');
  });
  it('Se retorna as especialidades', () => {
    expect(searchEmployee('4678-2', 'specialities')).toEqual(['Backend']);
  });
  it('Se retorna a mensagem "Informação indisponível."', () => {
    expect(() => { searchEmployee('4678-2', 'job') }).toThrow(new Error('Informação indisponível.'));
  });
});