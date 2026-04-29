class Student:
    name = "karan"

s1 = Student()
# print(s1.name)

class Car:
    def __init__(self, name, model):
        self.name = name
        self.model = model

c1 = Car("BMW", "X5")
print(c1.name, c1.model)