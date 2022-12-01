/* 
  Agora vamos fazer um exercício que vai deixar nítido como funções com responsabilidades bem definidas deixam o código mais bem escrito.

  A manipulação de arrays pode ser complexa em alguns momentos e, por isso, o JavaScript conta com diversos métodos para a sua manipulação. A documentação é sempre a nossa maior aliada. Se você tiver curiosidade de ler mais sobre esses métodos, clique aqui para acessar a documentação completa. Não se preocupe em entender todos os métodos, eles serão trabalhados cada vez com mais frequência durante o curso e, sempre que um método novo for necessário, ele será ensinado a você.

  Spoiler-alert: para os exercícios do dia, os métodos split, join e reverse podem ser muito úteis.

    Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

    Valor de teste: 'trybe' e 'be'

    Valor esperado no retorno da função: true

    verificaFimPalavra('trybe', 'be');

    Retorno esperado: true
    verificaFimPalavra('joaofernando', 'fernan');

    Retorno esperado: false

*/

let wordOne = 'trybe', wordTwo = 'be';

function verifyLastLetter(wordOne, wordTwo) {
  
  let splitWordOne = wordOne.split('').reverse();
  let splitWordTwo = wordTwo.split('').reverse();

  let verify = 0;

  if(wordOne.length <= wordTwo.length){
    return 'A primeira palavra precisa ser maior';
  }else{

    for(let index = 0; index < splitWordTwo.length; index += 1){
      if(splitWordOne[index] === splitWordTwo[index]){
        verify += 1;
      }else{
        return false;
      }
    }

    if(verify == splitWordTwo.length){
      return true;
    }
  }

};

console.log(verifyLastLetter(wordOne, wordTwo));