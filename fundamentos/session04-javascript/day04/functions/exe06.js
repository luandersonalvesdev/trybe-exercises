/* 
  Agora vamos fazer um exercício que vai deixar nítido como funções com responsabilidades bem definidas deixam o código mais bem escrito.

  A manipulação de arrays pode ser complexa em alguns momentos e, por isso, o JavaScript conta com diversos métodos para a sua manipulação. A documentação é sempre a nossa maior aliada. Se você tiver curiosidade de ler mais sobre esses métodos, clique aqui para acessar a documentação completa. Não se preocupe em entender todos os métodos, eles serão trabalhados cada vez com mais frequência durante o curso e, sempre que um método novo for necessário, ele será ensinado a você.

  Spoiler-alert: para os exercícios do dia, os métodos split, join e reverse podem ser muito úteis.

    Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

    Valor de teste: N = 5.

    Valor esperado no retorno da função: 1+2+3+4+5 = 15.
*/

let n = 5;

function sumNumbers(n) {
  
  let sum = 0;

  for(let index = 0; index <= n; index++){
    sum += index;
  }
  
  return sum;
};

console.log(sumNumbers(n));