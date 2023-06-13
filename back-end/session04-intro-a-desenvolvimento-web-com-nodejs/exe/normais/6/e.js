const fs = require('fs').promises;
const { charReader } = require('./c');

const main = async () => {
  const data = await charReader();
  const dataFamily = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const convertDataFamily = JSON.parse(dataFamily);
  const charNelson = data.filter((char) => char.name.includes('Nelson Muntz'));
  fs.writeFile('./simpsonFamily.json', JSON.stringify([...convertDataFamily, ...charNelson]));
  console.log('Arquivo alterado com sucesso');
}

main();
