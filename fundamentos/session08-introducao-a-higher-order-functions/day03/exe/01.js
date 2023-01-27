const { books } = require('./data_base');

// 🚀 1 - Filtre todos os objetos do gênero ficção científica ou fantasia.
const filterFicFantasy = (books) => books.genre === 'Ficção Científica' || books.genre === 'Fantasia';
const fantasyOrScienceFiction = (books) => books.filter(filterFicFantasy);
console.log(fantasyOrScienceFiction(books));
