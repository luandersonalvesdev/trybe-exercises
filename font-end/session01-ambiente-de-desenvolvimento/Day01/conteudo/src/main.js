import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';

// eslint-disable-next-line import/no-unresolved
import './style.css';

// console.log(nanoid());

const btn = document.querySelector('button');
const h2 = document.querySelector('h2');

btn.addEventListener('click', () => {
    const randomPass = nanoid();
    h2.innerText = randomPass;
});

h2.addEventListener('click', () => {
    copy(h2.innerText);
});
