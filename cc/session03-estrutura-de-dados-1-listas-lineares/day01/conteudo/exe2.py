from conteudo4 import Eletrodomestico

class Secador(Eletrodomestico):
    def __str__(self) -> str:
        return (f'''
                    Informações sobre o secador:
                    {super().__str__()}
                ''')
    pass

secador1 = Secador(cor='Azul', preco=50.99, potencia=200, tensao=127)

print(secador1)