const {info} = require('./02');

it('Se o objeto contém a propriedade "personagem".', () => {
  expect(info).toHaveProperty('personagem');
});