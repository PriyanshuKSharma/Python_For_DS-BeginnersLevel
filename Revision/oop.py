class Student:
    name = "karan"

s1 = Student()
# print(s1.name)

class Car:
    def __init__(self, name, model):
        self.name = name
        self.model = model

c1 = Car("BMW", "X5")
# print(c1.name, c1.model)

c2 = Car("Audi", "A4")
# print(c2.name, c2.model)


#The self parameter is a reference to the current instance of the class, and is used to access variables and methods. This parameter is passed automatically by Python when a method is called.

#Self must always be the first parameter but is never passed explicitly when creating an object — Python injects it automatically.


class Student:
    def __init__(self, name, marks):
        self.name  = name
        self.marks = marks

    # Instance method — works on THIS object's data
    def hello(self):
        print(f"Hello, I am {self.name}")

    def result(self):
        if self.marks >= 35:
            print(f"{self.name} — PASS ✅")
        else:
            print(f"{self.name} — FAIL ❌")

    def update_marks(self, new_marks):
        self.marks = new_marks      # modifies the instance attribute
        print(f"Marks updated to {self.marks}")


s1 = Student("Priyanshu", 90)
s1.hello()           # Hello, I am Priyanshu
s1.result()          # Priyanshu — PASS ✅
s1.update_marks(45)  # Marks updated to 45


# ──────────────────────────────────────────────
# TYPES OF CONSTRUCTORS IN PYTHON
# ──────────────────────────────────────────────

# 1. DEFAULT CONSTRUCTOR
# Has no parameters (other than self).
# Python provides one automatically if you don't define __init__ at all.
class Animal:
    def __init__(self):           # default constructor
        self.sound = "..."
        print("Animal created")

    def speak(self):
        print(f"Sound: {self.sound}")

a = Animal()      # no arguments needed
a.speak()


# 2. PARAMETERIZED CONSTRUCTOR
# Accepts one or more arguments to initialize attributes with custom values.
class Laptop:
    def __init__(self, brand, ram, storage):   # parameterized constructor
        self.brand   = brand
        self.ram     = ram
        self.storage = storage

    def specs(self):
        print(f"{self.brand} | RAM: {self.ram}GB | Storage: {self.storage}GB")

l1 = Laptop("Dell", 16, 512)
l2 = Laptop("Apple", 32, 1024)
l1.specs()
l2.specs()


# 3. DEFAULT-VALUE CONSTRUCTOR  (parameterized with defaults)
# Parameters have fallback values — arguments become optional.
class Phone:
    def __init__(self, brand="Unknown", model="Unknown", price=0):
        self.brand = brand
        self.model = model
        self.price = price

    def info(self):
        print(f"{self.brand} {self.model} — ₹{self.price}")

p1 = Phone()                          # uses all defaults
p2 = Phone("Samsung")                 # partial — rest use defaults
p3 = Phone("OnePlus", "12R", 35000)   # all supplied

p1.info()
p2.info()
p3.info()
