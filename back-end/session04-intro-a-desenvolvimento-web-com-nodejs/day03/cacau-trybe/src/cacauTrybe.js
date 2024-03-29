const fs = require('fs').promises;
const { join } = require('path');

const path = '/files/cacauTrybeFile.json';

const readCacauTrybeFile = async () => {
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .find((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
};

const uptadeChocolate = async (id, name, brandId) => {
  const allFile = await readCacauTrybeFile();
  const { chocolates } = allFile;
  const isChocolate = await getChocolateById(id);
  if(!isChocolate) return false;
  const filtered = chocolates.reduce((acc, curr) => {
    if(curr.id === id) {
      curr.name = name;
      curr.brandId = brandId;
    }
    return [...acc, curr];
  }, []);
  fs.writeFile(join(__dirname, path), JSON.stringify({...allFile, chocolates: filtered}));
  const chocolateUpdated = await getChocolateById(id);
  return chocolateUpdated;
}

module.exports = {
    getAllChocolates,
    getChocolateById,
    getChocolatesByBrand,
    uptadeChocolate,
};