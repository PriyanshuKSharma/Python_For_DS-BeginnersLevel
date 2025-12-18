# Python for Data Science - Developer Documentation

## 📋 Project Overview

This repository contains Python scripts and Jupyter notebooks for learning data science fundamentals, taught by **Mohit Sir** during the 3rd semester. The codebase covers essential Python concepts, data structures, and data science libraries including NumPy and Pandas.

## 🏗️ Repository Structure

```
Python_For_DS-BeginnersLevel/
├── Core Python Scripts/
│   ├── 29Aug.py                    # Sequential data types (tuples, sets, dictionaries)
│   ├── 31Aug.py                    # Pandas Series introduction
│   ├── 01Sept.py                   # Pandas Series operations
│   ├── Oct17(Data Types).py        # Python data types and operations
│   ├── Oct20(Sequential Data Types).py  # Advanced sequential data structures
│   └── Nov23(function, arguments, parameters and use of lambda).py  # Functions and lambda
├── Utility Scripts/
│   ├── basiccalculator.py          # Basic arithmetic calculator
│   ├── ArithmeticProgression.py    # AP sequence generator
│   ├── highestfactor.py           # Factor calculation algorithm
│   ├── integer.py                 # Number classification
│   ├── volume.py                  # Sphere volume calculator
│   ├── reversingtuple.py          # Tuple reversal implementation
│   └── pass.py                    # Pass statement demonstration
├── Advanced Concepts/
│   ├── 2'scomplement.py           # Binary operations and 2's complement
│   ├── Nov2.py                    # Control flow (break/continue)
│   └── seqquencialDT.py          # Sequential data type comparisons
├── Jupyter Notebooks/
│   ├── Prac.ipynb                 # Pandas DataFrame operations
│   ├── PracNp.ipynb              # NumPy array operations
│   ├── PracPand.ipynb            # Advanced Pandas operations
│   └── Sept03_24.ipynb           # Comprehensive data science examples
└── Practice Files/
    └── prac.py                    # General practice code
```

## 🔧 Technical Implementation Details

### Core Python Concepts

#### 1. Data Types and Operations (`Oct17(Data Types).py`)
```python
# Binary, Hexadecimal, and Octal number systems
a = 0B1111      # Binary representation
c = 0xface      # Hexadecimal representation
h = 10_0_0_0    # Digit separator for readability

# Complex numbers
j = 10+2J
print(j.real, j.imag)  # Real and imaginary parts

# Boolean operations
print(True+True*False)  # Boolean arithmetic
```

**Key Features:**
- Number system conversions (binary, hex, octal)
- Complex number operations
- Boolean arithmetic
- Type casting and conversions

#### 2. Sequential Data Types (`Oct20(Sequential Data Types).py`)

**Lists:**
```python
li = ["Ravi", 87.9, 18]
li.append('car')        # Add element
li.extend(li3)          # Combine lists
li.insert(0, "Rahul")   # Insert at position
```

**Tuples:**
```python
tup = ("Ravi", 19, 56.78)
print(tup.index("Ravi"))  # Find index
print(tup.count(19))      # Count occurrences
```

**Sets:**
```python
se = {10,20,30,40,50,78,10,20,40}
se1 = {10,20,30}
print(se.union(se1))        # Union operation
print(se.intersection(se1)) # Intersection operation
```

**Dictionaries:**
```python
dic = {1:"One", 2:"Two", 3:"Three"}
print(dic.keys())    # Get keys
print(dic.values())  # Get values
print(dic.get(30))   # Safe key access
```

#### 3. Functions and Lambda Expressions (`Nov23(function, arguments, parameters and use of lambda).py`)

**Function Definitions:**
```python
def greet():
    print("Welcome user")

def Addition(a, b):
    return(a+b)

def Add_sub(a, b):
    return(a+b), (a-b)  # Multiple return values
```

**Variable Arguments:**
```python
# *args - Tuple form
def sum(a, *b):
    c = a
    for i in b:
        c = c + i
    print("addition is:", c)

# **kwargs - Dictionary form
def person(**b):
    print(b)
person(name="Rahul", age=15, contact="9638527410")
```

**Lambda Functions:**
```python
f = lambda a: a*a           # Square function
g = lambda x,y: x+y         # Addition function
h = lambda l,m: l*m         # Multiplication function
```

### Data Science Libraries

#### 1. NumPy Operations (`PracNp.ipynb`)

**Array Creation:**
```python
import numpy as np

# Basic array creation
listarray = np.array([[1,2,3,4], [5,6,7,8]])
zeros = np.zeros((2,5))           # Zero matrix
ones = np.ones((3,4))             # Ones matrix
identity = np.identity(45)         # Identity matrix
random_array = np.random.rand(12,6)  # Random array
```

**Array Operations:**
```python
# Mathematical operations
np.add(arr, arr1)      # Element-wise addition
np.sin(arr)            # Trigonometric functions
np.power(arr, arr1)    # Power operations
np.unique(arr)         # Unique elements

# Statistical operations
np.max(arr1)           # Maximum value
np.sum(arr)            # Sum of elements
np.mean(arr)           # Mean calculation
```

**Array Manipulation:**
```python
arr = np.arange(99)           # Range array
arr.reshape(3,33)             # Reshape array
lspace = np.linspace(1,5,12)  # Linear spacing
```

#### 2. Pandas Operations (`PracPand.ipynb`)

**DataFrame Creation:**
```python
import pandas as pd

# From dictionary
dic1 = {
    "name": ['sharma','yash','shivam','vaibhav'],
    "marks": [78,92,93,79],
    "city": ['ahmedabad','delhi','ranchi','hyderabad']
}
df = pd.DataFrame(dic1)
```

**Data Manipulation:**
```python
# File operations
df.to_csv('friends.csv')                    # Export to CSV
df.to_csv('friends_no_index.csv', index=False)  # Without index
sharma = pd.read_csv('sharma.csv')          # Import from CSV

# Data exploration
df.head(3)          # First 3 rows
df.tail(2)          # Last 2 rows
df.describe()       # Statistical summary
df.info()           # Data info
df.shape            # Dimensions
```

**Data Selection and Filtering:**
```python
# Selection
df[0]                           # Select column
df.loc[[1,2], [3,4]]           # Select specific rows/columns
df.iloc[0,4]                   # Position-based selection
df.loc[(df[1]<0.7)]            # Conditional filtering

# Data cleaning
df.dropna()                     # Remove null values
df.drop_duplicates(subset=['name'])  # Remove duplicates
df.reset_index(drop=True)       # Reset index
```

**Advanced Operations:**
```python
# Sorting and indexing
df.sort_index(axis=0, ascending=False)  # Sort by index
df.T                                    # Transpose
df.columns = list("ABCDE")             # Rename columns

# Null value handling
df.isnull()         # Check for null values
df.notnull()        # Check for non-null values
df.fillna(value)    # Fill null values
```

### Utility Applications

#### 1. Mathematical Calculators

**Basic Calculator (`basiccalculator.py`):**
```python
first = int(input("Enter your first no: "))
operator = input("Enter your operator(+,-,*,/,%): ")
second = int(input("Enter your second no: "))

if operator == '+':
    print(first + second)
elif operator == '-':
    print(first - second)
# ... additional operations
```

**Arithmetic Progression (`ArithmeticProgression.py`):**
```python
n = int(input("Enter the number of terms: "))
current_term = 1
common_difference = 2
end_term = current_term + (n - 1) * common_difference

for _ in range(current_term, end_term, common_difference):
    print(current_term, end=", ")
    current_term += common_difference
```

**Volume Calculator (`volume.py`):**
```python
radius = float(input("Enter radius"))
volume = (4*3.14*(radius**3))/3
print("Volume of the sphere:", volume)
```

#### 2. Algorithm Implementations

**Highest Factor Finder (`highestfactor.py`):**
```python
n = int(input("Enter a number: "))
highest_factor = -1

for factor in range(n - 1, 0, -1):
    if n % factor == 0:
        highest_factor = factor
        break

print("The highest factor of", n, "is", highest_factor)
```

**Tuple Reversal (`reversingtuple.py`):**
```python
def reverse(tuples):
    list = []
    for k in reversed(tuples):
        list = list + [k]
    tuple(list)
    print(list)

tuples = (10,20,30,40,50,60)
reverse(tuples)
```

### Advanced Concepts

#### 1. Binary Operations (`2'scomplement.py`)
```python
print(~19)              # Bitwise NOT operation
print(bin(19))          # Binary representation
print(bin(~19))         # Binary of complement
print(~(-23))           # 2's complement demonstration
```

#### 2. Control Flow (`Nov2.py`)
```python
# Break statement demonstration
no_of_chocolates = 20
chocolates_req = int(input("How many chocolates you want beta !!!"))
i = 1
while(i <= chocolates_req):
    if(i > no_of_chocolates):
        print("Sorry beta out of stock\nBye")
        break
    print("Chocolate:", i)
    i += 1

# Continue statement demonstration
for i in range(1,21):
    n = i % 2
    if(n != 0):
        continue
    print(i)  # Prints only even numbers
```

## 🛠️ Development Environment

### Prerequisites
```bash
# Required Python packages
pip install pandas
pip install numpy
pip install jupyter
pip install xlrd        # For Excel file reading
pip install openpyxl    # For Excel file operations
```

### Python Version
- **Minimum:** Python 3.x
- **Recommended:** Python 3.8+

### IDE Compatibility
- Jupyter Notebook
- PyCharm
- VS Code
- Any Python-compatible IDE

## 📊 Data Structures Used

| Data Structure | Use Case | Example Files |
|----------------|----------|---------------|
| **Lists** | Mutable sequences, dynamic arrays | `Oct20(Sequential Data Types).py` |
| **Tuples** | Immutable sequences, fixed data | `29Aug.py`, `reversingtuple.py` |
| **Sets** | Unique elements, set operations | `29Aug.py`, `seqquencialDT.py` |
| **Dictionaries** | Key-value mapping | `29Aug.py`, `PracPand.ipynb` |
| **NumPy Arrays** | Numerical computations | `PracNp.ipynb` |
| **Pandas DataFrames** | Structured data analysis | `Prac.ipynb`, `PracPand.ipynb` |

## 🔍 Key Algorithms and Techniques

### 1. Mathematical Operations
- Arithmetic progression generation
- Geometric calculations (sphere volume)
- Factor finding algorithms
- Binary number operations

### 2. Data Processing
- Data cleaning and preprocessing
- Statistical analysis
- Data transformation and manipulation
- File I/O operations (CSV, Excel)

### 3. Control Structures
- Conditional statements (if-elif-else)
- Loops (for, while)
- Exception handling
- Function definitions and calls

## 📈 Performance Considerations

### NumPy Optimizations
- Vectorized operations for better performance
- Memory-efficient array operations
- Broadcasting for element-wise operations

### Pandas Best Practices
- Use `loc` and `iloc` for explicit indexing
- Leverage `inplace=True` for memory efficiency
- Utilize built-in methods for data cleaning

## 🧪 Testing and Validation

### Input Validation
```python
# Example from basiccalculator.py
try:
    first = int(input("Enter your first no: "))
    second = int(input("Enter your second no: "))
except ValueError:
    print("Please enter valid numbers")
```

### Data Validation
```python
# Example from Pandas operations
df.isnull().sum()           # Check for missing values
df.dtypes                   # Verify data types
df.shape                    # Confirm dimensions
```

## 🚀 Usage Examples

### Running Individual Scripts
```bash
# Execute Python scripts
python basiccalculator.py
python ArithmeticProgression.py
python volume.py

# Launch Jupyter notebooks
jupyter notebook Prac.ipynb
jupyter notebook PracNp.ipynb
```

### Integration Example
```python
# Combining multiple concepts
import pandas as pd
import numpy as np

# Create sample data
data = {
    'numbers': np.random.randint(1, 100, 10),
    'categories': ['A', 'B', 'C'] * 3 + ['A']
}

df = pd.DataFrame(data)

# Apply mathematical operations
df['squared'] = df['numbers'] ** 2
df['log'] = np.log(df['numbers'])

# Statistical analysis
summary = df.groupby('categories').agg({
    'numbers': ['mean', 'std', 'count'],
    'squared': 'sum'
})

print(summary)
```

## 📚 Learning Path

1. **Basic Python** → `integer.py`, `Oct17(Data Types).py`
2. **Data Structures** → `Oct20(Sequential Data Types).py`, `29Aug.py`
3. **Functions** → `Nov23(function, arguments, parameters and use of lambda).py`
4. **NumPy** → `PracNp.ipynb`
5. **Pandas** → `Prac.ipynb`, `PracPand.ipynb`
6. **Applications** → Calculator scripts, utility programs

## 🤝 Contributing

When contributing to this repository:

1. Follow PEP 8 style guidelines
2. Add comprehensive docstrings
3. Include example usage in comments
4. Test code with various input scenarios
5. Update this documentation for new features

## 📄 License

This project is not licensed and is intended for educational purposes.

---

**Instructor:** Mohit Sir  
**Semester:** 3rd  
**Focus:** Python for Data Science - Beginner Level