let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multipliedNumbers = [];
let secondIndex = 0;

for(let index = 0; index < numbers.length; index += 1){
  secondIndex += 1;
  if(secondIndex >= numbers.length){
    multipliedNumbers.push(numbers[index] * 2);
  }else{
    multipliedNumbers.push(numbers[index] * numbers[secondIndex]);
  }
}

console.log(multipliedNumbers);