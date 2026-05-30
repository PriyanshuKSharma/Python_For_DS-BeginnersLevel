# Python Sets - Complete Guide

## 📋 Overview

Sets are **unordered**, **mutable** collections of **unique** elements. They are ideal for membership testing, removing duplicates, and mathematical set operations like union, intersection, and difference.

## 🔧 Set Creation

### Basic Creation
```python
# Empty set (note: {} creates an empty dict, not set)
empty_set = set()
print(type(empty_set))  # <class 'set'>

# Set with initial values
numbers = {1, 2, 3, 4, 5}
mixed_set = {1, "hello", 3.14, True}

# Note: True and 1 are considered the same in sets
duplicate_values = {1, 2, 2, 3, 3, 4}
print(duplicate_values)  # {1, 2, 3, 4} - duplicates removed

# Set from string (each character becomes an element)
char_set = set("hello")
print(char_set)  # {'h', 'e', 'l', 'o'} - 'l' appears only once
```

### Using set() Constructor
```python
# From list
from_list = set([1, 2, 3, 2, 1])
print(from_list)  # {1, 2, 3}

# From tuple
from_tuple = set((1, 2, 3, 2, 1))
print(from_tuple)  # {1, 2, 3}

# From string
from_string = set("programming")
print(from_string)  # {'p', 'r', 'o', 'g', 'a', 'm', 'i', 'n'}

# From range
from_range = set(range(5))
print(from_range)  # {0, 1, 2, 3, 4}
```

### Set Comprehension
```python
# Basic comprehension
squares = {x**2 for x in range(6)}
print(squares)  # {0, 1, 4, 9, 16, 25}

# With condition
even_squares = {x**2 for x in range(10) if x % 2 == 0}
print(even_squares)  # {0, 4, 16, 36, 64}

# From existing iterable
words = ["apple", "banana", "apple", "cherry", "banana"]
unique_lengths = {len(word) for word in words}
print(unique_lengths)  # {5, 6} - lengths of unique words

# Complex comprehension
text = "hello world"
vowels_in_text = {char.lower() for char in text if char.lower() in 'aeiou'}
print(vowels_in_text)  # {'e', 'o'}
```

## ✏️ Adding and Removing Elements

### Adding Elements
```python
fruits = {"apple", "banana"}

# add() - Add single element
fruits.add("cherry")
print(fruits)  # {'apple', 'banana', 'cherry'}

# Adding existing element (no effect)
fruits.add("apple")
print(fruits)  # {'apple', 'banana', 'cherry'} - no change

# update() - Add multiple elements
fruits.update(["orange", "grape"])
print(fruits)  # {'apple', 'banana', 'cherry', 'orange', 'grape'}

# update() with different iterables
fruits.update("kiwi")  # Adds each character as separate element
print(fruits)  # Includes 'k', 'i', 'w', 'i' (but 'i' only once)

fruits.update({("mango", "peach")})  # Adds tuple as single element
print(fruits)

# Using |= operator (union update)
more_fruits = {"pineapple", "strawberry"}
fruits |= more_fruits
print(fruits)
```

### Removing Elements
```python
fruits = {"apple", "banana", "cherry", "orange", "grape"}

# remove() - Remove element (raises KeyError if not found)
fruits.remove("banana")
print(fruits)  # {'apple', 'cherry', 'orange', 'grape'}

# KeyError example
# fruits.remove("mango")  # Raises KeyError

# discard() - Remove element (no error if not found)
fruits.discard("cherry")
print(fruits)  # {'apple', 'orange', 'grape'}

fruits.discard("mango")  # No error, set unchanged
print(fruits)  # {'apple', 'orange', 'grape'}

# pop() - Remove and return arbitrary element
removed = fruits.pop()
print(f"Removed: {removed}")
print(fruits)

# clear() - Remove all elements
fruits.clear()
print(fruits)  # set()
```

## 🔍 Set Operations and Methods

### Membership Testing
```python
numbers = {1, 2, 3, 4, 5}

# in operator (very fast - O(1) average case)
print(3 in numbers)      # True
print(6 in numbers)      # False
print(3 not in numbers)  # False

# Performance comparison with list
import time

large_list = list(range(100000))
large_set = set(range(100000))
target = 99999

# List search (O(n))
start = time.time()
result = target in large_list
list_time = time.time() - start

# Set search (O(1) average)
start = time.time()
result = target in large_set
set_time = time.time() - start

print(f"List search time: {list_time:.6f}")
print(f"Set search time: {set_time:.6f}")
```

### Set Mathematical Operations

#### Union Operations
```python
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}
set3 = {5, 6, 7, 8}

# union() method
union_result = set1.union(set2)
print(union_result)  # {1, 2, 3, 4, 5, 6}

# | operator
union_operator = set1 | set2
print(union_operator)  # {1, 2, 3, 4, 5, 6}

# Multiple set union
multi_union = set1.union(set2, set3)
print(multi_union)  # {1, 2, 3, 4, 5, 6, 7, 8}

multi_union_op = set1 | set2 | set3
print(multi_union_op)  # {1, 2, 3, 4, 5, 6, 7, 8}

# In-place union
set1_copy = set1.copy()
set1_copy.update(set2)  # or set1_copy |= set2
print(set1_copy)  # {1, 2, 3, 4, 5, 6}
```

#### Intersection Operations
```python
set1 = {1, 2, 3, 4, 5}
set2 = {3, 4, 5, 6, 7}
set3 = {4, 5, 6, 7, 8}

# intersection() method
intersection_result = set1.intersection(set2)
print(intersection_result)  # {3, 4, 5}

# & operator
intersection_operator = set1 & set2
print(intersection_operator)  # {3, 4, 5}

# Multiple set intersection
multi_intersection = set1.intersection(set2, set3)
print(multi_intersection)  # {4, 5}

multi_intersection_op = set1 & set2 & set3
print(multi_intersection_op)  # {4, 5}

# In-place intersection
set1_copy = set1.copy()
set1_copy.intersection_update(set2)  # or set1_copy &= set2
print(set1_copy)  # {3, 4, 5}
```

#### Difference Operations
```python
set1 = {1, 2, 3, 4, 5}
set2 = {3, 4, 5, 6, 7}

# difference() method (elements in set1 but not in set2)
difference_result = set1.difference(set2)
print(difference_result)  # {1, 2}

# - operator
difference_operator = set1 - set2
print(difference_operator)  # {1, 2}

# Reverse difference
reverse_diff = set2 - set1
print(reverse_diff)  # {6, 7}

# Multiple set difference
set3 = {1, 6}
multi_diff = set1.difference(set2, set3)
print(multi_diff)  # {2}

# In-place difference
set1_copy = set1.copy()
set1_copy.difference_update(set2)  # or set1_copy -= set2
print(set1_copy)  # {1, 2}
```

#### Symmetric Difference Operations
```python
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

# symmetric_difference() method (elements in either set, but not both)
sym_diff_result = set1.symmetric_difference(set2)
print(sym_diff_result)  # {1, 2, 5, 6}

# ^ operator
sym_diff_operator = set1 ^ set2
print(sym_diff_operator)  # {1, 2, 5, 6}

# In-place symmetric difference
set1_copy = set1.copy()
set1_copy.symmetric_difference_update(set2)  # or set1_copy ^= set2
print(set1_copy)  # {1, 2, 5, 6}

# Symmetric difference with multiple sets (XOR chain)
set3 = {1, 5}
multi_sym_diff = set1 ^ set2 ^ set3
print(multi_sym_diff)  # {2, 6}
```

### Set Relationship Testing
```python
set1 = {1, 2, 3}
set2 = {1, 2, 3, 4, 5}
set3 = {4, 5, 6}
set4 = {1, 2}

# issubset() - Check if set is subset of another
print(set1.issubset(set2))  # True
print(set1 <= set2)         # True (alternative syntax)
print(set1 < set2)          # True (proper subset)

# issuperset() - Check if set is superset of another
print(set2.issuperset(set1))  # True
print(set2 >= set1)           # True (alternative syntax)
print(set2 > set1)            # True (proper superset)

# isdisjoint() - Check if sets have no common elements
print(set1.isdisjoint(set3))  # True
print(set1.isdisjoint(set2))  # False

# Equal sets
set5 = {1, 2, 3}
print(set1 == set5)  # True
print(set1 != set2)  # True
```

## 🔄 Iterating Through Sets

### Basic Iteration
```python
fruits = {"apple", "banana", "cherry", "date"}

# Simple iteration (order not guaranteed in older Python versions)
for fruit in fruits:
    print(fruit)

# Enumerate with sets
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")

# Convert to sorted list for ordered iteration
for fruit in sorted(fruits):
    print(fruit)
```

### Advanced Iteration Patterns
```python
numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

# Filter during iteration
even_numbers = {num for num in numbers if num % 2 == 0}
print(even_numbers)  # {2, 4, 6, 8, 10}

# Transform elements
squared = {num**2 for num in numbers}
print(squared)  # {1, 4, 9, 16, 25, 36, 49, 64, 81, 100}

# Conditional transformation
processed = {num*2 if num % 2 == 0 else num for num in numbers}
print(processed)

# Multiple set iteration
set1 = {1, 2, 3}
set2 = {4, 5, 6}

# Cartesian product (using nested comprehension)
cartesian = {(a, b) for a in set1 for b in set2}
print(cartesian)  # {(1, 4), (1, 5), (1, 6), (2, 4), ...}
```

## 🔧 Advanced Set Operations

### Copying Sets
```python
original = {1, 2, 3, 4, 5}

# Shallow copy methods
copy1 = original.copy()
copy2 = set(original)
copy3 = {*original}  # Unpacking

# All copies are independent
copy1.add(6)
print(original)  # {1, 2, 3, 4, 5} - unchanged
print(copy1)     # {1, 2, 3, 4, 5, 6}

# Deep copy (for sets containing mutable objects)
import copy
nested_set = {frozenset([1, 2]), frozenset([3, 4])}
deep_copy = copy.deepcopy(nested_set)
```

### Set with Custom Objects
```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def __hash__(self):
        return hash((self.name, self.age))
    
    def __eq__(self, other):
        if isinstance(other, Person):
            return self.name == other.name and self.age == other.age
        return False
    
    def __repr__(self):
        return f"Person('{self.name}', {self.age})"

# Create set of custom objects
people = {
    Person("Alice", 25),
    Person("Bob", 30),
    Person("Alice", 25),  # Duplicate - will be ignored
    Person("Charlie", 35)
}

print(people)  # {Person('Alice', 25), Person('Bob', 30), Person('Charlie', 35)}
print(len(people))  # 3 (duplicate Alice removed)
```

### Frozen Sets
```python
# Immutable sets - can be used as dictionary keys or set elements
regular_set = {1, 2, 3}
frozen_set = frozenset([1, 2, 3])

print(type(regular_set))  # <class 'set'>
print(type(frozen_set))   # <class 'frozenset'>

# Frozen sets can be dictionary keys
dict_with_frozenset_keys = {
    frozenset([1, 2]): "first",
    frozenset([3, 4]): "second"
}

# Frozen sets can be elements of regular sets
set_of_frozensets = {
    frozenset([1, 2]),
    frozenset([3, 4]),
    frozenset([1, 2])  # Duplicate - ignored
}
print(set_of_frozensets)  # {frozenset({1, 2}), frozenset({3, 4})}

# Frozen sets support all non-mutating operations
fs1 = frozenset([1, 2, 3])
fs2 = frozenset([2, 3, 4])

print(fs1 | fs2)  # frozenset({1, 2, 3, 4})
print(fs1 & fs2)  # frozenset({2, 3})
print(fs1 - fs2)  # frozenset({1})
print(fs1 ^ fs2)  # frozenset({1, 4})

# Frozen sets cannot be modified
# fs1.add(4)  # AttributeError: 'frozenset' object has no attribute 'add'
```

## 📊 Set Applications and Use Cases

### Removing Duplicates
```python
# Remove duplicates from list while preserving some order
def remove_duplicates_ordered(lst):
    seen = set()
    result = []
    for item in lst:
        if item not in seen:
            seen.add(item)
            result.append(item)
    return result

# Test
numbers = [1, 2, 2, 3, 1, 4, 3, 5]
unique_ordered = remove_duplicates_ordered(numbers)
print(unique_ordered)  # [1, 2, 3, 4, 5]

# Simple duplicate removal (order not preserved)
unique_unordered = list(set(numbers))
print(unique_unordered)  # Order may vary
```

### Finding Common Elements
```python
# Find common elements across multiple lists
def find_common_elements(*lists):
    if not lists:
        return set()
    
    common = set(lists[0])
    for lst in lists[1:]:
        common &= set(lst)
    return common

# Test
list1 = [1, 2, 3, 4, 5]
list2 = [3, 4, 5, 6, 7]
list3 = [4, 5, 6, 7, 8]

common = find_common_elements(list1, list2, list3)
print(common)  # {4, 5}
```

### Data Validation
```python
# Validate data against allowed values
ALLOWED_COLORS = {"red", "green", "blue", "yellow", "orange", "purple"}
ALLOWED_SIZES = {"small", "medium", "large", "xl", "xxl"}

def validate_product(color, size):
    errors = []
    
    if color.lower() not in ALLOWED_COLORS:
        errors.append(f"Invalid color: {color}")
    
    if size.lower() not in ALLOWED_SIZES:
        errors.append(f"Invalid size: {size}")
    
    return errors

# Test validation
print(validate_product("red", "large"))     # []
print(validate_product("pink", "medium"))   # ['Invalid color: pink']
print(validate_product("blue", "tiny"))     # ['Invalid size: tiny']
```

### Set-based Algorithms
```python
# Find missing numbers in a sequence
def find_missing_numbers(numbers, start=1, end=None):
    if end is None:
        end = max(numbers) if numbers else start
    
    expected = set(range(start, end + 1))
    actual = set(numbers)
    return sorted(expected - actual)

# Test
sequence = [1, 2, 4, 6, 7, 9, 10]
missing = find_missing_numbers(sequence)
print(missing)  # [3, 5, 8]

# Find duplicate elements
def find_duplicates(lst):
    seen = set()
    duplicates = set()
    
    for item in lst:
        if item in seen:
            duplicates.add(item)
        else:
            seen.add(item)
    
    return duplicates

# Test
data = [1, 2, 3, 2, 4, 5, 3, 6]
dupes = find_duplicates(data)
print(dupes)  # {2, 3}
```

## 📈 Performance Considerations

### Time Complexity
| Operation | Average Case | Worst Case | Notes |
|-----------|-------------|------------|-------|
| Add | O(1) | O(n) | Hash collision |
| Remove | O(1) | O(n) | Hash collision |
| Search (in) | O(1) | O(n) | Hash collision |
| Union | O(len(s1) + len(s2)) | O(len(s1) * len(s2)) | |
| Intersection | O(min(len(s1), len(s2))) | O(len(s1) * len(s2)) | |
| Difference | O(len(s1)) | O(len(s1) * len(s2)) | |

### Memory Usage
```python
import sys

# Memory comparison
list_data = [1, 2, 3, 4, 5] * 1000
set_data = set(list_data)

print(f"List size: {sys.getsizeof(list_data)} bytes")
print(f"Set size: {sys.getsizeof(set_data)} bytes")
print(f"List length: {len(list_data)}")
print(f"Set length: {len(set_data)}")

# Sets are more memory efficient for unique elements
```

### Performance Optimization Tips
```python
# Use sets for membership testing instead of lists
# Slow - O(n)
def is_vowel_slow(char):
    vowels = ['a', 'e', 'i', 'o', 'u']
    return char.lower() in vowels

# Fast - O(1)
def is_vowel_fast(char):
    vowels = {'a', 'e', 'i', 'o', 'u'}
    return char.lower() in vowels

# Use set operations instead of loops
# Slow
def common_elements_slow(list1, list2):
    common = []
    for item in list1:
        if item in list2 and item not in common:
            common.append(item)
    return common

# Fast
def common_elements_fast(list1, list2):
    return list(set(list1) & set(list2))
```

## ⚠️ Common Pitfalls

### Mutable Elements in Sets
```python
# This won't work - lists are mutable and unhashable
# invalid_set = {[1, 2], [3, 4]}  # TypeError

# Use tuples or frozensets instead
valid_set = {(1, 2), (3, 4)}
print(valid_set)  # {(1, 2), (3, 4)}

frozenset_set = {frozenset([1, 2]), frozenset([3, 4])}
print(frozenset_set)  # {frozenset({1, 2}), frozenset({3, 4})}
```

### Set Order Assumptions
```python
# Don't rely on set order (though Python 3.7+ maintains insertion order)
numbers = {3, 1, 4, 1, 5, 9, 2, 6}
print(numbers)  # Order may vary in older Python versions

# If order matters, convert to sorted list
ordered_numbers = sorted(numbers)
print(ordered_numbers)  # [1, 2, 3, 4, 5, 6, 9]
```

### Empty Set Creation
```python
# Wrong way to create empty set
empty_dict = {}  # This creates a dictionary, not a set!
print(type(empty_dict))  # <class 'dict'>

# Right way to create empty set
empty_set = set()
print(type(empty_set))  # <class 'set'>
```

## 🧪 Practice Exercises

### Exercise 1: Set-based Text Analysis
```python
def analyze_text(text1, text2):
    """Analyze two texts and return various set-based statistics"""
    words1 = set(text1.lower().split())
    words2 = set(text2.lower().split())
    
    return {
        'unique_to_text1': words1 - words2,
        'unique_to_text2': words2 - words1,
        'common_words': words1 & words2,
        'all_words': words1 | words2,
        'total_unique_words': len(words1 | words2),
        'similarity_ratio': len(words1 & words2) / len(words1 | words2) if words1 | words2 else 0
    }

# Test
text1 = "the quick brown fox jumps over the lazy dog"
text2 = "the lazy cat sleeps under the warm sun"

analysis = analyze_text(text1, text2)
for key, value in analysis.items():
    print(f"{key}: {value}")
```

### Exercise 2: Social Network Analysis
```python
def analyze_friendships(friendships):
    """
    Analyze friendship network using sets
    friendships: list of tuples representing mutual friendships
    """
    # Build friendship sets for each person
    friends = {}
    all_people = set()
    
    for person1, person2 in friendships:
        all_people.add(person1)
        all_people.add(person2)
        
        if person1 not in friends:
            friends[person1] = set()
        if person2 not in friends:
            friends[person2] = set()
        
        friends[person1].add(person2)
        friends[person2].add(person1)
    
    # Find mutual friends
    def mutual_friends(person1, person2):
        if person1 in friends and person2 in friends:
            return friends[person1] & friends[person2]
        return set()
    
    # Find friend suggestions (friends of friends)
    def friend_suggestions(person):
        if person not in friends:
            return set()
        
        suggestions = set()
        for friend in friends[person]:
            suggestions |= friends.get(friend, set())
        
        # Remove the person themselves and existing friends
        suggestions.discard(person)
        suggestions -= friends.get(person, set())
        return suggestions
    
    return {
        'all_people': all_people,
        'friends': friends,
        'mutual_friends': mutual_friends,
        'friend_suggestions': friend_suggestions
    }

# Test
friendships = [
    ("Alice", "Bob"), ("Bob", "Charlie"), ("Charlie", "David"),
    ("Alice", "Eve"), ("Eve", "Frank"), ("Bob", "Eve")
]

network = analyze_friendships(friendships)
print("All people:", network['all_people'])
print("Alice's friends:", network['friends'].get('Alice', set()))
print("Mutual friends of Alice and Bob:", network['mutual_friends']("Alice", "Bob"))
print("Friend suggestions for Alice:", network['friend_suggestions']("Alice"))
```

### Exercise 3: Data Deduplication System
```python
class DataDeduplicator:
    def __init__(self):
        self.seen_records = set()
        self.duplicate_count = 0
    
    def add_record(self, record):
        """Add a record, return True if new, False if duplicate"""
        # Convert record to hashable format
        if isinstance(record, dict):
            hashable_record = frozenset(record.items())
        elif isinstance(record, list):
            hashable_record = tuple(record)
        else:
            hashable_record = record
        
        if hashable_record in self.seen_records:
            self.duplicate_count += 1
            return False
        else:
            self.seen_records.add(hashable_record)
            return True
    
    def get_stats(self):
        return {
            'unique_records': len(self.seen_records),
            'duplicate_count': self.duplicate_count,
            'total_processed': len(self.seen_records) + self.duplicate_count
        }
    
    def find_similar_records(self, record, threshold=0.5):
        """Find records with similarity above threshold (simplified)"""
        if isinstance(record, dict):
            record_set = set(record.items())
            similar = []
            
            for seen_record in self.seen_records:
                if isinstance(seen_record, frozenset):
                    seen_set = set(seen_record)
                    intersection = len(record_set & seen_set)
                    union = len(record_set | seen_set)
                    similarity = intersection / union if union > 0 else 0
                    
                    if similarity >= threshold:
                        similar.append((dict(seen_record), similarity))
            
            return sorted(similar, key=lambda x: x[1], reverse=True)
        return []

# Test
deduplicator = DataDeduplicator()

# Sample records
records = [
    {"name": "John", "age": 30, "city": "NYC"},
    {"name": "Jane", "age": 25, "city": "LA"},
    {"name": "John", "age": 30, "city": "NYC"},  # Duplicate
    {"name": "Bob", "age": 35, "city": "Chicago"},
    {"name": "Jane", "age": 25, "city": "LA"},   # Duplicate
]

for record in records:
    is_new = deduplicator.add_record(record)
    print(f"Record {record}: {'New' if is_new else 'Duplicate'}")

print("\nStats:", deduplicator.get_stats())

# Find similar records
test_record = {"name": "John", "age": 31, "city": "NYC"}
similar = deduplicator.find_similar_records(test_record, threshold=0.6)
print(f"\nRecords similar to {test_record}:")
for record, similarity in similar:
    print(f"  {record} (similarity: {similarity:.2f})")
```

### Exercise 4: Mathematical Set Operations Visualizer
```python
def visualize_set_operations(set1, set2, set3=None):
    """Demonstrate all set operations with visual representation"""
    
    def format_set(s, name):
        return f"{name}: {sorted(s) if s else 'empty'}"
    
    print("=" * 50)
    print("SET OPERATIONS DEMONSTRATION")
    print("=" * 50)
    
    print(format_set(set1, "Set A"))
    print(format_set(set2, "Set B"))
    if set3:
        print(format_set(set3, "Set C"))
    
    print("\n" + "-" * 30)
    print("BINARY OPERATIONS (A and B)")
    print("-" * 30)
    
    # Union
    union_ab = set1 | set2
    print(f"A ∪ B (Union):     {sorted(union_ab)}")
    
    # Intersection
    intersection_ab = set1 & set2
    print(f"A ∩ B (Intersection): {sorted(intersection_ab) if intersection_ab else 'empty'}")
    
    # Difference
    diff_ab = set1 - set2
    print(f"A - B (Difference):   {sorted(diff_ab) if diff_ab else 'empty'}")
    
    diff_ba = set2 - set1
    print(f"B - A (Difference):   {sorted(diff_ba) if diff_ba else 'empty'}")
    
    # Symmetric Difference
    sym_diff_ab = set1 ^ set2
    print(f"A △ B (Sym Diff):     {sorted(sym_diff_ab) if sym_diff_ab else 'empty'}")
    
    # Relationships
    print(f"\nA ⊆ B (A subset of B):    {set1.issubset(set2)}")
    print(f"B ⊆ A (B subset of A):    {set2.issubset(set1)}")
    print(f"A ∩ B = ∅ (Disjoint):     {set1.isdisjoint(set2)}")
    
    if set3:
        print("\n" + "-" * 30)
        print("TERNARY OPERATIONS (A, B, and C)")
        print("-" * 30)
        
        # Three-way operations
        union_abc = set1 | set2 | set3
        print(f"A ∪ B ∪ C:           {sorted(union_abc)}")
        
        intersection_abc = set1 & set2 & set3
        print(f"A ∩ B ∩ C:           {sorted(intersection_abc) if intersection_abc else 'empty'}")
        
        # Pairwise intersections
        ab_only = (set1 & set2) - set3
        ac_only = (set1 & set3) - set2
        bc_only = (set2 & set3) - set1
        
        print(f"(A ∩ B) - C:         {sorted(ab_only) if ab_only else 'empty'}")
        print(f"(A ∩ C) - B:         {sorted(ac_only) if ac_only else 'empty'}")
        print(f"(B ∩ C) - A:         {sorted(bc_only) if bc_only else 'empty'}")

# Test the visualizer
set_a = {1, 2, 3, 4, 5}
set_b = {4, 5, 6, 7, 8}
set_c = {3, 4, 9, 10}

visualize_set_operations(set_a, set_b, set_c)
```

## 📚 Summary

Sets are powerful Python data structures that provide:
- **Uniqueness**: Automatically handle duplicate elimination
- **Fast membership testing**: O(1) average case lookup
- **Mathematical operations**: Union, intersection, difference, etc.
- **Unordered collections**: Focus on membership, not position
- **Hashable elements only**: Immutable objects as elements
- **Memory efficiency**: Optimized for unique element storage

Master sets to efficiently handle unique collections and perform mathematical set operations!