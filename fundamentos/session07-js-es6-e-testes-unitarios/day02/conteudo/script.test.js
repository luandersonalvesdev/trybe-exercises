const sum = require('./script');

test('2 + 2 é pra ser 4', () => {
  expect(sum(2, 2)).toBe(4);
});