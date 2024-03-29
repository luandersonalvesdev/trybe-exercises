/* 
  Agora vamos fazer um exercício que vai deixar nítido como funções com responsabilidades bem definidas deixam o código mais bem escrito.

  A manipulação de arrays pode ser complexa em alguns momentos e, por isso, o JavaScript conta com diversos métodos para a sua manipulação. A documentação é sempre a nossa maior aliada. Se você tiver curiosidade de ler mais sobre esses métodos, clique aqui para acessar a documentação completa. Não se preocupe em entender todos os métodos, eles serão trabalhados cada vez com mais frequência durante o curso e, sempre que um método novo for necessário, ele será ensinado a você.

  Spoiler-alert: para os exercícios do dia, os métodos split, join e reverse podem ser muito úteis.

    Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

    Exemplo de palíndromo: arara

    verificaPalindrome('arara')

    Retorno esperado: true
    verificaPalindrome('desenvolvimento')

    Retorno esperado: false
*/

let word = 'arara';

let drow = word.split('').reverse().join('')

function verifyPalindrome(word) {
  if(word === drow){
    return true;
  }else{
    return false;
  }
};

console.log(verifyPalindrome(word));