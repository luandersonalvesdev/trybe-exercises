from typing import List


def find_biggest_name(names: List[str]) -> str:
    biggest = ''
    for name in names:
        if len(biggest) < len(name):
            biggest = name
    return biggest
