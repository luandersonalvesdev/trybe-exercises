/* 
  Agora vamos fazer um exercício que vai deixar nítido como funções com responsabilidades bem definidas deixam o código mais bem escrito.

  A manipulação de arrays pode ser complexa em alguns momentos e, por isso, o JavaScript conta com diversos métodos para a sua manipulação. A documentação é sempre a nossa maior aliada. Se você tiver curiosidade de ler mais sobre esses métodos, clique aqui para acessar a documentação completa. Não se preocupe em entender todos os métodos, eles serão trabalhados cada vez com mais frequência durante o curso e, sempre que um método novo for necessário, ele será ensinado a você.

  Spoiler-alert: para os exercícios do dia, os métodos split, join e reverse podem ser muito úteis.

    Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

    Array de teste: [2, 3, 6, 7, 10, 1];.

    Valor esperado no retorno da função: 4.
*/

let array = [2, 3, 6, 7, 10, 1];

function verifyBiggerNumber(array) {
  
  let bigger = 0, index = 0;

  array.forEach((value, indexArray) => {
    if(value > bigger){
      bigger = value;
      index = indexArray;
    }
  });

  return index;
};

console.log(verifyBiggerNumber(array));