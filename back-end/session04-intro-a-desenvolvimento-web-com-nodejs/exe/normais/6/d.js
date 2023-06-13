const fs = require('fs').promises;
const { charReader } = require('./c');

const main = async () => {
  const data = await charReader();
  const family = data.filter((char) => char.id <= 4);
  fs.writeFile('./simpsonFamily.json', JSON.stringify(family));
  console.log('Familia construida com sucesso');
}

main();
