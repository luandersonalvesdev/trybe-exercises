const INITIAL_STATE = {
  currentNumber: 0,
};

export const changeNumberReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_NUMBER': 
      return ({
        ...state,
        currentNumber: action.payload.number ? action.payload.number : 0,
      })
    default:
      return state;
  }
};
