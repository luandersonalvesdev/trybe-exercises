const fs = require('fs').promises;

const charReader = async () => {
  const data = await fs.readFile('./simpsons.json');
  const dataConvert = JSON.parse(data);
  return dataConvert;
}

const someCharRemover = async () => {
  const oldChars = await charReader();
  const newsChar = oldChars.reduce((acc, curr) => {
    if(curr.id === '6' || curr.id === '10'){
      return [...acc]
    }
    return [...acc, curr]
  }, [])
  fs.writeFile('./simpsons.json', JSON.stringify(newsChar));
}

someCharRemover();

module.exports = { charReader };
