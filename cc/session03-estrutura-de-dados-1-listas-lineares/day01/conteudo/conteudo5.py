# Parâmetros opcionais:
class Pessoa:
    def __init__(self, nome, idade=None, saldo_na_conta=None):
        self.idade = idade
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.brinquedos = []

pessoa_1 = Pessoa("Marcelo", 22, 700)
pessoa_2 = Pessoa("Matheus")
pessoa_3 = Pessoa("Maria", 33)
pessoa_4 = Pessoa("Márcia", saldo_na_conta=100)




# SUPER
from conteudo4 import Eletrodomestico

class Liquidificador(Eletrodomestico):
    pass

class Ventilador(Eletrodomestico):
    def __init__(self, cor, potencia, tensao, preco, quantidade_de_portas=1):
        # Chamada ao construtor da superclasse
        super().__init__(cor, potencia, tensao, preco)
        
        # Faz outras coisas específicas dessa subclasse
        self.quantidade_de_portas = quantidade_de_portas


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.eletrodomesticos = []

    # Permite a aquisição de qualquer eletrodoméstico
    def comprar_eletrodomestico(self, eletrodomestico):
        if eletrodomestico.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= eletrodomestico.preco
            self.eletrodomestico.append(eletrodomestico)


# CLASSE ABSTRATA:
from abc import ABC, abstractmethod

class Database(ABC):
    @abstractmethod
    def execute(self, query):
        ...
        # ... or raise NotImplementedError

class MongoDatabase(Database):
    def execute(self, query):
        print(f"executando query '{query}' no mongo")

class MySQLDatabase(Database):
    def execute(self, query):
        print(f"executando query '{query}' no mysql")




def minha_func(database: Database): # repare que o d é minúsculo
    if isinstance(database, Database):
        database.execute("query qualquer")
    else:
        print(f"{database} não é um Database válido")

db1 = MongoDatabase()
db2 = MySQLDatabase()

if __name__ == '__main__':
    minha_func(db1)
    minha_func(db2)
    minha_func("db_inválido")