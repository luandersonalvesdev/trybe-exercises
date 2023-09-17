import sys

total = 0

nums = input("Digite vários números: ").split(' ')

for num in nums:
    if (num.isdigit()):
        total += int(num)
    else:
        print(f'Erro ao somar valores, "{num}" é um valor inválido', file=sys.stderr)


print(total)