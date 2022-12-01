let diasDaSemana = {
  1: 'domingo',
  2: 'segunda',
  3: 'terça',
  4: 'quarta',
  5: 'quinta',
  6: 'sexta',
  7: 'sábado',
};

// diasDaSemana.1; // SyntaxError: Unexpected number
console.log(diasDaSemana['1']); // domingo

// ###########################################################################################

let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

car.tyres = 'hard';

console.log(car['type']);
console.log(car.tyres);

for(let value of car){
  console.log(car[value]);
}

// ###########################################################################################

let conta = {
  agencia: '0000',
  banco: {
    cod: '012',
    id: 4,
    nome: 'TrybeBank',
  },
};

let infoDoBanco = 'banco';
console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
console.log(conta[infoDoBanco]['nome']); // TrybeBank

console.log(conta.agencia); // 0000
console.log(conta['agencia']); // 0000

console.log(conta.banco.cod); // 012
console.log(conta['banco']['id']); // 4

// ###########################################################################################

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

// ###########################################################################################

let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value);
};
//resultado: hamburguer, bife, acarajé;

// ###########################################################################################

/* Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.
 */

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for(let key in car){
  console.log(key, car[key]);
}

// ###########################################################################################

