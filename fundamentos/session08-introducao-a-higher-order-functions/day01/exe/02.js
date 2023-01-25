const sorteio = (num, func) => {
  const random = Math.ceil(Math.random() * 5);
  return func(num, random)
};

const fVerify = (num, random) => {
  console.log(random);
  if (num === random) {
    return 'Parabéns!';
  }
  return 'Tente novamente.';
};

console.log(sorteio(3, fVerify));
console.log(sorteio(2, fVerify));
console.log(sorteio(5, fVerify));
console.log(sorteio(1, fVerify));
console.log(sorteio(1, fVerify));
console.log(sorteio(3, fVerify));
console.log(sorteio(4, fVerify));