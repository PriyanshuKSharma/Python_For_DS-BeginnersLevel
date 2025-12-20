# Basic creation
single_quotes = 'Hello World'
double_quotes = "Hello World"
triple_quotes = """Multi-line
string content"""

# Raw strings (escape sequences ignored)
raw_string = r"C:\Users\name\file.txt"

# f-strings (formatted string literals)
"""name = "Alice"
age = 25
formatted = f"My name is {name} and I'm {age} years old"

print(formatted)
print(raw_string)

name = "Alice"
score = 95.5

# f-strings (Python 3.6+)
print(f"{name} scored {score:.1f}%")

# format() method
print("{} scored {:.1f}%".format(name, score))
print("{name} scored {score:.1f}%".format(name=name, score=score))

# % formatting (older style)
print("%s scored %.1f%%" % (name, score))
"""

# Split and join
words = "apple,banana,cherry".split(',')
print(words)  # ['apple', 'banana', 'cherry']
joined = '-'.join(words)
print(joined) # 'apple-banana-cherry' 


str = "apna college"
# print(len(str))
# print(str[5:8]) #col
# print(str[5:])  #college
# print(str[5:len(str)])
print(str[-5:-1])
print(str[-5:])

