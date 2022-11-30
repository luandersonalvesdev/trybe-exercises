/* Usando o objeto abaixo, faça os exercícios a seguir:

    let info = {
      personagem: 'Margarida',
      origem: 'Pato Donald',
      nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    };

    Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Use a sintaxe meuObjeto['chave'] = valor. Valor esperado no console:
*/

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info['recorrente'] = 'sim';

console.log(info);