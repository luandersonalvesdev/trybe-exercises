const { countries } = require('./data_base2');

// 🚀 3 - Encontre o país com o maior nome.
/* const expectedResult = {
  name: 'American Samoa',
  region: 'Oceania',
  currencies: [{ code: 'USD', name: 'United States Dollar' }],
  capital: 'Pago Pago',
  population: 55197,
  area: 199
} */

const fFindBigger = (acc, val) => acc.name.length > val.name.length ? acc : val;
const fGetBiggerName = countries => countries.reduce(fFindBigger);

console.log(fGetBiggerName(countries));