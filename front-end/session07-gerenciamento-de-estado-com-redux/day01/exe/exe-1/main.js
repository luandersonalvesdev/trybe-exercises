import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green'],
  index: 0,
};

const reducer = (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case "NEXT_COLOR": {
      return {
        ...state,
        index: state.index === (state.colors.length - 1) ? (state.colors.length - 1) : state.index += 1,
      };
    }
    case "PREVIOUS_COLOR": {
      return {
        ...state,
        index: state.index ? (state.index -= 1) : 0,
      }
    }
    case "RANDOM_COLOR": {
      return {
        ...state,
        colors: [...state.colors, criarCor()],
      }
    }
    default: state;
  }
  return state;
}

const store = createStore(reducer, composeWithDevTools());

const previusBtn = document.querySelector('#previous');
const nextBtn = document.querySelector('#next');
const randomBtn = document.querySelector('#random');

nextBtn.addEventListener('click', () => {
  store.dispatch({type: "NEXT_COLOR"});
});

previusBtn.addEventListener('click', () => {
  store.dispatch({type: "PREVIOUS_COLOR"});
});

randomBtn.addEventListener('click', () => {
  store.dispatch({type: "RANDOM_COLOR"});
});

store.subscribe(() => {
  const {colors, index} = store.getState();
  const colorEl = document.querySelector('#value');
  const containerEl = document.querySelector('#container');

  colorEl.innerHTML = colors[index];
  containerEl.style.backgroundColor = colors[index];
  
});
