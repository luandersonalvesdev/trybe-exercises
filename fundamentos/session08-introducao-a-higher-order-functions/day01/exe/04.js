const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
// const expectedResult = 'Stephen King';
const authorBornIn1947 = () => {
  const name = books.find(v => v.author.birthYear === 1947);
  return name.author.name;
};
console.log(authorBornIn1947());

// const expectedResult = 'Duna';
const smallerName = (books) => {
  let nameBook = books[0].name;
  // escreva aqui o seu código
  books.forEach(v => {
    if (v.name.length < nameBook.length) {
      nameBook = v.name;
    }
  })
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
};
console.log(smallerName(books));

/* const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
}; */
const getNamedBook = (books) => books.find(v => v.name.length === 26);
console.log(getNamedBook(books));

// const expectedResult = false;
const everyoneWasBornOnSecXX = (books) => {
  return books.every(v => {
    v.author.birthYear >= 1901 || v.author.birthYear <= 2000;
  });
};
console.log(everyoneWasBornOnSecXX(books));

// const expectedResult = true;
const someBookWasReleaseOnThe80s = (books) => {
  return books.some(v => v.releaseYear >= 1980 || v.releaseYear <= 1989);
};
console.log(someBookWasReleaseOnThe80s(books));

// const expectedResult = false;
/* const authorUnique = (books) => {
  // escreva seu código aqui
  return books.every(v => 
    books.some(v2 => 
      (v2.author.birthYear === v.author.birthYear) && (v2.author.name !== v.author.name)));
};
 */

// const expectedResult = false;
const authorUnique = () => {
  return books.every((book) =>
    books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
}

console.log(authorUnique());