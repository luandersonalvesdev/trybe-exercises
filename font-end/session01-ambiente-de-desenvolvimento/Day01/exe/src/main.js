import validator from 'validator';

const gInput = document.querySelector('input');
const gSelect = document.querySelector('select');
const gBtn = document.querySelector('button');
const gP= document.querySelector('p');

gBtn.addEventListener('click', () => {
  gSelect.value === 'email' && validator.isEmail(gInput.value) ? gP.innerText = 'Campo é true' : gP.innerText = 'Campo é false';
});
