let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let totalOdd = 0;

numbers.forEach((number) => {
  if(number % 2 != 0){
    totalOdd += 1;
  }
});

console.log(totalOdd);