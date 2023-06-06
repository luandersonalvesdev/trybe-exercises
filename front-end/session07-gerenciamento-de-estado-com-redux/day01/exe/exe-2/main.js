import { composeWithDevTools } from "@redux-devtools/extension";
import { legacy_createStore as createStore } from 'redux';

const INITIAL_STATE = {
  status: 'offline',
  theme: 'dark',
};

function reducer(state = INITIAL_STATE, {type}) {
  switch (type) {
    case 'TOGGLE_THEME': {
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark',
      }
    }
    case 'TOGGLE_STATUS': {
      return {
        ...state,
        status: state.status === 'offline' ? 'online' : 'offline',
      }
    }
  }
  return state;
}

const store = createStore(reducer, composeWithDevTools());

const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');

themeButton.addEventListener('click', () => {
  store.dispatch({type: 'TOGGLE_THEME'});
});

statusButton.addEventListener('click', () => {
  store.dispatch({type: 'TOGGLE_STATUS'});
});

store.subscribe(() => {
  const { theme, status } = store.getState();
  const containerEl = document.querySelector('.container');
  const statusEl = document.querySelector('#status');

  containerEl.classList = `container ${theme}`;
  statusEl.innerHTML = status;
  themeButton.innerHTML = `${theme === 'light' ? 'dark' : 'light'} mode`;
  statusButton.innerHTML = `ficar ${status === 'online' ? 'offline' : 'online'}`
});
