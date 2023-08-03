function greet(name: string): void {
  console.log(`Olá, ${name.toUpperCase()}!`);
}
greet('luao');
// ################################################

function getFavoriteNumber(): number {
  return 26;
}

console.log(getFavoriteNumber());
// ################################################

let sum = (a:number, b:number):number => a + b
console.log(sum(1, 2));
// ################################################

function printPersonalInfo(data: {name: string; birthYear: number}): void {
  console.log(`${data.name} was born in ${data.birthYear}`);
}
printPersonalInfo({name: 'luao', birthYear: 1996});
// ################################################

const evenNumbers: number[] = [2, 4, 6];
const vowel: string[] = ['a', 'u'];
const booleanValues: boolean[] = [true, false];

evenNumbers.push(8) // Funciona
// evenNumbers.push('8') // Erro
// ################################################

function printId(id: number | string) {
  if (typeof id === "string") {
    return console.log(id.toUpperCase());
  }
  return console.log(id);
}

printId(101);

printId(101);
printId("202");
// printId(true); // ERRO
// ################################################
type DataTypes = {
  name: string;
  birthYear: number | string;
};

function printPersonalInfo2(data: DataTypes): void {
  console.log(`${data.name} was born in ${data.birthYear}`);
}
printPersonalInfo2({name: 'luao', birthYear: 1997});
// ################################################