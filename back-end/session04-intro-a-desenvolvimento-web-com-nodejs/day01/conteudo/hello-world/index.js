const readline = require('readline-sync');

const login = readline.question('Type your login: ');
const pass = readline.question('Type your pass: ', {
  hideEchoBack: true
});

console.log(`Hello ${login}, com senha: ${pass}`);