/* Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

Agora inverta o lado do triângulo. Por exemplo:

n = 5

    *
   **
  ***
 ****
*****
Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.
*/

let n = 5, writer = '', assistent = n;

while(n != 0){

  for(let index = 0; index < assistent; index++){

    if((index+1) >= n){
      writer += '*';
    }else{
      writer += ' ';
    }
    
  }

  console.log(writer);
  writer = '';
  n--;
}