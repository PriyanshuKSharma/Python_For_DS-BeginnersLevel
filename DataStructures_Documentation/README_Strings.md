# Python Strings - Complete Guide

## 📋 Overview

Strings are **immutable** sequences of Unicode characters. They support indexing, slicing, and numerous built-in methods for text processing.

## 🔧 String Creation

```python
# Basic creation
single_quotes = 'Hello World'
double_quotes = "Hello World"
triple_quotes = """Multi-line
string content"""

# Raw strings (escape sequences ignored)
raw_string = r"C:\Users\name\file.txt"

# f-strings (formatted string literals)
name = "Alice"
age = 25
formatted = f"My name is {name} and I'm {age} years old"
```

## 🎯 String Operations

### Indexing and Slicing
```python
text = "Python Programming"

# Indexing
print(text[0])    # 'P'
print(text[-1])   # 'g'

# Slicing
print(text[0:6])   # 'Python'
print(text[7:])    # 'Programming'
print(text[::-1])  # 'gnimmargorP nohtyP' (reverse)
```

### String Methods
```python
text = "  Hello World  "

# Case methods
print(text.upper())      # '  HELLO WORLD  '
print(text.lower())      # '  hello world  '
print(text.title())      # '  Hello World  '
print(text.capitalize()) # '  hello world  '

# Whitespace methods
print(text.strip())      # 'Hello World'
print(text.lstrip())     # 'Hello World  '
print(text.rstrip())     # '  Hello World'

# Search methods
print(text.find('World'))    # 8
print(text.count('l'))       # 3
print(text.startswith('  H')) # True
print(text.endswith('d  '))   # True

# Split and join
words = "apple,banana,cherry".split(',')
print(words)  # ['apple', 'banana', 'cherry']
joined = '-'.join(words)
print(joined) # 'apple-banana-cherry'

# Replace
replaced = "Hello World".replace('World', 'Python')
print(replaced) # 'Hello Python'
```

## 🔧 String Formatting

```python
name = "Alice"
score = 95.5

# f-strings (Python 3.6+)
print(f"{name} scored {score:.1f}%")

# format() method
print("{} scored {:.1f}%".format(name, score))
print("{name} scored {score:.1f}%".format(name=name, score=score))

# % formatting (older style)
print("%s scored %.1f%%" % (name, score))
```

## 🧪 Common Use Cases

### Text Processing
```python
def clean_text(text):
    """Clean and normalize text"""
    return text.strip().lower().replace('  ', ' ')

def word_count(text):
    """Count words in text"""
    return len(text.split())

def is_palindrome(text):
    """Check if text is palindrome"""
    cleaned = ''.join(c.lower() for c in text if c.isalnum())
    return cleaned == cleaned[::-1]
```

### Validation
```python
def validate_email(email):
    """Simple email validation"""
    return '@' in email and '.' in email.split('@')[1]

def is_numeric(text):
    """Check if string represents number"""
    try:
        float(text)
        return True
    except ValueError:
        return False
```

## 📚 Summary

Strings provide powerful text processing capabilities with immutability ensuring data integrity and extensive methods for manipulation, formatting, and analysis.