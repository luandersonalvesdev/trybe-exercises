// POPUP VALIDATION
// https://www.cssscript.com/minimal-form-validation-popup-pure-javascript/
window.onload = () => {
  validation.init("form");
};

const Rules = validation.getRules();

Rules["custom"] = {
  message: "Adicionar cor",
  method: el => {
  }    
}