/* Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

n = 5

*
**
***
****
*****
*/

let n = 5, writer = '', assistent = n;

while(n != 0){

  for(let index = (n-1); index != assistent; index++){
    writer += '*';
  }

  console.log(writer);

  writer = '';
  n--;
}

console.log(writer);