# Object-Oriented Programming (OOP) in Python - Complete Guide

## 📋 Overview

OOP is a programming paradigm that organizes code around **objects** — entities that bundle **data (attributes)** and **behavior (methods)** together. Python is a fully object-oriented language.

### Core OOP Concepts
| Concept | Description |
|---|---|
| Class | Blueprint/template for creating objects |
| Object | Instance of a class |
| Constructor | Special method to initialize an object |
| Inheritance | A class acquires properties of another class |
| Polymorphism | Same interface, different behavior |
| Encapsulation | Bundling data and restricting direct access |
| Abstraction | Hiding implementation, showing only essentials |

---

## 1. 🏗️ Class and Object

```python
class Dog:
    # Class attribute (shared by all instances)
    species = "Canis familiaris"

    def bark(self):
        return "Woof!"

# Creating objects (instances)
dog1 = Dog()
dog2 = Dog()

print(dog1.species)   # Canis familiaris
print(dog1.bark())    # Woof!
print(dog1 is dog2)   # False — different objects
```

---

## 2. 🔧 Constructors

A constructor is a special method that runs **automatically** when an object is created. In Python, it's `__init__`.

### `__init__` — Instance Constructor
```python
class Student:
    def __init__(self, name, age, grade):
        self.name = name      # instance attribute
        self.age = age
        self.grade = grade

    def introduce(self):
        return f"Hi, I'm {self.name}, age {self.age}, grade {self.grade}."

s1 = Student("Alice", 20, "A")
s2 = Student("Bob", 22, "B")

print(s1.introduce())  # Hi, I'm Alice, age 20, grade A.
print(s2.name)         # Bob
```

### Default Parameter Values in Constructor
```python
class Employee:
    def __init__(self, name, department="General", salary=30000):
        self.name = name
        self.department = department
        self.salary = salary

e1 = Employee("Alice")
e2 = Employee("Bob", "Engineering", 80000)

print(e1.department)  # General
print(e2.salary)      # 80000
```

### `__new__` — Object Creation (before `__init__`)
```python
class Singleton:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

a = Singleton()
b = Singleton()
print(a is b)  # True — same instance
```

### `__del__` — Destructor
```python
class FileHandler:
    def __init__(self, filename):
        self.filename = filename
        print(f"Opening {filename}")

    def __del__(self):
        print(f"Closing {self.filename}")

fh = FileHandler("data.txt")
del fh  # Closing data.txt
```

---

## 3. 🔑 `self` Keyword

`self` refers to the **current instance** of the class. It must be the first parameter of every instance method.

```python
class Counter:
    def __init__(self):
        self.count = 0

    def increment(self):
        self.count += 1

    def reset(self):
        self.count = 0

c = Counter()
c.increment()
c.increment()
print(c.count)  # 2
c.reset()
print(c.count)  # 0
```

---

## 4. 📦 Class Variables vs Instance Variables

```python
class Car:
    total_cars = 0  # class variable — shared across all instances

    def __init__(self, brand, model):
        self.brand = brand    # instance variable — unique per object
        self.model = model
        Car.total_cars += 1

c1 = Car("Toyota", "Corolla")
c2 = Car("Honda", "Civic")
c3 = Car("Ford", "Mustang")

print(c1.brand)       # Toyota
print(Car.total_cars) # 3
print(c1.total_cars)  # 3 (accessible via instance too)
```

---

## 5. 🔒 Encapsulation

Encapsulation restricts direct access to an object's data and protects it from unintended modification.

### Access Modifiers
| Modifier | Syntax | Accessible From |
|---|---|---|
| Public | `self.name` | Anywhere |
| Protected | `self._name` | Class + Subclasses (convention) |
| Private | `self.__name` | Only within the class |

```python
class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner          # public
        self._bank_name = "PyBank"  # protected
        self.__balance = balance    # private (name-mangled to _BankAccount__balance)

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount

    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
        else:
            print("Insufficient funds or invalid amount.")

    def get_balance(self):
        return self.__balance

acc = BankAccount("Alice", 1000)
acc.deposit(500)
acc.withdraw(200)
print(acc.get_balance())   # 1300
print(acc.owner)           # Alice
# print(acc.__balance)     # AttributeError
print(acc._BankAccount__balance)  # 1300 (name mangling — not recommended)
```

### Getters and Setters (using `@property`)
```python
class Temperature:
    def __init__(self, celsius):
        self.__celsius = celsius

    @property
    def celsius(self):
        return self.__celsius

    @celsius.setter
    def celsius(self, value):
        if value < -273.15:
            raise ValueError("Temperature below absolute zero!")
        self.__celsius = value

    @property
    def fahrenheit(self):
        return (self.__celsius * 9/5) + 32

t = Temperature(25)
print(t.celsius)     # 25
print(t.fahrenheit)  # 77.0
t.celsius = 100
print(t.fahrenheit)  # 212.0
# t.celsius = -300   # ValueError
```

---

## 6. 🧬 Inheritance

Inheritance allows a class (child) to acquire attributes and methods from another class (parent), promoting code reuse.

### Single Inheritance
```python
class Animal:
    def __init__(self, name, sound):
        self.name = name
        self.sound = sound

    def speak(self):
        return f"{self.name} says {self.sound}"

class Dog(Animal):
    def fetch(self):
        return f"{self.name} fetches the ball!"

class Cat(Animal):
    def purr(self):
        return f"{self.name} purrs..."

dog = Dog("Rex", "Woof")
cat = Cat("Whiskers", "Meow")

print(dog.speak())   # Rex says Woof
print(dog.fetch())   # Rex fetches the ball!
print(cat.speak())   # Whiskers says Meow
print(cat.purr())    # Whiskers purrs...
```

### `super()` — Calling Parent Constructor
```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def info(self):
        return f"{self.name}, Age: {self.age}"

class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)   # call parent __init__
        self.student_id = student_id

    def info(self):
        return f"{super().info()}, ID: {self.student_id}"

s = Student("Alice", 20, "S101")
print(s.info())  # Alice, Age: 20, ID: S101
```

### Multilevel Inheritance
```python
class Vehicle:
    def __init__(self, brand):
        self.brand = brand

    def start(self):
        return f"{self.brand} started."

class Car(Vehicle):
    def __init__(self, brand, model):
        super().__init__(brand)
        self.model = model

class ElectricCar(Car):
    def __init__(self, brand, model, battery_range):
        super().__init__(brand, model)
        self.battery_range = battery_range

    def info(self):
        return f"{self.brand} {self.model} — Range: {self.battery_range}km"

tesla = ElectricCar("Tesla", "Model 3", 500)
print(tesla.start())  # Tesla started.
print(tesla.info())   # Tesla Model 3 — Range: 500km
```

### Multiple Inheritance
```python
class Flyable:
    def fly(self):
        return "I can fly!"

class Swimmable:
    def swim(self):
        return "I can swim!"

class Duck(Flyable, Swimmable):
    def quack(self):
        return "Quack!"

d = Duck()
print(d.fly())    # I can fly!
print(d.swim())   # I can swim!
print(d.quack())  # Quack!
```

### Method Resolution Order (MRO)
```python
class A:
    def hello(self):
        return "Hello from A"

class B(A):
    def hello(self):
        return "Hello from B"

class C(A):
    def hello(self):
        return "Hello from C"

class D(B, C):
    pass

d = D()
print(d.hello())    # Hello from B (MRO: D → B → C → A)
print(D.__mro__)    # (<class 'D'>, <class 'B'>, <class 'C'>, <class 'A'>, <class 'object'>)
```

### `isinstance()` and `issubclass()`
```python
class Animal: pass
class Dog(Animal): pass

d = Dog()
print(isinstance(d, Dog))     # True
print(isinstance(d, Animal))  # True — Dog is a subclass of Animal
print(issubclass(Dog, Animal)) # True
```

---

## 7. 🎭 Polymorphism

Polymorphism means "many forms" — the same method name behaves differently depending on the object.

### Method Overriding
```python
class Shape:
    def area(self):
        return 0

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14159 * self.radius ** 2

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

class Triangle(Shape):
    def __init__(self, base, height):
        self.base = base
        self.height = height

    def area(self):
        return 0.5 * self.base * self.height

shapes = [Circle(5), Rectangle(4, 6), Triangle(3, 8)]
for shape in shapes:
    print(f"{shape.__class__.__name__}: area = {shape.area():.2f}")
# Circle: area = 78.54
# Rectangle: area = 24.00
# Triangle: area = 12.00
```

### Duck Typing
```python
class Dog:
    def speak(self):
        return "Woof!"

class Cat:
    def speak(self):
        return "Meow!"

class Robot:
    def speak(self):
        return "Beep boop!"

def make_it_speak(entity):
    print(entity.speak())  # works for any object with speak()

for obj in [Dog(), Cat(), Robot()]:
    make_it_speak(obj)
```

### Operator Overloading
```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __sub__(self, other):
        return Vector(self.x - other.x, self.y - other.y)

    def __mul__(self, scalar):
        return Vector(self.x * scalar, self.y * scalar)

    def __str__(self):
        return f"Vector({self.x}, {self.y})"

    def __repr__(self):
        return f"Vector({self.x}, {self.y})"

v1 = Vector(2, 3)
v2 = Vector(1, 4)
print(v1 + v2)   # Vector(3, 7)
print(v1 - v2)   # Vector(1, -1)
print(v1 * 3)    # Vector(6, 9)
```

---

## 8. 🎨 Abstraction

Abstraction hides internal complexity and exposes only what's necessary. Achieved using the `abc` module.

```python
from abc import ABC, abstractmethod

class DatabaseConnector(ABC):
    @abstractmethod
    def connect(self):
        pass

    @abstractmethod
    def disconnect(self):
        pass

    @abstractmethod
    def execute_query(self, query):
        pass

    def log(self, message):  # concrete method — shared by all subclasses
        print(f"[LOG]: {message}")

class MySQLConnector(DatabaseConnector):
    def connect(self):
        return "Connected to MySQL"

    def disconnect(self):
        return "Disconnected from MySQL"

    def execute_query(self, query):
        return f"MySQL executing: {query}"

class PostgreSQLConnector(DatabaseConnector):
    def connect(self):
        return "Connected to PostgreSQL"

    def disconnect(self):
        return "Disconnected from PostgreSQL"

    def execute_query(self, query):
        return f"PostgreSQL executing: {query}"

# db = DatabaseConnector()  # TypeError: Can't instantiate abstract class

mysql = MySQLConnector()
print(mysql.connect())                    # Connected to MySQL
print(mysql.execute_query("SELECT *"))    # MySQL executing: SELECT *
mysql.log("Query executed successfully")  # [LOG]: Query executed successfully
```

### Abstract Properties
```python
from abc import ABC, abstractmethod

class Animal(ABC):
    @property
    @abstractmethod
    def sound(self):
        pass

    def speak(self):
        return f"I say: {self.sound}"

class Dog(Animal):
    @property
    def sound(self):
        return "Woof"

class Cat(Animal):
    @property
    def sound(self):
        return "Meow"

print(Dog().speak())  # I say: Woof
print(Cat().speak())  # I say: Meow
```

---

## 9. 🛠️ Class Methods and Static Methods

```python
class MathUtils:
    pi = 3.14159

    def __init__(self, value):
        self.value = value

    def double(self):                  # instance method — needs self
        return self.value * 2

    @classmethod
    def circle_area(cls, radius):      # class method — receives class (cls)
        return cls.pi * radius ** 2

    @staticmethod
    def add(a, b):                     # static method — no self or cls
        return a + b

m = MathUtils(10)
print(m.double())                  # 20
print(MathUtils.circle_area(5))    # 78.53975
print(MathUtils.add(3, 7))         # 10
```

### Factory Method Pattern using `@classmethod`
```python
class Date:
    def __init__(self, day, month, year):
        self.day = day
        self.month = month
        self.year = year

    @classmethod
    def from_string(cls, date_string):
        day, month, year = map(int, date_string.split("-"))
        return cls(day, month, year)

    @classmethod
    def today(cls):
        import datetime
        today = datetime.date.today()
        return cls(today.day, today.month, today.year)

    def __str__(self):
        return f"{self.day:02d}-{self.month:02d}-{self.year}"

d1 = Date(15, 8, 2024)
d2 = Date.from_string("25-12-2024")
d3 = Date.today()

print(d1)  # 15-08-2024
print(d2)  # 25-12-2024
print(d3)  # current date
```

---

## 10. 🪄 Dunder (Magic) Methods

Dunder methods (double underscore) let you define how objects behave with built-in operations.

```python
class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages

    def __str__(self):           # str(obj) / print(obj)
        return f"'{self.title}' by {self.author}"

    def __repr__(self):          # repr(obj) — developer-friendly
        return f"Book('{self.title}', '{self.author}', {self.pages})"

    def __len__(self):           # len(obj)
        return self.pages

    def __eq__(self, other):     # obj1 == obj2
        return self.title == other.title and self.author == other.author

    def __lt__(self, other):     # obj1 < obj2
        return self.pages < other.pages

    def __contains__(self, word): # word in obj
        return word.lower() in self.title.lower()

    def __getitem__(self, index): # obj[index]
        return self.title[index]

b1 = Book("Python Crash Course", "Eric Matthes", 544)
b2 = Book("Fluent Python", "Luciano Ramalho", 792)
b3 = Book("Python Crash Course", "Eric Matthes", 544)

print(b1)               # 'Python Crash Course' by Eric Matthes
print(repr(b1))         # Book('Python Crash Course', 'Eric Matthes', 544)
print(len(b1))          # 544
print(b1 == b3)         # True
print(b1 < b2)          # True
print("Python" in b1)   # True
print(b1[0])            # P
print(sorted([b2, b1])) # sorted by pages
```

### Common Dunder Methods Reference
| Method | Triggered By |
|---|---|
| `__init__` | `ClassName()` |
| `__str__` | `str(obj)`, `print(obj)` |
| `__repr__` | `repr(obj)` |
| `__len__` | `len(obj)` |
| `__eq__` | `obj1 == obj2` |
| `__lt__` | `obj1 < obj2` |
| `__add__` | `obj1 + obj2` |
| `__getitem__` | `obj[key]` |
| `__setitem__` | `obj[key] = value` |
| `__delitem__` | `del obj[key]` |
| `__contains__` | `item in obj` |
| `__iter__` | `for x in obj` |
| `__next__` | `next(obj)` |
| `__call__` | `obj()` |
| `__enter__` / `__exit__` | `with obj:` |

---

## 11. 🔁 Iterators and `__iter__` / `__next__`

```python
class Countdown:
    def __init__(self, start):
        self.current = start

    def __iter__(self):
        return self

    def __next__(self):
        if self.current <= 0:
            raise StopIteration
        value = self.current
        self.current -= 1
        return value

for num in Countdown(5):
    print(num, end=" ")  # 5 4 3 2 1
```

---

## 12. 📞 Callable Objects — `__call__`

```python
class Multiplier:
    def __init__(self, factor):
        self.factor = factor

    def __call__(self, value):
        return value * self.factor

double = Multiplier(2)
triple = Multiplier(3)

print(double(5))   # 10
print(triple(5))   # 15
print(callable(double))  # True
```

---

## 13. 🗂️ Context Managers — `__enter__` / `__exit__`

```python
class ManagedFile:
    def __init__(self, filename, mode):
        self.filename = filename
        self.mode = mode

    def __enter__(self):
        self.file = open(self.filename, self.mode)
        return self.file

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.file.close()
        if exc_type:
            print(f"Exception handled: {exc_val}")
        return True  # suppress exception

with ManagedFile("test.txt", "w") as f:
    f.write("Hello, World!")
# File is automatically closed after the block
```

---

## 14. 🧩 Mixins

Mixins are small, reusable classes that add specific functionality without being a full parent class.

```python
class JSONMixin:
    def to_json(self):
        import json
        return json.dumps(self.__dict__)

class LogMixin:
    def log(self):
        print(f"[{self.__class__.__name__}] {self.__dict__}")

class User(JSONMixin, LogMixin):
    def __init__(self, name, email):
        self.name = name
        self.email = email

u = User("Alice", "alice@example.com")
print(u.to_json())  # {"name": "Alice", "email": "alice@example.com"}
u.log()             # [User] {'name': 'Alice', 'email': 'alice@example.com'}
```

---

## 15. 🏷️ Dataclasses (Python 3.7+)

`@dataclass` auto-generates `__init__`, `__repr__`, and `__eq__` for you.

```python
from dataclasses import dataclass, field

@dataclass
class Point:
    x: float
    y: float
    z: float = 0.0  # default value

    def distance_from_origin(self):
        return (self.x**2 + self.y**2 + self.z**2) ** 0.5

@dataclass(order=True)  # enables <, >, <=, >=
class Product:
    sort_index: float = field(init=False, repr=False)
    name: str
    price: float
    quantity: int = 0

    def __post_init__(self):
        self.sort_index = self.price  # sort by price

p1 = Point(3, 4)
p2 = Point(1, 2, 5)
print(p1)                          # Point(x=3, y=4, z=0.0)
print(p1.distance_from_origin())   # 5.0

prod1 = Product("Apple", 1.5, 100)
prod2 = Product("Banana", 0.75, 200)
print(sorted([prod1, prod2]))      # sorted by price
```

---

## 16. 🔗 Composition vs Inheritance

Composition ("has-a") is often preferred over inheritance ("is-a") for flexibility.

```python
# Inheritance (is-a)
class Animal:
    def breathe(self):
        return "Breathing..."

class Dog(Animal):  # Dog IS-A Animal
    def bark(self):
        return "Woof!"

# Composition (has-a)
class Engine:
    def __init__(self, horsepower):
        self.horsepower = horsepower

    def start(self):
        return f"Engine ({self.horsepower}hp) started."

class Car:  # Car HAS-A Engine
    def __init__(self, brand, horsepower):
        self.brand = brand
        self.engine = Engine(horsepower)  # composition

    def drive(self):
        return f"{self.brand}: {self.engine.start()}"

car = Car("Toyota", 150)
print(car.drive())  # Toyota: Engine (150hp) started.
```

---

## 17. 🧪 Complete Real-World Example

```python
from abc import ABC, abstractmethod
from dataclasses import dataclass

# Abstract base
class PaymentProcessor(ABC):
    @abstractmethod
    def process(self, amount: float) -> str:
        pass

    def validate(self, amount: float) -> bool:
        return amount > 0

# Concrete implementations
class CreditCardProcessor(PaymentProcessor):
    def __init__(self, card_number: str):
        self.__card_number = card_number  # private

    def process(self, amount: float) -> str:
        if not self.validate(amount):
            return "Invalid amount"
        masked = "**** **** **** " + self.__card_number[-4:]
        return f"Charged ${amount:.2f} to {masked}"

class PayPalProcessor(PaymentProcessor):
    def __init__(self, email: str):
        self.email = email

    def process(self, amount: float) -> str:
        if not self.validate(amount):
            return "Invalid amount"
        return f"Sent ${amount:.2f} via PayPal to {self.email}"

# Composition
@dataclass
class Order:
    item: str
    price: float
    processor: PaymentProcessor

    def checkout(self):
        print(f"Order: {self.item}")
        print(self.processor.process(self.price))

# Usage
cc = CreditCardProcessor("1234567890123456")
pp = PayPalProcessor("alice@example.com")

order1 = Order("Laptop", 999.99, cc)
order2 = Order("Book", 29.99, pp)

order1.checkout()
# Order: Laptop
# Charged $999.99 to **** **** **** 3456

order2.checkout()
# Order: Book
# Sent $29.99 via PayPal to alice@example.com
```

---

## 📊 OOP Concepts Summary

| Concept | Key Idea | Python Feature |
|---|---|---|
| Class & Object | Blueprint + Instance | `class`, `ClassName()` |
| Constructor | Initialize object state | `__init__` |
| Encapsulation | Protect data | `_`, `__`, `@property` |
| Inheritance | Reuse & extend | `class Child(Parent)` |
| Polymorphism | Same interface, different behavior | Method overriding, duck typing |
| Abstraction | Hide complexity | `ABC`, `@abstractmethod` |
| Class Methods | Operate on class | `@classmethod` |
| Static Methods | Utility functions | `@staticmethod` |
| Magic Methods | Built-in integration | `__str__`, `__add__`, etc. |
| Composition | Has-a relationship | Object as attribute |
| Dataclasses | Auto-generated boilerplate | `@dataclass` |
