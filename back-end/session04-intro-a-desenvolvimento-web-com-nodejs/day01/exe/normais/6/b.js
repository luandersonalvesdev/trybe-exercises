const fs = require('fs').promises;
const readline = require('readline-sync');

const returnById = async (id) => {
  const data = await fs.readFile('./simpsons.json', 'utf-8');
  return JSON.parse(data)[id] || 'id não encontrado';
}

const searcher = async () => {
  const id = readline.question('Qual id deseja ver? ');
  const character = await returnById(id);
  console.log(character);
}

searcher();
