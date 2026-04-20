# Object-Oriented Programming (OOP) in Python

Object-Oriented Programming is a programming paradigm based on the concept of "objects," which can contain data and code: data in the form of fields (often known as attributes or properties), and code in the form of procedures (often known as methods).

## 1. Class and Object
- **Class**: A template or blueprint for creating objects.
- **Object**: An instance of a class.

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

s1 = Student("Alice", 20)
```

## 2. The Four Pillars of OOP

### I. Inheritance
Allows a class to inherit attributes and methods from another class.
- **Single Inheritance**: Child inherits from one parent.
- **Multiple Inheritance**: Child inherits from multiple parents.
- **Multilevel Inheritance**: Grandchild inherits from Child, who inherits from Parent.

#### Example:
```python
class Parent:
    pass
class Child(Parent):
    pass
```

### II. Polymorphism
The ability of different objects to respond to the same method call in different ways.
- **Method Overriding**: Child class provides a specific implementation of a method already defined in the parent.

### III. Encapsulation
The bundling of data with the methods that operate on that data. It restricts direct access to some components of an object.
- **Public**: Accessible from everywhere.
- **Protected (`_`)**: Suggests it's for internal use.
- **Private (`__`)**: Restricts access from outside the class.

### IV. Abstraction
Hiding the complex implementation details and showing only the necessary features.
- Achieved using the `abc` (Abstract Base Classes) module.

---

## Why use OOP?
1. **Modularity**: Code is organized into independent objects.
2. **Reusability**: Inheritance allows us to reuse code.
3. **Scalability**: Easier to maintain larger codebases.
4. **Security**: Encapsulation protects sensitive data.
