/* 
🚀 Se liga nesse foguete!

Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação, mas fique de olho nesses! 👀

Agora você vai fazer alguns exercícios.

Parte I
🚀 Altere o tipo das variáveis (var) para let ou const para que respeitem o escopo em que foram declaradas.

🚀 Modifique a variável para que respeite o escopo onde está sendo declarada. Lembre-se: para que a variável respeite o escopo, ela não deve ser acessível fora do escopo em que esteja sendo declarada.

Copie o código abaixo e rode-o para verificar sua saída:

*/

function imprimeIdade() {
  for (let idade = 30; idade <= 40; idade += 1) {
    console.log('Idade dentro do for:', idade)
  }
}
imprimeIdade();

/* 
🚀 Altere o valor das propriedades do objeto, para que respeite as características da variável do tipo const;


Copie o código abaixo e rode-o para verificar sua saída:

*/

  // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
  let pessoa = {
    nome: 'Henri',
    idade: 20
  }

  pessoa = {
    nome: 'Luna',
    idade: 19
  } // Altere essa estrutura para corrigir o erro.

  console.log('Nome:', pessoa.nome);
  console.log('Idade:', pessoa.idade);

// 🚀 Modifique a variável para que não ocorra Erro;

// Copie o código abaixo e rode-o para verificar sua saída:

let favoriteFood = 'Lasanha';
favoriteFood = 'Hamburguer';
console.log(`Comida favorita: ${favoriteFood}`);

// 🚀 Modifique as concatenações para template literals.

// Copie o código abaixo:

const name = 'Adriana';
const lastName = 'Soares';
console.log(`Olá ${name} ${lastName}!`);

let soma = (a,b) => a + b;
let a = 3;
let b = 5;

console.log(`O resultado da soma de ${a} + ${b} é: ${soma(a,b)}`);

// 🚀 Modifique a estrutura das funções a seguir para que elas sejam arrow functions;

// 🚀 Transforme a função numeroAleatorio em uma arrow function; Copie o código abaixo:

let numeroAleatorio = () => Math.random();

console.log(numeroAleatorio());

// 🚀 Transforme a função hello em uma arrow function; Copie o código abaixo:

let hello = nome => `Olá, ${nome}!`;

let nome = 'Ivan';

console.log(hello(nome));

// 🚀 Transforme a função nomeCompleto em uma arrow function; Copie o código abaixo:

let nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`;

let nome = 'Ivan';
let sobrenome = 'Pires';

console.log(nomeCompleto(nome, sobrenome));

// 🚀 Altere a expressão if/else utilizando ternary operator; Copie o código abaixo:

let speed = 90;
const speedCar = speed => speed >= 120 ? 'Você ultrapassou o limite de velocidade' : 'Você está na velocidade permitida';

console.log(speedCar(speed));