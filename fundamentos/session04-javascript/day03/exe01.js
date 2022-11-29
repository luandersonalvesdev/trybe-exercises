/* 
O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
O fatorial é representado pelo sinal !

4! = 4 x 3 x 2 x 1 = 24

Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.*/
let aux = 4, sum = 0;

for(let index = 3; index > 0; index -= 1){
  sum = aux * index;
  aux -= 1;
}