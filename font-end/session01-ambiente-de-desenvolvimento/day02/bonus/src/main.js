const btnDogEl = document.querySelector('#dog');
const btnCatEl = document.querySelector('#cat');
const btnSurpriseEl = document.querySelector('#surprise');
const imgEl = document.querySelector('img');

const fRandomDog = () => {
  const RANDOM_DOG = "https://dog.ceo/api/breeds/image/random";
  return new Promise((resolve, reject) => {
    fetch(RANDOM_DOG)
      .then((response) => response.json())
      .then((data) => resolve(data.message));
  })
}

const fRandomCat = () => {
  const RANDOM_CAT = "https://aws.random.cat/meow";
  return new Promise((resolve, reject) => {
    fetch(RANDOM_CAT)
      .then((promise) => promise.json())
      .then((data) => resolve(data.file));
  })
}

const fRandom = () => {
  Promise.any([
    fRandomDog(),
    fRandomCat(),
  ])
    .then((result) => imgEl.src = result)
    .catch((erro) => console.log(erro.message));
}

btnDogEl.addEventListener('click', () => {
  fRandomDog()
    .then((result) => imgEl.src = result);
});
btnCatEl.addEventListener('click', () => {
  fRandomCat()
    .then((result) => imgEl.src = result);
});
btnSurpriseEl.addEventListener('click', fRandom);