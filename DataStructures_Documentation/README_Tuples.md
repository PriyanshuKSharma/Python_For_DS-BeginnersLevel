# Python Tuples - Complete Guide

## 📋 Overview

Tuples are **ordered**, **immutable** (unchangeable), and allow **duplicate elements**. They are similar to lists but cannot be modified after creation, making them ideal for storing data that shouldn't change.

## 🔧 Tuple Creation

### Basic Creation
```python
# Empty tuple
empty_tuple = ()
empty_tuple = tuple()

# Tuple with elements
numbers = (1, 2, 3, 4, 5)
mixed_tuple = (1, "hello", 3.14, True)

# Single element tuple (comma is required!)
single_element = (42,)  # Without comma, it's just parentheses
single_element = 42,    # Alternative syntax

# Without parentheses (tuple packing)
coordinates = 10, 20, 30
print(type(coordinates))  # <class 'tuple'>

# Nested tuples
nested_tuple = ((1, 2), (3, 4), (5, 6))
```

### Using tuple() Constructor
```python
# From list
from_list = tuple([1, 2, 3, 4])  # (1, 2, 3, 4)

# From string
from_string = tuple("hello")  # ('h', 'e', 'l', 'l', 'o')

# From range
from_range = tuple(range(5))  # (0, 1, 2, 3, 4)

# From other iterables
from_set = tuple({1, 2, 3})  # (1, 2, 3) - order may vary
```

## 🎯 Accessing Elements

### Indexing
```python
fruits = ("apple", "banana", "cherry", "date")

# Positive indexing (0-based)
print(fruits[0])    # "apple"
print(fruits[2])    # "cherry"

# Negative indexing (-1 is last element)
print(fruits[-1])   # "date"
print(fruits[-2])   # "cherry"

# IndexError for invalid indices
# print(fruits[10])  # Raises IndexError
```

### Slicing
```python
numbers = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)

# Basic slicing [start:end:step]
print(numbers[2:7])     # (2, 3, 4, 5, 6)
print(numbers[:5])      # (0, 1, 2, 3, 4)
print(numbers[5:])      # (5, 6, 7, 8, 9)
print(numbers[::2])     # (0, 2, 4, 6, 8)
print(numbers[::-1])    # (9, 8, 7, 6, 5, 4, 3, 2, 1, 0) (reverse)

# Advanced slicing
print(numbers[1:8:2])   # (1, 3, 5, 7)
print(numbers[-3:])     # (7, 8, 9)
print(numbers[:-2])     # (0, 1, 2, 3, 4, 5, 6, 7)
```

## 🔍 Tuple Methods

### Built-in Methods
```python
fruits = ("apple", "banana", "cherry", "banana", "date")

# count() - Count occurrences of an element
banana_count = fruits.count("banana")
print(banana_count)  # 2

# index() - Find first occurrence of an element
banana_index = fruits.index("banana")
print(banana_index)  # 1

# index() with start parameter
banana_index_after = fruits.index("banana", 2)  # Search from index 2
print(banana_index_after)  # 3

# index() with start and end parameters
try:
    cherry_index = fruits.index("cherry", 0, 2)  # Search in range [0, 2)
except ValueError:
    print("cherry not found in specified range")
```

### Membership Testing
```python
fruits = ("apple", "banana", "cherry")

# in operator
print("apple" in fruits)     # True
print("grape" in fruits)     # False

# not in operator
print("grape" not in fruits) # True
print("apple" not in fruits) # False
```

## 🔄 Tuple Operations

### Mathematical Operations
```python
# Concatenation
tuple1 = (1, 2, 3)
tuple2 = (4, 5, 6)
combined = tuple1 + tuple2
print(combined)  # (1, 2, 3, 4, 5, 6)

# Repetition
repeated = (1, 2) * 3
print(repeated)  # (1, 2, 1, 2, 1, 2)

# Length
print(len((1, 2, 3, 4, 5)))  # 5

# Min, Max, Sum (for numeric tuples)
numbers = (3, 1, 4, 1, 5, 9, 2, 6)
print(min(numbers))  # 1
print(max(numbers))  # 9
print(sum(numbers))  # 31
```

### Comparison Operations
```python
# Tuples are compared lexicographically
print((1, 2, 3) < (1, 2, 4))    # True
print((1, 2, 3) == (1, 2, 3))   # True
print((1, 2, 3) > (1, 2, 2))    # True

# String tuples
print(("apple", "banana") < ("apple", "cherry"))  # True

# Mixed types (be careful!)
# print((1, 2) < ("a", "b"))  # TypeError in Python 3
```

## 📦 Tuple Unpacking

### Basic Unpacking
```python
# Assign tuple elements to variables
point = (10, 20)
x, y = point
print(f"x: {x}, y: {y}")  # x: 10, y: 20

# Multiple assignment
person = ("Alice", 25, "Engineer")
name, age, job = person
print(f"{name} is {age} years old and works as an {job}")
```

### Advanced Unpacking
```python
# Using * for collecting multiple elements
numbers = (1, 2, 3, 4, 5)
first, *middle, last = numbers
print(f"First: {first}")    # First: 1
print(f"Middle: {middle}")  # Middle: [2, 3, 4]
print(f"Last: {last}")      # Last: 5

# Unpacking with underscore for ignored values
data = ("Alice", 25, "Engineer", "New York", "Single")
name, age, _, city, _ = data
print(f"{name}, {age}, lives in {city}")

# Swapping variables using tuple unpacking
a, b = 10, 20
a, b = b, a  # Swap values
print(f"a: {a}, b: {b}")  # a: 20, b: 10
```

### Function Arguments Unpacking
```python
def greet(first_name, last_name, age):
    return f"Hello, {first_name} {last_name}! You are {age} years old."

person_info = ("John", "Doe", 30)
message = greet(*person_info)  # Unpack tuple as arguments
print(message)  # Hello, John Doe! You are 30 years old.
```

## 🔧 Advanced Tuple Operations

### Nested Tuple Operations
```python
# Working with nested tuples
matrix = ((1, 2, 3), (4, 5, 6), (7, 8, 9))

# Access nested elements
print(matrix[1][2])  # 6

# Iterate through nested tuples
for row in matrix:
    for element in row:
        print(element, end=" ")
    print()  # New line after each row

# Flatten nested tuple
flattened = tuple(element for row in matrix for element in row)
print(flattened)  # (1, 2, 3, 4, 5, 6, 7, 8, 9)
```

### Tuple Comprehension (Generator Expression)
```python
# Note: Tuple comprehension creates a generator, not a tuple
numbers = (1, 2, 3, 4, 5)

# Generator expression (lazy evaluation)
squared_gen = (x**2 for x in numbers)
print(type(squared_gen))  # <class 'generator'>

# Convert to tuple
squared_tuple = tuple(x**2 for x in numbers)
print(squared_tuple)  # (1, 4, 9, 16, 25)

# Conditional tuple creation
even_squares = tuple(x**2 for x in numbers if x % 2 == 0)
print(even_squares)  # (4, 16)
```

## 🔄 Converting Between Data Types

### Tuple to Other Types
```python
original_tuple = (1, 2, 3, 4, 5)

# Tuple to list
as_list = list(original_tuple)
print(as_list)  # [1, 2, 3, 4, 5]

# Tuple to set (removes duplicates)
tuple_with_duplicates = (1, 2, 2, 3, 3, 4)
as_set = set(tuple_with_duplicates)
print(as_set)  # {1, 2, 3, 4}

# Tuple to string (for string tuples)
string_tuple = ("H", "e", "l", "l", "o")
as_string = "".join(string_tuple)
print(as_string)  # "Hello"
```

### Other Types to Tuple
```python
# List to tuple
list_data = [1, 2, 3, 4, 5]
as_tuple = tuple(list_data)
print(as_tuple)  # (1, 2, 3, 4, 5)

# String to tuple
string_data = "Hello"
as_tuple = tuple(string_data)
print(as_tuple)  # ('H', 'e', 'l', 'l', 'o')

# Dictionary keys/values to tuple
dict_data = {"a": 1, "b": 2, "c": 3}
keys_tuple = tuple(dict_data.keys())
values_tuple = tuple(dict_data.values())
items_tuple = tuple(dict_data.items())
print(keys_tuple)   # ('a', 'b', 'c')
print(values_tuple) # (1, 2, 3)
print(items_tuple)  # (('a', 1), ('b', 2), ('c', 3))
```

## 📊 Sorting Tuples

### Sorting Tuple of Tuples
```python
# Sort by first element (default)
students = (("Alice", 85), ("Bob", 90), ("Charlie", 78))
sorted_students = tuple(sorted(students))
print(sorted_students)  # (('Alice', 85), ('Bob', 90), ('Charlie', 78))

# Sort by second element (grade)
sorted_by_grade = tuple(sorted(students, key=lambda x: x[1]))
print(sorted_by_grade)  # (('Charlie', 78), ('Alice', 85), ('Bob', 90))

# Sort in reverse order
sorted_reverse = tuple(sorted(students, key=lambda x: x[1], reverse=True))
print(sorted_reverse)  # (('Bob', 90), ('Alice', 85), ('Charlie', 78))
```

### Complex Sorting
```python
# Multiple criteria sorting
data = (("Alice", 25, 85), ("Bob", 23, 90), ("Charlie", 25, 78))

# Sort by age, then by grade
sorted_data = tuple(sorted(data, key=lambda x: (x[1], x[2])))
print(sorted_data)
# (('Bob', 23, 90), ('Charlie', 25, 78), ('Alice', 25, 85))
```

## 🎯 Named Tuples

### Creating Named Tuples
```python
from collections import namedtuple

# Define a named tuple class
Point = namedtuple('Point', ['x', 'y'])
Person = namedtuple('Person', ['name', 'age', 'city'])

# Create instances
p1 = Point(10, 20)
p2 = Point(x=30, y=40)

person1 = Person("Alice", 25, "New York")
person2 = Person(name="Bob", age=30, city="London")

# Access by name or index
print(p1.x, p1.y)        # 10 20
print(p1[0], p1[1])      # 10 20
print(person1.name)      # Alice
print(person1[0])        # Alice
```

### Named Tuple Methods
```python
Point = namedtuple('Point', ['x', 'y'])
p = Point(10, 20)

# _asdict() - Convert to dictionary
point_dict = p._asdict()
print(point_dict)  # {'x': 10, 'y': 20}

# _replace() - Create new instance with some fields changed
p2 = p._replace(x=30)
print(p2)  # Point(x=30, y=20)

# _fields - Get field names
print(Point._fields)  # ('x', 'y')

# _make() - Create from iterable
coordinates = [50, 60]
p3 = Point._make(coordinates)
print(p3)  # Point(x=50, y=60)
```

## 📈 Performance Considerations

### Memory Usage
```python
import sys

# Tuples are more memory efficient than lists
tuple_data = (1, 2, 3, 4, 5)
list_data = [1, 2, 3, 4, 5]

print(f"Tuple size: {sys.getsizeof(tuple_data)} bytes")
print(f"List size: {sys.getsizeof(list_data)} bytes")
# Tuple is typically smaller
```

### Time Complexity
| Operation | Time Complexity | Notes |
|-----------|----------------|-------|
| Access by index | O(1) | Direct access |
| Search | O(n) | Linear search |
| Count | O(n) | Must check all elements |
| Concatenation | O(n+m) | Creates new tuple |
| Slicing | O(k) | k is slice length |

### Performance Benefits
```python
import timeit

# Tuple creation is faster
tuple_time = timeit.timeit('(1, 2, 3, 4, 5)', number=1000000)
list_time = timeit.timeit('[1, 2, 3, 4, 5]', number=1000000)

print(f"Tuple creation time: {tuple_time:.6f}")
print(f"List creation time: {list_time:.6f}")

# Tuple iteration is slightly faster
tuple_iter = timeit.timeit('for x in (1, 2, 3, 4, 5): pass', number=1000000)
list_iter = timeit.timeit('for x in [1, 2, 3, 4, 5]: pass', number=1000000)

print(f"Tuple iteration time: {tuple_iter:.6f}")
print(f"List iteration time: {list_iter:.6f}")
```

## 🎯 Common Use Cases

### Coordinates and Points
```python
# 2D coordinates
point_2d = (10, 20)
x, y = point_2d

# 3D coordinates
point_3d = (10, 20, 30)
x, y, z = point_3d

# RGB colors
red = (255, 0, 0)
green = (0, 255, 0)
blue = (0, 0, 255)
```

### Database Records
```python
# Representing database rows
employee_record = ("John Doe", 30, "Engineer", 75000)
name, age, position, salary = employee_record

# Multiple records
employees = (
    ("Alice Smith", 28, "Designer", 65000),
    ("Bob Johnson", 35, "Manager", 85000),
    ("Carol Brown", 32, "Developer", 70000)
)

# Process records
for name, age, position, salary in employees:
    print(f"{name}: {position}, Age {age}, Salary ${salary}")
```

### Function Return Values
```python
def get_name_age():
    """Return multiple values as a tuple"""
    return "Alice", 25

def calculate_stats(numbers):
    """Return statistics as a tuple"""
    return min(numbers), max(numbers), sum(numbers) / len(numbers)

# Usage
name, age = get_name_age()
minimum, maximum, average = calculate_stats([1, 2, 3, 4, 5])
```

### Dictionary Keys
```python
# Tuples can be dictionary keys (because they're immutable)
coordinates_data = {
    (0, 0): "Origin",
    (1, 0): "Right",
    (0, 1): "Up",
    (1, 1): "Diagonal"
}

print(coordinates_data[(1, 1)])  # "Diagonal"

# Useful for caching function results
cache = {}

def expensive_function(x, y, z):
    key = (x, y, z)
    if key in cache:
        return cache[key]
    
    # Simulate expensive computation
    result = x * y * z
    cache[key] = result
    return result
```

## ⚠️ Common Pitfalls

### Single Element Tuple
```python
# Wrong way (creates int, not tuple)
not_a_tuple = (42)
print(type(not_a_tuple))  # <class 'int'>

# Right way (comma is required)
single_tuple = (42,)
print(type(single_tuple))  # <class 'tuple'>

# Alternative syntax
also_single = 42,
print(type(also_single))  # <class 'tuple'>
```

### Modifying Nested Mutable Objects
```python
# Tuple is immutable, but contained objects might not be
tuple_with_list = ([1, 2, 3], "hello")

# This works (modifying the list inside the tuple)
tuple_with_list[0].append(4)
print(tuple_with_list)  # ([1, 2, 3, 4], 'hello')

# This doesn't work (trying to replace tuple element)
# tuple_with_list[0] = [5, 6, 7]  # TypeError
```

### Tuple vs Generator Expression
```python
# Generator expression (not a tuple!)
gen_expr = (x**2 for x in range(5))
print(type(gen_expr))  # <class 'generator'>

# Actual tuple
tuple_comp = tuple(x**2 for x in range(5))
print(type(tuple_comp))  # <class 'tuple'>
```

## 🧪 Practice Exercises

### Exercise 1: Tuple Statistics
```python
def tuple_statistics(data_tuple):
    """Calculate statistics for a numeric tuple"""
    if not data_tuple:
        return None
    
    return {
        'count': len(data_tuple),
        'sum': sum(data_tuple),
        'min': min(data_tuple),
        'max': max(data_tuple),
        'mean': sum(data_tuple) / len(data_tuple)
    }

# Test
numbers = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
stats = tuple_statistics(numbers)
print(stats)
```

### Exercise 2: Tuple Rotation
```python
def rotate_tuple(tup, positions):
    """Rotate tuple elements by given positions"""
    if not tup:
        return tup
    
    n = len(tup)
    positions = positions % n  # Handle rotations larger than tuple length
    
    return tup[positions:] + tup[:positions]

# Test
original = (1, 2, 3, 4, 5)
rotated = rotate_tuple(original, 2)
print(f"Original: {original}")
print(f"Rotated by 2: {rotated}")  # (3, 4, 5, 1, 2)
```

### Exercise 3: Tuple Frequency Counter
```python
def count_frequencies(tup):
    """Count frequency of each element in tuple"""
    frequency = {}
    for element in tup:
        frequency[element] = frequency.get(element, 0) + 1
    return frequency

# Test
data = (1, 2, 2, 3, 3, 3, 4, 4, 4, 4)
frequencies = count_frequencies(data)
print(frequencies)  # {1: 1, 2: 2, 3: 3, 4: 4}
```

### Exercise 4: Nested Tuple Flattening
```python
def flatten_tuple(nested_tuple):
    """Flatten a nested tuple structure"""
    result = []
    for item in nested_tuple:
        if isinstance(item, tuple):
            result.extend(flatten_tuple(item))
        else:
            result.append(item)
    return tuple(result)

# Test
nested = (1, (2, 3), (4, (5, 6)), 7)
flattened = flatten_tuple(nested)
print(f"Nested: {nested}")
print(f"Flattened: {flattened}")  # (1, 2, 3, 4, 5, 6, 7)
```

## 📚 Summary

Tuples are essential Python data structures that provide:
- **Immutability**: Cannot be changed after creation
- **Order**: Maintain insertion order
- **Hashability**: Can be used as dictionary keys
- **Memory efficiency**: More compact than lists
- **Multiple assignment**: Enable elegant unpacking
- **Data integrity**: Protect data from accidental modification

Use tuples when you need ordered, unchangeable collections of data!