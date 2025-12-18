# Python Dictionaries - Complete Guide

## 📋 Overview

Dictionaries are **unordered** (Python 3.7+ maintains insertion order), **mutable**, and store data in **key-value pairs**. Keys must be **unique** and **immutable** (strings, numbers, tuples), while values can be any data type.

## 🔧 Dictionary Creation

### Basic Creation
```python
# Empty dictionary
empty_dict = {}
empty_dict = dict()

# Dictionary with initial values
student = {
    "name": "Alice",
    "age": 20,
    "grade": "A",
    "subjects": ["Math", "Physics", "Chemistry"]
}

# Mixed data types
mixed_dict = {
    1: "one",
    "two": 2,
    3.0: "three point zero",
    (4, 5): "tuple key"
}
```

### Using dict() Constructor
```python
# From keyword arguments
person = dict(name="John", age=30, city="New York")
print(person)  # {'name': 'John', 'age': 30, 'city': 'New York'}

# From list of tuples
pairs = [("a", 1), ("b", 2), ("c", 3)]
from_pairs = dict(pairs)
print(from_pairs)  # {'a': 1, 'b': 2, 'c': 3}

# From zip
keys = ["name", "age", "city"]
values = ["Alice", 25, "Boston"]
from_zip = dict(zip(keys, values))
print(from_zip)  # {'name': 'Alice', 'age': 25, 'city': 'Boston'}
```

### Dictionary Comprehension
```python
# Basic comprehension
squares = {x: x**2 for x in range(6)}
print(squares)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# With condition
even_squares = {x: x**2 for x in range(10) if x % 2 == 0}
print(even_squares)  # {0: 0, 2: 4, 4: 16, 6: 36, 8: 64}

# From existing dictionary
original = {"a": 1, "b": 2, "c": 3}
doubled = {k: v*2 for k, v in original.items()}
print(doubled)  # {'a': 2, 'b': 4, 'c': 6}

# Transform keys
upper_keys = {k.upper(): v for k, v in original.items()}
print(upper_keys)  # {'A': 1, 'B': 2, 'C': 3}
```

## 🎯 Accessing Elements

### Basic Access
```python
student = {"name": "Alice", "age": 20, "grade": "A"}

# Direct access (raises KeyError if key doesn't exist)
print(student["name"])  # "Alice"
print(student["age"])   # 20

# KeyError example
# print(student["height"])  # Raises KeyError

# Safe access with get()
print(student.get("name"))     # "Alice"
print(student.get("height"))   # None
print(student.get("height", "Unknown"))  # "Unknown" (default value)
```

### Advanced Access Methods
```python
student = {"name": "Alice", "age": 20, "grade": "A", "subjects": ["Math", "Physics"]}

# Check if key exists
print("name" in student)        # True
print("height" in student)      # False
print("age" not in student)     # False

# Get all keys, values, items
print(student.keys())    # dict_keys(['name', 'age', 'grade', 'subjects'])
print(student.values())  # dict_values(['Alice', 20, 'A', ['Math', 'Physics']])
print(student.items())   # dict_items([('name', 'Alice'), ('age', 20), ...])

# Convert to lists
keys_list = list(student.keys())
values_list = list(student.values())
items_list = list(student.items())
```

## ✏️ Modifying Dictionaries

### Adding and Updating Elements
```python
student = {"name": "Alice", "age": 20}

# Add new key-value pair
student["grade"] = "A"
student["subjects"] = ["Math", "Physics"]
print(student)

# Update existing value
student["age"] = 21
print(student)

# Update multiple values
student.update({"grade": "A+", "city": "Boston"})
print(student)

# Update from another dictionary
additional_info = {"phone": "123-456-7890", "email": "alice@email.com"}
student.update(additional_info)
print(student)

# Update from keyword arguments
student.update(gpa=3.8, year="Junior")
print(student)
```

### Removing Elements
```python
student = {
    "name": "Alice", 
    "age": 21, 
    "grade": "A+", 
    "city": "Boston",
    "phone": "123-456-7890"
}

# pop() - Remove and return value
age = student.pop("age")
print(f"Removed age: {age}")  # Removed age: 21
print(student)

# pop() with default value
height = student.pop("height", "Not specified")
print(f"Height: {height}")  # Height: Not specified

# popitem() - Remove and return last inserted item (Python 3.7+)
last_item = student.popitem()
print(f"Last item: {last_item}")
print(student)

# del statement
del student["city"]
print(student)

# clear() - Remove all elements
student.clear()
print(student)  # {}
```

## 🔍 Dictionary Methods

### Comprehensive Method Overview
```python
# Sample dictionary for demonstrations
data = {"a": 1, "b": 2, "c": 3}

# copy() - Shallow copy
data_copy = data.copy()
print(data_copy)  # {'a': 1, 'b': 2, 'c': 3}

# fromkeys() - Create dictionary with same value for all keys
keys = ["x", "y", "z"]
default_dict = dict.fromkeys(keys, 0)
print(default_dict)  # {'x': 0, 'y': 0, 'z': 0}

# setdefault() - Get value or set default if key doesn't exist
data.setdefault("d", 4)  # Adds "d": 4
print(data)  # {'a': 1, 'b': 2, 'c': 3, 'd': 4}

existing = data.setdefault("a", 100)  # Returns existing value
print(existing)  # 1 (doesn't change existing value)
```

### Advanced Dictionary Operations
```python
# Merging dictionaries (Python 3.9+)
dict1 = {"a": 1, "b": 2}
dict2 = {"c": 3, "d": 4}
dict3 = {"b": 20, "e": 5}  # Note: "b" will be overwritten

# Using | operator (Python 3.9+)
merged = dict1 | dict2 | dict3
print(merged)  # {'a': 1, 'b': 20, 'c': 3, 'd': 4, 'e': 5}

# Using ** unpacking (Python 3.5+)
merged_unpack = {**dict1, **dict2, **dict3}
print(merged_unpack)  # Same result

# Using update() for in-place merging
dict1_copy = dict1.copy()
dict1_copy.update(dict2)
dict1_copy.update(dict3)
print(dict1_copy)  # Same result
```

## 🔄 Iterating Through Dictionaries

### Basic Iteration
```python
student = {"name": "Alice", "age": 21, "grade": "A+"}

# Iterate over keys (default behavior)
for key in student:
    print(f"{key}: {student[key]}")

# Explicitly iterate over keys
for key in student.keys():
    print(f"Key: {key}")

# Iterate over values
for value in student.values():
    print(f"Value: {value}")

# Iterate over key-value pairs
for key, value in student.items():
    print(f"{key}: {value}")
```

### Advanced Iteration Patterns
```python
data = {"apple": 5, "banana": 3, "cherry": 8, "date": 2}

# Enumerate with items
for i, (key, value) in enumerate(data.items()):
    print(f"{i}: {key} = {value}")

# Filter during iteration
for key, value in data.items():
    if value > 3:
        print(f"{key}: {value}")

# Create new dictionary during iteration
doubled = {key: value * 2 for key, value in data.items()}
print(doubled)

# Sort by keys
for key in sorted(data.keys()):
    print(f"{key}: {data[key]}")

# Sort by values
for key, value in sorted(data.items(), key=lambda x: x[1]):
    print(f"{key}: {value}")
```

## 🔧 Advanced Dictionary Operations

### Nested Dictionaries
```python
# Creating nested dictionaries
students = {
    "alice": {
        "age": 20,
        "grades": {"math": 95, "physics": 87, "chemistry": 92},
        "contact": {"email": "alice@email.com", "phone": "123-456-7890"}
    },
    "bob": {
        "age": 22,
        "grades": {"math": 78, "physics": 85, "chemistry": 80},
        "contact": {"email": "bob@email.com", "phone": "098-765-4321"}
    }
}

# Accessing nested values
print(students["alice"]["age"])  # 20
print(students["alice"]["grades"]["math"])  # 95
print(students["bob"]["contact"]["email"])  # bob@email.com

# Modifying nested values
students["alice"]["grades"]["biology"] = 88
students["bob"]["age"] = 23

# Safe access to nested values
def safe_get(dictionary, *keys):
    """Safely get nested dictionary value"""
    for key in keys:
        if isinstance(dictionary, dict) and key in dictionary:
            dictionary = dictionary[key]
        else:
            return None
    return dictionary

# Usage
math_grade = safe_get(students, "alice", "grades", "math")
print(math_grade)  # 95

invalid_access = safe_get(students, "charlie", "grades", "math")
print(invalid_access)  # None
```

### Dictionary as Counter
```python
# Manual counting
text = "hello world"
char_count = {}
for char in text:
    if char in char_count:
        char_count[char] += 1
    else:
        char_count[char] = 1
print(char_count)

# Using get() method
char_count_get = {}
for char in text:
    char_count_get[char] = char_count_get.get(char, 0) + 1
print(char_count_get)

# Using setdefault()
char_count_setdefault = {}
for char in text:
    char_count_setdefault.setdefault(char, 0)
    char_count_setdefault[char] += 1
print(char_count_setdefault)

# Using collections.Counter (recommended)
from collections import Counter
char_counter = Counter(text)
print(char_counter)  # Counter({'l': 3, 'o': 2, 'h': 1, 'e': 1, ' ': 1, 'w': 1, 'r': 1, 'd': 1})
```

### Dictionary as Cache/Memoization
```python
# Simple cache implementation
cache = {}

def fibonacci(n):
    if n in cache:
        return cache[n]
    
    if n <= 1:
        result = n
    else:
        result = fibonacci(n-1) + fibonacci(n-2)
    
    cache[n] = result
    return result

# Test fibonacci with caching
print(fibonacci(10))  # 55
print(cache)  # Shows cached values

# Using functools.lru_cache (recommended)
from functools import lru_cache

@lru_cache(maxsize=128)
def fibonacci_cached(n):
    if n <= 1:
        return n
    return fibonacci_cached(n-1) + fibonacci_cached(n-2)

print(fibonacci_cached(10))  # 55
print(fibonacci_cached.cache_info())  # Shows cache statistics
```

## 📊 Dictionary Sorting and Filtering

### Sorting Dictionaries
```python
data = {"banana": 3, "apple": 5, "cherry": 1, "date": 4}

# Sort by keys
sorted_by_keys = dict(sorted(data.items()))
print(sorted_by_keys)  # {'apple': 5, 'banana': 3, 'cherry': 1, 'date': 4}

# Sort by values
sorted_by_values = dict(sorted(data.items(), key=lambda x: x[1]))
print(sorted_by_values)  # {'cherry': 1, 'banana': 3, 'date': 4, 'apple': 5}

# Sort by values (descending)
sorted_desc = dict(sorted(data.items(), key=lambda x: x[1], reverse=True))
print(sorted_desc)  # {'apple': 5, 'date': 4, 'banana': 3, 'cherry': 1}

# Sort by key length
sorted_by_key_length = dict(sorted(data.items(), key=lambda x: len(x[0])))
print(sorted_by_key_length)  # {'date': 4, 'apple': 5, 'banana': 3, 'cherry': 1}
```

### Filtering Dictionaries
```python
data = {"apple": 5, "banana": 3, "cherry": 8, "date": 2, "elderberry": 6}

# Filter by value
high_values = {k: v for k, v in data.items() if v > 4}
print(high_values)  # {'apple': 5, 'cherry': 8, 'elderberry': 6}

# Filter by key
long_names = {k: v for k, v in data.items() if len(k) > 5}
print(long_names)  # {'banana': 3, 'cherry': 8, 'elderberry': 6}

# Filter using filter() function
even_values = dict(filter(lambda x: x[1] % 2 == 0, data.items()))
print(even_values)  # {'cherry': 8, 'date': 2, 'elderberry': 6}

# Complex filtering
def complex_filter(item):
    key, value = item
    return len(key) <= 6 and value >= 3

filtered_complex = dict(filter(complex_filter, data.items()))
print(filtered_complex)  # {'apple': 5, 'banana': 3, 'cherry': 8}
```

## 🎯 Common Use Cases

### Configuration Management
```python
# Application configuration
config = {
    "database": {
        "host": "localhost",
        "port": 5432,
        "name": "myapp",
        "user": "admin"
    },
    "api": {
        "base_url": "https://api.example.com",
        "timeout": 30,
        "retries": 3
    },
    "logging": {
        "level": "INFO",
        "file": "app.log"
    }
}

# Access configuration
db_host = config["database"]["host"]
api_timeout = config["api"]["timeout"]
```

### Data Transformation
```python
# Transform list of records to dictionary
students_list = [
    {"id": 1, "name": "Alice", "grade": "A"},
    {"id": 2, "name": "Bob", "grade": "B"},
    {"id": 3, "name": "Charlie", "grade": "A"}
]

# Index by ID
students_by_id = {student["id"]: student for student in students_list}
print(students_by_id[2])  # {"id": 2, "name": "Bob", "grade": "B"}

# Group by grade
from collections import defaultdict
students_by_grade = defaultdict(list)
for student in students_list:
    students_by_grade[student["grade"]].append(student["name"])

print(dict(students_by_grade))  # {'A': ['Alice', 'Charlie'], 'B': ['Bob']}
```

### Frequency Analysis
```python
# Word frequency in text
text = "the quick brown fox jumps over the lazy dog the fox is quick"
words = text.split()

word_freq = {}
for word in words:
    word_freq[word] = word_freq.get(word, 0) + 1

# Sort by frequency
sorted_freq = sorted(word_freq.items(), key=lambda x: x[1], reverse=True)
print(sorted_freq)  # [('the', 3), ('fox', 2), ('quick', 2), ...]
```

### Caching and Memoization
```python
# Function result caching
def expensive_function(x, y):
    """Simulate expensive computation"""
    print(f"Computing for {x}, {y}")
    return x * y + x ** 2 + y ** 2

# Manual caching
cache = {}

def cached_expensive_function(x, y):
    key = (x, y)
    if key not in cache:
        cache[key] = expensive_function(x, y)
    return cache[key]

# Test caching
result1 = cached_expensive_function(3, 4)  # Computes
result2 = cached_expensive_function(3, 4)  # Uses cache
```

## 📈 Performance Considerations

### Time Complexity
| Operation | Average Case | Worst Case | Notes |
|-----------|-------------|------------|-------|
| Access/Search | O(1) | O(n) | Hash collision |
| Insert | O(1) | O(n) | Hash collision |
| Delete | O(1) | O(n) | Hash collision |
| Iteration | O(n) | O(n) | All elements |

### Memory Usage and Optimization
```python
import sys

# Memory usage comparison
small_dict = {"a": 1, "b": 2, "c": 3}
large_dict = {str(i): i for i in range(1000)}

print(f"Small dict size: {sys.getsizeof(small_dict)} bytes")
print(f"Large dict size: {sys.getsizeof(large_dict)} bytes")

# __slots__ for memory optimization in classes
class RegularClass:
    def __init__(self, x, y):
        self.x = x
        self.y = y

class OptimizedClass:
    __slots__ = ['x', 'y']
    
    def __init__(self, x, y):
        self.x = x
        self.y = y

# Memory comparison
regular = RegularClass(1, 2)
optimized = OptimizedClass(1, 2)

print(f"Regular class size: {sys.getsizeof(regular.__dict__)} bytes")
print(f"Optimized class size: {sys.getsizeof(optimized)} bytes")
```

## ⚠️ Common Pitfalls

### Mutable Default Arguments
```python
# Wrong way
def add_item(item, target_dict={}):  # Dangerous!
    target_dict[len(target_dict)] = item
    return target_dict

# Right way
def add_item(item, target_dict=None):
    if target_dict is None:
        target_dict = {}
    target_dict[len(target_dict)] = item
    return target_dict
```

### Modifying Dictionary During Iteration
```python
data = {"a": 1, "b": 2, "c": 3, "d": 4}

# Wrong way - RuntimeError
# for key in data:
#     if data[key] % 2 == 0:
#         del data[key]

# Right way - iterate over copy
for key in list(data.keys()):
    if data[key] % 2 == 0:
        del data[key]

# Or use dictionary comprehension
data = {k: v for k, v in data.items() if v % 2 != 0}
```

### Key Type Restrictions
```python
# Valid keys (immutable types)
valid_dict = {
    "string": 1,
    42: 2,
    (1, 2): 3,
    frozenset([1, 2, 3]): 4
}

# Invalid keys (mutable types)
# invalid_dict = {
#     [1, 2, 3]: "list",      # TypeError
#     {"a": 1}: "dict",       # TypeError
#     {1, 2, 3}: "set"        # TypeError
# }
```

## 🧪 Practice Exercises

### Exercise 1: Dictionary Merge with Conflict Resolution
```python
def merge_dicts_with_strategy(dict1, dict2, strategy="overwrite"):
    """
    Merge two dictionaries with different conflict resolution strategies
    
    Strategies:
    - "overwrite": dict2 values overwrite dict1 values
    - "keep": keep dict1 values, ignore dict2 conflicts
    - "sum": sum numeric values, concatenate strings
    """
    result = dict1.copy()
    
    for key, value in dict2.items():
        if key not in result:
            result[key] = value
        elif strategy == "overwrite":
            result[key] = value
        elif strategy == "keep":
            pass  # Keep original value
        elif strategy == "sum":
            if isinstance(result[key], (int, float)) and isinstance(value, (int, float)):
                result[key] += value
            elif isinstance(result[key], str) and isinstance(value, str):
                result[key] += value
            else:
                result[key] = value
    
    return result

# Test
dict1 = {"a": 1, "b": "hello", "c": 3}
dict2 = {"b": "world", "c": 7, "d": 4}

print(merge_dicts_with_strategy(dict1, dict2, "overwrite"))
print(merge_dicts_with_strategy(dict1, dict2, "keep"))
print(merge_dicts_with_strategy(dict1, dict2, "sum"))
```

### Exercise 2: Nested Dictionary Flattening
```python
def flatten_dict(nested_dict, separator="_"):
    """Flatten a nested dictionary"""
    def _flatten(obj, parent_key=""):
        items = []
        if isinstance(obj, dict):
            for key, value in obj.items():
                new_key = f"{parent_key}{separator}{key}" if parent_key else key
                items.extend(_flatten(value, new_key).items())
        else:
            return {parent_key: obj}
        return dict(items)
    
    return _flatten(nested_dict)

# Test
nested = {
    "user": {
        "name": "Alice",
        "contact": {
            "email": "alice@email.com",
            "phone": "123-456-7890"
        }
    },
    "settings": {
        "theme": "dark",
        "notifications": True
    }
}

flattened = flatten_dict(nested)
print(flattened)
# {'user_name': 'Alice', 'user_contact_email': 'alice@email.com', ...}
```

### Exercise 3: Dictionary Inversion
```python
def invert_dict(original_dict, handle_duplicates="list"):
    """
    Invert dictionary (swap keys and values)
    
    handle_duplicates:
    - "list": collect duplicate values in lists
    - "first": keep first occurrence
    - "last": keep last occurrence
    """
    if handle_duplicates == "list":
        inverted = {}
        for key, value in original_dict.items():
            if value not in inverted:
                inverted[value] = []
            inverted[value].append(key)
        return inverted
    
    elif handle_duplicates == "first":
        inverted = {}
        for key, value in original_dict.items():
            if value not in inverted:
                inverted[value] = key
        return inverted
    
    elif handle_duplicates == "last":
        inverted = {}
        for key, value in original_dict.items():
            inverted[value] = key
        return inverted

# Test
original = {"a": 1, "b": 2, "c": 1, "d": 3, "e": 2}
print(invert_dict(original, "list"))   # {1: ['a', 'c'], 2: ['b', 'e'], 3: ['d']}
print(invert_dict(original, "first"))  # {1: 'a', 2: 'b', 3: 'd'}
print(invert_dict(original, "last"))   # {1: 'c', 2: 'e', 3: 'd'}
```

### Exercise 4: Dictionary Path Access
```python
def get_nested_value(dictionary, path, default=None):
    """Get value from nested dictionary using dot notation path"""
    keys = path.split('.')
    current = dictionary
    
    try:
        for key in keys:
            current = current[key]
        return current
    except (KeyError, TypeError):
        return default

def set_nested_value(dictionary, path, value):
    """Set value in nested dictionary using dot notation path"""
    keys = path.split('.')
    current = dictionary
    
    for key in keys[:-1]:
        if key not in current or not isinstance(current[key], dict):
            current[key] = {}
        current = current[key]
    
    current[keys[-1]] = value

# Test
data = {
    "user": {
        "profile": {
            "name": "Alice",
            "age": 25
        }
    }
}

# Get nested value
name = get_nested_value(data, "user.profile.name")
print(name)  # "Alice"

# Set nested value
set_nested_value(data, "user.profile.email", "alice@email.com")
set_nested_value(data, "user.settings.theme", "dark")
print(data)
```

## 📚 Summary

Dictionaries are powerful Python data structures that provide:
- **Key-value mapping**: Efficient data organization
- **Fast lookup**: O(1) average case access time
- **Flexibility**: Support for various data types
- **Mutability**: Can be modified after creation
- **Rich methods**: Comprehensive built-in functionality
- **Memory efficiency**: Optimized hash table implementation

Master dictionaries to handle complex data relationships and build efficient applications!