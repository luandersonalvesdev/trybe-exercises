const { books } = require('./data_base');

// 🚀 6 - Encontre o primeiro resultado cujo nome registrado começa com três iniciais e retorne o nome do livro.

// const findInit = book => 
const fFind = (book) => {
  const splitName = book.author.name.split(' ');
  return splitName[0].includes('.') && splitName[1].includes('.') && splitName[2].includes('.');
};
const fFilterByInit = books => books.find(fFind).name;

console.log(fFilterByInit(books));