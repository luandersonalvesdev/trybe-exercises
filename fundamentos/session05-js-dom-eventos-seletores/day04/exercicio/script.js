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
const body = document.querySelector('body');

// CREATE


window.onload = () => {

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

  ulContainer.addEventListener('click', (e) => {
    const target = e.target;

    for (let index = 0; index < allButtons.length; index += 1) {
      for (let index2 = 0; index2 < allButtons[index].length; index2 += 1) {

        if (target.innerText == allButtons[0][index2]) {
          body.style.backgroundColor = allButtons[0][index2];
        }

      }
    }

  });

};