let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let helpChange = 0;

for(let index = 1; index < numbers.length; index += 1){
  for(let index2 = 0; index2 < numbers.length; index2 += 1){
    if(numbers[index2] < numbers[index]){
      helpChange = numbers[index2];
      numbers[index2] = numbers[index];
      numbers[index] = helpChange;
    }
  }
}

console.log(numbers);