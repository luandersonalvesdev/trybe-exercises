// Faça uma lista com as suas frutas favoritas
const specialFruit = ['a', 'b', 'c'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['d', 'e', 'f'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));