/* 
  Agora vamos fazer um exercício que vai deixar nítido como funções com responsabilidades bem definidas deixam o código mais bem escrito.

  A manipulação de arrays pode ser complexa em alguns momentos e, por isso, o JavaScript conta com diversos métodos para a sua manipulação. A documentação é sempre a nossa maior aliada. Se você tiver curiosidade de ler mais sobre esses métodos, clique aqui para acessar a documentação completa. Não se preocupe em entender todos os métodos, eles serão trabalhados cada vez com mais frequência durante o curso e, sempre que um método novo for necessário, ele será ensinado a você.

  Spoiler-alert: para os exercícios do dia, os métodos split, join e reverse podem ser muito úteis.

    Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

    Array de teste: [2, 3, 2, 5, 8, 2, 3];.

    Valor esperado no retorno da função: 2.
*/

let array = [2, 3, 2, 5, 8, 2, 3];

function verifyRepeatNumber(array) {
  let countRepeat = 0;
  let countNumber = 0;
  let indexRepeatNumber = 0;

  for(let index in array){
    let verifyNumber = array[index];
    
    for(let index2 in array){
      if(verifyNumber === array[index2]){
        countNumber += 1;
      }
    }

    if(countNumber > countRepeat){
      countRepeat = countNumber;
      indexRepeatNumber = index;
    }

    countNumber = 0;
  }
  
  return array[indexRepeatNumber];
};

console.log(verifyRepeatNumber(array));