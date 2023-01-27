const { books } = require('./data_base');

// 4 - Encontre o livro com o maior nome.
/* const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
}; */

const fFindLong = (acc, val) => acc.name.length > val.name.length ? acc : val;
const longestNamedBook = (books) => books.reduce(fFindLong);

console.log(longestNamedBook(books));