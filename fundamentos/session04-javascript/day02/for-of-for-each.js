/* ###### TABUADA COM ARRAY ######### */
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* num.forEach((item) => {
  for(index = 1; index < 11; index += 1){
    console.log(item + " x " + index + " = " + index*item);
  }
  console.log();
}) */

for(value of num){
  console.log(value + " x " + 7 + " = " + 7*value);
}