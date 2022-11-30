/* 
O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
O fatorial é representado pelo sinal !

4! = 4 x 3 x 2 x 1 = 24

Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.*/
let num = 10, sum = 0;

while(num > 1){

  if(sum != 0 && (num-1) > 0){
    sum = sum * (num-1);
  }else{
    sum = num * (num-1);
  }

  num--;
}

console.log(sum);
