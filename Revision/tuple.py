tuple = (3,4,5,6,7,8,9,10)
tuple2 = tuple

print(tuple, id(tuple))
print(tuple2, id(tuple))

## Indexing
fruits = ("apple", "banana", "cherry", "date")

# Positive indexing (0-based)
print(fruits[0])    # "apple"
print(fruits[2])    # "cherry"

# Negative indexing (-1 is last element)
print(fruits[-1])   # "date"
print(fruits[-2])   # "cherry"

# IndexError for invalid indices
# print(fruits[10])  # Raises IndexError

## Slicing
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

## Built-in Methods
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

## Membership testing
fruits = ("apple", "banana", "cherry")

# in operator
print("apple" in fruits)     # True
print("grape" in fruits)     # False

# not in operator
print("grape" not in fruits) # True
print("apple" not in fruits) # False

## Mathematical Operators
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

## Comparison Operator
# Tuples are compared lexicographically
print((1, 2, 3) < (1, 2, 4))    # True
print((1, 2, 3) == (1, 2, 3))   # True
print((1, 2, 3) > (1, 2, 2))    # True

# String tuples
print(("apple", "banana") < ("apple", "cherry"))  # True

# Mixed types (be careful!)
# print((1, 2) < ("a", "b"))  # TypeError in Python 3


## Packing and unpacking of tuple
# Assign tuple elements to variables
point = (10, 20)
x, y = point
print(f"x: {x}, y: {y}")  # x: 10, y: 20

person = ("Alice", 25, "Engineer")
name, age, job = person
print(f"{name} is {age} years old and works as an {job}")