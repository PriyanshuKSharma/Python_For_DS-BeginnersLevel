"""
Python OOP Mastery Guide
-----------------------
This script covers the four pillars of Object-Oriented Programming:
1. Inheritance
2. Polymorphism
3. Encapsulation
4. Abstraction
"""

from abc import ABC, abstractmethod

# ==========================================
# 1. BASIC CLASS & OBJECT
# ==========================================
class Smartphone:
    # Constructor: Initializes the object
    def __init__(self, brand, model, price):
        self.brand = brand      # Public attribute
        self.model = model      # Public attribute
        self.price = price      # Public attribute

    def description(self):
        return f"{self.brand} {self.model} costs ${self.price}"

# ==========================================
# 2. INHERITANCE
# ==========================================
# Child class inheriting from Smartphone
class GamingPhone(Smartphone):
    def __init__(self, brand, model, price, gpu):
        # super() calls the constructor of the parent class
        super().__init__(brand, model, price)
        self.gpu = gpu

    def game_mode(self):
        return f"Engaging High-Performance mode with {self.gpu}!"

# ==========================================
# 3. ENCAPSULATION
# ==========================================
class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self.__balance = balance  # Private attribute (Double underscore)

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            print(f"Deposited: {amount}")

    def get_balance(self):
        # Getter method to access private data
        return self.__balance

# ==========================================
# 4. POLYMORPHISM
# ==========================================
class Animal:
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

# ==========================================
# 5. ABSTRACTION
# ==========================================
class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Square(Shape):
    def __init__(self, side):
        self.side = side
    
    def area(self):
        return self.side * self.side

# ==========================================
# DEMONSTRATION
# ==========================================
if __name__ == "__main__":
    print("--- 1. Inheritance ---")
    my_phone = GamingPhone("Asus", "ROG Phone 6", 999, "Adreno 730")
    print(my_phone.description())
    print(my_phone.game_mode())

    print("\n--- 2. Encapsulation ---")
    acc = BankAccount("Priyanshu", 1000)
    acc.deposit(500)
    print(f"Current Balance: {acc.get_balance()}")
    # print(acc.__balance)  # This would throw an Attribute Error

    print("\n--- 3. Polymorphism ---")
    animals = [Dog(), Cat()]
    for animal in animals:
        print(animal.speak())

    print("\n--- 4. Abstraction ---")
    sq = Square(5)
    print(f"Square Area: {sq.area()}")
