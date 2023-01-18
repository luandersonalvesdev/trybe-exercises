const hydrate = (string) => {
  let cups = 0;
  let splitString = string.split('');
  splitString.forEach((v) => {
    const convertNum =  parseInt(v);
    if (convertNum) {
      cups += convertNum;
    }
  });

  if (cups <= 1) {
    return `${cups} copo de água`;
  }
  return `${cups} copos de água`;
};

console.log(hydrate('1 cerveja'));

module.exports = hydrate;