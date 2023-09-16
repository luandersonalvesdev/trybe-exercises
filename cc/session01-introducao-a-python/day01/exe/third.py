def art_generate(n: int) -> None:
    if n > 1:
        l = 0
        while l < n:
            print('*' * n)
            l += 1
    else:
        print('Indique um valor inteiro maior que 1')


art_generate(5)