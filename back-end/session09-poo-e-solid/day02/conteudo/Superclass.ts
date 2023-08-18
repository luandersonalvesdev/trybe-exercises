class Superclass {
  constructor(
    public isSuper: boolean = true,

    ) {

  }

  public sayHello() {
    console.log('Hello, world!')
  }
}

class Subclass extends Superclass{

}

const myFunc = (obj: Superclass) => {
  obj.sayHello();
}

const sup = new Superclass();
const sub = new Subclass();

myFunc(sup);
myFunc(sub);