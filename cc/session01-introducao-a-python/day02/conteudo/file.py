with open('arquivo.txt', mode='w') as file:
    file.write("Maria 45\n")
    file.write("Miguel 33\n")

    print("Túlio 22", file=file)

    LINES = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]
    file.writelines(LINES)

with open('arquivo.txt', mode='r') as file:
    content = file.read()
    print(content)
    for line in file:
        print(line)