const fs = require('fs').promises;

const read = async () => {
  try {
    const data = await fs.readFile('./meu-arquivo.txt', 'utf-8')
    console.log(data);
  } catch(e) {
    console.log(e.mensage);
  }
}

read();