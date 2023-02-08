import Swal from 'sweetalert2';

const imgEl = document.querySelector('img');
const pEl = document.querySelector('p');
const buttonEl = document.querySelector('button');


const fGetHero = () => {
  const randomNum = Math.round(Math.random() * 563);
  const ID_HERO = `https://akabab.github.io/superhero-api/api/id/${randomNum}.json`

  fetch(ID_HERO)
  .then((response) => response.json())
  .then((data) => {
    const { name, images: { md: imagem } } = data
    imgEl.src = imagem;
    pEl.innerText = name;
  })
  .catch(erro => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `Não foi possível encontrar um herói com esse id.`,
    });
  });
};

buttonEl.addEventListener('click', fGetHero);

