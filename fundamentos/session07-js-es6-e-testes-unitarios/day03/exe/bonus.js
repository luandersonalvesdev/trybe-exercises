// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  if (searchId(id, professionalBoard)) {
    return searchInfo(searchId(id, professionalBoard), detail);
  }
};

const searchId = (id, array) => {
  let x = 0;
  while (x < array.length) {
    if (id === array[x].id) {
      return array[x];
    }  
    x += 1;
  };
  throw new Error('ID não identificada.');
};

const searchInfo = (searchId, detail) => {
  if (searchId.hasOwnProperty(detail)) {
    return searchId[detail];
  }
  throw new Error('Informação indisponível.')
};

const search = () => {
  try {
    console.log(searchEmployee('9852-2-2', 'specialities'));
  } catch (e) {
    console.log(e.message);
  };
}

search();

module.exports = { searchEmployee };