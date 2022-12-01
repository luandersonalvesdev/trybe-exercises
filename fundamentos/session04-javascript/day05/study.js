if (true) { // inicio do escopo do if
  
  var userAge = '20';
  console.log(userAge); // 20
  
} // fim do escopo do if

console.log(userAge); // 20

// ##############################################################################################

const technologies = ['Javascript', 'CSS', 'HTML'];
technologies.push('React');
console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

technologies[0] = 'React';
console.log(technologies); // [ 'React', 'CSS', 'HTML', 'React' ]

technologies = ['Javascript', 'CSS', 'HTML', 'React']
console.log(technologies); // Erro

// ##############################################################################################

const a = 5;
a = 3;
console.log(a);

// ##############################################################################################

// PARA UMA ARROW FUNCTION RETORNAR UM OBJETO

const person = (name, idade) => ({name: name, idade: idade});

console.log(person('luao', 22));