def quicksort(lista):
    if len(lista) <= 1:
        return lista

    pivot = lista[len(lista) // 2]
    menores, iguais, maiores = [], [], []

    for elemento in lista:
        if elemento < pivot:
            menores.append(elemento)
        elif elemento == pivot:
            iguais.append(elemento)
        else:
            maiores.append(elemento)

    return quicksort(menores) + iguais + quicksort(maiores)

lista_desordenada = [6, 5, 3, 1, 8, 7, 2, 4]
lista_ordenada = quicksort(lista_desordenada)
print(lista_ordenada)
