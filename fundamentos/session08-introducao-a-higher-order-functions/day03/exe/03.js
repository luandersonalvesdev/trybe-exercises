const { books } = require('./data_base');

// 3 - Faça uma função que retorne os nomes dos livros, dado o ano de nascimento das pessoas autoras.
const filter = obj => obj.name;
const filterByBirthYear = (year, books) => books.filter((book) =>(book.author.birthYear === year)).map(filter);
// console.log(books.filter(book => (book.author.birthYear === 1920)));

console.log(filterByBirthYear(1890, books));