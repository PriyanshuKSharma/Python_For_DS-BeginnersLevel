# Object-Oriented Programming (OOP) in Python

Object-Oriented Programming is a programming paradigm based on the concept of "objects," which can contain data and code: data in the form of fields (often known as attributes or properties), and code in the form of procedures (often known as methods).

**This document covers:** classes/objects, constructors, attributes, methods, encapsulation, inheritance (types), polymorphism, abstraction, composition, special (dunder) methods, design notes, and runnable examples.

---

## 1. Class and Object
- **Class**: A template or blueprint for creating objects.
- **Object**: An instance of a class.

```python
# Simple class and constructor example
class Student:
    """Student: stores name and age and demonstrates a constructor.

    Attributes:
        name (str): student name
        age (int): student age
    """

    # Constructor (initializer)
    def __init__(self, name: str, age: int):
        self.name = name          # instance attribute
        self.age = age

    def greet(self) -> str:
        return f"Hi, I'm {self.name} and I'm {self.age}."


s1 = Student("Alice", 20)
print(s1.greet())
```

---

## 2. The Four Pillars of OOP

This section explains the classic OOP pillars with concrete Python examples.

### I. Inheritance
Allows a class to inherit attributes and methods from another class.
- **Single Inheritance**: Child inherits from one parent.
- **Multiple Inheritance**: Child inherits from multiple parents.
- **Multilevel Inheritance**: Grandchild inherits from Child, who inherits from Parent.

#### Examples

```python
# Single inheritance
class Animal:
    def speak(self):
        return "..."

class Dog(Animal):
    def speak(self):
        return "Woof"

# Multiple inheritance (simple example)
class Flyer:
    def fly(self):
        return "flying"

class Bird(Animal, Flyer):
    def speak(self):
        return "Chirp"

dog = Dog()
bird = Bird()
print(dog.speak(), bird.fly())
```

### II. Polymorphism
The ability of different objects to respond to the same method call in different ways.
- **Method Overriding**: Child class provides a specific implementation of a method already defined in the parent.

Polymorphism also includes operator overloading and duck typing ("if it quacks like a duck").

```python
class Cat(Animal):
    def speak(self):
        return "Meow"

# Duck typing example
def make_it_speak(entity):
    print(entity.speak())

make_it_speak(dog)   # Woof
make_it_speak(Cat()) # Meow
```

### III. Encapsulation
The bundling of data with the methods that operate on that data. It restricts direct access to some components of an object.
- **Public**: Accessible from everywhere.
- **Protected (`_`)**: Suggests it's for internal use.
- **Private (`__`)**: Restricts access from outside the class.

Python does not enforce strict private access, but name mangling (`__name`) helps avoid accidental access.

```python
class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner            # public
        self._currency = 'USD'        # protected (by convention)
        self.__balance = balance      # private (name mangled)

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount

    def withdraw(self, amount):
        if amount <= self.__balance:
            self.__balance -= amount
            return amount
        raise ValueError('Insufficient funds')

    def get_balance(self):
        return self.__balance

acc = BankAccount('Sam', 100)
acc.deposit(50)
print(acc.get_balance())
# direct access to __balance will fail: acc.__balance -> AttributeError
```

### IV. Abstraction
Hiding the complex implementation details and showing only the necessary features.
- Achieved using the `abc` (Abstract Base Classes) module.

Example with `abc`:

```python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Rectangle(Shape):
    def __init__(self, w, h):
        self.w, self.h = w, h

    def area(self):
        return self.w * self.h

rect = Rectangle(3, 4)
print(rect.area())
```

---

## 3. Constructors and object lifecycle

- **Constructor (`__init__`)**: Initializes instance state. It is called when an object is created.
- **Destructor (`__del__`)**: Called when an object is about to be destroyed (rarely used; prefer context managers).

```python
class Resource:
    def __init__(self, name):
        self.name = name
        print(f"Resource {name} acquired")

    def __del__(self):
        print(f"Resource {self.name} released")

res = Resource('db')
del res
```

Prefer `with`-based context managers for predictable cleanup:

```python
class Managed:
    def __enter__(self):
        print('enter')
        return self
    def __exit__(self, exc_type, exc, tb):
        print('exit')

with Managed():
    print('inside')
```

## 4. Attributes: class vs instance, properties

- **Instance attributes**: unique to each object (set in `__init__`).
- **Class attributes**: shared across instances.
- Use `@property` to expose computed attributes safely.

```python
class Counter:
    instances = 0  # class attribute

    def __init__(self):
        Counter.instances += 1

    @property
    def info(self):
        return f"Instances: {Counter.instances}"

c1 = Counter(); c2 = Counter()
print(c1.info)
```

## 5. Special methods (magic / dunder methods)

Implementing these makes objects behave like built-ins:

- `__repr__`, `__str__` — readable representations
- `__eq__`, `__lt__`, `__hash__` — comparisons
- `__add__`, `__len__`, `__iter__` — operator/sequence behavior

```python
class Point:
    def __init__(self, x, y):
        self.x, self.y = x, y
    def __repr__(self):
        return f"Point({self.x},{self.y})"
    def __add__(self, other):
        return Point(self.x + other.x, self.y + other.y)

print(Point(1,2) + Point(3,4))
```

## 6. Composition vs Inheritance

- Prefer composition (has-a) for loose coupling; use inheritance (is-a) for specialization.

```python
class Engine:
    def start(self):
        return 'engine started'

class Car:
    def __init__(self):
        self.engine = Engine()  # composition

car = Car(); print(car.engine.start())
```

## 7. Method types: instance, class, static

- `def method(self)`: instance method
- `@classmethod def method(cls)`: receives class
- `@staticmethod def method()`: no implicit first arg

```python
class My:
    @staticmethod
    def util(x):
        return x * 2

    @classmethod
    def name(cls):
        return cls.__name__

print(My.util(3), My.name())
```

## 8. Polymorphism and duck typing

Python prefers duck typing — you don't need a shared base class as long as objects implement the required interface.

## 9. Abstraction with interfaces and `abc` (covered above)

## 10. Common OOP pitfalls & best practices

- Prefer composition over inheritance when behavior can be delegated.
- Keep `__init__` simple; avoid heavy work (IO, long computations).
- Use properties for validation rather than exposing raw attributes.
- Avoid deep/multiple inheritance hierarchies — use mixins sparingly.
- Write `__repr__` for debugging; `__str__` for user-facing strings.
- For resource management use context managers (`with`).

## 11. Small practical example: A simple library system

```python
from dataclasses import dataclass
from typing import List

@dataclass
class Book:
    title: str
    author: str
    copies: int = 1

class Library:
    def __init__(self):
        self._books: List[Book] = []

    def add_book(self, book: Book):
        self._books.append(book)

    def find_by_author(self, author: str):
        return [b for b in self._books if b.author == author]

lib = Library()
lib.add_book(Book('1984', 'Orwell', 3))
print(lib.find_by_author('Orwell'))
```

---

**References & next steps**

- For design patterns see: Singleton, Factory, Strategy, Observer.
- Consider adding UML diagrams for large designs.

This document now includes constructors, lifecycle, properties, special methods, inheritance examples, polymorphism, encapsulation, abstraction with `abc`, composition, and practical code examples.
