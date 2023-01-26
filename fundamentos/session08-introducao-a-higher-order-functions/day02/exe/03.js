const { books } = require('./data_base');

/* const expectedResult = [
  {
    author: 'Isaac Asimov',
    age: 31,
  },
  {
    author: 'H. P. Lovecraft',
    age: 38,
  },
  {
    author: 'Stephen King',
    age: 39,
  },
  {
    author: 'George R. R. Martin',
    age: 43,
  },
  {
    author: 'Frank Herbert',
    age: 45,
  },
  {
    author: 'J. R. R. Tolkien',
    age: 62,
  },
]; */

const nameAndAge = (books) => books.map(v => {return {author: v.author.name, age: v.releaseYear - v.author.birthYear}}).sort((a,b) => a.age - b.age);

console.log(nameAndAge(books));