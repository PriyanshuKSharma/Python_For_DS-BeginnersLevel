# Pandas - Complete Guide

## 📋 Overview

Pandas is a powerful data manipulation and analysis library built on NumPy. It provides DataFrame and Series objects for handling structured data.

## 🔧 Installation and Import

```python
# Installation
# pip install pandas

# Import
import pandas as pd
import numpy as np
```

## 🎯 Core Data Structures

### Series
```python
# Create Series
s1 = pd.Series([1, 2, 3, 4, 5])
s2 = pd.Series([1, 2, 3], index=['a', 'b', 'c'])
s3 = pd.Series({'A': 1, 'B': 2, 'C': 3})

# Series properties
print(s2.values)      # [1 2 3]
print(s2.index)       # Index(['a', 'b', 'c'])
print(s2.dtype)       # int64
print(s2.shape)       # (3,)
```

### DataFrame
```python
# Create DataFrame
data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'Diana'],
    'Age': [25, 30, 35, 28],
    'City': ['NYC', 'LA', 'Chicago', 'Boston'],
    'Salary': [50000, 60000, 70000, 55000]
}
df = pd.DataFrame(data)

# DataFrame properties
print(df.shape)       # (4, 4)
print(df.columns)     # Index(['Name', 'Age', 'City', 'Salary'])
print(df.index)       # RangeIndex(start=0, stop=4, step=1)
print(df.dtypes)      # Data types of each column
```

## 🔍 Data Selection and Indexing

### Basic Selection
```python
# Column selection
names = df['Name']              # Series
subset = df[['Name', 'Age']]    # DataFrame

# Row selection
first_row = df.iloc[0]          # First row by position
named_row = df.loc[0]           # First row by label

# Slicing
first_three = df.iloc[0:3]      # First 3 rows
columns_slice = df.iloc[:, 1:3] # All rows, columns 1-2
```

### Advanced Selection
```python
# Boolean indexing
high_salary = df[df['Salary'] > 55000]
young_high_earners = df[(df['Age'] < 30) & (df['Salary'] > 50000)]

# Query method
filtered = df.query('Age > 25 and Salary < 65000')

# isin method
cities_filter = df[df['City'].isin(['NYC', 'LA'])]

# String methods
name_filter = df[df['Name'].str.startswith('A')]
```

## ✏️ Data Manipulation

### Adding and Modifying Data
```python
# Add new column
df['Bonus'] = df['Salary'] * 0.1
df['Full_Info'] = df['Name'] + ' - ' + df['City']

# Modify existing data
df.loc[df['Age'] > 30, 'Category'] = 'Senior'
df.loc[df['Age'] <= 30, 'Category'] = 'Junior'

# Apply functions
df['Age_Group'] = df['Age'].apply(lambda x: 'Young' if x < 30 else 'Mature')
df['Name_Length'] = df['Name'].apply(len)
```

### Removing Data
```python
# Drop columns
df_no_bonus = df.drop('Bonus', axis=1)
df_subset = df.drop(['Bonus', 'Full_Info'], axis=1)

# Drop rows
df_no_first = df.drop(0, axis=0)
df_filtered = df.drop(df[df['Age'] < 25].index)

# Remove duplicates
df_unique = df.drop_duplicates()
df_unique_names = df.drop_duplicates(subset=['Name'])
```

## 🔄 Data Cleaning

### Handling Missing Data
```python
# Create data with missing values
df_missing = df.copy()
df_missing.loc[1, 'Salary'] = np.nan
df_missing.loc[2, 'Age'] = np.nan

# Check for missing data
print(df_missing.isnull().sum())
print(df_missing.info())

# Handle missing data
df_dropped = df_missing.dropna()                    # Drop rows with any NaN
df_filled = df_missing.fillna(0)                    # Fill with 0
df_forward = df_missing.fillna(method='ffill')      # Forward fill
df_mean = df_missing.fillna(df_missing.mean())      # Fill with mean
```

### Data Type Conversion
```python
# Convert data types
df['Age'] = df['Age'].astype('int32')
df['Salary'] = df['Salary'].astype('float64')

# Convert to datetime
dates = pd.Series(['2023-01-01', '2023-02-01', '2023-03-01'])
df['Date'] = pd.to_datetime(dates)

# Convert to categorical
df['City'] = df['City'].astype('category')
```

## 📊 Data Analysis

### Descriptive Statistics
```python
# Basic statistics
print(df.describe())                    # Summary statistics
print(df['Salary'].mean())              # Mean salary
print(df['Age'].median())               # Median age
print(df['City'].value_counts())        # Count by city

# Correlation
numeric_df = df.select_dtypes(include=[np.number])
correlation_matrix = numeric_df.corr()
print(correlation_matrix)
```

### Grouping and Aggregation
```python
# Group by single column
city_groups = df.groupby('City')
print(city_groups['Salary'].mean())     # Average salary by city
print(city_groups.size())               # Count by city

# Group by multiple columns
df['Age_Group'] = pd.cut(df['Age'], bins=[0, 30, 40, 100], labels=['Young', 'Middle', 'Senior'])
multi_group = df.groupby(['City', 'Age_Group'])
print(multi_group['Salary'].agg(['mean', 'count']))

# Custom aggregations
agg_result = df.groupby('City').agg({
    'Salary': ['mean', 'max', 'min'],
    'Age': 'mean'
})
```

### Pivot Tables
```python
# Create pivot table
pivot = df.pivot_table(
    values='Salary',
    index='City',
    columns='Age_Group',
    aggfunc='mean',
    fill_value=0
)
print(pivot)

# Cross-tabulation
crosstab = pd.crosstab(df['City'], df['Age_Group'])
print(crosstab)
```

## 🔗 Data Merging and Joining

### Concatenation
```python
# Create additional data
df2 = pd.DataFrame({
    'Name': ['Eve', 'Frank'],
    'Age': [32, 29],
    'City': ['Seattle', 'Miami'],
    'Salary': [65000, 58000]
})

# Concatenate vertically
combined = pd.concat([df, df2], ignore_index=True)

# Concatenate horizontally
df_extra = pd.DataFrame({'Department': ['IT', 'HR', 'Finance', 'Marketing']})
horizontal = pd.concat([df, df_extra], axis=1)
```

### Merging
```python
# Create related data
departments = pd.DataFrame({
    'Name': ['Alice', 'Bob', 'Charlie', 'Diana'],
    'Department': ['IT', 'HR', 'Finance', 'Marketing']
})

# Inner join
merged_inner = pd.merge(df, departments, on='Name', how='inner')

# Left join
merged_left = pd.merge(df, departments, on='Name', how='left')

# Merge on different column names
df_renamed = departments.rename(columns={'Name': 'Employee'})
merged_diff = pd.merge(df, df_renamed, left_on='Name', right_on='Employee')
```

## 📁 File I/O Operations

### Reading Data
```python
# CSV files
df_csv = pd.read_csv('data.csv')
df_csv_custom = pd.read_csv('data.csv', sep=';', header=0, index_col=0)

# Excel files
df_excel = pd.read_excel('data.xlsx', sheet_name='Sheet1')

# JSON files
df_json = pd.read_json('data.json')

# SQL databases
# df_sql = pd.read_sql('SELECT * FROM table', connection)
```

### Writing Data
```python
# CSV files
df.to_csv('output.csv', index=False)
df.to_csv('output_custom.csv', sep=';', header=True)

# Excel files
df.to_excel('output.xlsx', sheet_name='Data', index=False)

# JSON files
df.to_json('output.json', orient='records')

# Multiple sheets in Excel
with pd.ExcelWriter('multi_sheet.xlsx') as writer:
    df.to_excel(writer, sheet_name='Sheet1')
    df.head().to_excel(writer, sheet_name='Sheet2')
```

## 🕐 Time Series Analysis

### DateTime Operations
```python
# Create time series data
dates = pd.date_range('2023-01-01', periods=100, freq='D')
ts_data = pd.DataFrame({
    'Date': dates,
    'Value': np.random.randn(100).cumsum()
})
ts_data.set_index('Date', inplace=True)

# Time-based selection
jan_data = ts_data['2023-01']
week_data = ts_data['2023-01-01':'2023-01-07']

# Resampling
monthly = ts_data.resample('M').mean()      # Monthly average
weekly = ts_data.resample('W').sum()        # Weekly sum

# Rolling operations
ts_data['Rolling_Mean'] = ts_data['Value'].rolling(window=7).mean()
ts_data['Rolling_Std'] = ts_data['Value'].rolling(window=7).std()
```

## 🎯 Advanced Operations

### String Operations
```python
# String methods
df['Name_Upper'] = df['Name'].str.upper()
df['Name_Length'] = df['Name'].str.len()
df['Contains_A'] = df['Name'].str.contains('A')

# String splitting
df['First_Letter'] = df['Name'].str[0]
name_parts = df['Name'].str.split(' ', expand=True)

# Regular expressions
df['Has_Vowel'] = df['Name'].str.contains(r'[aeiou]', case=False)
```

### Categorical Data
```python
# Create categorical data
df['City_Cat'] = df['City'].astype('category')
df['Salary_Range'] = pd.cut(df['Salary'], 
                           bins=[0, 50000, 60000, 100000], 
                           labels=['Low', 'Medium', 'High'])

# Categorical operations
print(df['City_Cat'].cat.categories)
df['City_Cat'] = df['City_Cat'].cat.add_categories(['Denver'])
```

### Multi-level Indexing
```python
# Create MultiIndex
arrays = [['A', 'A', 'B', 'B'], ['X', 'Y', 'X', 'Y']]
multi_index = pd.MultiIndex.from_arrays(arrays, names=['Group', 'Type'])
df_multi = pd.DataFrame(np.random.randn(4, 2), index=multi_index, columns=['Col1', 'Col2'])

# Access multi-level data
print(df_multi.loc['A'])
print(df_multi.loc[('A', 'X')])

# Stack and unstack
stacked = df_multi.stack()
unstacked = stacked.unstack()
```

## 🧪 Practical Examples

### Data Analysis Workflow
```python
# Load and explore data
df = pd.read_csv('sales_data.csv')
print(df.info())
print(df.describe())
print(df.head())

# Clean data
df = df.dropna()
df['Date'] = pd.to_datetime(df['Date'])
df = df[df['Amount'] > 0]

# Analyze
monthly_sales = df.groupby(df['Date'].dt.month)['Amount'].sum()
top_products = df.groupby('Product')['Amount'].sum().sort_values(ascending=False).head(10)

# Create insights
df['Month'] = df['Date'].dt.month
df['Weekday'] = df['Date'].dt.day_name()
seasonal_analysis = df.groupby(['Month', 'Product'])['Amount'].mean()
```

### Performance Optimization
```python
# Use vectorized operations
df['Total'] = df['Quantity'] * df['Price']  # Fast

# Avoid loops when possible
# Slow
# total = []
# for i, row in df.iterrows():
#     total.append(row['Quantity'] * row['Price'])

# Use appropriate data types
df['Category'] = df['Category'].astype('category')  # Memory efficient
df['ID'] = df['ID'].astype('int32')                 # Smaller integers

# Use query for complex filtering
result = df.query('Price > 100 and Category == "Electronics"')  # Fast
```

## 📈 Performance Tips

```python
# Use vectorized operations
df['New_Col'] = df['Col1'] * df['Col2']  # Fast

# Avoid iterrows() when possible
# Use apply() or vectorized operations instead

# Use appropriate data types
df['Category'] = df['Category'].astype('category')

# Use chaining for multiple operations
result = (df
          .query('Age > 25')
          .groupby('City')['Salary']
          .mean()
          .sort_values(ascending=False))

# Use loc/iloc for selection
df.loc[df['Age'] > 30, 'Category'] = 'Senior'  # Fast
```

## 📚 Summary

Pandas provides:
- **DataFrame/Series**: Powerful data structures
- **Data cleaning**: Handle missing values and duplicates
- **Data analysis**: Grouping, aggregation, and statistics
- **File I/O**: Read/write various formats
- **Time series**: Date/time operations and resampling
- **Merging**: Join and combine datasets
- **Performance**: Optimized operations for large datasets

Essential for data analysis and manipulation in Python!