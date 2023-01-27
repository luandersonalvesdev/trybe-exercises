// 🚀 5 - Crie um array de objetos e calcule a média de notas. Utilize as constantes students e grades para criar um array de objetos e calcule a média da nota das pessoas estudantes:

// O index 0 do array `students` equivale ao index 0 do array `grades`
// De olho na dica 👀: você pode utilizar o map para iterar no array e utilizar o reduce para calcular a média.

/* const expectedResult = [
 { name: 'Pedro Henrique', average: 7.8 },
 { name: 'Miguel', average: 9.2 },
 { name: 'Maria Clara', average: 8.8 },
]; */

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const fGetAverage = (acc, val) => acc + val;
const fMakeStatus = (val, ind) => {
  return {
    name: students[ind],
    average: (val.reduce(fGetAverage) / val.length)
  };
};

const fStatus = (grades) => grades.map(fMakeStatus);

console.log(fStatus(grades));