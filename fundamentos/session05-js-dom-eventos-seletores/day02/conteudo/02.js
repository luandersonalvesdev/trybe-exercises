// CRIANDO FILHO PARA pai
const dad = document.getElementById('pai');

let sectionByJS = document.createElement('section');
sectionByJS.id = 'firstChildByJS';

dad.appendChild(sectionByJS);

// CRIANDO FILHO PARA ondevoceesta
const whereIAm = document.querySelector('#elementoOndeVoceEsta');

let sectionByJS02 = document.createElement('section');
sectionByJS02.id = 'secondChildByJS'

whereIAm.appendChild(sectionByJS02);

// CRIANDO FILHO PARA primeirofilhodofilho
const firstChildOfChild = document.querySelector('#primeiroFilhoDoFilho');

let sectionByJS03 = document.createElement('section');
sectionByJS03.id = 'thirdChildByJS'

firstChildOfChild.appendChild(sectionByJS03);

// ACESSANDO TERCEIRO FILHO DO thirdChildByJS
const terceiroFilho = sectionByJS03.parentElement.parentElement.nextElementSibling;
console.log(terceiroFilho);