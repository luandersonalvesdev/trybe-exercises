import random
from collections import Counter

NOMES_1 = ['Jorel', 'Irmao do Jorel']
NOMES_2 = ['Jorel', '']
NOMES_3 = ['']
# all(), any() e enumerate()

print(all(NOMES_1)) # TRUE
print(all(NOMES_2)) # FALSE
print(all(NOMES_3)) # FALSE
print(any(NOMES_1)) # TRUE
print(any(NOMES_2)) # TRUE
print(any(NOMES_3)) # FALSE

TUPLE_NOMES_1 = enumerate(NOMES_1)

for t in TUPLE_NOMES_1:
    print(t)


LIST = random.sample(range(0, 1000), random.randint(20, 100))
print(len(LIST))
print(max(LIST))
print(min(LIST))


LISTA_NUM = []

for x in range(10):
    LISTA_NUM.append(random.randint(0, 50))

print(LISTA_NUM)
print(Counter(LISTA_NUM))
print(Counter(LISTA_NUM).most_common())
print(Counter(LISTA_NUM).most_common()[0])

NUM, REPEAT_TIMES = Counter(LISTA_NUM).most_common()[0]
print(f'Número mais repetido: {NUM}. Vezes repetido: {REPEAT_TIMES}')