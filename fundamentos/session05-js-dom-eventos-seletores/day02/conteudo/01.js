const e = document.querySelector('#elementoOndeVoceEsta');
e.parentElement.style.color = 'red';

let first = document.querySelector('#primeiroFilhoDoFilho');
first.innerText = 'Oi, sou o primeiro filho do filho'

let dad = document.getElementById('pai');

console.log(dad.firstElementChild);

// ACESSANDO O primeiroFIlho
console.log(e.previousElementSibling);

// ACESSANDO O TEXTO atencao
console.log(e.nextSibling);

// ACESSANDO TERCEIRO FILHO
console.log(e.nextElementSibling);

// ACESSANDO TERCEIRO FILHO A PARTIR DO pai
console.log(dad.lastElementChild.previousElementSibling);