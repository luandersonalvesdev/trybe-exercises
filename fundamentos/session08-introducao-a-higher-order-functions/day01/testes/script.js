// 1
const array = [1, 4, 8];
const outra = array.map((v) => v + 1);

console.log(outra);

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// 2
const hasName = (arr, name) => {
  return arr.some((v) => v === name);
};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));

// 3
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, age) => arr.some((v) => v.age >= age);

console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));