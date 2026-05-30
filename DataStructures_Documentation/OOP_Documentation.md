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

---

#### The `super()` Method in Inheritance

The **`super()`** method is a built-in Python function that returns a proxy (temporary) object of the parent class, allowing a subclass to call methods and constructors from its superclass. 

##### 1. Why use `super()` instead of `ParentClass.method(self)`?

In your code, you might see parents initialized explicitly like:
```python
ToyotaCar.__init__(self, brand="Toyota")  # Explicit call
```
Using `super()` is highly preferred and more elegant:
```python
super().__init__(brand="Toyota")          # Using super()
```

| Feature | Explicit Class Call (`Parent.__init__(self)`) | Using `super().__init__()` |
| :--- | :--- | :--- |
| **Passing `self`** | **Must** pass `self` explicitly as the first argument | **No** need to pass `self` (Python injects it automatically) |
| **DRY Principle** | Violates DRY—if the parent class is renamed, you must update all calls | Adheres to DRY—flexible if class hierarchy changes |
| **Multiple Inheritance** | Can result in parent constructors being skipped or called multiple times | Guarantees every parent is initialized **exactly once** via MRO |

##### 2. `super()` in Multilevel Inheritance

*(Based on `Revision/inheritence.py`)*

Consider a multilevel inheritance hierarchy where `Car` is the grandparent, `ToyotaCar` is the parent, and `Fortuner` is the child:

```python
class Car:
    @staticmethod
    def start():
        print('car started ✅')

class ToyotaCar(Car):
    def __init__(self, brand):
        self.brand = brand

class Fortuner(ToyotaCar):
    def __init__(self, type):
        # 1. Calls the parent's (ToyotaCar) __init__ using super()
        # 2. No need to pass 'self' explicitly
        super().__init__(brand="Toyota")
        self.type = type

car1 = Fortuner("Legender")
car1.start()  # Inherited from Car
print(car1.brand, car1.type)  # Output: Toyota Legender
```

##### 3. Multiple Inheritance & Method Resolution Order (MRO)

When a class inherits from multiple parents, Python uses a lookup order called **Method Resolution Order (MRO)** (derived using the C3 Linearization algorithm) to resolve which parent's method to call.

* **Diamond Problem Resolution:** When using `super()`, Python resolves multiple inheritance hierarchies in a strict linear order. You can view this order by printing `ClassName.__mro__` or `ClassName.mro()`.

```python
# MRO lookup example
print(Fortuner.__mro__)
# Output: (<class 'Fortuner'>, <class 'ToyotaCar'>, <class 'Car'>, <class 'object'>)
```

By calling `super()`, Python looks up the next class in this `__mro__` chain, ensuring that sibling and parent methods are executed cleanly and exactly once.

---

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

### III. Encapsulation & "Private-like" Members in Python

Encapsulation is the bundling of data and the methods that operate on that data, while restricting direct access to some of the object's components. 

In languages like C++ or Java, keywords like `private` and `protected` are strictly enforced by the compiler. In Python, **there are no true private access specifiers**. Python's philosophy is *"We are all consenting adults here"*. Instead, Python achieves "private-like" access conceptually and structurally through prefixes:

| Access Level | Prefix Syntax | Conceptual Meaning | Actual Behavior in Python |
| :--- | :--- | :--- | :--- |
| **Public** | `attribute` | Anyone can access & modify | Fully accessible inside & outside the class |
| **Protected-like** | `_attribute` | Internal use warning (Convention) | Fully accessible, but flagged as internal (don't access directly) |
| **Private-like** | `__attribute` | Strictly internal to this class | Accessible via **Name Mangling** (`_ClassName__attribute`) |

---

#### 1. Conceptual Implementation of Protected-like members (`_`)

The single leading underscore (`_`) is a purely conceptual convention. It tells other programmers: *"This is a protected member. Do not access it outside the class."*

```python
class User:
    def __init__(self, username):
        self.username = username
        self._status = "Active"  # Protected-like attribute (by convention)

    def _display_status(self):   # Protected-like method
        return f"User is {self._status}"

u = User("Alice")
# ❌ Bad practice (violates convention):
print(u._status)           # Works, but highly discouraged!
print(u._display_status()) # Works, but highly discouraged!
```

---

#### 2. Conceptual & Actual Implementation of Private-like members (`__`)

The double leading underscore (`__`) invokes Python's **Name Mangling** mechanism. 

##### What is Name Mangling?
When Python sees `__attribute` or `__method`, it automatically renames (mangles) it internally to `_ClassName__attribute` or `_ClassName__method`. This is not to restrict access for security, but to **prevent accidental override or naming conflicts** (especially in inheritance).

##### Examples from `Revision/oop2.py`:

##### Example A: Private-like Attributes (`Account` Class)
```python
class Account:
    def __init__(self, acc_no, acc_pass):
        self.acc_no = acc_no
        self.__acc_pass = acc_pass  # Private-like attribute

    def reset_password(self):
        print(self.__acc_pass)      # Accessor method (accessible inside)

acc1 = Account(123456, '1234')

# 1. Accessing via accessor method (Allowed)
acc1.reset_password()  # Outputs: 1234

# 2. Attempting direct access (Raises AttributeError)
# print(acc1.__acc_pass)  # ❌ AttributeError: 'Account' object has no attribute '__acc_pass'

# 3. Accessing via name mangling (Allowed but discouraged)
print(acc1._Account__acc_pass)  # Outputs: 1234
```

##### Example B: Private-like Methods & Attributes (`SecretAgent` Class)
```python
class SecretAgent:
    def __init__(self, codename, real_name):
        self.codename = codename      # Public attribute
        self.__real_name = real_name  # Private-like attribute

    def __decrypt_secret(self):       # Private-like method
        return "Decrypted: Target located."

    def reveal_identity(self):
        # Accessible inside the class natively
        print(f"Agent: {self.codename}")
        print(f"Real Name: {self.__real_name}")
        print(self.__decrypt_secret())

secret_agent = SecretAgent("007", "James Bond")

# 1. Accessing inside class using reveal_identity (Allowed)
secret_agent.reveal_identity()
# Outputs:
# Agent: 007
# Real Name: James Bond
# Decrypted: Target located.

# 2. Attempting direct access/call externally (Raises AttributeError)
# print(secret_agent.__real_name)         # ❌ AttributeError
# secret_agent.__decrypt_secret()          # ❌ AttributeError

# 3. Accessing mangled method externally (Allowed but discouraged)
print(secret_agent._SecretAgent__decrypt_secret())  # Outputs: Decrypted: Target located.
```

---

### IV. Abstraction

Hiding the complex internal implementation details of a system and showing only the essential features/interfaces to the outside world. 

There are two layers to Abstraction in Python:
1. **Conceptual Abstraction (Complexity Hiding)**: Designing classes that hide internal calculations and states behind simple methods.
2. **Structural Abstraction (Interface Enforcement)**: Creating abstract base templates using the `abc` module to define contracts that subclasses must implement.

#### 1. Conceptual Abstraction (Real-world `Car` Example)

*(Taken from `Revision/abstraction_prac.py`)*

Consider how a car operates. A driver interacts only with simple public controls (`start` button, `drive` selector). The complex internal mechanisms (pedals, clutch engagement, fuel injection) are hidden.

```python
class Car:
    def __init__(self):
        # Hidden/internal states (kept simple for illustration)
        self.acc = False
        self.brk = False
        self.clutch = False
        
    def start(self):
        # Internal step-by-step coordination is abstracted away
        self.clutch = True
        self.acc = True
        print("Car Started ✅")

    def drive(self):
        if self.acc == True and self.clutch == True:
            print("Car is Driving 🚗💨")
        else:
            print("Cannot Drive ❌")

# --- Client Interface ---
car1 = Car()
car1.start()  # Hides the complex pedal state configurations
car1.drive()  # User simply drives without manually managing raw pedal values
```

#### 2. Structural Abstraction (Abstract Base Classes)

Achieved using Python's built-in `abc` (Abstract Base Classes) module. This defines a common interface that other classes must inherit and implement.

```python
from abc import ABC, abstractmethod

class Vehicle(ABC):
    @abstractmethod
    def start(self):
        pass

    @abstractmethod
    def drive(self):
        pass

class ElectricCar(Vehicle):
    def __init__(self):
        self.battery_ready = False

    def start(self):
        self.battery_ready = True
        print("Electric system online silently ⚡")

    def drive(self):
        if self.battery_ready:
            print("Car is gliding smoothly 🤫")

# You cannot instantiate the abstract class itself:
# v = Vehicle()  -->  TypeError: Can't instantiate abstract class Vehicle
```

---

## 3. Constructors and Object Lifecycle

### 3.0 What is a Constructor?

A **Constructor** is a special method (or block of code) in Object-Oriented Programming (OOP) that is automatically invoked when a new instance (object) of a class is created.

**Key Purposes of a Constructor:**
1. **Resource Allocation**: Reserves memory space for the new object.
2. **State Initialization**: Assigns initial values to the object's instance variables (attributes), preparing it for immediate use.
3. **Setup Tasks**: Executes any startup configuration or validation required when an object is born.

In Python, the constructor concept is implemented via the **`__init__`** method (initializer).

---

### 3.1 What is `__init__`?

`__init__` (pronounced _"dunder init"_) is the **initializer method** — Python's constructor. It is automatically called **every time a new object is created** from a class.

| Term                | Meaning                                            |
| ------------------- | -------------------------------------------------- |
| `__init__`          | Initializer — sets up the object's initial state   |
| `self`              | Reference to the newly created instance            |
| Instance attributes | Per-object data, set with `self.attribute = value` |

> **How Python calls it internally:**
> `Car("BMW", "X5")` → Python first calls `Car.__new__(Car)` to allocate memory, then calls `Car.__init__(instance, "BMW", "X5")` to populate it.

> The **_self_** parameter is a reference to the current instance of the class, and is used to access variables and methods. This parameter is passed automatically by Python when a method is called.

> **_self_** **must always be the first parameter** but is never passed explicitly when creating an object — Python injects it automatically.

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

_(Taken from `oop.py`)_

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

### 3.7 The `super()` Method in Python OOP

For a complete conceptual deep dive into the **`super()`** method (including multilevel inheritance, comparison with explicit parent class calls, and Method Resolution Order), see [The super() Method in Inheritance](#the-super-method-in-inheritance) under the **Inheritance** pillar.

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

### 3.10.1 The `del` Keyword in Python OOP

The `del` keyword in Python is a general-purpose instruction used to delete references to objects, variables, list/dict elements, or individual attributes of an object.

#### 1. Deleting an Object Attribute
You can remove a specific attribute from an active instance using `del object.attribute`. Trying to access the attribute after deletion will raise an `AttributeError`.

```python
class Account:
    def __init__(self, bal):
        self.balance = bal

acc = Account(5000)
print(acc.balance)  # 5000
del acc.balance     # removes the balance attribute from acc

# Accessing it now raises an error:
# print(acc.balance)  --> AttributeError: 'Account' object has no attribute 'balance'
```

#### 2. Deleting an Entire Object Reference
Using `del object` removes the variable name from the local/global namespace. If this was the last reference to the object in memory, Python's Garbage Collector will trigger its `__del__` destructor method to free up memory. Accessing the object after deletion raises a `NameError`.

```python
acc = Account(1000)
del acc             # deletes the variable reference

# Accessing it now raises an error:
# print(acc)        # --> NameError: name 'acc' is not defined
```

---

### 3.11 Common `__init__` Mistakes

| ❌ Mistake                                                 | ✅ Fix                                                         |
| ---------------------------------------------------------- | -------------------------------------------------------------- |
| Forgetting `self` as first param                           | Always write `def __init__(self, ...)`                         |
| Using mutable default args (`def __init__(self, data=[])`) | Use `None` default: `data=None`, then `self.data = data or []` |
| Doing heavy I/O / long computations in `__init__`          | Move heavy work to a separate method or factory                |
| Not calling `super().__init__()` in child class            | Always call `super().__init__(...)` when overriding            |
| Returning a value from `__init__`                          | `__init__` must return `None`                                  |

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

| Property                   | Detail                                                      |
| -------------------------- | ----------------------------------------------------------- |
| Arguments (besides `self`) | None                                                        |
| Flexibility                | Low — every object gets the same initial state              |
| When to use                | Simple sentinel/default objects, singletons, state machines |

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

| Property                   | Detail                                           |
| -------------------------- | ------------------------------------------------ |
| Arguments (besides `self`) | One or more, all **required**                    |
| Flexibility                | High — each object starts with unique state      |
| When to use                | Most domain objects (User, Product, Order, etc.) |

---

#### Type 3 — Default-Value Constructor _(Parameterized with Defaults)_

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
>
> ```python
> def __init__(self, name, age, city="Delhi"):   # ✅ valid
> def __init__(self, name, city="Delhi", age):   # ❌ SyntaxError
> ```

| Property                   | Detail                                        |
| -------------------------- | --------------------------------------------- |
| Arguments (besides `self`) | Mix of required + optional                    |
| Flexibility                | Very high — works as default OR parameterized |
| When to use                | Config objects, models with sensible defaults |

---

#### Quick Comparison

| Feature                   | Default | Parameterized | Default-Value |
| ------------------------- | ------- | ------------- | ------------- |
| Extra arguments           | ✗       | ✓ (required)  | ✓ (optional)  |
| Objects always identical? | ✓       | ✗             | ✗             |
| Simulates overloading?    | ✗       | ✗             | ✓             |
| Most flexible             | Low     | Medium        | High          |

> 💡 Python has **no true constructor overloading**. Use `@classmethod` factory methods for complex alternative constructors:
>
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

> **Attribute** — a variable that belongs to an object or a class. It stores the _state_ (data) of that object.

In Python, attributes are accessed with **dot notation**: `object.attribute_name`.

```
object  ──dot──▶  attribute
  │                  │
 car        ──▶    car.name   →  "BMW"
                    car.model  →  "X5"
```

There are **two kinds** of attributes:

| Kind                   | Belongs to                | Defined                         | Accessed via                      |
| ---------------------- | ------------------------- | ------------------------------- | --------------------------------- |
| **Instance attribute** | Each individual object    | Inside `__init__` using `self.` | `object.attr`                     |
| **Class attribute**    | The class itself (shared) | Directly inside the class body  | `ClassName.attr` or `object.attr` |

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

|                          | Instance Attribute     | Class Attribute        | `@property`                    |
| ------------------------ | ---------------------- | ---------------------- | ------------------------------ |
| **Defined in**           | `__init__` via `self.` | Class body (top level) | Method with `@property`        |
| **Unique per object?**   | ✅ Yes                 | ❌ No (shared)         | ✅ Yes (computed per object)   |
| **Stored in memory?**    | ✅ Yes                 | ✅ Yes (once)          | ❌ No (recalculated on access) |
| **Can have validation?** | ❌ (manual)            | ❌ (manual)            | ✅ via setter                  |
| **Accessed with `()`?**  | No                     | No                     | No                             |

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

> **Method** — a function defined **inside a class**. It describes the _behaviour_ (actions) an object can perform.

| Term          | Meaning                                        |
| ------------- | ---------------------------------------------- |
| **Attribute** | _What_ an object **has** (data / state)        |
| **Method**    | _What_ an object **does** (behaviour / action) |

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

> **Definition:** A class method is **bound to the class**, not to any individual object (instance). It receives the **class itself as the implicit first argument** (conventionally named `cls`), injected automatically by Python — just like `self` is injected for instance methods.

#### 📝 Notes

- Decorated with **`@classmethod`** — this tells Python to pass the class, not the object, as the first argument.
- The first parameter is **`cls`** (short for *class*) — you can technically name it anything, but `cls` is the universal convention.
- **`cls` = the class** → `self` = the instance. Same idea, different scope.
- Can **read and modify class attributes** (shared by all objects).
- **Cannot** access instance attributes — there is no `self`, so no per-object data.
- Can be called **on the class directly** (`Student.method()`) **or on an instance** (`s1.method()`) — Python always passes the class, not the instance.
- Commonly used as **alternative / factory constructors** — Python's substitute for constructor overloading.

```
How Python calls it internally:

  Student.get_school()
      │
      └──▶  Student.get_school(Student)   ← Python injects the class as cls
                                 └── cls = Student
```

---


#### 1. Core Syntax & Parameters

* **`@classmethod` Decorator:** You must decorate a class method with the built-in `@classmethod` decorator.
* **The `cls` Parameter:** The first parameter of a class method is always **`cls`**, which represents the class itself. When you call the method, Python automatically injects the class object as `cls`. 

```python
class Demo:
    @classmethod
    def my_class_method(cls):
        print(f"This method is running on class: {cls.__name__}")
```

---

#### 2. Key Use Cases

Class methods are primarily used for two main purposes in Python:

##### Use Case A: Alternative Constructors (Factory Methods)
Unlike languages like Java or C++, Python does not support true method/constructor overloading. A class can only have **one** `__init__` method.

Class methods solve this limitation by serving as **Alternative Constructors** (factory methods) to create instances of the class from different data formats (e.g., strings, dictionaries, JSON, lists).

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    # 1. Constructor from a single string: "Priyanshu:20"
    @classmethod
    def from_string(cls, data_str):
        name, age = data_str.split(":")
        return cls(name, int(age))  # Instantiates and returns a new object

    # 2. Constructor from a dictionary: {"name": "Anushka", "age": 19}
    @classmethod
    def from_dict(cls, data_dict):
        return cls(data_dict["name"], data_dict["age"])

# Instantiating using standard constructor:
s1 = Student("Priyanshu", 20)

# Instantiating using Alternative Constructors:
s2 = Student.from_string("Anushka:19")
s3 = Student.from_dict({"name": "Karan", "age": 21})

print(s2.name, s2.age)  # Output: Anushka 19
print(s3.name, s3.age)  # Output: Karan 21
```

##### Use Case B: Accessing and Modifying Class-Level State
Class methods can read and modify variables that belong to the class itself, which are shared across all instances (like counter variables or shared configuration settings).

```python
class Employee:
    company = "Google"  # Class attribute

    def __init__(self, name):
        self.name = name

    @classmethod
    def get_company(cls):
        return cls.company

    @classmethod
    def change_company(cls, new_company):
        cls.company = new_company  # Modifies the shared class state

e1 = Employee("Alice")
e2 = Employee("Bob")

print(e1.get_company())  # Output: Google
Employee.change_company("DeepMind")
print(e2.get_company())  # Output: DeepMind (Updates for all employees!)
```

---

#### 3. How to Call a Class Method

You can call a class method in two ways, but calling it directly on the **Class** is the most readable and standard practice:
1. **Via the Class (Preferred):** `ClassName.method_name()`
2. **Via an Instance:** `instance_name.method_name()` *(Python still automatically passes the class object as the first parameter behind the scenes)*.

---

### 7.3 Static Method

- Decorated with `@staticmethod`.
- **No** implicit first parameter — no `self`, no `cls`.
- Does **not** access or modify instance or class data.
- Used for utility / helper functions that logically belong to the class.
- Work at class level

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
> Decorators allow us to wrap another function in order to extend the behaviour of the function in a simple and readable way.(wrapped function, w/o permanently modifying it)

---

### 7.4 Comparison: Instance vs Class vs Static Method

| Feature                | Instance Method       | Class Method               | Static Method       |
| ---------------------- | --------------------- | -------------------------- | ------------------- |
| First parameter        | `self` (instance)     | `cls` (class)              | None                |
| Access instance attrs? | ✅ Yes                | ❌ No                      | ❌ No               |
| Access class attrs?    | ✅ Yes (via `self`)   | ✅ Yes (via `cls`)         | ❌ No               |
| Modify instance state? | ✅ Yes                | ❌ No                      | ❌ No               |
| Decorator needed?      | ❌ None               | `@classmethod`             | `@staticmethod`     |
| Called on object?      | ✅ Typical            | ✅ or via class            | ✅ or via class     |
| Common use             | Core object behaviour | Factory / alt constructors | Utilities / helpers |

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

### 7.7 When to Use Which Method Type

#### Decision Flowchart

```
Does the method need to read or change THIS object's data (self.attribute)?
│
├── YES  →  Use an  INSTANCE METHOD     def method(self)
│
└── NO   →  Does it need to read or change the CLASS itself (e.g. class attribute)?
            │
            ├── YES  →  Use a  CLASS METHOD      @classmethod  def method(cls)
            │
            └── NO   →  It's a pure utility — use a  STATIC METHOD   @staticmethod  def method()
```

---

#### At a Glance — Scenarios

| Scenario | Use |
|----------|-----|
| Greet a student by their name | **Instance** — needs `self.name` |
| Check if a student passed/failed | **Instance** — needs `self.marks` |
| Update a student's marks | **Instance** — modifies `self.marks` |
| Get the school name (shared by all students) | **Class** — reads a class attribute |
| Create a Student from a CSV string `"Priyanshu,90"` | **Class** — factory / alternative constructor |
| Change the school name for every student at once | **Class** — modifies class attribute via `cls` |
| Validate that marks are between 0–100 | **Static** — pure logic, no object data needed |
| Convert Celsius to Fahrenheit | **Static** — pure math, completely self-contained |
| Calculate average of a list of numbers | **Static** — utility helper |
| Count total objects created | **Class** — tracks a class-level counter |

---

#### Real-world Example — All Three Applied Correctly

```python
class Student:
    school = "Delhi Public School"   # class attribute
    _count = 0                        # class attribute — object counter

    def __init__(self, name, marks):
        self.name  = name
        self.marks = marks            # list of marks
        Student._count += 1

    # ── INSTANCE METHODS ────────────────────────────────────────
    # Use when: you need self.something

    def get_avg(self):
        """Calculate average — needs this student's marks."""
        avg = sum(self.marks) / len(self.marks)
        print(f"{self.name} → Avg: {avg:.1f}")
        return avg

    def result(self):
        """Pass/fail — depends on this student's average."""
        avg = sum(self.marks) / len(self.marks)
        status = "PASS ✅" if avg >= 35 else "FAIL ❌"
        print(f"{self.name} — {status}")

    def update_marks(self, new_marks):
        """Modify marks — changes this student's state."""
        self.marks = new_marks
        print(f"Marks updated for {self.name}")

    # ── CLASS METHODS ────────────────────────────────────────────
    # Use when: you need cls.something or an alternative constructor

    @classmethod
    def get_school(cls):
        """Return school name shared by all students."""
        return cls.school

    @classmethod
    def total_students(cls):
        """How many Student objects exist?"""
        return cls._count

    @classmethod
    def from_string(cls, data):
        """Alternative constructor: 'Priyanshu:90,80,70'"""
        name, raw = data.split(":")
        marks = list(map(int, raw.split(",")))
        return cls(name, marks)

    # ── STATIC METHODS ───────────────────────────────────────────
    # Use when: pure logic — no self, no cls needed

    @staticmethod
    def is_valid_marks(marks):
        """Validate marks list — doesn't need any object data."""
        return all(0 <= m <= 100 for m in marks)

    @staticmethod
    def grade(avg):
        """Convert average to grade — pure math, self-contained."""
        if avg >= 90: return "A"
        if avg >= 75: return "B"
        if avg >= 50: return "C"
        return "D"


# ── Usage ─────────────────────────────────────────────────────
s1 = Student("Priyanshu", [90, 80, 70])
s2 = Student.from_string("Anushka:50,30,20")   # class method

s1.get_avg()        # Priyanshu → Avg: 80.0       (instance)
s2.result()         # Anushka — FAIL ❌            (instance)

print(Student.get_school())        # Delhi Public School   (class)
print(Student.total_students())    # 2                     (class)

print(Student.is_valid_marks([90, 80, 70]))  # True        (static)
print(Student.grade(80))                     # B           (static)
```

---

#### Common Mistakes

| ❌ Wrong | ✅ Correct | Why |
|---------|-----------|-----|
| `@staticmethod` but reads `self.name` | Use instance method | Static has no `self` |
| `@classmethod` but reads `self.marks` | Use instance method | `cls` is the class, not the object |
| Instance method for pure math | Use `@staticmethod` | Cleaner — signals no side-effects |
| Class method to modify one student's marks | Use instance method | `cls` affects the class, not one object |

---

## 8. Polymorphism and Duck Typing

### 8.0 What is Polymorphism?

> **Polymorphism** (from Greek: *poly* = many, *morphe* = form) — the ability of **different objects to respond to the same method call** in their own way.

The same interface (`speak()`, `area()`, `+`) works on many different types — each type handles it differently.

```
make_sound(dog)   →  "Woof"
make_sound(cat)   →  "Meow"
make_sound(bird)  →  "Chirp"

Same function call → different behaviour depending on the object.
```

---

### 8.1 Types of Polymorphism in Python

| Type | How | Example |
|------|-----|---------|
| **Method Overriding** | Child class redefines a parent's method | `Dog.speak()` overrides `Animal.speak()` |
| **Operator Overloading** | Dunder methods redefine operators (`+`, `*`, `==`) | `Point(1,2) + Point(3,4)` |
| **Duck Typing** | No inheritance needed — just implement the same interface | Any object with `.speak()` works |

---

### 8.2 Method Overriding (Runtime Polymorphism)

A child class provides its **own implementation** of a method already defined in the parent. At runtime Python picks the right version based on the actual object type.

```python
class Animal:
    def speak(self):
        return "..."          # default — meant to be overridden

class Dog(Animal):
    def speak(self):
        return "Woof 🐕"     # overrides Animal.speak

class Cat(Animal):
    def speak(self):
        return "Meow 🐈"     # overrides Animal.speak

class Bird(Animal):
    def speak(self):
        return "Chirp 🐦"    # overrides Animal.speak


# Polymorphism in action — same call, different result
animals = [Dog(), Cat(), Bird()]

for animal in animals:
    print(animal.speak())    # Python calls the right .speak() automatically
# Output:
# Woof 🐕
# Meow 🐈
# Chirp 🐦
```

---

### 8.3 Polymorphism with Functions

You don't need a loop — a plain function can accept any object that has the required method:

```python
def make_sound(animal):
    """Works with ANY object that has a .speak() method."""
    print(animal.speak())

make_sound(Dog())    # Woof 🐕
make_sound(Cat())    # Meow 🐈
make_sound(Bird())   # Chirp 🐦
```

The function doesn't care *what type* `animal` is — only that it has `.speak()`. This is **duck typing**.

---

### 8.4 Operator Overloading (Compile-time Polymorphism)

Python's built-in operators (`+`, `-`, `*`, `==`, `<`, etc.) can be redefined for custom classes using **dunder (magic) methods**.

| Operator | Dunder Method |
|---------|--------------|
| `+` | `__add__` |
| `-` | `__sub__` |
| `*` | `__mul__` |
| `==` | `__eq__` |
| `<` | `__lt__` |
| `str()` | `__str__` |
| `len()` | `__len__` |

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):          # overloads  +
        return Point(self.x + other.x, self.y + other.y)

    def __eq__(self, other):           # overloads  ==
        return self.x == other.x and self.y == other.y

    def __str__(self):                 # overloads  str()  /  print()
        return f"Point({self.x}, {self.y})"


p1 = Point(1, 2)
p2 = Point(3, 4)

print(p1 + p2)    # Point(4, 6)   ← __add__ called
print(p1 == p2)   # False         ← __eq__ called
print(p1)         # Point(1, 2)   ← __str__ called
```

---

### 8.5 Duck Typing

> *"If it walks like a duck and quacks like a duck, it's a duck."*

Python does **not** require a shared base class or interface declaration. As long as an object has the required method or attribute, it will work — regardless of its actual type.

```python
# These three classes share NO common parent — yet they all work the same way
class Dog:
    def speak(self):
        return "Woof 🐕"

class Robot:
    def speak(self):
        return "Beep boop 🤖"

class Child:
    def speak(self):
        return "Hello! 👦"


def make_it_speak(entity):
    """Doesn't check the type — just calls .speak()"""
    print(entity.speak())


make_it_speak(Dog())    # Woof 🐕
make_it_speak(Robot())  # Beep boop 🤖
make_it_speak(Child())  # Hello! 👦
```

Python doesn't ask *"Is this an Animal?"* — it asks *"Does this have a `.speak()` method?"*

---

### 8.6 Practical Duck Typing — File-Like Objects

Python's standard library relies heavily on duck typing. Any object with `.read()` and `.write()` behaves like a file:

```python
import io

def process(file_like):
    """Works with real files, StringIO, BytesIO — anything with .read()"""
    content = file_like.read()
    print(f"Read {len(content)} characters")

# Works with a real file:
# with open("data.txt") as f:
#     process(f)

# Also works with an in-memory buffer — no file on disk needed:
buf = io.StringIO("Hello from duck typing!")
process(buf)   # Read 23 characters
```

---

### 8.7 `isinstance()` vs Duck Typing

| Approach | How it checks | When to use |
|---------|--------------|-------------|
| `isinstance(obj, Animal)` | Strict type check — must be `Animal` or subclass | When type correctness is critical (security, serialisation) |
| **Duck typing** (just call the method) | No check — try it, catch `AttributeError` | Most everyday Python code |
| `hasattr(obj, "speak")` | Check for capability without a type check | When you want to be explicit but stay flexible |

```python
# ── Duck typing (Pythonic) ──────────────────────────────────
def make_sound(entity):
    try:
        print(entity.speak())
    except AttributeError:
        print(f"{type(entity).__name__} has no speak() method")


# ── hasattr approach (explicit capability check) ─────────────
def make_sound_safe(entity):
    if hasattr(entity, "speak"):
        print(entity.speak())
    else:
        print("Cannot speak!")


make_sound(Dog())     # Woof 🐕
make_sound(42)        # int has no speak() method
make_sound_safe(Cat())  # Meow 🐈
```

---

### 8.8 Polymorphism with `len()` and `str()`

Built-in functions are themselves polymorphic — they work on any type that implements the right dunder:

```python
print(len("hello"))     # 5      — str.__len__
print(len([1, 2, 3]))   # 3      — list.__len__
print(len({1, 2}))      # 2      — set.__len__

class Bag:
    def __init__(self, items):
        self.items = items
    def __len__(self):
        return len(self.items)

b = Bag(["apple", "banana", "cherry"])
print(len(b))           # 3      — Bag.__len__  ← polymorphism!
```

---

### 8.9 Key Takeaways

| Concept | One-line summary |
|---------|-----------------|
| **Polymorphism** | Same interface, different behaviour per object type |
| **Method Overriding** | Child redefines parent's method — runtime dispatch |
| **Operator Overloading** | Dunder methods let operators work on custom types |
| **Duck Typing** | Python checks *capability*, not *identity* |
| **No base class needed** | Any object with the right method works |

> 💡 **Python's philosophy:** *"We are all adults here."* — Python trusts you to pass the right type of object. Prefer duck typing over strict `isinstance` checks.

---


## 9. Abstraction with interfaces and `abc` (covered above)

---

## 10. Core Software Design Principles: DRY vs. WET

### 10.1 What is DRY?

**DRY** stands for **"Don't Repeat Yourself"**. It is a fundamental principle of software development introduced in *The Pragmatic Programmer* (by Andy Hunt and Dave Thomas):

> *"Every piece of knowledge must have a single, unambiguous, authoritative representation within a system."*

In simple terms: **Do not duplicate code or logic.** If you write the same or highly similar logic in multiple places, you create a major maintenance problem. If that logic needs to change, you must find and update every single duplicate, which leads to bugs.

---

### 10.2 What is the Opposite? WET Code

The opposite of DRY is **WET**:
* **W**rite **E**verything **T**wice
* **W**e **E**njoy **T**yping
* **W**aste **E**veryone's **T**ime

WET code is highly redundant and repetitive. Changing a single business rule or calculation requires scouring the codebase to update it in multiple files.

---

### 10.3 How DRY is Applied in Object-Oriented Programming (OOP)

OOP provides powerful tools to eliminate duplication:

#### 1. Inheritance (Code Reuse)
Instead of copy-pasting standard methods (like `.start()` and `.stop()`) across `ToyotaCar`, `FordCar`, and `BMWCar`, we define them once in a parent `Car` class. Subclasses inherit this logic automatically.

```python
# ❌ WET (Bad): Repeating logic
class Toyota:
    def start(self): print("Ignition turned on")
class Ford:
    def start(self): print("Ignition turned on")

# ✅ DRY (Good): Shared base logic
class Vehicle:
    def start(self): print("Ignition turned on")

class Toyota(Vehicle): pass
class Ford(Vehicle): pass
```

#### 2. The `super()` Method (Single Point of Change)
By calling `super().__init__()` instead of `ParentClass.__init__(self)` inside child constructors, you avoid repeating parent class names. If the parent class is renamed, you only change it once in the class definition header.

#### 3. Methods & Helper Functions
If you need to calculate averages, validate emails, or convert temperatures in multiple methods, consolidate that calculations into a single method (or `@staticmethod`) and invoke it.

```python
# ❌ WET (Bad): Repeating the average math
class Student:
    def __init__(self, marks):
        self.marks = marks
    def get_avg(self):
        return sum(self.marks) / len(self.marks) # Duplicate math
    def result(self):
        avg = sum(self.marks) / len(self.marks)  # Duplicate math
        return "Pass" if avg >= 35 else "Fail"

# ✅ DRY (Good): Reusing the computed average via property or helper
class Student:
    def __init__(self, marks):
        self.marks = marks
    @property
    def avg(self):
        return sum(self.marks) / len(self.marks) # Single point of truth
    def get_avg(self):
        return self.avg
    def result(self):
        return "Pass" if self.avg >= 35 else "Fail"
```

#### 4. Composition (Modular Delegation)
Instead of repeating complex logic (like credit card processing or logging) inside different class definitions, bundle it into its own helper class (e.g., `PaymentGateway`, `Logger`) and give other classes a reference to it (e.g., `self.payment_gateway = PaymentGateway()`).

---

### 10.4 The Benefits of DRY Code
1. **Maintainability:** You only need to fix bugs or update features in **one place**.
2. **Readability:** Codebases are much smaller, cleaner, and easier to comprehend.
3. **Testing:** You only write tests for the single authoritative version of your logic.
4. **Consistency:** Avoids bugs where one copied block of code gets updated but others are forgotten.

---

## 11. Common OOP pitfalls & best practices

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
