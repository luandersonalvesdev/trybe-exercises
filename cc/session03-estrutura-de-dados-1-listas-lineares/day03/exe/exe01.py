'''
1 - a. clear(self) - Para este desafio existem 2 possibilidades de respostas a serem implementadas. A opção #1 só funciona, sem que ocorra vazamento de memória, graças ao garbage collector do python, porém, o mais indicado é a opção #2, pois utilizam a própria estrutura para atribuir um novo comportamento.
'''

#1
def clear(self):
    self.head_value = None
    self.__length = 0
#2
def clear(self):
    while not self.is_empty():
        self.remove_first()