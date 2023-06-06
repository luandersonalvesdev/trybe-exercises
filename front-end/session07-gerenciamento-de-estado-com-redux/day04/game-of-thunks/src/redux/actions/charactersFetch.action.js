export const IS_LOADING = 'IS_LOADING';
export const SUCESS_FETCH = 'SUCESS_FETCH';
export const FAIL_FETCH = 'FAIL_FETCH';

const doingFetch = () => ({ type: IS_LOADING })

const sucessFetch = (data) => {
  return ({
    type: SUCESS_FETCH,
    payload: data,
  })
};

const failFetch = () => ({ type: FAIL_FETCH });

export const searchCharacterFetch = (charInput) => {
  return async (dispatch) => {
    try {
      dispatch(doingFetch());
      const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${charInput}`);
      const data = await response.json();
      dispatch(sucessFetch(data[0]));
    } catch (error) {
      dispatch(failFetch());
    }
  }
}