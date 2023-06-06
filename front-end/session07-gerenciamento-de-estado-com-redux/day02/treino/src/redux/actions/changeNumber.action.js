const CHANGE_NUMBER = 'CHANGE_NUMBER';

export const changeNumberAction = (number = 0) => ({
  type: CHANGE_NUMBER,
  payload: {
    number,
  }
});
