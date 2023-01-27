const { books } = require('./data_base');

// 🚀 4 - Crie um array que possua apenas os nomes de todas as pessoas autoras de ficção científica ou fantasia e ordene por ordem alfabética.
const fJustAuthor = book => book.author.name;
const fSortByName = (a, b) => a.localeCompare(b);
const fByGenre = book => book.genre === 'Fantasia' || book.genre === 'Ficção Científica';
const fFilter = books => books.filter(fByGenre).map(fJustAuthor).sort(fSortByName);

console.log(fFilter(books));