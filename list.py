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
print(more_fruits) # ['apple', 'orange', 'banana', 'cherry', 'grape', 'mango', 'kiwi', 'peach'] 

# Using += operator
fruits += ["pineapple"]
print(fruits) # ['apple', 'orange', 'banana', 'cherry', 'grape', 'mango', 'pineapple']  


### Removing Elements
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


### Modifying Elements

numbers = [1, 2, 3, 4, 5]
num = numbers

print(numbers, id(numbers))
print(num, id(num))

# Modify single element
numbers[0] = 10
print(numbers)  # [10, 2, 3, 4, 5]

# Modify multiple elements using slicing
numbers[1:3] = [20, 30]
print(numbers)  # [10, 20, 30, 4, 5]

# Replace with different number of elements
numbers[1:3] = [100, 200, 300]
print(numbers)  # [10, 100, 200, 300, 4, 5]

print(numbers, id(numbers))
print(num, id(num))