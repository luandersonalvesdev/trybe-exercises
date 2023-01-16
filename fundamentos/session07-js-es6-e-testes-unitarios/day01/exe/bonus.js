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

const objAddKey = (obj, key, value) => {
  obj[key] = value;
};
objAddKey(lesson2, 'turno', 'noite');

const allLessons = {
  lesson1: Object.assign({}, lesson1),
  lesson2: Object.assign({}, lesson2),
  lesson3: Object.assign({}, lesson3),
}

// Utilizando o objeto (allLesson), crie uma função para contar quantos estudantes assistiram às aulas de Matemática;
const mathStudents = (obj) => {
  const keys = Object.keys(obj);
  let total = 0;
  for (let index = 0; index < keys.length; index += 1) {
    if (obj[keys[index]].materia === 'Matemática') {
      total = total + obj[keys[index]].numeroEstudantes;
    }
  }
  return total;
};
console.log(mathStudents(allLessons)); 
console.log('####################################################');

// Utilizando o objeto (allLesson), crie uma função que deva retornar um objeto que represente o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes.
/* 
console.log(createReport(allLessons, 'Maria Clara'));
/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} 
*/
const createReport = (obj, teacher) => {
  const allEntries = Object.entries(obj);
  let students = 0;
  let classes = [];
  for (let index = 0; index < allEntries.length; index += 1) {
    if (allEntries[index][1].professor === teacher) {
      students = students + allEntries[index][1].numeroEstudantes;
      classes.push(allEntries[index][1].materia);
    }
  }
  const all = {
    professor: teacher,
    aulas: classes,
    estudantes: students,
  }
  return all;
};

console.log(createReport(allLessons, 'Maria Clara'));