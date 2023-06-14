const { calcBmi } = require('./bmi');
const readline = require('readline-sync');

const getInfos = () => {
  const weight = readline.questionFloat("What's your weight? ");
  const height = readline.questionFloat("What's your height? ");

  const bmi = calcBmi(weight, height);
  let description = '';

  if(bmi < 18.5) {
    description = 'Ta magro.'
  } else if(bmi > 40) {
    description = 'Ta gordo.'
  } else {
    description = 'Ta ok.'
  }

  console.log(`Your BMI is ${bmi}. ${description}`)
}

getInfos();