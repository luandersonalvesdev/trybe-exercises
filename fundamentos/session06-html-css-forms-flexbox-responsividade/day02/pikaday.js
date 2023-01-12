// PIKADAY
// https://github.com/Pikaday/Pikaday

const date = document.querySelector('#date');

window.onload = () => {
  let picker = new Pikaday({
    field: date,
    format: 'DD MM YYYY',
    onSelect: function() {
      console.log(this.getMoment().format('Do MMMM YYYY'));
  }
  });

}