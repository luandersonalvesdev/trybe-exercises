interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {}

  myFunc(myParam: number): string {
    return `a soma é: ${myParam + this.myNumber}`
  }
}

const test = new MyClass(10);

console.log(test.myFunc(90));
