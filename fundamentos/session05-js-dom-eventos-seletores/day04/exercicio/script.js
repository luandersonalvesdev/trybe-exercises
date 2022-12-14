const allButtons = [
  ['white', 'black', 'green', 'blue', 'yellow'],
  ['black', 'red', 'white'],
  ['8pt', '10pt', '12pt', '14pt', '20pt'],
  ['1', 'normal', '1.5', '2.0', '3.0'],
  ['Arial', 'Times New Roman'],
];

// SELECT FROM HTML ALL UL's
const ulColorBg = document.querySelector('.color-background');
const ulColorFont = document.querySelector('.color-font');
const ulFontSize = document.querySelector('.font-size');
const ulLineSpacing = document.querySelector('.line-spacing');
const ulFontType = document.querySelector('.font-type');

const arraySelect = [ulColorBg, ulColorFont, ulFontSize, ulLineSpacing, ulFontType];

// SELECT OTHERS
const ulContainer = document.querySelector('.ul-container');
const main = document.querySelector('main');
const header = document.querySelector('header');

// CREATE STORAGE SAVE
const saveInStorage = () => {
  localStorage.setItem('configs', main.getAttribute('style'));
}

// CREATE STORAGE LOAD
let loadInStorage = () => {
  if (localStorage.getItem('configs')) {
    main.setAttribute('style', localStorage.getItem('configs'));
  }
}

window.onload = () => {

  // FUNCAO PARA CRIAR OS BOTOES AUTOMATICAMENTE
  (function(){
    for (let index = 0; index < allButtons.length; index += 1) {
      for (let index2 = 0; index2 < allButtons[index].length; index2 += 1) {
        
        const createLi = document.createElement('li');
        arraySelect[index].appendChild(createLi);

        const createButton = document.createElement('button');
        createButton.innerText = allButtons[index][index2];
        createButton.id = 'button'
        createLi.appendChild(createButton);
      }
    }
  })();

  // FUNCAO PARA ALTERAR AS CONFIGS DA PAGINA
  ulContainer.addEventListener('click', (e) => {
    const target = e.target;
    console.log(target.parentElement.parentElement);

    for (let index = 0; index < allButtons.length; index += 1) {
      for (let index2 = 0; index2 < allButtons[index].length; index2 += 1) {

        if (target.parentElement.parentElement.className === 'color-background') {
          main.style.backgroundColor = target.innerText;
          saveInStorage();
        } else if (target.parentElement.parentElement.className === 'color-font') {
          main.style.color = target.innerText;
          saveInStorage();
        } else if (target.parentElement.parentElement.className === 'font-size') {
          main.style.fontSize = target.innerText;
          saveInStorage();
        } else if (target.parentElement.parentElement.className === 'line-spacing') {
          main.style.lineHeight = target.innerText;
          saveInStorage();
        } else if (target.parentElement.parentElement.className === 'font-type') {
          main.style.fontFamily = target.innerText;
          saveInStorage();
        } 
      }
    }
  });
  loadInStorage();
};
