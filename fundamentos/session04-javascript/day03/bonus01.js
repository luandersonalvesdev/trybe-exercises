/* Agora vamos trabalhar com algumas formas geométricas! Utilize a estrutura de repetição for para escrever os programas abaixo:

Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

n = 5

*****
*****
*****
*****
*****
 */

let n = 2, writer = '', assistent = n;

while(n != 0){
  
  for(let index = 0; index < assistent; index++){
    writer += "*";
  }

  console.log(writer);
  
  writer = '';
  n--;
}