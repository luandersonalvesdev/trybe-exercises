const primeNumbers = [17, 23, 37]

const sum = (a, b) => {
  console.log(a + b);
}

sum(primeNumbers[0], primeNumbers[2]) // 54

// Produza o mesmo resultado acima, porém utilizando array destructuring
const [ num1, num2, num3 ] = primeNumbers;
sum(num1, num3) // 54

// ###############################################################
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
[ comida, animal, bebida ] = [bebida, comida, animal];
console.log(comida, animal, bebida); // arroz gato água


// ###############################################################

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log acima
[,,, ...numerosPares] = numerosPares;
console.log(numerosPares); // [6, 8, 10, 12];

// ###############################################################

let t = '', y = '';
[t, y] = [ 4 ]
console.log(t);
console.log(y);

// ###############################################################

// ISSO É UM REST, É RECEBER INFINITOS VALORES AO DECLARAR UMA FUNCAO
function soma (...valores) {
  var total = 0

  for (const item of valores) {
    total += parseInt(item, 10)
  }

  return total
}

// ISSO É UM SPREAD, É "ESPALHAR" VALOR AO INVOCAR UMA FUNÇÃO
const arrTest = [1, 2, 3, 4, 50, 10, 23];
console.log(soma(...arrTest))
// 93