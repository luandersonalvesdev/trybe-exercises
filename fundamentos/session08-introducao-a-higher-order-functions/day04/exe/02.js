// Crie uma função sum que, dado um número ilimitado de parâmetros, retorna a soma desses parâmetros. Ao chamar a função dessa forma : sum(4,5,6), o número 15 deve ser retornado.
// escreva sum abaixo

const sum = (...args) => args.reduce((acc, val) => acc + val , 0);

const first = [4, 5, 6];
const second = [10, 100, 200];

console.log(sum(...first));
console.log(sum(...second));