// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

const preventDefault = (e) => {
  e.preventDefault();
};

const preventDefaultText = (e) => {
  if (e.key !== 'a') {
    e.preventDefault();
  }
};

HREF_LINK.addEventListener('click', preventDefault);
INPUT_CHECKBOX.addEventListener('click', preventDefault);
INPUT_TEXT.addEventListener('keypress', preventDefaultText);