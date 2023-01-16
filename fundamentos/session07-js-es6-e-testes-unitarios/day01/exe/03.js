const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const objAddKey = (obj, key, value) => {
  obj[key] = value;
};
objAddKey(lesson2, 'turno', 'noite');
console.log(lesson2);
console.log('####################################################');

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const objListKeys = (obj) => {
  console.log(Object.keys(obj));
};
objListKeys(lesson2);
console.log('####################################################');

// Crie uma função para mostrar o tamanho de um objeto.
const objLength = (obj) => {
  console.log(`Tamanho do objeto: ${Object.keys(obj).length}`);
};
objLength(lesson2);
console.log('####################################################');

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const objValue = (obj) => {
  console.log(Object.values(obj));
};
objValue(lesson1);
console.log('####################################################');

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
const allLessons = {
  lesson1: Object.assign({}, lesson1),
  lesson2: Object.assign({}, lesson2),
  lesson3: Object.assign({}, lesson3),
}
console.log(allLessons);
console.log('####################################################');

// Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.
const verifyStudents = (obj) => {
  let total = 0;
  let allKeys = Object.keys(obj);
  allKeys.forEach((value) => {
    if ('numeroEstudantes' in obj[value]) {
      total = total + obj[value].numeroEstudantes;
    }
  });
  return total;
}
console.log(`Total de alunos: ${verifyStudents(allLessons)}`);
console.log('####################################################');

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
const getValueByNumber = (obj, index) => {
  const getObj = Object.values(obj);
  return getObj[index];
}
console.log(getValueByNumber(lesson1, 3));
console.log('####################################################');

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles o objeto, o nome da chave e o valor da chave. Exemplo:

const verifyPair = (obj, key, value) => {
  if (key in obj && obj[key] === value) {
    return true;
  } else {
    return false;
  }
}
console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
console.log(verifyPair(lesson2, 'materia', 'História'));