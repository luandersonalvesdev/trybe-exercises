class Cliente {
  private nome: string;
  
}

class Item {
  public nome: string;
  public preco: number;
}

class Pedido {
  private cliente: Cliente;
  private items: Item[];
  private formaPagamento: string;
  private desconto = 0;

  public calculaTotal() {
    return this.items.reduce((acc, curr) => acc + curr.preco, 0);
  }

  public calculaTotalComDesconto() {
    const totalDesconto = this.calculaTotal() * this.desconto;
    return this.calculaTotal() - totalDesconto;
  }
}

class Data {
  public day: number;
  public month: number;
  public year: number;

  constructor(day: number, month: number, year: number) {
    
  }
}