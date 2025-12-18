# NumPy - Complete Guide

## 📋 Overview

NumPy (Numerical Python) is the fundamental package for scientific computing in Python. It provides powerful N-dimensional array objects and tools for working with arrays.

## 🔧 Installation and Import

```python
# Installation
# pip install numpy

# Import
import numpy as np
```

## 🎯 Array Creation

### Basic Array Creation
```python
# From lists
arr1d = np.array([1, 2, 3, 4, 5])
arr2d = np.array([[1, 2, 3], [4, 5, 6]])
arr3d = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])

# Array properties
print(arr2d.shape)    # (2, 3)
print(arr2d.dtype)    # int64
print(arr2d.ndim)     # 2
print(arr2d.size)     # 6
```

### Specialized Array Creation
```python
# Zeros and ones
zeros = np.zeros((3, 4))           # 3x4 array of zeros
ones = np.ones((2, 3))             # 2x3 array of ones
full = np.full((2, 2), 7)          # 2x2 array filled with 7

# Identity and diagonal
identity = np.eye(3)               # 3x3 identity matrix
diag = np.diag([1, 2, 3])         # Diagonal matrix

# Range arrays
arange = np.arange(0, 10, 2)       # [0, 2, 4, 6, 8]
linspace = np.linspace(0, 1, 5)    # [0, 0.25, 0.5, 0.75, 1]

# Random arrays
random = np.random.rand(3, 3)      # Random values [0, 1)
randint = np.random.randint(1, 10, (2, 3))  # Random integers
normal = np.random.normal(0, 1, (2, 3))     # Normal distribution
```

## 🔍 Array Indexing and Slicing

### Basic Indexing
```python
arr = np.array([[1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12]])

# Single element
print(arr[1, 2])      # 7

# Row and column
print(arr[1, :])      # [5 6 7 8] (row 1)
print(arr[:, 2])      # [3 7 11] (column 2)

# Slicing
print(arr[0:2, 1:3])  # [[2 3], [6 7]]
print(arr[::-1])      # Reverse rows
```

### Advanced Indexing
```python
arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

# Boolean indexing
mask = arr > 5
print(arr[mask])      # [6 7 8 9 10]

# Fancy indexing
indices = [1, 3, 5]
print(arr[indices])   # [2 4 6]

# Conditional selection
result = np.where(arr > 5, arr, 0)  # Replace values ≤5 with 0
print(result)         # [0 0 0 0 0 6 7 8 9 10]
```

## ✏️ Array Operations

### Mathematical Operations
```python
arr1 = np.array([1, 2, 3, 4])
arr2 = np.array([5, 6, 7, 8])

# Element-wise operations
print(arr1 + arr2)    # [6 8 10 12]
print(arr1 * arr2)    # [5 12 21 32]
print(arr1 ** 2)      # [1 4 9 16]

# Universal functions
print(np.sqrt(arr1))  # [1. 1.414 1.732 2.]
print(np.exp(arr1))   # [2.718 7.389 20.086 54.598]
print(np.sin(arr1))   # [0.841 0.909 0.141 -0.757]
```

### Aggregation Functions
```python
arr = np.array([[1, 2, 3],
                [4, 5, 6]])

# Basic aggregations
print(np.sum(arr))        # 21
print(np.mean(arr))       # 3.5
print(np.std(arr))        # 1.707
print(np.min(arr))        # 1
print(np.max(arr))        # 6

# Axis-specific aggregations
print(np.sum(arr, axis=0))    # [5 7 9] (column sums)
print(np.sum(arr, axis=1))    # [6 15] (row sums)
print(np.mean(arr, axis=0))   # [2.5 3.5 4.5]
```

## 🔄 Array Manipulation

### Reshaping
```python
arr = np.arange(12)
print(arr)                    # [0 1 2 3 4 5 6 7 8 9 10 11]

# Reshape
reshaped = arr.reshape(3, 4)
print(reshaped.shape)         # (3, 4)

# Flatten
flattened = reshaped.flatten()
print(flattened.shape)        # (12,)

# Transpose
transposed = reshaped.T
print(transposed.shape)       # (4, 3)
```

### Joining and Splitting
```python
arr1 = np.array([[1, 2], [3, 4]])
arr2 = np.array([[5, 6], [7, 8]])

# Concatenation
hstack = np.hstack([arr1, arr2])  # [[1 2 5 6], [3 4 7 8]]
vstack = np.vstack([arr1, arr2])  # [[1 2], [3 4], [5 6], [7 8]]

# Splitting
arr = np.arange(8)
split = np.split(arr, 4)      # [array([0, 1]), array([2, 3]), ...]
```

## 📊 Linear Algebra

```python
# Matrix operations
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

# Matrix multiplication
dot_product = np.dot(A, B)    # or A @ B
print(dot_product)            # [[19 22], [43 50]]

# Matrix properties
det = np.linalg.det(A)        # Determinant
inv = np.linalg.inv(A)        # Inverse
eigenvals = np.linalg.eigvals(A)  # Eigenvalues

# Solving linear systems
# Ax = b
b = np.array([1, 2])
x = np.linalg.solve(A, b)
print(x)                      # [-0. 0.5]
```

## 🎯 Broadcasting

```python
# Broadcasting allows operations between arrays of different shapes
arr = np.array([[1, 2, 3],
                [4, 5, 6]])

# Scalar broadcasting
result1 = arr + 10            # Add 10 to all elements

# Vector broadcasting
vec = np.array([10, 20, 30])
result2 = arr + vec           # Add vector to each row

# Column vector broadcasting
col_vec = np.array([[10], [20]])
result3 = arr + col_vec       # Add column vector
```

## 🔧 Advanced Operations

### Sorting and Searching
```python
arr = np.array([3, 1, 4, 1, 5, 9, 2, 6])

# Sorting
sorted_arr = np.sort(arr)     # [1 1 2 3 4 5 6 9]
indices = np.argsort(arr)     # [1 3 6 0 2 4 7 5]

# Searching
index = np.searchsorted(sorted_arr, 4)  # 4
unique_vals = np.unique(arr)  # [1 2 3 4 5 6 9]
```

### Statistical Functions
```python
data = np.random.normal(0, 1, 1000)

# Descriptive statistics
print(f"Mean: {np.mean(data):.3f}")
print(f"Median: {np.median(data):.3f}")
print(f"Std: {np.std(data):.3f}")
print(f"Variance: {np.var(data):.3f}")

# Percentiles
print(f"25th percentile: {np.percentile(data, 25):.3f}")
print(f"75th percentile: {np.percentile(data, 75):.3f}")

# Correlation
arr1 = np.random.rand(100)
arr2 = arr1 + np.random.rand(100) * 0.1
correlation = np.corrcoef(arr1, arr2)[0, 1]
print(f"Correlation: {correlation:.3f}")
```

## 🧪 Practical Examples

### Image Processing
```python
# Create a simple image (grayscale)
image = np.random.randint(0, 256, (100, 100), dtype=np.uint8)

# Image operations
brightened = np.clip(image + 50, 0, 255)  # Brighten
blurred = np.convolve(image.flatten(), np.ones(9)/9, mode='same').reshape(100, 100)
```

### Data Analysis
```python
# Generate sample data
np.random.seed(42)
sales_data = np.random.normal(1000, 200, (12, 4))  # 12 months, 4 products

# Analysis
monthly_totals = np.sum(sales_data, axis=1)
product_averages = np.mean(sales_data, axis=0)
best_month = np.argmax(monthly_totals)
best_product = np.argmax(product_averages)

print(f"Best month: {best_month + 1}")
print(f"Best product: {best_product + 1}")
```

### Scientific Computing
```python
# Solve differential equation numerically
def euler_method(f, y0, t):
    """Euler's method for solving dy/dt = f(t, y)"""
    y = np.zeros_like(t)
    y[0] = y0
    
    for i in range(1, len(t)):
        dt = t[i] - t[i-1]
        y[i] = y[i-1] + dt * f(t[i-1], y[i-1])
    
    return y

# Example: dy/dt = -2y, y(0) = 1
f = lambda t, y: -2 * y
t = np.linspace(0, 2, 100)
y = euler_method(f, 1, t)
```

## 📈 Performance Tips

```python
# Use vectorized operations instead of loops
# Slow
result_slow = []
for i in range(len(arr)):
    result_slow.append(arr[i] ** 2)

# Fast
result_fast = arr ** 2

# Use appropriate data types
int_arr = np.array([1, 2, 3], dtype=np.int32)    # Less memory
float_arr = np.array([1, 2, 3], dtype=np.float64) # More precision

# Preallocate arrays when possible
large_arr = np.zeros(1000000)  # Better than growing array
```

## 📚 Summary

NumPy provides:
- **Efficient arrays**: Fast numerical operations
- **Broadcasting**: Operations between different shapes
- **Linear algebra**: Matrix operations and decompositions
- **Random numbers**: Statistical distributions and sampling
- **Universal functions**: Element-wise operations
- **Memory efficiency**: Optimized C implementations

Essential for scientific computing and data science in Python!