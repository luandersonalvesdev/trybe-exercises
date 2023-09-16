from typing import Union

def calc_list(numbers: list) -> Union[int, float]:
    total = 0
    for num in numbers:
        total += num
    return total / len(numbers)

print(calc_list([1, 2, 7, 3.2]))