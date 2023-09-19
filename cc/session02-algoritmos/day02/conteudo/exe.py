def countdown(n):
    if n == 0: # caso base
        print("FIM!")
    else:
        print(n)
        countdown(n - 1) # caso recursivo


def multiplication_table(num, acc = 1):
    if acc > 10:
        print(f'----- Tabuada do {num} ------')
    else:
        print(f'{num} x {acc}: {num*acc}')
        multiplication_table(num, acc + 1)


def sum_pre(n, total = 0):
    if n == 0:
        print(f'total: {total}')
        return
    else:
        total += n
        sum_pre(n - 1, total)

def sum_recursive(n):
    if n == 0:
        return 0
    else:
        print(n)
        return n + sum_recursive(n - 1)


if __name__ == '__main__':
    countdown(5)
    print('--------------------------')
    multiplication_table(34)
    print('--------------------------')
    sum_pre(10)
    print('--------------------------')
    result = sum_recursive(4)
    print(result)

