/* Usando o objeto abaixo, faça os exercícios a seguir:

    let info = {
      personagem: 'Margarida',
      origem: 'Pato Donald',
      nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    };

    Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. Valor esperado no console:

    Margarida e Tio Patinhas
    Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
    Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
    Ambos recorrentes // Atenção para essa última linha!

*/

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
info['recorrente'] = 'sim';

let infoTwo = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
};
infoTwo['recorrente'] = 'sim';

for(let key in info){

  if(info[key] != infoTwo[key]){
    console.log(info[key], 'e', infoTwo[key]);
  }else{
    console.log('Ambos recorrentes');
  }

}