const { books } = require('./data_base');

// 🚀 5 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
const fJustName = book => book.name;
const fFilter = book => 2022 - book.releaseYear > 60;
const fFilterByYear = books => books.filter(fFilter).map(fJustName);

console.log(fFilterByYear(books));