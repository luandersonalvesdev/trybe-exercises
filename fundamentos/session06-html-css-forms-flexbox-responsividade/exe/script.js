const btnSubmit = document.querySelector('#submit');
const email = document.querySelector('#email');

const prevent = (e) => {
  e.preventDefault();
}

const requirementEmail = () => {
  if (email.value.length < 10 || email.value.length > 50) {
    alert('Dados do email inválido');
  } else {
    alert('Dados enviados com sucesso');
  }
}

btnSubmit.addEventListener('click', requirementEmail);
// btnSubmit.addEventListener('click', prevent);