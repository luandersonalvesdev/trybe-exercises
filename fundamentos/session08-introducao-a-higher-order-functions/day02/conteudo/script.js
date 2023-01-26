const food2 = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food2.sort();
console.log(food2);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
const sortFood = food.sort();
console.log(food);
console.log(sortFood);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

const inventory = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];
inventory.sort((a, b) => a - b);
console.log(inventory); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione seu código aqui
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);
people.sort((a, b) => a.age - b.age);
console.log(people);

// ######################################## MINI EXERCICIOS
const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]

// Deseja-se juntá-las em apenas uma lista de objetos que fique da seguinte forma:
// const listProducts = [{ Arroz: 2.99 },...]

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const productsObj = products.map((v, i) => {return {product: v, price: prices[i]}});
console.log(productsObj);

// 

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: '59' },
      { name: 'Português', nota: '80' },
      { name: 'Química', nota: '78' },
      { name: 'Biologia', nota: '92' },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '76' },
      { name: 'Português', nota: '90' },
      { name: 'Química', nota: '70' },
      { name: 'Biologia', nota: '80' },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '91' },
      { name: 'Português', nota: '85' },
      { name: 'Química', nota: '92' },
      { name: 'Biologia', nota: '90' },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '70' },
      { name: 'Português', nota: '70' },
      { name: 'Química', nota: '60' },
      { name: 'Biologia', nota: '50' },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '80' },
      { name: 'Português', nota: '82' },
      { name: 'Química', nota: '79' },
      { name: 'Biologia', nota: '75' },
    ],
  },
];

// Função para buscar e imprimir o nome completo de todos os estudantes que estudam no turno da manhã.
const morningStudents = estudantes.filter((v) => v.turno === 'Manhã').map((v) => `${v.nome} ${v.sobrenome}`);
console.log(morningStudents);

// Buscar um estudante pelo nome e retornar a situação dele em cada matéria:
// > 60 aprovado
const studentSituation = (name, arr) => arr.find(v => v.nome === name).materias.map(v => `${v.name}: ${v.nota > 60 ? 'Aprovado' : 'Reprovado'}`);
console.log(studentSituation('Natalia', estudantes));

