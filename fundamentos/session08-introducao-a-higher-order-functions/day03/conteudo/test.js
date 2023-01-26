const valorItens = [1, 32, 44, 2, 3];

const a = valorItens.reduce((acc, curr) => {
  console.log(`valor acumulador é ${acc}`);
  console.log(`valor atual é ${curr}`);
  // Antes da primeira iteração o valor de início do `acc` é o valor no index 0 do array, e o valor de início de `curr` é o valor no index 1 do array.
  // Iteração 1: valor do acc é 1 e o de curr é 32;
  // Após a primeira iteração, o valor de `acc` muda e passa a acumular agora o resultado do retorno da callback (acc + curr).
  // Iteração 2: valor do acc é 33 e o de curr é 44;
  // Acontece então uma segunda iteração, e `curr` agora assume o valor do index na sequência do array, no caso o valor do segundo index e `acc` segue armazenando os retornos.
  // Iteração 3: valor do acc é 77 e o de curr é 2;
  // Iteração 4: valor do acc é 79 e o de curr é 3;
  // Valor final de `acc` é 82 e `curr` para no 3.

  return acc + curr; // Ao fim das iterações podemos ver que o `acc` armazenou o resultado total do retorno da função.
});

console.log(a);

// ######### MINI EXERCICIO ############
// Tente criar a função que busca o maior valor do array numbers utilizando apenas o reduce.
const numbers = [50, 85, -30, 3, 25];

const findBiggerNum = (acc, curr) => acc > curr ? acc : curr;

console.log(numbers.reduce(findBiggerNum));

// Para fixar ainda mais o conceito de reduce, faça uma função que some todos os números pares do array numbers:
// A solução está logo abaixo, mas tente realizar a função sem vê-la. Tente criar uma usando reduce e filter, e outra apenas usando reduce.
const numbers2 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// COM FILTER E REDUCE
const sumEvenFilter = numbers => numbers.filter(v => v % 2 === 0).reduce((acc, val) => acc + val);
console.log(sumEvenFilter(numbers2));

// SOMENTE COM REDUCE
const sumEvenReduce = numbers => numbers.reduce((acc, val, ) => val % 2 === 0 ? acc + val : acc, 0);
console.log(sumEvenReduce(numbers2));

// Agora, crie uma função usando dados de estudantes, para mostrar na tela um relatório que diz em qual matéria a pessoa foi melhor. Você usará tanto o map quanto o reduce dentro dele!

// RESULTADO ESPERADO
/* [
  { name: 'Jorge', materia: 'Português' },
  { name: 'Mario', materia: 'Biologia' },
  { name: 'Jorge', materia: 'Português' },
  { name: 'Maria', materia: 'Química' },
  { name: 'Natalia', materia: 'Português' },
  { name: 'Wilson', materia: 'Português' },
] */

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
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

const showResult = (students) => {
  return students.map(val => {
    return {
      name: val.nome,
      materia: val.materias.reduce((acc, val) => val.nota > acc ? acc = val : acc, 0),
    };
  });
};
console.log(showResult(estudantes));