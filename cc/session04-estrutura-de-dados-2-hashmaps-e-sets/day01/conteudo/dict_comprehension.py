# EXE 01:

# DICT_COMPREHENSION
a = {i: (i * 2) for i in range(3, 20)}
print(a)


# EXE 02:
'''
Para cada char na string:
- Se o char não estiver no dicionário, inclua com o valor 1;

- Se estiver, incremente o valor.

# Exemplo:

str = "bbbbaaaacccaaaaaaddddddddccccccc"
# saída: {'b': 4, 'a': 10, 'c': 10, 'd': 8}

str = "coxinha"
# saída: {'c': 1, 'o': 1, 'x': 1, 'i': 1, 'n': 1, 'h': 1, 'a': 1}
# Explicação: Nenhuma letra repete em coxinha :)
'''
str = "bbbbaaaacccaaaaaaddddddddccccccc"

def count(string: str) -> dict:
    total = dict()

    for char in string:
        if char in total.keys():
            total[char] += 1
        else:
            total[char] = 1

    return total

def test_count():
    assert count(str) == {'b': 4, 'a': 10, 'c': 10, 'd': 8}