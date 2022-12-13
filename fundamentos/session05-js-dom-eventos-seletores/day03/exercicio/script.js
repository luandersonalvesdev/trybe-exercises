const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const fridays = [4, 11, 18, 25];

// SELECT
const ulDays = document.querySelector('.days-container #days');
divButton = document.querySelector('.buttons-container');

// CREATE
const createButtonHoliday = document.createElement('button');
const createButtonFriday = document.createElement('button');

// ADICIONANDO CLASSES AOS DIAS
decemberDaysList.forEach((value) => {
  const li = document.createElement('li');
  li.innerText = value;
  li.className = 'day'

  if (li.innerText == 24 || li.innerText == 31) {
    li.className = 'day holiday'
  };

  if (li.innerText == 4 || li.innerText == 11 || li.innerText == 18) {
    li.className = 'day friday'
  };

  if (li.innerText == 25) {
    li.className = 'day friday holiday'
  }

  ulDays.appendChild(li);
});

// CRIANDO O BOTÃO FERIADO
const createButtonHolidayFunction = (feriados) => {
  createButtonHoliday.innerText = feriados;
  createButtonHoliday.id = 'btn-holiday';
  
  divButton.appendChild(createButtonHoliday);
};
createButtonHolidayFunction('Feriados');

// ALTERAR COR DOS FERIADOS
createButtonHoliday.addEventListener('click', () => {
  const colorChange = 'rgb(200, 200, 222)'
  const colorDefault = '#eee'

  for (let value of ulDays.children) {
    if (value.classList.contains('holiday')) {
      if (value.style.backgroundColor === colorChange) {
        value.style.backgroundColor = colorDefault;
      } else {
        value.style.backgroundColor = colorChange;
      }
    }
  }
});

// CRIANDO O BOTÃO SEXTA
const createButtonFridayFunction = (sexta) => {
  createButtonFriday.id = 'btn-friday';
  createButtonFriday.innerText = sexta;

  divButton.appendChild(createButtonFriday);
};
createButtonFridayFunction('Sexta-Feira');

// ALTERAR TEXTO DOS DIAS DE SEXTA
createButtonFriday.addEventListener('click', (event) => {
  const textChange = 'Sextou';
  let aux = 0;

  for (let index = 0; index < ulDays.children.length; index += 1) {
    if (ulDays.children[index].classList.contains('friday')) {
      if (ulDays.children[index].innerText === textChange) {
        console.log(ulDays.children[index].innerText);
        ulDays.children[index].innerText = fridays[aux];
      } else {
        console.log(ulDays.children[index].innerText);
        ulDays.children[index].innerText = textChange;
      }
      aux += 1;
    };
  }
});