pessoaEstudante = {};

const addNewProperty = (object, newKey, newValue) => object[newKey] = newValue;

console.log(pessoaEstudante);

addNewProperty(pessoaEstudante, 'name', 'Jorel');
addNewProperty(pessoaEstudante, 'email', 'jorel@email.com');
console.log(pessoaEstudante);