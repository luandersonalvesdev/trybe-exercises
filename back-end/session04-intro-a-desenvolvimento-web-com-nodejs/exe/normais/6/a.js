const fs = require('fs').promises;

const reader = async () => {
  try {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    return data;
  } catch(e) {
    console.log(e.mensage);
  }
}

const translater = async () => {
  const data = await reader();
  JSON.parse(data).forEach((person) => console.log(`${person.id} - ${person.name}`));
}

translater();