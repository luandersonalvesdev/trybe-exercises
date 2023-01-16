const person = {
  name: 'luao',
  age: 26,
  job: 'a',
}

const tasks = {
  job: 'b',
}

const tasks1 = {
  job: 'c',
}

const clone = (Object.assign(person, tasks, tasks1));
Object.assign(person, tasks, tasks1);
const newClone = (Object.assign({}, person, tasks, tasks1));

console.log(newClone);
console.log(clone);
console.log(person);

clone.outro = 'teste';
newClone.teste = 'vamo ver';

console.log(newClone);
console.log(clone);
console.log(person);