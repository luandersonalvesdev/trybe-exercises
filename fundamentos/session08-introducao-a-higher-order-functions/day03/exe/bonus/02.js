const { books } = require('./data_base');

// const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

const fReducing = (acc, val, ind, arr) => {
  if (ind === 0) {
    return `${val.author.name}, `
  } else if (ind === (arr.length - 1)) {
    return `${acc}${val.author.name}.`
  } else {
    return `${acc}${val.author.name}, `
  }
};
const reduceNames = (books) => books.reduce(fReducing, '');

console.log(reduceNames(books));