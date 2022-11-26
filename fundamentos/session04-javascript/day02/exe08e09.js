let numbers = [];
let dividedNumbers;

for(let index = 0; index <= 25; index += 1){
  numbers.push(index);
  
  numbers.forEach((number) => {
    dividedNumbers = number / 2;
  })
  
  console.log(dividedNumbers);
}