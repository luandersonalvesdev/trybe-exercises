const { books } = require('./data_base');

/* const expectedResult = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
]; */

const formatedBookNames = (books) => statusBooks = books.map(v => `${v.name} - ${v.genre} - ${v.author.name}`);

console.log(formatedBookNames(books));