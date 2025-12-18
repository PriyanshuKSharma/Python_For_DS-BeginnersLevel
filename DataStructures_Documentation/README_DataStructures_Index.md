# Python Data Structures - Complete Documentation Index

## 📚 Overview

This directory contains comprehensive documentation for all major Python data structures. Each guide includes creation methods, operations, use cases, and practical examples.

## 📋 Data Structure Guides

### 1. [Lists](README_Lists.md) 
**Ordered, Mutable, Allows Duplicates**
- Dynamic arrays with extensive methods
- Perfect for ordered collections that change
- Supports indexing, slicing, and iteration
- **Use when**: You need ordered, changeable data

### 2. [Tuples](README_Tuples.md)
**Ordered, Immutable, Allows Duplicates**  
- Lightweight, memory-efficient sequences
- Ideal for fixed data and multiple return values
- Supports unpacking and named tuples
- **Use when**: You need ordered, unchangeable data

### 3. [Dictionaries](README_Dictionaries.md)
**Key-Value Pairs, Mutable, Unique Keys**
- Hash tables for fast key-based lookup
- Excellent for mapping relationships
- Rich methods for manipulation and iteration
- **Use when**: You need key-value associations

### 4. [Sets](README_Sets.md)
**Unordered, Mutable, Unique Elements**
- Mathematical set operations (union, intersection)
- Fast membership testing and duplicate removal
- Ideal for uniqueness and set mathematics
- **Use when**: You need unique collections or set operations

### 5. [Strings](README_Strings.md)
**Immutable Character Sequences**
- Unicode text processing and manipulation
- Extensive formatting and search capabilities
- Pattern matching and validation methods
- **Use when**: You need text processing and manipulation

### 6. [NumPy](README_NumPy.md)
**Numerical Computing Arrays**
- N-dimensional arrays for scientific computing
- Mathematical functions and linear algebra
- Broadcasting and vectorized operations
- **Use when**: You need numerical computations and arrays

### 7. [Pandas](README_Pandas.md)
**Data Analysis and Manipulation**
- DataFrame and Series for structured data
- Data cleaning, merging, and analysis tools
- File I/O and time series operations
- **Use when**: You need data analysis and manipulation

## 🎯 Quick Reference

| Data Structure | Ordered | Mutable | Duplicates | Syntax |
|----------------|---------|---------|------------|--------|
| List | ✅ | ✅ | ✅ | `[1, 2, 3]` |
| Tuple | ✅ | ❌ | ✅ | `(1, 2, 3)` |
| Dictionary | ✅* | ✅ | Keys: ❌, Values: ✅ | `{'a': 1, 'b': 2}` |
| Set | ❌ | ✅ | ❌ | `{1, 2, 3}` |
| String | ✅ | ❌ | ✅ | `"hello"` |
| NumPy Array | ✅ | ✅ | ✅ | `np.array([1, 2, 3])` |
| Pandas DataFrame | ✅ | ✅ | ✅ | `pd.DataFrame(data)` |

*Ordered since Python 3.7+

## 🚀 Getting Started

1. **Beginners**: Start with Lists and Strings
2. **Intermediate**: Learn Dictionaries and Tuples  
3. **Advanced**: Master Sets and their operations
4. **Data Science**: Learn NumPy for numerical computing
5. **Data Analysis**: Master Pandas for data manipulation

## 💡 Performance Tips

- Use **sets** for membership testing (`item in collection`)
- Use **dictionaries** for key-based lookups
- Use **tuples** for immutable sequences
- Use **lists** for dynamic, ordered collections
- Use **strings** for text processing

## 🔗 Related Topics

- List comprehensions and generator expressions
- Dictionary comprehensions and defaultdict
- Named tuples and dataclasses
- Collections module (Counter, deque, etc.)
- String formatting and regular expressions

Each guide contains detailed examples, best practices, and common pitfalls to help you master Python data structures!