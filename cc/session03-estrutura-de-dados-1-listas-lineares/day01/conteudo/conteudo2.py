class Liquidificador():
    def __init__(self, preco, cor, potencia, tensao) -> None:
        self.preco = preco
        self.cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.corrente_maxima_no_motor = potencia / tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0

    def ligar(self, velocidade):
        if velocidade > self.__velocidade_maxima or velocidade < 0:
            raise ValueError(f'Velocidade deve estar entre 0 e {self.__velocidade_maxima}')
        
        self.__velocidade = velocidade
        self.__corrente_atual_no_motor = (
            (self._potencia / self._tensao) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__velocidade = 0
        self.__ligado = False

    def esta_ligado(self):
        return self.__ligado
    
    @property
    def cor(self):
        return self.__cor.upper()

    @cor.setter
    def cor(self, nova_cor):
        if nova_cor.lower() == "turquesa":
            raise ValueError("Não existe liquidificador turquesa")

        self.__cor = nova_cor

meu_liquidificador = Liquidificador(cor="Azul", potencia=200, tensao=127, preco=200)
seu_liquidificador = Liquidificador(
cor="Vermelho", potencia=250, tensao=220, preco=100
)

meu_liquidificador.ligar(2)
meu_liquidificador.esta_ligado()

liquidificador = Liquidificador(cor="Azul", potencia=110, tensao=127, preco=200)
# print(f"A cor atual é {liquidificador.__cor}")
# AttributeError: 'Liquidificador' object has no attribute '__cor'
print(f"A cor atual é {liquidificador.cor}")
liquidificador.cor = 'Verde'
print(f"A cor atual é {liquidificador.cor}")