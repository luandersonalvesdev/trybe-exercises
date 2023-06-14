const fs = require('fs').promises;
const { charReader } = require('./c');

const main = async () => {
  const data = await charReader();
  const dataFamily = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const convertDataFamily = JSON.parse(dataFamily);
  const charMaggie = data.filter((char) => char.name.includes('Maggie Simpson'));
  const newFamily = convertDataFamily.reduce((acc, curr) => {
    if(curr.name.includes('Nelson Muntz')) {
      return [...acc, ...charMaggie]
    }
    return [...acc, curr]
  }, [])
  fs.writeFile('./simpsonFamily.json', JSON.stringify(newFamily));
  console.log('Arquivo alterado com sucesso');
}

main();
