FRASE = 'qualquer frase apenas para estudo'

VOGAIS = 'aeiou'

LISTA_V = [letra for letra in FRASE if letra in VOGAIS]
LISTA_C = [letra for letra in FRASE if letra not in VOGAIS]

print(LISTA_C)
print(LISTA_V)