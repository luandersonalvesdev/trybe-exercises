/* 
O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
O fatorial é representado pelo sinal !

4! = 4 x 3 x 2 x 1 = 24

Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.*/

let num = 10; sum = num;

while(num > 1){
  
  sum *= (num-1);
  
  num--;
}

console.log(sum);