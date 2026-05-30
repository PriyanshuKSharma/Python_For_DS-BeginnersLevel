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

## 3. Constructors and Object Lifecycle

### 3.1 What is `__init__`?

`__init__` (pronounced *"dunder init"*) is the **initializer method** — Python's constructor. It is automatically called **every time a new object is created** from a class.

| Term | Meaning |
|------|---------|
| `__init__` | Initializer — sets up the object's initial state |
| `self` | Reference to the newly created instance |
| Instance attributes | Per-object data, set with `self.attribute = value` |

> **How Python calls it internally:**
> `Car("BMW", "X5")` → Python first calls `Car.__new__(Car)` to allocate memory, then calls `Car.__init__(instance, "BMW", "X5")` to populate it.

> The ***self*** parameter is a reference to the current instance of the class, and is used to access variables and methods. This parameter is passed automatically by Python when a method is called.

> ***self*** **must always be the first parameter** but is never passed explicitly when creating an object — Python injects it automatically.


---

### 3.2 Basic Syntax

```python
class ClassName:
    def __init__(self, param1, param2):
        self.param1 = param1   # binds argument to instance attribute
        self.param2 = param2
```

`self` **must always be the first parameter** but is never passed explicitly when creating an object — Python injects it automatically.

---

### 3.3 Real-world Example — `Car` class

*(Taken from `oop.py`)*

```python
class Car:
    def __init__(self, name, model):
        self.name = name    # e.g. "BMW"
        self.model = model  # e.g. "X5"

# Creating instances — __init__ is called automatically
c1 = Car("BMW", "X5")
print(c1.name, c1.model)   # BMW X5

c2 = Car("Audi", "A4")
print(c2.name, c2.model)   # Audi A4
```

Each call to `Car(...)` creates an **independent object**. Changing `c1.name` does not affect `c2.name`.

---

### 3.4 Default Parameter Values

You can give parameters default values so they become optional:

```python
class Car:
    def __init__(self, name, model, year=2024, color="White"):
        self.name  = name
        self.model = model
        self.year  = year
        self.color = color

c1 = Car("BMW", "X5")                    # uses defaults
c2 = Car("Audi", "A4", 2023, "Black")    # overrides defaults
print(c1.year, c1.color)  # 2024 White
print(c2.year, c2.color)  # 2023 Black
```

---

### 3.5 Type Hints in `__init__`

Type hints make the initializer self-documenting and IDE-friendly (no runtime enforcement):

```python
class Car:
    def __init__(self, name: str, model: str, year: int = 2024) -> None:
        self.name:  str = name
        self.model: str = model
        self.year:  int = year
```

> **Tip:** The return type of `__init__` is always `None`.

---

### 3.6 Class Attributes vs Instance Attributes

```python
class Car:
    # Class attribute — shared by ALL instances
    category: str = "Vehicle"

    def __init__(self, name: str, model: str):
        # Instance attributes — unique per object
        self.name  = name
        self.model = model

c1 = Car("BMW", "X5")
c2 = Car("Audi", "A4")

print(Car.category)   # Vehicle   (accessed via class)
print(c1.category)    # Vehicle   (inherited from class)
c1.category = "SUV"   # creates a NEW instance attribute on c1 only
print(c1.category)    # SUV
print(c2.category)    # Vehicle   (c2 still uses the class attribute)
```

---

### 3.7 Calling `super().__init__()` in Inheritance

When a child class has its own `__init__`, you **must** call `super().__init__()` to properly initialize the parent's attributes:

```python
class Vehicle:
    def __init__(self, name: str):
        self.name = name

class ElectricCar(Vehicle):
    def __init__(self, name: str, model: str, battery_kwh: int):
        super().__init__(name)          # initializes self.name from Vehicle
        self.model       = model
        self.battery_kwh = battery_kwh

    def info(self) -> str:
        return f"{self.name} {self.model} — {self.battery_kwh} kWh"

tesla = ElectricCar("Tesla", "Model 3", 75)
print(tesla.info())   # Tesla Model 3 — 75 kWh
```

---

### 3.8 Validation Inside `__init__`

You can add guard clauses to enforce valid state on creation:

```python
class Car:
    def __init__(self, name: str, model: str, year: int):
        if not name or not model:
            raise ValueError("name and model cannot be empty")
        if year < 1886 or year > 2100:          # first car was 1886
            raise ValueError(f"Invalid year: {year}")
        self.name  = name
        self.model = model
        self.year  = year

# Car("", "X5", 2024)  →  ValueError: name and model cannot be empty
```

---

### 3.9 Destructor `__del__` and Object Lifecycle

```
Object creation          Object destruction
      │                         │
  __new__()  ──▶  __init__()   ──▶  __del__()
  (allocate)     (initialize)       (clean up)
```

```python
class Resource:
    def __init__(self, name: str):
        self.name = name
        print(f"[+] Resource '{name}' acquired")

    def __del__(self):
        print(f"[-] Resource '{self.name}' released")

res = Resource("database_connection")
del res   # triggers __del__ immediately
# If not deleted manually, Python's GC calls it on program exit
```

> ⚠️ **Avoid heavy logic in `__del__`** — exceptions raised inside it are silently ignored, and the timing of GC is not guaranteed. Use context managers instead.

---

### 3.10 Prefer Context Managers for Cleanup

```python
class Managed:
    def __enter__(self):
        print("Resource acquired")
        return self

    def __exit__(self, exc_type, exc, tb):
        print("Resource released")
        return False   # don't suppress exceptions

with Managed() as m:
    print("Doing work...")
# Output:
# Resource acquired
# Doing work...
# Resource released
```

---

### 3.11 Common `__init__` Mistakes

| ❌ Mistake | ✅ Fix |
|-----------|--------|
| Forgetting `self` as first param | Always write `def __init__(self, ...)` |
| Using mutable default args (`def __init__(self, data=[])`) | Use `None` default: `data=None`, then `self.data = data or []` |
| Doing heavy I/O / long computations in `__init__` | Move heavy work to a separate method or factory |
| Not calling `super().__init__()` in child class | Always call `super().__init__(...)` when overriding |
| Returning a value from `__init__` | `__init__` must return `None` |

```python
# ❌ Mutable default argument — shared across all instances!
class Bad:
    def __init__(self, items=[]):
        self.items = items

# ✅ Correct pattern
class Good:
    def __init__(self, items=None):
        self.items = items if items is not None else []
```

---

### 3.12 Types of Constructors in Python

Python recognises **three constructor patterns**. Unlike some languages (e.g. Java/C++), Python cannot truly overload `__init__` — the same method handles all cases through default values.

---

#### Type 1 — Default Constructor

Takes **no arguments** (only `self`). Initialises attributes with hard-coded / fixed values. Python silently provides an empty one if you never define `__init__`.

```python
class Animal:
    def __init__(self):           # default constructor
        self.sound = "..."

    def speak(self):
        print(f"Sound: {self.sound}")

a = Animal()      # ← no arguments passed
a.speak()         # Sound: ...
```

| Property | Detail |
|----------|--------|
| Arguments (besides `self`) | None |
| Flexibility | Low — every object gets the same initial state |
| When to use | Simple sentinel/default objects, singletons, state machines |

---

#### Type 2 — Parameterized Constructor

Takes **one or more arguments** so each object can be initialised with different data. This is the most common pattern.

```python
class Laptop:
    def __init__(self, brand, ram, storage):   # parameterized constructor
        self.brand   = brand
        self.ram     = ram
        self.storage = storage

    def specs(self):
        print(f"{self.brand} | RAM: {self.ram}GB | Storage: {self.storage}GB")

l1 = Laptop("Dell", 16, 512)
l2 = Laptop("Apple", 32, 1024)
l1.specs()   # Dell | RAM: 16GB | Storage: 512GB
l2.specs()   # Apple | RAM: 32GB | Storage: 1024GB
```

| Property | Detail |
|----------|--------|
| Arguments (besides `self`) | One or more, all **required** |
| Flexibility | High — each object starts with unique state |
| When to use | Most domain objects (User, Product, Order, etc.) |

---

#### Type 3 — Default-Value Constructor *(Parameterized with Defaults)*

A parameterized constructor where some (or all) parameters have **fallback values**, making them optional at call time. This is Python's way of simulating constructor overloading.

```python
class Phone:
    def __init__(self, brand="Unknown", model="Unknown", price=0):
        self.brand = brand
        self.model = model
        self.price = price

    def info(self):
        print(f"{self.brand} {self.model} — ₹{self.price}")

p1 = Phone()                           # all defaults
p2 = Phone("Samsung")                  # brand set, rest default
p3 = Phone("OnePlus", "12R", 35000)    # all supplied

p1.info()   # Unknown Unknown — ₹0
p2.info()   # Samsung Unknown — ₹0
p3.info()   # OnePlus 12R — ₹35000
```

> **Rule:** Required parameters must come **before** default-value parameters.
> ```python
> def __init__(self, name, age, city="Delhi"):   # ✅ valid
> def __init__(self, name, city="Delhi", age):   # ❌ SyntaxError
> ```

| Property | Detail |
|----------|--------|
| Arguments (besides `self`) | Mix of required + optional |
| Flexibility | Very high — works as default OR parameterized |
| When to use | Config objects, models with sensible defaults |

---

#### Quick Comparison

| Feature | Default | Parameterized | Default-Value |
|---------|---------|--------------|---------------|
| Extra arguments | ✗ | ✓ (required) | ✓ (optional) |
| Objects always identical? | ✓ | ✗ | ✗ |
| Simulates overloading? | ✗ | ✗ | ✓ |
| Most flexible | Low | Medium | High |

> 💡 Python has **no true constructor overloading**. Use `@classmethod` factory methods for complex alternative constructors:
> ```python
> class Car:
>     def __init__(self, name, model):
>         self.name, self.model = name, model
>
>     @classmethod
>     def from_string(cls, car_str):      # "BMW-X5"
>         name, model = car_str.split("-")
>         return cls(name, model)          # calls __init__ internally
>
> c = Car.from_string("BMW-X5")
> print(c.name, c.model)   # BMW X5
> ```

---

## 4. Attributes: Class vs Instance, Properties

### 4.0 What is an Attribute?

> **Attribute** — a variable that belongs to an object or a class. It stores the *state* (data) of that object.

In Python, attributes are accessed with **dot notation**: `object.attribute_name`.

```
object  ──dot──▶  attribute
  │                  │
 car        ──▶    car.name   →  "BMW"
                    car.model  →  "X5"
```

There are **two kinds** of attributes:

| Kind | Belongs to | Defined | Accessed via |
|------|-----------|---------|-------------|
| **Instance attribute** | Each individual object | Inside `__init__` using `self.` | `object.attr` |
| **Class attribute** | The class itself (shared) | Directly inside the class body | `ClassName.attr` or `object.attr` |

---

### 4.1 Instance Attributes

- Created **per object** — every instance has its own copy.
- Defined inside `__init__` using `self.attribute = value`.
- Changing one object's attribute does **not** affect others.

```python
class Student:
    def __init__(self, name, marks):
        self.name  = name    # instance attribute — unique per object
        self.marks = marks   # instance attribute — unique per object

s1 = Student("Priyanshu", 90)
s2 = Student("Anushka", 85)

print(s1.name, s1.marks)   # Priyanshu 90
print(s2.name, s2.marks)   # Anushka   85

# Changing s1 does NOT affect s2
s1.marks = 95
print(s1.marks)   # 95
print(s2.marks)   # 85  ← unchanged
```

---

### 4.2 Class Attributes

- Defined **directly inside the class body** (outside any method).
- **Shared** across all instances — one copy exists in memory.
- Useful for constants, counters, or config shared by all objects.

```python
class Student:
    school = "Delhi Public School"   # class attribute — shared

    def __init__(self, name):
        self.name = name             # instance attribute

s1 = Student("Priyanshu")
s2 = Student("Anushka")

# Accessed via class or any instance
print(Student.school)   # Delhi Public School
print(s1.school)        # Delhi Public School
print(s2.school)        # Delhi Public School

# Changing via the CLASS updates for everyone
Student.school = "Kendriya Vidyalaya"
print(s1.school)        # Kendriya Vidyalaya
print(s2.school)        # Kendriya Vidyalaya
```

#### ⚠️ Instance Assignment Shadows the Class Attribute

```python
s1.school = "IIT Delhi"    # creates a NEW instance attribute on s1 only
print(s1.school)           # IIT Delhi  (instance attribute — local copy)
print(s2.school)           # Kendriya Vidyalaya  (still using class attribute)
print(Student.school)      # Kendriya Vidyalaya  (class attribute unchanged)
```

---

### 4.3 Class Attribute as a Counter

A common use-case: counting how many objects have been created.

```python
class Counter:
    instances = 0          # class attribute — shared counter

    def __init__(self):
        Counter.instances += 1   # increment on every new object

c1 = Counter()
c2 = Counter()
c3 = Counter()

print(Counter.instances)  # 3
print(c1.instances)       # 3  (reads from class)
```

---

### 4.4 The `@property` Decorator

`@property` lets you expose a **method as if it were an attribute** — no parentheses needed. This is the Pythonic way to add validation or computed values without breaking the public interface.

#### Getter (read-only property)

```python
class Circle:
    def __init__(self, radius):
        self.radius = radius

    @property
    def area(self):                          # accessed as circle.area — no ()
        return 3.14159 * self.radius ** 2

c = Circle(5)
print(c.area)   # 78.53975  ← called like an attribute, not a method
```

#### Getter + Setter + Deleter

```python
class Student:
    def __init__(self, name, marks):
        self.name   = name
        self._marks = marks    # convention: underscore = "don't touch directly"

    @property
    def marks(self):           # GETTER — called when you read  s.marks
        return self._marks

    @marks.setter
    def marks(self, value):    # SETTER — called when you write s.marks = x
        if value < 0 or value > 100:
            raise ValueError(f"Marks must be 0–100, got {value}")
        self._marks = value

    @marks.deleter
    def marks(self):           # DELETER — called when you do  del s.marks
        print("Marks deleted")
        del self._marks

s = Student("Priyanshu", 90)
print(s.marks)        # 90      ← triggers getter
s.marks = 95          # ← triggers setter (valid)
# s.marks = 150       # ← triggers setter → ValueError!
del s.marks           # ← triggers deleter → "Marks deleted"
```

---

### 4.5 Computed / Read-only Properties

Use `@property` without a setter to make a **computed, read-only** attribute:

```python
class Rectangle:
    def __init__(self, width, height):
        self.width  = width
        self.height = height

    @property
    def area(self):
        return self.width * self.height

    @property
    def perimeter(self):
        return 2 * (self.width + self.height)

r = Rectangle(4, 6)
print(r.area)        # 24
print(r.perimeter)   # 20
# r.area = 50        # AttributeError: can't set attribute (no setter defined)
```

---

### 4.6 Quick Comparison

| | Instance Attribute | Class Attribute | `@property` |
|--|-------------------|----------------|-------------|
| **Defined in** | `__init__` via `self.` | Class body (top level) | Method with `@property` |
| **Unique per object?** | ✅ Yes | ❌ No (shared) | ✅ Yes (computed per object) |
| **Stored in memory?** | ✅ Yes | ✅ Yes (once) | ❌ No (recalculated on access) |
| **Can have validation?** | ❌ (manual) | ❌ (manual) | ✅ via setter |
| **Accessed with `()`?** | No | No | No |

---

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

## 7. Methods in Python OOP

### 7.0 What is a Method?

> **Method** — a function defined **inside a class**. It describes the *behaviour* (actions) an object can perform.

| Term | Meaning |
|------|---------|
| **Attribute** | *What* an object **has** (data / state) |
| **Method** | *What* an object **does** (behaviour / action) |

Methods are accessed with dot notation, just like attributes, but they are **called with `()`**:

```
object.method()
   │       │
  car   .drive()   →  executes the drive function with car as self
```

---

### 7.1 Instance Method

- The **most common** type.
- Always takes `self` as the first parameter — Python passes the calling object automatically.
- Can **read and modify** instance attributes.

```python
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
```

---

### 7.2 Class Method

- Decorated with `@classmethod`.
- Receives the **class itself** as the first parameter (`cls`), not an instance.
- Cannot access instance attributes — only class-level data.
- Often used as **alternative constructors** (factory methods).

```python
class Student:
    school = "Delhi Public School"   # class attribute

    def __init__(self, name, marks):
        self.name  = name
        self.marks = marks

    @classmethod
    def get_school(cls):
        return cls.school            # accesses class attribute

    @classmethod
    def from_string(cls, data_str):
        # Alternative constructor — e.g. "Priyanshu:90"
        name, marks = data_str.split(":")
        return cls(name, int(marks)) # creates and returns a new instance


print(Student.get_school())          # Delhi Public School

s = Student.from_string("Anushka:85")
print(s.name, s.marks)               # Anushka 85
```

---

### 7.3 Static Method

- Decorated with `@staticmethod`.
- **No** implicit first parameter — no `self`, no `cls`.
- Does **not** access or modify instance or class data.
- Used for utility / helper functions that logically belong to the class.

```python
class MathUtils:
    @staticmethod
    def add(a, b):
        return a + b

    @staticmethod
    def is_even(n):
        return n % 2 == 0


# Called on the class — no object needed
print(MathUtils.add(3, 7))       # 10
print(MathUtils.is_even(4))      # True

# Can also be called on an instance (but unnecessary)
m = MathUtils()
print(m.is_even(9))              # False
```

---

### 7.4 Comparison: Instance vs Class vs Static Method

| Feature | Instance Method | Class Method | Static Method |
|---------|----------------|-------------|---------------|
| First parameter | `self` (instance) | `cls` (class) | None |
| Access instance attrs? | ✅ Yes | ❌ No | ❌ No |
| Access class attrs? | ✅ Yes (via `self`) | ✅ Yes (via `cls`) | ❌ No |
| Modify instance state? | ✅ Yes | ❌ No | ❌ No |
| Decorator needed? | ❌ None | `@classmethod` | `@staticmethod` |
| Called on object? | ✅ Typical | ✅ or via class | ✅ or via class |
| Common use | Core object behaviour | Factory / alt constructors | Utilities / helpers |

---

### 7.5 All Three in One Class

```python
class Temperature:
    unit = "Celsius"                    # class attribute

    def __init__(self, value):
        self.value = value              # instance attribute

    # Instance method — works on this object
    def show(self):
        print(f"{self.value}° {Temperature.unit}")

    # Class method — works on the class
    @classmethod
    def set_unit(cls, new_unit):
        cls.unit = new_unit

    # Static method — pure utility, no object/class needed
    @staticmethod
    def celsius_to_fahrenheit(c):
        return (c * 9/5) + 32


t = Temperature(100)
t.show()                                    # 100° Celsius

Temperature.set_unit("Kelvin")
t.show()                                    # 100° Kelvin

print(Temperature.celsius_to_fahrenheit(0)) # 32.0
```

---

### 7.6 Method Chaining

Return `self` from instance methods to enable **fluent-style chaining**:

```python
class Builder:
    def __init__(self):
        self.parts = []

    def add(self, part):
        self.parts.append(part)
        return self              # ← return self enables chaining

    def build(self):
        return " + ".join(self.parts)


result = Builder().add("Engine").add("Wheels").add("Body").build()
print(result)   # Engine + Wheels + Body
```

---

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
