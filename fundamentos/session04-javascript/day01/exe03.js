let salary = 3000.00;
let inss = 0;
let ir = 0;
let irPercent = 0;
let salaryTotal = 0;

if(salary < 1556.94){
  inss = 0.08;
  salaryTotal = salary * inss;
}else if(salary >=1556.95 && salary <= 2594.92){
  inss = 0.09;
  salaryTotal = salary * inss;
}else if(salary >=2594.93 && salary <= 5189.82){
  inss = 0.11;
  salaryTotal = salary * inss;
}else{
  inss = 570.88;
  salaryTotal = salary + inss;
}


salary = salary - salaryTotal;
salaryTotal = 0;
// console.log(salary);

if(salary >= 1903.99 && salary <= 2826.05){
  ir = 142.80;
  irPercent = 0.075;
  salaryTotal = (salary * irPercent) - ir;
}

salary = salary - salaryTotal;

console.log(salary);