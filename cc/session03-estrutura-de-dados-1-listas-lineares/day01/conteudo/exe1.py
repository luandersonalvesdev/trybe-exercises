class Geladeira:
    def __init__(self, cor, marca) -> None:
        self.cor = cor
        self.marca = marca

    def __str__(self) -> str:
        return(f'''
                Geladeira Cor: {self.cor}
                Geladeira Marca: {self.marca}
                ''')

class Pessoa:
    def __init__(self, nome) -> None:
        self.nome = nome
        self.geladeira = None

    def comprar_geladeira(self, geladeira):
        self.geladeira = geladeira

    def vender_geladeira(self):
        self.geladeira = None

    def __str__(self) -> str:
        return (f'''
                Nome: {self.nome}
                Geladeira: {
                    f'Cor:{self.geladeira.cor}, Marca: {self.geladeira.marca}' 
                        if self.geladeira else 
                    'Não tem geladeira'
                    }
                ''')

geladeira = Geladeira(cor='Azul', marca='Samsung')
eu = Pessoa('Luao')

eu.comprar_geladeira(geladeira=geladeira)
print(eu)


eu.vender_geladeira()
print(eu)