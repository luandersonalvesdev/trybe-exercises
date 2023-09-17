approved = []
disapproved = []

with open('all-students.txt', mode='r') as file:
    for line in file:
        name, grade = line.split(' ')
        if int(grade) < 6:
            disapproved.append(name)
        else:
            approved.append(name)

with open('approved-students.txt', mode='w') as file:
    for student in approved:
        file.write(f'{student}\n')

with open('disapproved-students.txt', mode='w') as file:
    for student in disapproved:
        file.write(f'{student}\n')