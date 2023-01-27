// 🚀 4 - Retorne a quantidade de vezes que a letra a maiúscula ou minúscula aparece no array de nomes.
// De olho na dica 👀: faça com que o array de nomes seja um array de letras.
// const expectedResult = 20;

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const fMakeArray = (acc, val) => val === 'a' ? acc += 1 : acc;

const fFindA = (acc, val) => {
  const word =  val.toLowerCase().split('').map(v => v);
  const letterCounter = word.reduce(fMakeArray, 0);
  return acc + letterCounter;
}
const fCountA = (names) => names.reduce(fFindA, 0);

console.log(fCountA(names));