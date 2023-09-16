def bigger_name(names: list) -> str:
    bigger = ''
    for name in names:
        if len(bigger) < len(name):
            bigger = name
    return bigger


print(bigger_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))
print(bigger_name(["José", "Lucas", "Nádia", "Cairo", "Joana", "Jorels"]))