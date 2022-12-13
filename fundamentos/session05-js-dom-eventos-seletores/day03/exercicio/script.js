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

// SELECT
const ulDays = document.querySelector('.days-container #days');
divButton = document.querySelector('.buttons-container');

// CREATE
const createButtonHoliday = document.createElement('button');
const createButtonFriday = document.createElement('button');


decemberDaysList.forEach((value) => {
  const li = document.createElement('li');
  li.innerHTML = value;
  li.className = 'day'

  if (li.innerHTML == 24 || li.innerHTML == 31) {
    li.className = 'day holiday'
  };

  if (li.innerHTML == 4 || li.innerHTML == 11 || li.innerHTML == 18) {
    li.className = 'day friday'
  };

  if (li.innerText == 25) {
    li.className = 'day friday holiday'
  }

  ulDays.appendChild(li);
});

const createButtonHolidayFunction = (feriados) => {
  createButtonHoliday.innerText = feriados;
  createButtonHoliday.id = 'btn-holiday';
  
  divButton.appendChild(createButtonHoliday);
};
createButtonHolidayFunction('Feriados');


createButtonHoliday.addEventListener('click', () => {
  for (let value of ulDays.children) {
    if (value.classList.contains('holiday')) {
      if (value.style.backgroundColor === 'rgb(200, 200, 222)') {
        value.style.backgroundColor = '#eee'
      } else {
        value.style.backgroundColor = '#C8C8DE'
      }
    }
  }
});

const createButtonFridayFunction = (sexta) => {
  createButtonFriday.id = 'btn-friday';
  createButtonFriday.innerText = sexta;

  divButton.appendChild(createButtonFriday);
};
createButtonFridayFunction('Sexta-Feira');