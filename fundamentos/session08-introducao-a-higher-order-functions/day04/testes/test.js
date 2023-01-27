const items = ['Camiseta', 'Carregador', 'Chinelo'];

const newItems = [...items, 'Meia', 'b'];

console.log(newItems); // ['Camiseta', 'Carregador', 'Chinelo', 'Meia'];
console.log(items); // ['Camiseta', 'Carregador', 'Chinelo'];

// COM OBJETO
const product = {
  id: 1,
  name: 'Camiseta',
};

// adiciona a chave `price` com o valor `23`
const newProduct = { ...product, price: 23 };

const newNew = {
  ...newProduct,
  chave: 'valor',
}

console.log(newProduct); // {id: 1, name: 'Camiseta', price: '23'}
console.log(newNew); // {id: 1, name: 'Camiseta', price: '23'}

// ##############################
const product2 = {
  id: 1,
  name: 'Camiseta',
};

const productPrice = {
price: 23
}

const newObj = {
  ...product2,
  ...productPrice,
}

console.log(newObj);

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];
console.log(Math.max(...randomNumbers)); // 800

// ##############################

const countParams = (...args) => {
  console.log('parâmetros:', args);
  console.log('parâmetro 1:', args[0]);
  return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(countParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(countParams('stringg', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

// ##############################
// definindo o objeto
const character = {
  name: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    name: 'Tatooine',
    population: '200000',
  },
};

// desestruturando o objeto:
const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

// imprimindo os valores:
console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

// ##############################
const product3 = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product3); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas

// ##############################
// DESESTRUCTURING COM ARRAYS
const arr = ['arr', 'brr', 'crr'];
const { 0: aa, 1: bb, 2: cc } = arr;

console.log(cc);