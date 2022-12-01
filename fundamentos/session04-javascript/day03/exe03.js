/* Considere o array de strings abaixo:

    let array = ['java', 'javascript', 'python', 'html', 'css'];

    Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.
    
    Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.

*/

let array = ['java', 'javascript', 'python', 'html', 'css'];

let bigger = array[0];
let smaller = array[0];

for(word of array){
  if(word.length > bigger.length){
    bigger = word;
  }

  if(word.length < smaller.length){
    smaller = word;
  }
}

console.log(bigger);
console.log(smaller);
