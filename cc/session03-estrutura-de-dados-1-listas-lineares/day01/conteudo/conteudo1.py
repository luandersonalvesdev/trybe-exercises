class Exemplo:
    def __init__(self, name='Jorel'):
        print("Inicializando Exemplo")
        print(name)
        self.__privado = "Eu sou privado"

    # o método __new__ não é necessário, já que não se altera nada nele, o __init__ é que é o construtor
    def __new__(cls, *args, **kwargs):
        print("Criando uma nova instância de Exemplo")
        instance = super().__new__(cls)
        return instance

    def __metodo_privado(self):
        print("Este é um método privado")

    def metodo_publico(self):
        print("Este é um método público")
        self.__metodo_privado()

exemplo1 = Exemplo()
exemplo2 = Exemplo('Luao')
# exemplo1.__metodo_privado() # Erro: AttributeError: 'Exemplo' object has no attribute '__metodo_privado'
