const { countries } = require('./data_base2');

// 1 - Calcule a quantidade total da população de todos os países.
// const expectedResult = 120797034;

const fSumPopulation = (acc, val) => acc + val.population;
const fGetPopulation = countries => countries.reduce(fSumPopulation, 0);

console.log(fGetPopulation(countries));