class Person {
  constructor(height, weight) {
    this.height = height;
    this.weight = weight;
  }

  say() {
    console.log('Hello, class!');
  }

  imc() {
    return (this.height + this.weight) * 2;
  }
}

const jorel = new Person(90, 20);
const irmao = new Person(20, 20);

jorel.say();
console.log(jorel.imc());
console.log(irmao.imc());