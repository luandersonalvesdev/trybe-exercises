const { books } = require('./data_base');

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
// const expectedResult = 43;

const fGetAverageAge = (acc, val) => acc + (val.releaseYear - val.author.birthYear);
const averageAge = (books) => (books.reduce(fGetAverageAge, 0) / books.length);

console.log(averageAge(books));