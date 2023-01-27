const { books } = require('./data_base');

// 🚀 2 - Filtre os livros com mais de 60 anos desde sua publicação e ordene a partir do livro mais velho para o mais novo.
const order = (a, b) => a.releaseYear - b.releaseYear;
const filter = (books) => books.filter(v => 2022 - v.releaseYear > 60).sort(order);
console.log(filter(books));