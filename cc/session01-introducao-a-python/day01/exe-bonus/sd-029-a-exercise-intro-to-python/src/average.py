from typing import List


def find_average(numbers: List[int]) -> float:
    total = 0
    for num in numbers:
        total += num
    return total / len(numbers)
