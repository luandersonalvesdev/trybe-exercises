const COLORS = ['aqua', 'red', 'violet', 'gray']
const RANDOM_NUMBER = () => {
  const random = Math.floor(Math.random() * COLORS.length);
  return random;
}

const RANDOM_COLOR = () => {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const INITIAL_STATE = {
  currentColor: RANDOM_COLOR(),
};

export const changeColorReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'CHANGE_COLOR':
      return ({
        ...state,
        currentColor: RANDOM_COLOR(),
      })
    default: 
      return state;
  }
};
