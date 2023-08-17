class Pessoa {
  name: string;
  height: number;
  weight?: number;

  constructor(n: string, h: number, w?: number) {
    console.log(`Creating person ${n}`);
    this.name = n;
    this.height = h;
    this.weight = w;
  }

  sleep() {
    console.log(`${this.name}: zzZzZZzZz`);
    
  }
}

const pessoa1 = new Pessoa('Jorel', 1.60, 50);
const pessoa2 = new Pessoa('Irmao do Jorel', 1.10);
console.log(pessoa1.name);
console.log(pessoa1.height);
console.log(pessoa1.weight);
console.log(pessoa2.weight);
pessoa1.sleep();
