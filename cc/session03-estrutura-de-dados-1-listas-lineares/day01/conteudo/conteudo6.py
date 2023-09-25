class Classe:
    @staticmethod
    def método_estático():
        print("Olá")


objeto = Classe()
Classe.método_estático()
objeto.método_estático()
# Saída:
# Olá
# Olá



class Classe:
    atributo_da_classe = 1

    @classmethod
    def seta_atributo_da_classe(cls, valor):
        cls._atributo_da_classe = valor

    @classmethod
    def retorna_atributo_da_classe(cls):
        return cls._atributo_da_classe

objeto_1 = Classe()
objeto_2 = Classe()

print(Classe.retorna_atributo_da_classe())  # Saída: 1
print(objeto_1.retorna_atributo_da_classe())  # Saída: 1
print(objeto_2.retorna_atributo_da_classe())  # Saída: 1

Classe.seta_atributo_da_classe(2)
print(Classe.retorna_atributo_da_classe())  # Saída: 2
print(objeto_1.retorna_atributo_da_classe())  # Saída: 2
print(objeto_2.retorna_atributo_da_classe())  # Saída: 2

objeto_1.seta_atributo_da_classe(3)
print(Classe.retorna_atributo_da_classe())  # Saída: 3
print(objeto_1.retorna_atributo_da_classe())  # Saída: 3
print(objeto_2.retorna_atributo_da_classe())  # Saída: 3




# Chamando métodos

# Arquivo main.py
class Classe:
    atributo_da_classe = 1

    def __init__(self):
        self.atributo_do_objeto = 2

    def método_normal(self):
        print(self)

    @classmethod
    def método_de_classe(cls):
        print(cls)

    @staticmethod
    def método_estático():
        print("Olá")


objeto = Classe()

# Acessando atributo do objeto
print(objeto.atributo_do_objeto)
# Não dá pra chamar usando a classe (Classe.atributo_do_objeto dá erro)
# Saída:
# 2

# Acessando atributo da classe
print(Classe.atributo_da_classe)
print(objeto.atributo_da_classe) 
# Saída:
# 1
# 1

# Chamando o método normal
Classe.método_normal(objeto)  # Ou Classe.método_normal(self=objeto)
objeto.método_normal() # Açúcar sintático para a forma da linha acima
# Saída:
# <__main__.Classe object at 0x7f2304ab3d30>
# <__main__.Classe object at 0x7f2304ab3d30>

# Chamando o método estático
Classe.método_estático()
objeto.método_estático()
# Saída:
# Olá
# Olá

# Chamando o método de classe
Classe.método_de_classe()  # Observe que não precisa passar nenhum parâmetro
objeto.método_de_classe() 
# Saída:
# <class '__main__.Classe'>
# <class '__main__.Classe'>