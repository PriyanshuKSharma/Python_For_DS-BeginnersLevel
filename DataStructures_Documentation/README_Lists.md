# Python Lists - Complete Guide

## 📋 Overview

Lists are one of the most versatile and commonly used data structures in Python. They are **ordered**, **mutable** (changeable), and allow **duplicate elements**. Lists can store elements of different data types.

## 🔧 List Creation

### Basic Creation
```python
# Empty list
empty_list = []
empty_list = list()

# List with elements
numbers = [1, 2, 3, 4, 5]
mixed_list = [1, "hello", 3.14, True]
nested_list = [[1, 2], [3, 4], [5, 6]]

# Using list() constructor
from_string = list("hello")  # ['h', 'e', 'l', 'l', 'o']
from_range = list(range(5))  # [0, 1, 2, 3, 4]
```

### List Comprehension
```python
# Basic comprehension
squares = [x**2 for x in range(10)]  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# With condition
even_squares = [x**2 for x in range(10) if x % 2 == 0]  # [0, 4, 16, 36, 64]

# Nested comprehension
matrix = [[i*j for j in range(3)] for i in range(3)]
# [[0, 0, 0], [0, 1, 2], [0, 2, 4]]
```

## 🎯 Accessing Elements

### Indexing
```python
fruits = ["apple", "banana", "cherry", "date"]

# Positive indexing (0-based)
print(fruits[0])    # "apple"
print(fruits[2])    # "cherry"

# Negative indexing (-1 is last element)
print(fruits[-1])   # "date"
print(fruits[-2])   # "cherry"
```

### Slicing
```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# Basic slicing [start:end:step]
print(numbers[2:7])     # [2, 3, 4, 5, 6]
print(numbers[:5])      # [0, 1, 2, 3, 4]
print(numbers[5:])      # [5, 6, 7, 8, 9]
print(numbers[::2])     # [0, 2, 4, 6, 8]
print(numbers[::-1])    # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] (reverse)

# Advanced slicing
print(numbers[1:8:2])   # [1, 3, 5, 7]
print(numbers[-3:])     # [7, 8, 9]
print(numbers[:-2])     # [0, 1, 2, 3, 4, 5, 6, 7]
```

## ✏️ Modifying Lists

### Adding Elements
```python
fruits = ["apple", "banana"]

# append() - Add single element at end
fruits.append("cherry")
print(fruits)  # ["apple", "banana", "cherry"]

# insert() - Add element at specific position
fruits.insert(1, "orange")
print(fruits)  # ["apple", "orange", "banana", "cherry"]

# extend() - Add multiple elements
fruits.extend(["grape", "mango"])
print(fruits)  # ["apple", "orange", "banana", "cherry", "grape", "mango"]

# Using + operator
more_fruits = fruits + ["kiwi", "peach"]
print(more_fruits)

# Using += operator
fruits += ["pineapple"]
print(fruits)
```

### Removing Elements
```python
fruits = ["apple", "banana", "cherry", "banana", "date"]

# remove() - Remove first occurrence
fruits.remove("banana")
print(fruits)  # ["apple", "cherry", "banana", "date"]

# pop() - Remove and return element by index
removed = fruits.pop(1)  # Removes "cherry"
print(removed)  # "cherry"
print(fruits)   # ["apple", "banana", "date"]

# pop() without index removes last element
last = fruits.pop()
print(last)     # "date"
print(fruits)   # ["apple", "banana"]

# del statement
del fruits[0]   # Remove by index
print(fruits)   # ["banana"]

# clear() - Remove all elements
fruits.clear()
print(fruits)   # []
```

### Modifying Elements
```python
numbers = [1, 2, 3, 4, 5]

# Modify single element
numbers[0] = 10
print(numbers)  # [10, 2, 3, 4, 5]

# Modify multiple elements using slicing
numbers[1:3] = [20, 30]
print(numbers)  # [10, 20, 30, 4, 5]

# Replace with different number of elements
numbers[1:3] = [100, 200, 300]
print(numbers)  # [10, 100, 200, 300, 4, 5]
```

## 🔍 Searching and Finding

### Basic Search Methods
```python
fruits = ["apple", "banana", "cherry", "banana", "date"]

# index() - Find first occurrence
idx = fruits.index("banana")
print(idx)  # 1

# index() with start and end parameters
idx = fruits.index("banana", 2)  # Search from index 2
print(idx)  # 3

# count() - Count occurrences
count = fruits.count("banana")
print(count)  # 2

# in operator - Check if element exists
print("apple" in fruits)     # True
print("grape" in fruits)     # False
print("apple" not in fruits) # False
```

### Advanced Search
```python
numbers = [1, 5, 3, 9, 2, 8, 4]

# Find all indices of an element
def find_all_indices(lst, element):
    return [i for i, x in enumerate(lst) if x == element]

# Find elements meeting condition
even_numbers = [x for x in numbers if x % 2 == 0]
print(even_numbers)  # [2, 8, 4]

# Find indices meeting condition
even_indices = [i for i, x in enumerate(numbers) if x % 2 == 0]
print(even_indices)  # [4, 5, 6]
```

## 📊 Sorting and Organizing

### Sorting Methods
```python
numbers = [3, 1, 4, 1, 5, 9, 2, 6]

# sort() - Sort in place (modifies original list)
numbers.sort()
print(numbers)  # [1, 1, 2, 3, 4, 5, 6, 9]

# sort() with reverse parameter
numbers.sort(reverse=True)
print(numbers)  # [9, 6, 5, 4, 3, 2, 1, 1]

# sorted() - Return new sorted list (original unchanged)
original = [3, 1, 4, 1, 5, 9, 2, 6]
sorted_list = sorted(original)
print(original)     # [3, 1, 4, 1, 5, 9, 2, 6] (unchanged)
print(sorted_list)  # [1, 1, 2, 3, 4, 5, 6, 9]

# Custom sorting with key function
words = ["banana", "pie", "Washington", "book"]
words.sort(key=len)  # Sort by length
print(words)  # ['pie', 'book', 'banana', 'Washington']

# Sort by custom criteria
students = [("Alice", 85), ("Bob", 90), ("Charlie", 78)]
students.sort(key=lambda x: x[1])  # Sort by grade
print(students)  # [('Charlie', 78), ('Alice', 85), ('Bob', 90)]
```

### Reversing
```python
numbers = [1, 2, 3, 4, 5]

# reverse() - Reverse in place
numbers.reverse()
print(numbers)  # [5, 4, 3, 2, 1]

# Using slicing to reverse (creates new list)
original = [1, 2, 3, 4, 5]
reversed_list = original[::-1]
print(reversed_list)  # [5, 4, 3, 2, 1]

# Using reversed() function
original = [1, 2, 3, 4, 5]
reversed_list = list(reversed(original))
print(reversed_list)  # [5, 4, 3, 2, 1]
```

## 🔄 List Operations

### Mathematical Operations
```python
# Concatenation
list1 = [1, 2, 3]
list2 = [4, 5, 6]
combined = list1 + list2
print(combined)  # [1, 2, 3, 4, 5, 6]

# Repetition
repeated = [1, 2] * 3
print(repeated)  # [1, 2, 1, 2, 1, 2]

# Length
print(len([1, 2, 3, 4, 5]))  # 5

# Min and Max
numbers = [3, 1, 4, 1, 5, 9, 2, 6]
print(min(numbers))  # 1
print(max(numbers))  # 9
print(sum(numbers))  # 31
```

### Copying Lists
```python
original = [1, 2, 3, [4, 5]]

# Shallow copy methods
copy1 = original.copy()
copy2 = original[:]
copy3 = list(original)

# Deep copy (for nested structures)
import copy
deep_copy = copy.deepcopy(original)

# Demonstrate difference
original[3].append(6)
print(copy1)     # [1, 2, 3, [4, 5, 6]] - shallow copy affected
print(deep_copy) # [1, 2, 3, [4, 5]] - deep copy unaffected
```

## 🔧 Advanced List Methods

### Enumeration and Zipping
```python
fruits = ["apple", "banana", "cherry"]

# enumerate() - Get index and value
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")
# 0: apple
# 1: banana
# 2: cherry

# zip() - Combine multiple lists
prices = [1.20, 0.50, 2.00]
for fruit, price in zip(fruits, prices):
    print(f"{fruit}: ${price}")
# apple: $1.2
# banana: $0.5
# cherry: $2.0
```

### Filtering and Mapping
```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# filter() - Filter elements
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers)  # [2, 4, 6, 8, 10]

# map() - Transform elements
squared = list(map(lambda x: x**2, numbers))
print(squared)  # [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# any() and all()
print(any([True, False, False]))   # True
print(all([True, True, False]))    # False
```

## 📈 Performance Considerations

### Time Complexity
| Operation | Time Complexity | Notes |
|-----------|----------------|-------|
| Access by index | O(1) | Direct access |
| Search | O(n) | Linear search |
| Append | O(1) amortized | May need to resize |
| Insert at beginning | O(n) | Shifts all elements |
| Insert at end | O(1) amortized | Usually fast |
| Delete by index | O(n) | May shift elements |
| Sort | O(n log n) | Timsort algorithm |

### Memory Usage
```python
import sys

# Check memory usage
numbers = [1, 2, 3, 4, 5]
print(sys.getsizeof(numbers))  # Memory in bytes

# Lists grow dynamically
empty_list = []
for i in range(10):
    empty_list.append(i)
    print(f"Length: {len(empty_list)}, Size: {sys.getsizeof(empty_list)} bytes")
```

## 🎯 Common Use Cases

### Stack Implementation
```python
stack = []

# Push
stack.append(1)
stack.append(2)
stack.append(3)

# Pop
top = stack.pop()  # Returns 3
print(stack)       # [1, 2]
```

### Queue Implementation (Not Recommended)
```python
# Using list as queue (inefficient for large lists)
queue = []

# Enqueue
queue.append(1)
queue.append(2)

# Dequeue (inefficient - O(n))
first = queue.pop(0)  # Returns 1

# Better to use collections.deque for queues
from collections import deque
efficient_queue = deque([1, 2, 3])
efficient_queue.appendleft(0)  # Add to front
efficient_queue.append(4)     # Add to back
```

### Matrix Operations
```python
# 2D matrix using nested lists
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Access element
print(matrix[1][2])  # 6

# Transpose matrix
transposed = [[row[i] for row in matrix] for i in range(len(matrix[0]))]
print(transposed)  # [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
```

## ⚠️ Common Pitfalls

### Mutable Default Arguments
```python
# Wrong way
def add_item(item, target_list=[]):  # Dangerous!
    target_list.append(item)
    return target_list

# Right way
def add_item(item, target_list=None):
    if target_list is None:
        target_list = []
    target_list.append(item)
    return target_list
```

### Modifying List While Iterating
```python
numbers = [1, 2, 3, 4, 5]

# Wrong way
for num in numbers:
    if num % 2 == 0:
        numbers.remove(num)  # Can skip elements!

# Right way
numbers = [num for num in numbers if num % 2 != 0]
# Or iterate backwards
for i in range(len(numbers) - 1, -1, -1):
    if numbers[i] % 2 == 0:
        numbers.pop(i)
```

## 🧪 Practice Exercises

### Exercise 1: List Manipulation
```python
# Create a function that removes duplicates while preserving order
def remove_duplicates(lst):
    seen = set()
    result = []
    for item in lst:
        if item not in seen:
            seen.add(item)
            result.append(item)
    return result

# Test
numbers = [1, 2, 2, 3, 4, 4, 5]
print(remove_duplicates(numbers))  # [1, 2, 3, 4, 5]
```

### Exercise 2: Nested List Flattening
```python
# Flatten a nested list
def flatten_list(nested_list):
    result = []
    for item in nested_list:
        if isinstance(item, list):
            result.extend(flatten_list(item))
        else:
            result.append(item)
    return result

# Test
nested = [1, [2, 3], [4, [5, 6]], 7]
print(flatten_list(nested))  # [1, 2, 3, 4, 5, 6, 7]
```

### Exercise 3: List Statistics
```python
# Calculate various statistics
def list_stats(numbers):
    if not numbers:
        return None
    
    return {
        'count': len(numbers),
        'sum': sum(numbers),
        'mean': sum(numbers) / len(numbers),
        'min': min(numbers),
        'max': max(numbers),
        'range': max(numbers) - min(numbers)
    }

# Test
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(list_stats(data))
```

## 📚 Summary

Lists are fundamental Python data structures that provide:
- **Flexibility**: Store any type of data
- **Mutability**: Can be modified after creation
- **Order**: Maintain insertion order
- **Indexing**: Fast access by position
- **Rich methods**: Extensive built-in functionality

Master lists to build a strong foundation for Python programming and data science!