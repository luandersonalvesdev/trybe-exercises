import Swal from 'sweetalert2';

const btnEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const contCoinsEl = document.querySelector('.container-coins');
const infoEl = document.querySelector('h2');

const fCleanTable = () => {
  if (contCoinsEl.innerHTML.length > 0) {
    contCoinsEl.innerHTML = '';
  }
};

const fCreateElements = () => {
  const mDiv = document.createElement('div');
  const mImg = document.createElement('img');
  const mCoinName = document.createElement('span');
  const mCoinValue = document.createElement('span');
  return { mDiv, mImg, mCoinName, mCoinValue };
};

const fVerifyCoin = (arr) => arr.some((coin) => coin[0] === inputEl.value.toUpperCase());

const fCallSwal = () => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Insira uma moeda válida',
  });
};

const fMakeTable = (rates) => {
  const arrRates = Object.entries(rates);
  if (fVerifyCoin(arrRates)) {
    const toFixed = 3;
    infoEl.innerHTML = `Valores referentes a 1 ${(inputEl.value).toUpperCase()}`;
    fCleanTable();
    arrRates.forEach((coin) => {
      const [name, value] = coin;
      const { mDiv, mImg, mCoinName, mCoinValue } = fCreateElements();
      mImg.src = './src/assets/coin.svg';
      mCoinName.innerHTML = name;
      mCoinValue.innerHTML = value.toFixed(toFixed);
      mDiv.className = 'coin';
      contCoinsEl.appendChild(mDiv);
      mDiv.appendChild(mImg);
      mDiv.appendChild(mCoinName);
      mDiv.appendChild(mCoinValue);
    });
  } else {
    fCallSwal();
  }
};

const fSearchCoin = () => {
  const coin = inputEl.value;
  const URL_REQUEST = `https://api.exchangerate.host/latest?base=${coin}`;
  return fetch(URL_REQUEST)
    .then((response) => response.json())
    .then((data) => fMakeTable(data.rates));
};

btnEl.addEventListener('click', fSearchCoin);
