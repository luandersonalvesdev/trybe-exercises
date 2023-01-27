const { countries } = require('./data_base2');

// 2 - Calcule a área total de todos os países.
// const expectedResult = 4311757;

const fSumArea = (acc, val) => acc + val.area;
const fGetTotalArea = countries => countries.reduce(fSumArea, 0);

console.log(fGetTotalArea(countries));