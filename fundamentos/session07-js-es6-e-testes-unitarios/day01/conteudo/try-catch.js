// VERIFICAR SE COMEÇA COM "A"
const verifyWord = (word) => {
  if ( typeof word !== 'string' ||  word[0].toLowerCase() !== 'a') {
    throw new Error('Palavra não começa com "A"');
  }
}

const seeWord = (word) => {
  try {
    verifyWord(word);
    return 'Correto, começa com "A"'
  } catch (error) {
    return error.message;
  }
}

console.log(seeWord('ju'));
console.log(seeWord('ab'));
console.log(seeWord('ba'));
console.log(seeWord('ud'));
console.log(seeWord('Ar'));

// VERIFICAR SE TEM "A" NA PALAVRA
const findLetterA = (word) => {
  const formatWord = word.toLowerCase();
  if (Array.from(formatWord).indexOf('a') === -1) {
    throw new Error('Palavra não tem letra "A".');
  }
}

const searchLetter = (word) => {
  try {
    findLetterA(word);
    return 'Sim, tem letra "A."';
  } catch (erro) {
    return erro.message;
  }
}

console.log(searchLetter('jooo'));
console.log(searchLetter('Abelha'));
console.log(searchLetter('yago'));
console.log(searchLetter('hugAo'));
console.log(searchLetter('willian'));






































