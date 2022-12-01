/* Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50. */
let bigger = 0;

function primeNumbers(num) {
  for (var index = 0; index <= num; index++) {
    if (isPrime(index)){
      if(index > bigger){
        bigger = index;
      }
    }
  }
  return bigger;
}

function isPrime(num) {
  for(let index = 2; index <num; index++)
    if(num % index === 0) {
        return false
    };
  return num > 1;
}

console.log(primeNumbers(50));