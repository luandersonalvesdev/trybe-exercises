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
const divButton = document.querySelector('.buttons-container');
const divMyTask = document.querySelector('.tasks-container .my-tasks');
const ulTasksList = document.querySelector('.task-list-container .task-list');
const taskInput = document.querySelector('#task-input');
const buttonAdd = document.querySelector('#btn-add');

// CREATE
const createButtonHoliday = document.createElement('button');
const createButtonFriday = document.createElement('button');

// 1 ADICIONANDO CLASSES AOS DIAS
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

// 2 CRIANDO O BOTÃO FERIADO
const createButtonHolidayFunction = (feriados) => {
  createButtonHoliday.innerText = feriados;
  createButtonHoliday.id = 'btn-holiday';
  
  divButton.appendChild(createButtonHoliday);
};
createButtonHolidayFunction('Feriados');

// 3 ALTERAR COR DOS FERIADOS
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

// 4 CRIANDO O BOTÃO SEXTA
const createButtonFridayFunction = (sexta) => {
  createButtonFriday.id = 'btn-friday';
  createButtonFriday.innerText = sexta;

  divButton.appendChild(createButtonFriday);
};
createButtonFridayFunction('Sexta-Feira');

// 5 ALTERAR TEXTO DOS DIAS DE SEXTA
createButtonFriday.addEventListener('click', (event) => {
  const textChange = 'Sextou';
  let aux = 0;

  for (let index = 0; index < ulDays.children.length; index += 1) {
    if (ulDays.children[index].classList.contains('friday')) {
      if (ulDays.children[index].innerText === textChange) {
        ulDays.children[index].innerText = fridays[aux];
      } else {
        ulDays.children[index].innerText = textChange;
      }
      aux += 1;
    };
  }
});

// 6 DANDO ZOOM E OUTZOOM NOS DIAS
ulDays.addEventListener('mouseover', (event) => {
  const target = event.target;
  target.style.transform = 'scale(1.6)';
});

ulDays.addEventListener('mouseout', (event) => {
  const target = event.target;
  target.style.transform = 'scale(1)';
});

// 7 COLOCANDO TAREFA PERSONALIZADA AO CALENDARIO
const createTaskFunction = (task) => {
  const createSpan = document.createElement('span');
  createSpan.className = 'task';
  createSpan.innerText = task;

  divMyTask.appendChild(createSpan);
};
createTaskFunction('cozinhar');


// 8 ADICIONANDO COR PARA TAREFA
const colorToChange = 'red';
const colorForTask = (color) => {
  const createDivTask = document.createElement('div');
  createDivTask.className = 'task';
  createDivTask.style.backgroundColor = color;

  divMyTask.appendChild(createDivTask);
};
colorForTask(colorToChange);

// 9 ADICIONANDO TASK-SELECTED NA DIV
// select
const selectCreateDivTask = document.querySelector('.tasks-container .my-tasks div');

selectCreateDivTask.addEventListener('click', () => {
  if (selectCreateDivTask.classList.contains('selected')) {
    selectCreateDivTask.classList.remove('selected');
  } else {
    selectCreateDivTask.classList.add('selected');
  }
});

// 10 ADICIONANDO COR NOS DIAS
ulDays.addEventListener('click', (event) => {
  const target = event.target;

  if (selectCreateDivTask.classList.contains('selected')) {
    if (target.style.color === colorToChange) {
      target.style.color = 'rgb(119,119,119)';
    } else {
      target.style.color = colorToChange;
    }
  }
});

// BONUS - ADICIONANDO LISTA DE COMPROMISSOS
const addTasksAtList = () => {
  const createLi = document.createElement('li');

  if (taskInput.value === '') {
    alert ('Por favor, insira algum valor.');
  } else {
    createLi.innerText = taskInput.value;
    taskInput.value = '';
  }

  ulTasksList.appendChild(createLi);
};

buttonAdd.addEventListener('click', addTasksAtList);

// quando aperta enter
window.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    addTasksAtList();
  }
});
