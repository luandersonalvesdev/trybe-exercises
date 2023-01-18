const techList = (array, name) => {
  const orderArray = array.sort();
  const arrayToReturn = [];
  if (array.length === 0) {
    return 'Vazio!';
  }
  orderArray.forEach((v) => {
    arrayToReturn.push({
      tech: v, 
      name
    });
  });

  return arrayToReturn;
};

// console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'jorge'));

module.exports = techList;