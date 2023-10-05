from conjunto import Conjunto

if __name__ == "__main__":
    conj = Conjunto()
    for i in [0, 10, 100, 1000]:
        conj.add(i)
    print(0 in conj)
    print(1 in conj)

    conj2 = Conjunto()
    for i in [1, 2, 3]:
        conj2.add(i)
    print(conj2)

    conj3 = Conjunto()
    for i in [7, 2, 10]:
        conj3.add(i)
    print(conj3)

    conj4 = Conjunto()
    print(conj4)

# UNIAO
    conj5 = Conjunto()
    for i in range(1, 11):
        conj5.add(i)

    conj6 = Conjunto()
    for i in range(10, 21):
        conj6.add(i)

    conj7 = conj5.union(conj6)
    print(conj7)

# INTERSECCAO

    conj8 = Conjunto()
    for i in [1, 2, 3]:
        conj8.add(i)

    conj9 = Conjunto()
    for i in [7, 2, 10]:
        conj9.add(i)

    conj10 = conj8.intersection(conj9)
    print(conj10)

# EXERCICIO
    conj_estudantes = Conjunto()
    conj_lista1 = Conjunto()
    conj_lista2 = Conjunto()

    estudantes = [1, 2, 3, 4, 5, 6, 7]
    lista1_entregues = [1, 4, 7, 3]
    lista2_entregues = [3, 1, 6]
    
    for elem in estudantes:
        conj_estudantes.add(elem)
    
    for elem in lista1_entregues:
        conj_lista1.add(elem)

    for elem in lista2_entregues:
        conj_lista2.add(elem)

    print("Não entregaram a lista 1:", conj_estudantes.difference(conj_lista1))
    print("Já entregaram as 2 listas:", conj_lista1.intersection(conj_lista2))
    print("Quem já entregou pelo menos uma lista:", conj_lista1.union(conj_lista2))
    print("Quem não entregou nenhuma:", conj_estudantes.difference(conj_lista1.union(conj_lista2)))