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


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.__nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.__liquidificador = None

    def comprar_liquidificador(self, liquidificador):
        if liquidificador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= liquidificador.preco
            self.__liquidificador = liquidificador

    @property
    def liquidificador(self):
        return self.__liquidificador
    
    @liquidificador.setter
    def liquidificador(self, novo_liquidificador):
        self.__liquidificador = novo_liquidificador

    @property
    def nome(self):
        return self.__nome
    
    @nome.setter
    def nome(self, novo_nome):
          self.__nome = novo_nome

    def __str__(self):
        return f"{self.nome} - possui {self.saldo_na_conta} reais em sua conta."

liquidificador_vermelho = Liquidificador(cor="Vermelho", potencia=200, tensao=127, preco=200)
pessoa_cozinheira = Pessoa("Jacquin", 1000)
pessoa_cozinheira.comprar_liquidificador(liquidificador_vermelho)
print(pessoa_cozinheira.nome)
print(pessoa_cozinheira.liquidificador)