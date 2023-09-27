'''
Em um software monitor, o qual verifica a resiliência de outro software, precisamos saber o tempo máximo que um software permaneceu sem instabilidades. Para isto, a cada hora é feito uma requisição ao sistema para verificamos se está tudo bem. Supondo um array que contenha os estados coletados por nosso software, calcule quanto tempo máximo que o servidor permaneceu sem instabilidades.
'''

# 1 - OK
# 0 - Instabilidades

def verify(values: "list[int]") -> int:
    max_time = 0
    cur_time = 0
    for value in values:
        if value == 1:
            cur_time += 1
        else:
            cur_time = 0
            
        if cur_time > max_time:
            max_time = cur_time
    return max_time

verify([0, 1, 1, 1, 0, 0, 1, 1])

def test_verify():
    assert verify([0, 1, 1, 1, 0, 0, 1, 1]) == 3
    assert verify([1, 1, 1, 1, 0, 0, 1, 1]) == 4
    assert verify([1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1]) == 3