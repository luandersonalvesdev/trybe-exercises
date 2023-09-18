import sys

print(sys.argv)
if __name__ == "__main__":
    for argument in sys.argv:
        print("Received -> ", argument)

# call with: python3 arquivo.py 2 4 "teste"