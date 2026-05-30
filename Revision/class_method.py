# ─────────────────────────────────────────────────────────────
# CLASS METHOD in Python
# ─────────────────────────────────────────────────────────────
# Definition:
#   A class method is BOUND TO THE CLASS, not to any particular object.
#   It receives the CLASS ITSELF as its implicit first argument (called 'cls').
#   Declared with the @classmethod decorator.
#
# Syntax:
#   @classmethod
#   def method_name(cls, ...):
#       ...
#
# Key Points:
#   - 'cls' refers to the CLASS, just like 'self' refers to the object.
#   - Can access and modify CLASS attributes (shared by all objects).
#   - Cannot access instance attributes (no 'self').
#   - Can be called on the class directly OR on an instance.
# ─────────────────────────────────────────────────────────────


# ── Example 1: Accessing a class attribute ───────────────────
class Student:
    school = "Delhi Public School"   # class attribute

    def __init__(self, name, marks):
        self.name  = name
        self.marks = marks

    @classmethod
    def get_school(cls):
        # 'cls' is Student — cls.school reads the class attribute
        return cls.school

    @classmethod
    def change_school(cls, new_name):
        cls.school = new_name        # changes it for ALL instances


print(Student.get_school())          # Delhi Public School

s1 = Student("Priyanshu", 90)
s2 = Student("Anushka", 85)

Student.change_school("Kendriya Vidyalaya")
print(s1.school)   # Kendriya Vidyalaya  ← class attr changed for everyone
print(s2.school)   # Kendriya Vidyalaya


# ── Example 2: Factory / Alternative Constructor ──────────────
# @classmethod is the Pythonic way to provide multiple ways to create an object.

class Student2:
    def __init__(self, name, marks):
        self.name  = name
        self.marks = marks

    # Normal constructor: Student2("Priyanshu", [90, 80, 70])

    @classmethod
    def from_string(cls, data):
        # data = "Priyanshu:90,80,70"
        name, raw_marks = data.split(":")
        marks = list(map(int, raw_marks.split(",")))
        return cls(name, marks)      # cls(...) calls __init__ internally

    @classmethod
    def from_list(cls, data_list):
        # data_list = ["Anushka", [50, 60, 70]]
        return cls(data_list[0], data_list[1])

    def get_avg(self):
        avg = sum(self.marks) / len(self.marks)
        print(f"{self.name} → Avg: {avg:.1f}")


# Three different ways to create the same type of object
s_normal = Student2("Priyanshu", [90, 80, 70])
s_string = Student2.from_string("Anushka:50,60,70")
s_list   = Student2.from_list(["Tiya", [100, 90, 80]])

s_normal.get_avg()   # Priyanshu → Avg: 80.0
s_string.get_avg()   # Anushka   → Avg: 60.0
s_list.get_avg()     # Tiya      → Avg: 90.0


# ── Example 3: Object Counter ─────────────────────────────────
class Employee:
    _count = 0   # class attribute — shared counter

    def __init__(self, name):
        self.name = name
        Employee._count += 1   # incremented every time a new object is created

    @classmethod
    def total_employees(cls):
        return cls._count      # reads the shared counter

    @classmethod
    def reset_count(cls):
        cls._count = 0


e1 = Employee("Alice")
e2 = Employee("Bob")
e3 = Employee("Charlie")

print(Employee.total_employees())  # 3   ← class method called on the class
print(e1.total_employees())        # 3   ← also works on an instance (cls = Employee)

Employee.reset_count()
print(Employee.total_employees())  # 0


# ── Example 4: Class Method in Inheritance ────────────────────
# 'cls' automatically refers to the SUBCLASS when called on it

class Animal:
    category = "Animal"

    @classmethod
    def describe(cls):
        print(f"I am a {cls.__name__}, category: {cls.category}")

class Dog(Animal):
    category = "Mammal"

class Fish(Animal):
    category = "Aquatic"


Animal.describe()   # I am a Animal, category: Animal
Dog.describe()      # I am a Dog,    category: Mammal   ← cls = Dog
Fish.describe()     # I am a Fish,   category: Aquatic  ← cls = Fish
