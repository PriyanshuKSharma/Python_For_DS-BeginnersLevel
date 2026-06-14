// ─────────────────────────────────────────────────
//  Note content — all note HTML bodies
// ─────────────────────────────────────────────────

const NOTE_CONTENT = {

  // ── INTRO ──────────────────────────────────────
  'intro': {
    title: 'Introduction to Python',
    subtitle: 'Why Python for Data Science?',
    tags: ['foundation', 'beginner'],
    video: 'https://www.youtube.com/embed/-hh6raHUUvk?start=101',
    body: `
<h2>What is Python?</h2>
<p>Python is a high-level, interpreted, dynamically typed programming language created by <strong>Guido van Rossum</strong> in 1991. It emphasizes code readability and simplicity.</p>

<h2>Why Python for Data Science?</h2>
<ul>
  <li><strong>Rich ecosystem</strong> — NumPy, Pandas, Matplotlib, scikit-learn, TensorFlow</li>
  <li><strong>Readable syntax</strong> — code looks almost like English pseudocode</li>
  <li><strong>Interpreted</strong> — no compilation step, fast prototyping</li>
  <li><strong>Community</strong> — massive open-source community and documentation</li>
  <li><strong>Versatile</strong> — Web, ML, Automation, Scripting, Data Analysis</li>
</ul>

<h2>Setting Up</h2>
<pre># Check Python version
python --version        # Python 3.x.x

# Install dependencies
pip install numpy pandas matplotlib jupyter scikit-learn

# Launch Jupyter Notebook
jupyter notebook</pre>

<h2>First Python Program</h2>
<pre># Hello, Python!
print("Hello, World!")

# Variables (no type declaration needed)
name = "Priyanshu"
age  = 20
gpa  = 9.2
print(f"Name: {name}, Age: {age}, GPA: {gpa}")</pre>

<h2>Python Interpreter Modes</h2>
<ul>
  <li><strong>Interactive mode</strong> — run <code>python</code> in terminal, line by line</li>
  <li><strong>Script mode</strong> — write <code>.py</code> file, run with <code>python filename.py</code></li>
  <li><strong>Jupyter notebooks</strong> — mix code + markdown + output cells</li>
</ul>

<h2>Key Characteristics</h2>
<ul>
  <li>Indentation-based block structure (no braces)</li>
  <li>Everything is an object</li>
  <li>Duck typing — type determined at runtime</li>
  <li>Garbage collected — automatic memory management</li>
</ul>
`
  },

  // ── VARIABLES ──────────────────────────────────
  'variables': {
    title: 'Variables & Data Types',
    subtitle: 'int, float, str, bool, complex — Number Systems',
    tags: ['foundation', 'types'],
    body: `
<h2>Python Data Types</h2>
<ul>
  <li><strong>int</strong> — whole numbers: <code>42</code>, <code>-7</code>, <code>0</code></li>
  <li><strong>float</strong> — decimals: <code>3.14</code>, <code>-0.5</code>, <code>1e10</code></li>
  <li><strong>str</strong> — text: <code>"hello"</code>, <code>'world'</code></li>
  <li><strong>bool</strong> — <code>True</code> / <code>False</code></li>
  <li><strong>complex</strong> — <code>3+4j</code></li>
</ul>

<h2>Variable Assignment</h2>
<pre>x = 10           # int
pi = 3.14159     # float
msg = "Python"   # str
flag = True      # bool
z = 2 + 3j       # complex

# Multiple assignment
a, b, c = 1, 2, 3
x = y = z = 0    # same value</pre>

<h2>Number Systems</h2>
<pre># Binary (base 2)
bin_val = 0b1010          # = 10 in decimal
print(bin(10))            # 0b1010

# Octal (base 8)
oct_val = 0o17            # = 15 in decimal
print(oct(15))            # 0o17

# Hexadecimal (base 16)
hex_val = 0xFF            # = 255 in decimal
print(hex(255))           # 0xff</pre>

<h2>Type Conversion</h2>
<pre>int("42")        # 42
float(10)        # 10.0
str(3.14)        # "3.14"
bool(0)          # False
bool("hello")    # True</pre>

<h2>Checking Types</h2>
<pre>type(42)         # &lt;class 'int'&gt;
type(3.14)       # &lt;class 'float'&gt;
isinstance(42, int)   # True</pre>

<h2>Two's Complement</h2>
<pre># Python handles 2's complement internally
n = -5
print(bin(n))          # -0b101
# Bitwise NOT: ~n = -(n+1)
print(~5)              # -6</pre>
`
  },

  // ── CONTROL FLOW ─────────────────────────────────
  'control-flow': {
    title: 'Control Flow',
    subtitle: 'if/elif/else · for/while loops · break/continue',
    tags: ['foundation', 'loops'],
    body: `
<h2>if / elif / else</h2>
<pre>score = 85

if score >= 90:
    print("A grade")
elif score >= 80:
    print("B grade")   # ← this runs
elif score >= 70:
    print("C grade")
else:
    print("Fail")</pre>

<h2>for Loop</h2>
<pre># Iterate over range
for i in range(5):      # 0, 1, 2, 3, 4
    print(i)

# Iterate over list
fruits = ["apple", "banana", "mango"]
for fruit in fruits:
    print(fruit)

# Enumerate (index + value)
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")</pre>

<h2>while Loop</h2>
<pre>count = 0
while count < 5:
    print(count)
    count += 1</pre>

<h2>break, continue, pass</h2>
<pre># break — exit loop entirely
for i in range(10):
    if i == 5:
        break       # stops at 5
    print(i)

# continue — skip current iteration
for i in range(10):
    if i % 2 == 0:
        continue    # skip evens
    print(i)        # only odds

# pass — placeholder (do nothing)
if True:
    pass            # valid but empty</pre>

<h2>Nested Loops</h2>
<pre>for i in range(3):
    for j in range(3):
        print(f"({i},{j})", end=" ")
    print()     # newline after each row</pre>

<h2>List Comprehensions</h2>
<pre># [expression for item in iterable if condition]
squares  = [x**2 for x in range(10)]
evens    = [x for x in range(20) if x % 2 == 0]
matrix   = [[i*j for j in range(4)] for i in range(4)]</pre>
`
  },

  // ── FUNCTIONS ─────────────────────────────────────
  'functions': {
    title: 'Functions & Lambda',
    subtitle: 'def · *args · **kwargs · lambda expressions',
    tags: ['foundation', 'functions'],
    body: `
<h2>Defining Functions</h2>
<pre>def greet(name):
    return f"Hello, {name}!"

result = greet("Priyanshu")
print(result)   # Hello, Priyanshu!</pre>

<h2>Default Parameters</h2>
<pre>def power(base, exp=2):
    return base ** exp

print(power(3))     # 9  (exp defaults to 2)
print(power(3, 3))  # 27</pre>

<h2>Multiple Return Values</h2>
<pre>def min_max(lst):
    return min(lst), max(lst)

lo, hi = min_max([4, 1, 9, 2, 7])
print(lo, hi)   # 1 9</pre>

<h2>*args — Variable Positional Arguments</h2>
<pre>def add(*nums):
    total = 0
    for n in nums:
        total += n
    return total

print(add(1, 2, 3, 4))   # 10
print(add(10, 20))        # 30</pre>

<h2>**kwargs — Variable Keyword Arguments</h2>
<pre>def profile(**info):
    for key, val in info.items():
        print(f"{key}: {val}")

profile(name="Priyanshu", age=20, city="Delhi")</pre>

<h2>Lambda Expressions</h2>
<pre># lambda args: expression
square = lambda x: x ** 2
add    = lambda a, b: a + b

print(square(5))   # 25
print(add(3, 4))   # 7

# Used with map, filter, sorted
nums = [4, 1, 9, 3, 7]
print(sorted(nums, key=lambda x: -x))   # descending
evens = list(filter(lambda x: x % 2 == 0, range(10)))</pre>
`
  },

  // ── STRINGS ───────────────────────────────────────
  'strings': {
    title: 'String Manipulation',
    subtitle: 'Methods · f-strings · slicing · comprehensions',
    tags: ['foundation', 'strings'],
    body: `
<h2>String Basics</h2>
<pre>s = "Hello, Python!"
print(len(s))        # 14
print(s[0])          # H
print(s[-1])         # !
print(s[7:13])       # Python</pre>

<h2>Slicing</h2>
<pre>s = "ABCDEFGH"
s[2:6]       # CDEF
s[::2]       # ACEG  (step)
s[::-1]      # HGFEDCBA  (reverse)</pre>

<h2>String Methods</h2>
<pre>s = "  hello world  "
s.strip()         # "hello world"
s.upper()         # "  HELLO WORLD  "
s.lower()         # unchanged
s.replace("o","0")# "  hell0 w0rld  "
s.split(" ")      # ['', '', 'hello', 'world', '', '']

" ".join(["a","b","c"])   # "a b c"
"Python".startswith("Py") # True
"Python".find("th")       # 2</pre>

<h2>f-Strings (Python 3.6+)</h2>
<pre>name = "Priyanshu"
gpa  = 9.2
print(f"Name: {name}, GPA: {gpa:.1f}")
# Name: Priyanshu, GPA: 9.2

# Expressions in f-strings
print(f"2^10 = {2**10}")  # 2^10 = 1024</pre>

<h2>String Comprehensions</h2>
<pre>vowels = [c for c in "Hello World" if c in "aeiouAEIOU"]
caps   = [c.upper() for c in "hello"]</pre>
`
  },

  // ── CLASSES & OBJECTS ─────────────────────────────
  'classes-objects': {
    title: 'Classes & Objects',
    subtitle: '__init__ · self · instance vs class attributes',
    tags: ['oop', 'classes'],
    video: 'https://www.youtube.com/embed/ERCMXc8x7mc',
    body: `
<h2>What is OOP?</h2>
<p>Object-Oriented Programming models real-world entities as <strong>objects</strong> that combine <strong>data (attributes)</strong> and <strong>behavior (methods)</strong>.</p>

<h2>Defining a Class</h2>
<pre>class Student:
    # Class attribute (shared by ALL objects)
    school = "Delhi University"

    def __init__(self, name, marks):
        # Instance attributes (unique per object)
        self.name  = name
        self.marks = marks

    def get_grade(self):
        avg = sum(self.marks) / len(self.marks)
        if avg >= 90: return "A"
        elif avg >= 80: return "B"
        else: return "C"

    def __str__(self):
        return f"Student({self.name}, Grade={self.get_grade()})"</pre>

<h2>Creating Objects</h2>
<pre>s1 = Student("Priyanshu", [90, 85, 92])
s2 = Student("Anushka",   [78, 82, 80])

print(s1.name)        # Priyanshu
print(s1.get_grade()) # A
print(Student.school) # Delhi University
print(s1)             # Student(Priyanshu, Grade=A)</pre>

<h2>Class vs Instance Attributes</h2>
<pre># Class attribute — same for all instances
Student.school = "IIT Delhi"   # changes for all

# Instance attribute — unique to one object
s1.name = "PK Sharma"          # only changes s1</pre>

<h2>Key OOP Terms</h2>
<ul>
  <li><strong>self</strong> — reference to the current object</li>
  <li><strong>__init__</strong> — constructor, runs when object is created</li>
  <li><strong>Class attribute</strong> — shared across all instances</li>
  <li><strong>Instance attribute</strong> — unique to each object</li>
  <li><strong>Method</strong> — function defined inside a class</li>
</ul>
`
  },

  // ── INHERITANCE ───────────────────────────────────
  'inheritance': {
    title: 'Inheritance',
    subtitle: 'Single · Multi-level · Multiple · super() · MRO',
    tags: ['oop', 'inheritance'],
    body: `
<h2>Single Inheritance</h2>
<pre>class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return f"{self.name} makes a sound"

class Dog(Animal):            # Dog inherits from Animal
    def speak(self):          # override
        return f"{self.name} says Woof!"

d = Dog("Rex")
print(d.speak())    # Rex says Woof!
print(d.name)       # Rex  ← inherited attribute</pre>

<h2>Multi-level Inheritance</h2>
<pre>class A:
    def method_a(self): return "A"

class B(A):
    def method_b(self): return "B"

class C(B):       # C → B → A
    def method_c(self): return "C"

c = C()
print(c.method_a())   # A  (inherited through B)
print(c.method_b())   # B
print(c.method_c())   # C</pre>

<h2>Multiple Inheritance</h2>
<pre>class Father:
    def skills(self): return "Coding"

class Mother:
    def skills(self): return "Cooking"

class Child(Father, Mother):
    pass

c = Child()
print(c.skills())   # Coding  ← MRO picks Father first</pre>

<h2>super() — Call Parent Method</h2>
<pre>class GamingPhone(Smartphone):
    def __init__(self, brand, model, price, gpu):
        super().__init__(brand, model, price)  # call Smartphone.__init__
        self.gpu = gpu</pre>

<h2>Method Resolution Order (MRO)</h2>
<pre>print(Child.__mro__)
# (&lt;class 'Child'&gt;, &lt;class 'Father'&gt;, &lt;class 'Mother'&gt;, &lt;class 'object'&gt;)</pre>
`
  },

  // ── ENCAPSULATION ─────────────────────────────────
  'encapsulation': {
    title: 'Encapsulation',
    subtitle: 'Access modifiers · @property · getters & setters',
    tags: ['oop', 'encapsulation'],
    video: 'https://www.youtube.com/embed/cKeKp17afZw',
    body: `
<h2>Access Modifiers</h2>
<ul>
  <li><strong>Public</strong> — <code>self.name</code> — accessible everywhere</li>
  <li><strong>Protected</strong> — <code>self._name</code> — convention, accessible but "don't touch"</li>
  <li><strong>Private</strong> — <code>self.__name</code> — name-mangled, truly restricted</li>
</ul>

<h2>Example: BankAccount</h2>
<pre>class BankAccount:
    def __init__(self, owner, balance):
        self.owner    = owner            # public
        self._bank    = "State Bank"     # protected
        self.__balance = balance         # private

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount

    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
        else:
            print("Insufficient funds")

    def get_balance(self):
        return self.__balance

acc = BankAccount("Priyanshu", 1000)
acc.deposit(500)
print(acc.get_balance())    # 1500
# print(acc.__balance)      # AttributeError!</pre>

<h2>@property Decorator</h2>
<pre>class Temperature:
    def __init__(self, celsius=0):
        self.__celsius = celsius

    @property
    def celsius(self):          # getter
        return self.__celsius

    @celsius.setter
    def celsius(self, value):   # setter
        if value < -273.15:
            raise ValueError("Below absolute zero!")
        self.__celsius = value

    @property
    def fahrenheit(self):       # computed property
        return self.__celsius * 9/5 + 32

t = Temperature(25)
print(t.celsius)       # 25
print(t.fahrenheit)    # 77.0
t.celsius = 100        # uses setter
print(t.fahrenheit)    # 212.0</pre>
`
  },

  // ── POLYMORPHISM ──────────────────────────────────
  'polymorphism': {
    title: 'Polymorphism',
    subtitle: 'Method overriding · duck typing · operator overloading',
    tags: ['oop', 'polymorphism'],
    body: `
<h2>Method Overriding</h2>
<pre>class Shape:
    def area(self):
        return 0

class Circle(Shape):
    def __init__(self, r): self.r = r
    def area(self): return 3.14159 * self.r ** 2

class Rectangle(Shape):
    def __init__(self, w, h): self.w, self.h = w, h
    def area(self): return self.w * self.h

# Polymorphism — same interface, different behaviour
shapes = [Circle(5), Rectangle(4, 6)]
for s in shapes:
    print(f"Area: {s.area():.2f}")</pre>

<h2>Duck Typing</h2>
<pre># "If it quacks like a duck, it's a duck"
class Dog:
    def speak(self): return "Woof"

class Cat:
    def speak(self): return "Meow"

class Robot:
    def speak(self): return "Beep boop"

# No inheritance needed — just needs .speak()
for entity in [Dog(), Cat(), Robot()]:
    print(entity.speak())</pre>

<h2>Operator Overloading (Dunder Methods)</h2>
<pre>class Vector:
    def __init__(self, x, y):
        self.x, self.y = x, y

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __str__(self):
        return f"Vector({self.x}, {self.y})"

v1 = Vector(1, 2)
v2 = Vector(3, 4)
print(v1 + v2)   # Vector(4, 6)</pre>
`
  },

  // ── ABSTRACTION ───────────────────────────────────
  'abstraction': {
    title: 'Abstraction & ABC',
    subtitle: 'Abstract Base Classes · @abstractmethod · interface patterns',
    tags: ['oop', 'abstraction'],
    body: `
<h2>What is Abstraction?</h2>
<p>Abstraction hides implementation details and shows only the essential interface. In Python, it's achieved using the <strong>ABC</strong> (Abstract Base Class) module.</p>

<h2>Abstract Base Class</h2>
<pre>from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

    @abstractmethod
    def perimeter(self):
        pass

    def describe(self):          # concrete method (optional)
        print(f"Area={self.area():.2f}, P={self.perimeter():.2f}")

# Cannot instantiate abstract class
# s = Shape()   # TypeError!

class Circle(Shape):
    def __init__(self, r): self.r = r
    def area(self):      return 3.14159 * self.r ** 2
    def perimeter(self): return 2 * 3.14159 * self.r

class Square(Shape):
    def __init__(self, s): self.s = s
    def area(self):      return self.s ** 2
    def perimeter(self): return 4 * self.s

c = Circle(5)
c.describe()     # Area=78.54, P=31.42</pre>

<h2>Real-world Example — Payment System</h2>
<pre>class PaymentGateway(ABC):
    @abstractmethod
    def pay(self, amount): pass

    @abstractmethod
    def refund(self, amount): pass

class UPI(PaymentGateway):
    def pay(self, amount):    print(f"Paid ₹{amount} via UPI")
    def refund(self, amount): print(f"Refunded ₹{amount} via UPI")

class Card(PaymentGateway):
    def pay(self, amount):    print(f"Charged ₹{amount} to Card")
    def refund(self, amount): print(f"Credited ₹{amount} to Card")</pre>
`
  },

  // ── CLASS & STATIC METHODS ────────────────────────
  'class-static-methods': {
    title: 'Class & Static Methods',
    subtitle: '@classmethod · @staticmethod · factory constructors',
    tags: ['oop', 'methods'],
    body: `
<h2>@classmethod</h2>
<p>Bound to the <strong>class</strong>, not the instance. Receives <code>cls</code> as first argument. Can access and modify class attributes.</p>

<pre>class Student:
    school = "Delhi University"

    def __init__(self, name, marks):
        self.name  = name
        self.marks = marks

    @classmethod
    def get_school(cls):
        return cls.school

    @classmethod
    def change_school(cls, new_name):
        cls.school = new_name    # affects ALL instances

    @classmethod
    def from_string(cls, data):  # factory constructor
        name, raw = data.split(":")
        marks = list(map(int, raw.split(",")))
        return cls(name, marks)

s1 = Student.from_string("Priyanshu:90,85,92")
print(Student.get_school())   # Delhi University
Student.change_school("IIT")
print(s1.school)              # IIT</pre>

<h2>@staticmethod</h2>
<p>Belongs to the class namespace but receives <strong>no</strong> implicit argument (no self, no cls). Pure utility function.</p>

<pre>class MathUtils:
    @staticmethod
    def is_prime(n):
        if n < 2: return False
        for i in range(2, int(n**0.5)+1):
            if n % i == 0: return False
        return True

    @staticmethod
    def factorial(n):
        if n == 0: return 1
        return n * MathUtils.factorial(n-1)

print(MathUtils.is_prime(17))    # True
print(MathUtils.factorial(5))    # 120</pre>

<h2>Comparison</h2>
<ul>
  <li><strong>Instance method</strong> — <code>def m(self)</code> — needs object, accesses instance data</li>
  <li><strong>Class method</strong> — <code>@classmethod def m(cls)</code> — accesses class data</li>
  <li><strong>Static method</strong> — <code>@staticmethod def m()</code> — utility, no implicit args</li>
</ul>
`
  },

  // ── DUNDER METHODS ────────────────────────────────
  'dunder-magic': {
    title: 'Dunder / Magic Methods',
    subtitle: '__str__ · __repr__ · __len__ · __add__ · operator overloading',
    tags: ['oop', 'dunder'],
    body: `
<h2>Common Dunder Methods</h2>
<ul>
  <li><code>__init__</code> — constructor</li>
  <li><code>__str__</code> — human-readable string (print)</li>
  <li><code>__repr__</code> — developer string (repr)</li>
  <li><code>__len__</code> — len() support</li>
  <li><code>__add__</code> — + operator</li>
  <li><code>__eq__</code> — == operator</li>
  <li><code>__lt__</code> — &lt; operator</li>
  <li><code>__getitem__</code> — [] indexing</li>
</ul>

<pre>class Book:
    def __init__(self, title, pages, price):
        self.title = title
        self.pages = pages
        self.price = price

    def __str__(self):     return f"'{self.title}' ({self.pages}pp)"
    def __repr__(self):    return f"Book('{self.title}', {self.pages}, {self.price})"
    def __len__(self):     return self.pages
    def __add__(self, other):
        return Book(f"{self.title}+{other.title}", self.pages + other.pages, 0)
    def __eq__(self, other):   return self.title == other.title
    def __lt__(self, other):   return self.price < other.price

b1 = Book("Python 101", 300, 500)
b2 = Book("NumPy Guide", 200, 400)

print(b1)            # 'Python 101' (300pp)
print(repr(b1))      # Book('Python 101', 300, 500)
print(len(b1))       # 300
combined = b1 + b2   # Book with 500 pages
print(b1 == b2)      # False
print(sorted([b1, b2]))  # sorted by price via __lt__</pre>
`
  },

  // ── OOP PDF ───────────────────────────────────────
  'oops-notes-pdf': {
    title: 'OOPs Notes — Full PDF',
    subtitle: '34-page beginner-to-interview-ready OOP guide',
    tags: ['oop', 'pdf', 'notes'],
    body: `
<h2>About this PDF</h2>
<p>The <strong>34-page OOPs_Notes.md.pdf</strong> moves from beginner concepts to interview preparation. It explains every idea with real-life analogies, code, comparison tables, and interview questions. Many examples use Java syntax, while the concepts apply directly to Python.</p>

<h2>Topics Covered in PDF</h2>
<ul>
  <li>Classes & Objects fundamentals</li>
  <li>Constructors (__init__) and self</li>
  <li>All 4 OOP Pillars — Inheritance, Encapsulation, Polymorphism, Abstraction</li>
  <li>Constructors: default, parameterized, copy concepts, and constructor chaining</li>
  <li>Association, aggregation, composition, IS-A and HAS-A relationships</li>
  <li>Static and final concepts, Object methods, equals and hash code contracts</li>
  <li>Comparison tables plus a final list of 30 common OOP interview questions</li>
</ul>

<h2>Open PDF</h2>
<p>
  <a href="../Python_Course/OOPs_Notes.md.pdf" target="_blank" class="btn primary" style="display:inline-flex; margin-top:.5rem;">
    📄 Open OOPs_Notes.md.pdf
  </a>
</p>

<h2>Lecture PDFs (Lecture 1–8)</h2>
<ul>
  <li><a href="../Python_Course/Lecture1_py.pdf" target="_blank">Lecture 1 — Python Basics</a></li>
  <li><a href="../Python_Course/Lecture2_py.pdf" target="_blank">Lecture 2 — Strings & Conditional Statements</a></li>
  <li><a href="../Python_Course/Lecture3_py.pdf" target="_blank">Lecture 3 — Lists & Tuples</a></li>
  <li><a href="../Python_Course/Lecture4_py.pdf" target="_blank">Lecture 4 — Dictionaries & Sets</a></li>
  <li><a href="../Python_Course/Lecture5_py.pdf" target="_blank">Lecture 5 — Loops</a></li>
  <li><a href="../Python_Course/Lecture6_py.pdf" target="_blank">Lecture 6 — Functions & Recursion</a></li>
  <li><a href="../Python_Course/Lecture7_py.pdf" target="_blank">Lecture 7 — File I/O</a></li>
  <li><a href="../Python_Course/Lecture8_py.pdf" target="_blank">Lecture 8 — OOP in Python</a></li>
</ul>
`
  },

  // ── LISTS ─────────────────────────────────────────
  'lists': {
    title: 'Lists',
    subtitle: 'Slicing · methods · comprehensions · 2D lists',
    tags: ['data-structures', 'lists'],
    body: `
<h2>Creating Lists</h2>
<pre>nums   = [1, 2, 3, 4, 5]
mixed  = [1, "hello", 3.14, True]
nested = [[1,2],[3,4],[5,6]]
empty  = []
from_range = list(range(10))    # [0..9]</pre>

<h2>Slicing</h2>
<pre>lst = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
lst[2:6]     # [2, 3, 4, 5]
lst[:4]      # [0, 1, 2, 3]
lst[7:]      # [7, 8, 9]
lst[::2]     # [0, 2, 4, 6, 8]  (every 2nd)
lst[::-1]    # [9..0]  (reversed)</pre>

<h2>Common Methods</h2>
<pre>lst = [3, 1, 4, 1, 5, 9, 2]
lst.append(6)        # add at end
lst.insert(0, 0)     # insert at index
lst.remove(1)        # remove first 1
lst.pop()            # remove & return last
lst.pop(2)           # remove & return at index 2
lst.sort()           # sort in-place
lst.reverse()        # reverse in-place
lst.index(9)         # find index of 9
lst.count(1)         # count occurrences of 1
lst.extend([10,11])  # add multiple
lst.clear()          # empty the list</pre>

<h2>List Comprehensions</h2>
<pre>squares = [x**2 for x in range(10)]
evens   = [x for x in range(20) if x%2==0]
flat    = [num for row in nested for num in row]</pre>
`
  },

  // ── TUPLES ────────────────────────────────────────
  'tuples': {
    title: 'Tuples',
    subtitle: 'Immutability · packing/unpacking · named tuples',
    tags: ['data-structures', 'tuples'],
    body: `
<h2>Creating Tuples</h2>
<pre>t1 = (1, 2, 3)
t2 = 1, 2, 3        # parentheses optional
t3 = (42,)           # single-element needs trailing comma
t4 = tuple([1,2,3]) # from list</pre>

<h2>Immutability</h2>
<pre>t = (1, 2, 3)
# t[0] = 99     # TypeError — tuples are immutable!
# But mutable objects inside can change:
t = ([1,2], [3,4])
t[0].append(99)    # [1,2,99] — the list inside can change</pre>

<h2>Packing & Unpacking</h2>
<pre>point = (3, 4)          # packing
x, y = point            # unpacking

# Extended unpacking
first, *rest = (1, 2, 3, 4, 5)
# first=1, rest=[2,3,4,5]

# Swap variables
a, b = 10, 20
a, b = b, a    # a=20, b=10</pre>

<h2>Tuple Methods</h2>
<pre>t = (3, 1, 4, 1, 5, 9, 2, 6, 5)
t.count(1)    # 2
t.index(5)    # 4 (first occurrence)</pre>

<h2>When to use Tuples</h2>
<ul>
  <li>Data that shouldn't change (coordinates, RGB colors)</li>
  <li>As dictionary keys (lists can't be keys — not hashable)</li>
  <li>Faster than lists for iteration</li>
  <li>Multiple return values from functions</li>
</ul>
`
  },

  // ── SETS ──────────────────────────────────────────
  'sets': {
    title: 'Sets',
    subtitle: 'Union · intersection · difference · frozensets',
    tags: ['data-structures', 'sets'],
    body: `
<h2>Creating Sets</h2>
<pre>s1 = {1, 2, 3, 4}
s2 = set([3, 4, 5, 6])
empty = set()         # NOT {} — that's a dict!</pre>

<h2>Set Properties</h2>
<ul>
  <li>No duplicates — automatically removes them</li>
  <li>Unordered — no indexing</li>
  <li>Elements must be hashable (no lists inside sets)</li>
</ul>

<h2>Set Operations</h2>
<pre>A = {1, 2, 3, 4, 5}
B = {4, 5, 6, 7, 8}

A | B          # Union: {1..8}
A & B          # Intersection: {4, 5}
A - B          # Difference: {1, 2, 3}
B - A          # {6, 7, 8}
A ^ B          # Symmetric diff: {1,2,3,6,7,8}</pre>

<h2>Set Methods</h2>
<pre>s = {1, 2, 3}
s.add(4)
s.remove(2)        # KeyError if missing
s.discard(99)      # safe remove (no error)
s.pop()            # remove & return arbitrary
s.clear()          # empty set

A.issubset(B)       # A ⊆ B
A.issuperset(B)     # A ⊇ B
A.isdisjoint(B)     # no common elements</pre>

<h2>frozenset (immutable set)</h2>
<pre>fs = frozenset([1, 2, 3])
# fs.add(4)   # AttributeError — immutable
# Can be used as dict key or inside another set</pre>
`
  },

  // ── DICTIONARIES ─────────────────────────────────
  'dictionaries': {
    title: 'Dictionaries',
    subtitle: 'Key-value pairs · comprehensions · defaultdict',
    tags: ['data-structures', 'dicts'],
    body: `
<h2>Creating Dictionaries</h2>
<pre>student = {"name": "Priyanshu", "age": 20, "gpa": 9.2}
d = dict(name="Anushka", age=19)
empty = {}</pre>

<h2>Accessing & Modifying</h2>
<pre>student["name"]           # Priyanshu
student.get("phone", "N/A")  # N/A (default if missing)
student["email"] = "p@uni.edu"  # add key
student["age"] = 21             # update key
del student["gpa"]              # delete key</pre>

<h2>Dictionary Methods</h2>
<pre>d.keys()     # dict_keys
d.values()   # dict_values
d.items()    # dict_items (key, value tuples)
d.update({"x": 1, "y": 2})  # merge
d.pop("x")                   # remove & return
d.setdefault("z", 0)         # add if missing</pre>

<h2>Iteration</h2>
<pre>for key in d:
    print(key, d[key])

for key, val in d.items():
    print(f"{key}: {val}")</pre>

<h2>Dict Comprehensions</h2>
<pre>squares = {x: x**2 for x in range(6)}
# {0:0, 1:1, 2:4, 3:9, 4:16, 5:25}

filtered = {k: v for k, v in squares.items() if v > 5}</pre>

<h2>defaultdict</h2>
<pre>from collections import defaultdict
word_count = defaultdict(int)
for word in "the quick brown fox the fox".split():
    word_count[word] += 1   # no KeyError for missing keys</pre>
`
  },

  // ── STACKS ────────────────────────────────────────
  'stacks': {
    title: 'Stacks',
    subtitle: 'LIFO · array-based · linked-list-based · applications',
    tags: ['data-structures', 'stacks'],
    body: `
<h2>Stack Concept</h2>
<p>A stack is a <strong>LIFO</strong> (Last In, First Out) data structure. Think of a stack of plates — you add and remove from the top.</p>

<h2>Array-Based Stack</h2>
<pre>class Stack:
    def __init__(self):
        self._data = []

    def push(self, item):
        self._data.append(item)

    def pop(self):
        if self.is_empty():
            raise IndexError("Stack underflow")
        return self._data.pop()

    def peek(self):
        if self.is_empty():
            raise IndexError("Stack is empty")
        return self._data[-1]

    def is_empty(self):
        return len(self._data) == 0

    def size(self):
        return len(self._data)

s = Stack()
s.push(10)
s.push(20)
s.push(30)
print(s.pop())    # 30
print(s.peek())   # 20</pre>

<h2>Applications</h2>
<ul>
  <li>Undo/Redo in text editors</li>
  <li>Browser back button (history)</li>
  <li>Function call stack (recursion)</li>
  <li>Balancing parentheses/brackets</li>
  <li>DFS (Depth-First Search)</li>
</ul>
`
  },

  // ── LINKED LISTS ──────────────────────────────────
  'linked-lists': {
    title: 'Linked Lists',
    subtitle: 'Singly · doubly · circular · traversal',
    tags: ['data-structures', 'linked-list'],
    body: `
<h2>Node Structure</h2>
<pre>class Node:
    def __init__(self, data):
        self.data = data
        self.next = None  # for singly LL

class DNode:  # doubly linked
    def __init__(self, data):
        self.data = data
        self.prev = None
        self.next = None</pre>

<h2>Singly Linked List — Operations</h2>
<pre>class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new = Node(data)
        if not self.head:
            self.head = new; return
        cur = self.head
        while cur.next:
            cur = cur.next
        cur.next = new

    def prepend(self, data):
        new = Node(data)
        new.next = self.head
        self.head = new

    def delete(self, data):
        if not self.head: return
        if self.head.data == data:
            self.head = self.head.next; return
        cur = self.head
        while cur.next:
            if cur.next.data == data:
                cur.next = cur.next.next; return
            cur = cur.next

    def traverse(self):
        cur = self.head
        while cur:
            print(cur.data, end=" → ")
            cur = cur.next
        print("None")</pre>

<h2>Types of Linked Lists</h2>
<ul>
  <li><strong>Singly</strong> — each node points to next only</li>
  <li><strong>Doubly</strong> — each node points to next AND prev</li>
  <li><strong>Circular</strong> — last node points back to head</li>
</ul>
`
  },

  // ── SORTING OVERVIEW ──────────────────────────────
  'sorting-overview': {
    title: 'Sorting Algorithms Overview',
    subtitle: 'Bubble · Selection · Insertion · Merge · Quick · Counting',
    tags: ['algorithms', 'sorting'],
    body: `
<h2>Complexity Summary</h2>
<pre>Algorithm       Best      Average   Worst     Space   Stable?
─────────────────────────────────────────────────────────────
Bubble Sort     O(n)      O(n²)     O(n²)     O(1)    ✅
Selection Sort  O(n²)     O(n²)     O(n²)     O(1)    ❌
Insertion Sort  O(n)      O(n²)     O(n²)     O(1)    ✅
Merge Sort      O(n logn) O(n logn) O(n logn) O(n)    ✅
Quick Sort      O(n logn) O(n logn) O(n²)     O(logn) ❌
Counting Sort   O(n+k)    O(n+k)    O(n+k)    O(k)    ✅</pre>

<h2>Bubble Sort</h2>
<pre>def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True
        if not swapped:
            break   # already sorted — O(n) best case
    return arr</pre>

<h2>Insertion Sort</h2>
<pre>def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j+1] = arr[j]
            j -= 1
        arr[j+1] = key
    return arr</pre>

<h2>When to use which?</h2>
<ul>
  <li><strong>Nearly sorted</strong> → Insertion Sort / Bubble Sort (O(n) best case)</li>
  <li><strong>Large datasets</strong> → Merge Sort or Quick Sort</li>
  <li><strong>Integer range known</strong> → Counting Sort (linear!)</li>
  <li><strong>Stability required</strong> → Merge Sort / Insertion Sort</li>
</ul>
`
  },

  // ── MERGE & QUICK SORT ────────────────────────────
  'merge-quick-sort': {
    title: 'Merge Sort & Quick Sort',
    subtitle: 'Divide and conquer — O(n log n) sorting',
    tags: ['algorithms', 'sorting'],
    body: `
<h2>Merge Sort</h2>
<pre>def merge_sort(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left  = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i]); i += 1
        else:
            result.append(right[j]); j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

arr = [38, 27, 43, 3, 9, 82, 10]
print(merge_sort(arr))   # [3, 9, 10, 27, 38, 43, 82]</pre>

<h2>Quick Sort</h2>
<pre>def quick_sort(arr):
    if len(arr) <= 1:
        return arr

    pivot = arr[len(arr) // 2]   # middle as pivot
    left  = [x for x in arr if x < pivot]
    mid   = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + mid + quick_sort(right)

arr = [3, 6, 8, 10, 1, 2, 1]
print(quick_sort(arr))   # [1, 1, 2, 3, 6, 8, 10]</pre>
`
  },

  // ── SEARCHING ─────────────────────────────────────
  'searching': {
    title: 'Searching Algorithms',
    subtitle: 'Linear Search O(n) · Binary Search O(log n)',
    tags: ['algorithms', 'searching'],
    body: `
<h2>Linear Search</h2>
<pre>def linear_search(arr, target):
    for i, val in enumerate(arr):
        if val == target:
            return i    # found at index i
    return -1           # not found

arr = [4, 2, 7, 1, 9, 3]
print(linear_search(arr, 7))   # 2
print(linear_search(arr, 5))   # -1</pre>

<h2>Binary Search (requires sorted array)</h2>
<pre>def binary_search(arr, target):
    lo, hi = 0, len(arr) - 1

    while lo <= hi:
        mid = (lo + hi) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            lo = mid + 1   # search right half
        else:
            hi = mid - 1   # search left half
    return -1

arr = [1, 3, 5, 7, 9, 11, 13]
print(binary_search(arr, 7))    # 3
print(binary_search(arr, 6))    # -1</pre>

<h2>Comparison</h2>
<ul>
  <li><strong>Linear</strong> — O(n) | works on unsorted | simple</li>
  <li><strong>Binary</strong> — O(log n) | requires sorted array | very fast for large datasets</li>
</ul>
`
  },

  // ── TIME COMPLEXITY ───────────────────────────────
  'time-complexity': {
    title: 'Time & Space Complexity',
    subtitle: 'Big-O Analysis — best, average, worst case',
    tags: ['algorithms', 'complexity'],
    body: `
<h2>Big-O Notation</h2>
<p>Big-O describes how an algorithm's runtime grows relative to input size <code>n</code>.</p>

<h2>Common Complexities</h2>
<pre>O(1)       — Constant  — array index, dict lookup
O(log n)   — Logarithmic — binary search
O(n)       — Linear   — single loop, linear search
O(n log n) — Linearithmic — merge sort, quick sort avg
O(n²)      — Quadratic — nested loops, bubble sort
O(2^n)     — Exponential — recursive fib (naive)
O(n!)      — Factorial — permutations</pre>

<h2>Sorting Big-O Table</h2>
<pre>Sort           Best      Average   Worst     Space
───────────────────────────────────────────────────
Bubble         O(n)      O(n²)     O(n²)     O(1)
Selection      O(n²)     O(n²)     O(n²)     O(1)
Insertion      O(n)      O(n²)     O(n²)     O(1)
Merge          O(n lgn)  O(n lgn)  O(n lgn)  O(n)
Quick          O(n lgn)  O(n lgn)  O(n²)     O(lgn)
Counting       O(n+k)    O(n+k)    O(n+k)    O(k)</pre>

<h2>Stable vs Unstable</h2>
<ul>
  <li><strong>Stable</strong> — equal elements keep original order: Bubble, Insertion, Merge</li>
  <li><strong>Unstable</strong> — may reorder equals: Selection, Quick</li>
</ul>

<h2>Adaptive vs Non-Adaptive</h2>
<ul>
  <li><strong>Adaptive</strong> — performs better on partially sorted: Bubble, Insertion</li>
  <li><strong>Non-Adaptive</strong> — same time regardless: Selection, Merge</li>
</ul>
`
  },

  // ── NUMPY ─────────────────────────────────────────
  'numpy': {
    title: 'NumPy — Arrays & Computing',
    subtitle: 'Vectorized operations · broadcasting · linear algebra',
    tags: ['data-science', 'numpy'],
    body: `
<h2>Import & Array Creation</h2>
<pre>import numpy as np

# From lists
a = np.array([1, 2, 3, 4, 5])
m = np.array([[1,2,3],[4,5,6]])    # 2D

# Special arrays
np.zeros((3, 4))          # all zeros
np.ones((2, 5))           # all ones
np.eye(3)                 # identity matrix
np.arange(0, 10, 2)       # [0, 2, 4, 6, 8]
np.linspace(0, 1, 5)      # 5 evenly spaced 0..1
np.random.rand(3, 3)      # random 0-1 matrix</pre>

<h2>Array Properties</h2>
<pre>a.shape      # (5,)
m.shape      # (2, 3)
a.dtype      # float64 / int64
a.ndim       # 1 or 2 or ...
a.size       # total elements
m.reshape(3, 2)   # reshape (same elements)</pre>

<h2>Vectorized Operations</h2>
<pre>a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

a + b          # [5, 7, 9]
a * b          # [4, 10, 18]
a ** 2         # [1, 4, 9]
np.sin(a)      # element-wise sin
np.exp(a)      # element-wise e^x</pre>

<h2>Aggregations</h2>
<pre>m = np.array([[1,2,3],[4,5,6]])
np.sum(m)           # 21
np.mean(m, axis=0)  # [2.5, 3.5, 4.5]  column means
np.max(m, axis=1)   # [3, 6]  row maxes
np.std(m)           # standard deviation</pre>

<h2>Broadcasting</h2>
<pre>a = np.array([[1,2,3],[4,5,6]])
a + 10          # adds 10 to every element
a * np.array([1, 2, 3])   # multiplies each col</pre>
`
  },

  // ── PANDAS ────────────────────────────────────────
  'pandas': {
    title: 'Pandas — DataFrames',
    subtitle: 'DataFrame · Series · groupby · data cleaning',
    tags: ['data-science', 'pandas'],
    body: `
<h2>Import & Create</h2>
<pre>import pandas as pd

# From dict
df = pd.DataFrame({
    "name": ["Alice", "Bob", "Priyanshu"],
    "age":  [20, 22, 20],
    "gpa":  [9.0, 8.5, 9.2]
})

# From CSV
df = pd.read_csv("data.csv")
df.to_csv("output.csv", index=False)</pre>

<h2>Exploration</h2>
<pre>df.head(5)         # first 5 rows
df.tail(3)         # last 3 rows
df.shape           # (rows, cols)
df.dtypes          # data types
df.describe()      # statistical summary
df.info()          # non-null counts + dtypes
df.isnull().sum()  # missing values per column</pre>

<h2>Selection</h2>
<pre>df["name"]              # Series
df[["name", "gpa"]]     # DataFrame
df.iloc[0]              # first row by position
df.loc[0, "name"]       # by label
df[df["gpa"] > 9.0]     # boolean filter</pre>

<h2>Data Cleaning</h2>
<pre>df.dropna()                         # drop rows with NaN
df.fillna(0)                        # fill NaN with 0
df.drop_duplicates()                # remove duplicates
df.rename(columns={"name": "Name"}) # rename column
df["gpa"] = df["gpa"].astype(float) # cast type</pre>

<h2>groupby & Aggregation</h2>
<pre>df.groupby("age")["gpa"].mean()
df.groupby("age").agg({"gpa": ["mean","max","min"]})</pre>

<h2>Sorting & Merging</h2>
<pre>df.sort_values("gpa", ascending=False)
pd.merge(df1, df2, on="id", how="inner")</pre>
`
  },

  // ── REGRESSION ────────────────────────────────────
  'regression': {
    title: 'Regression Analysis',
    subtitle: 'Linear regression · feature engineering · model evaluation',
    tags: ['data-science', 'ml', 'regression'],
    body: `
<h2>What is Regression?</h2>
<p>Regression predicts a <strong>continuous numerical value</strong> from input features. It's <em>supervised learning</em> — we train on labeled data.</p>

<h2>Linear Regression</h2>
<pre>from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score
import numpy as np

# Prepare data
X = df[["feature1", "feature2"]]
y = df["target"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train
model = LinearRegression()
model.fit(X_train, y_train)

# Predict
y_pred = model.predict(X_test)

# Evaluate
print(f"MSE: {mean_squared_error(y_test, y_pred):.4f}")
print(f"R²:  {r2_score(y_test, y_pred):.4f}")</pre>

<h2>Key Concepts</h2>
<ul>
  <li><strong>y = mx + b</strong> — linear equation (1 feature)</li>
  <li><strong>Coefficients</strong> — <code>model.coef_</code></li>
  <li><strong>Intercept</strong> — <code>model.intercept_</code></li>
  <li><strong>R² score</strong> — 1.0 = perfect, 0 = no fit</li>
  <li><strong>MSE</strong> — mean squared error (lower = better)</li>
</ul>

<h2>Data Preprocessing</h2>
<pre>from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)</pre>
`
  },

  // ── JUPYTER ───────────────────────────────────────
  'jupyter': {
    title: 'Jupyter Notebooks',
    subtitle: 'Interactive computing · data exploration · visualization',
    tags: ['data-science', 'jupyter'],
    body: `
<h2>Notebooks in this repo</h2>
<ul>
  <li><strong>Prac.ipynb</strong> — General Python + Data Exploration (DataFrames, CSV I/O, filtering)</li>
  <li><strong>PracNp.ipynb</strong> — NumPy Deep Dive (Arrays, vectorization, broadcasting, linear algebra)</li>
  <li><strong>PracPand.ipynb</strong> — Pandas Mastery (groupby, merge, pivot, data cleaning)</li>
  <li><strong>Sept03_24.ipynb</strong> — In-Class Session (end-to-end data science examples)</li>
</ul>

<h2>Launching Jupyter</h2>
<pre>pip install jupyter
jupyter notebook    # opens browser at localhost:8888</pre>

<h2>Useful Notebook Shortcuts</h2>
<pre>Shift+Enter   — run cell, move to next
Ctrl+Enter    — run cell, stay
A             — insert cell above
B             — insert cell below
D+D           — delete cell
M             — switch to Markdown
Y             — switch to Code
Tab           — autocomplete</pre>

<h2>Matplotlib in Notebooks</h2>
<pre>import matplotlib.pyplot as plt
%matplotlib inline

plt.figure(figsize=(10, 5))
plt.plot(x, y, label="Data")
plt.scatter(x, y, color="red")
plt.title("Plot Title")
plt.xlabel("X"); plt.ylabel("Y")
plt.legend()
plt.show()</pre>
`
  },

  // ── LEETCODE ──────────────────────────────────────
  'leetcode': {
    title: 'LeetCode Solutions',
    subtitle: '7 solved problems — Linked Lists, Arrays, Pointers',
    tags: ['competitive', 'leetcode'],
    body: `
<h2>Problem List</h2>
<ul>
  <li><strong>#19</strong> — Remove Nth Node From End of List 🟡 Medium — Two Pointers</li>
  <li><strong>#83</strong> — Remove Duplicates from Sorted List 🟢 Easy — Linked Lists</li>
  <li><strong>#206</strong> — Reverse Linked List 🟢 Easy — Linked Lists</li>
  <li><strong>#344</strong> — Reverse String 🟢 Easy — Two Pointers</li>
  <li><strong>#876</strong> — Middle of the Linked List 🟢 Easy — Fast & Slow Pointer</li>
  <li><strong>#912</strong> — Sort an Array 🟡 Medium — Sorting (Merge Sort)</li>
  <li><strong>#2095</strong> — Delete Middle Node of LL 🟡 Medium — Linked Lists</li>
</ul>

<h2>#206 — Reverse Linked List</h2>
<pre>class Solution:
    def reverseList(self, head):
        prev, curr = None, head
        while curr:
            nxt = curr.next    # save next
            curr.next = prev   # reverse link
            prev = curr        # move prev forward
            curr = nxt         # move curr forward
        return prev</pre>

<h2>#876 — Middle of Linked List (Fast & Slow Pointer)</h2>
<pre>class Solution:
    def middleNode(self, head):
        slow = fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        return slow  # slow is at middle</pre>

<h2>#344 — Reverse String</h2>
<pre>class Solution:
    def reverseString(self, s):
        l, r = 0, len(s) - 1
        while l < r:
            s[l], s[r] = s[r], s[l]
            l += 1; r -= 1</pre>
`
  },

  // ── HACKERRANK ────────────────────────────────────
  'hackerrank': {
    title: 'HackerRank Challenges',
    subtitle: '13 solved challenges — if-else, lists, sets, strings',
    tags: ['competitive', 'hackerrank'],
    body: `
<h2>Challenge List</h2>
<ul>
  <li>If-Else — Control flow logic</li>
  <li>Lists — Built-in list methods</li>
  <li>List Comprehensions — Nested comprehensions</li>
  <li>Nested Lists — Finding second minimum grade</li>
  <li>Tuples (Hash) — Hash of a tuple</li>
  <li>Sets: .add() — Set operations</li>
  <li>Sets: .remove() — Set mutation methods</li>
  <li>Capitalize — String word capitalization</li>
  <li>Swap Case — String case flipping</li>
  <li>Split & Join — String manipulation</li>
  <li>What's Your Name? — String formatting</li>
  <li>Company Logo — Character frequency</li>
  <li>Runner-Up Score — Second max in list</li>
</ul>

<h2>Nested Lists — Find Second Min Grade</h2>
<pre>if __name__ == '__main__':
    records = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        records.append([name, score])

    scores = sorted(set([r[1] for r in records]))
    second_lowest = scores[1]

    result = sorted([r[0] for r in records if r[1] == second_lowest])
    print('\n'.join(result))</pre>

<h2>Company Logo — Top 3 Characters</h2>
<pre>from collections import Counter
s = input()
counts = Counter(s)
for char, freq in sorted(counts.items(), key=lambda x: (-x[1], x[0]))[:3]:
    print(char, freq)</pre>
`
  },

  // ── LECTURE PDFS ──────────────────────────────────
  'lecture-pdfs': {
    title: 'Lecture PDFs (1–8)',
    subtitle: 'Complete course lecture notes from Python basics to DS',
    tags: ['pdf', 'lectures', 'notes'],
    body: `
<h2>Lecture Overview</h2>
<ul>
  <li><a href="../Python_Course/Lecture1_py.pdf" target="_blank">📄 Lecture 1 — Python Basics & Intro</a></li>
  <li><a href="../Python_Course/Lecture2_py.pdf" target="_blank">📄 Lecture 2 — Strings & Conditional Statements</a></li>
  <li><a href="../Python_Course/Lecture3_py.pdf" target="_blank">📄 Lecture 3 — Lists & Tuples</a></li>
  <li><a href="../Python_Course/Lecture4_py.pdf" target="_blank">📄 Lecture 4 — Dictionaries & Sets</a></li>
  <li><a href="../Python_Course/Lecture5_py.pdf" target="_blank">📄 Lecture 5 — Loops</a></li>
  <li><a href="../Python_Course/Lecture6_py.pdf" target="_blank">📄 Lecture 6 — Functions & Recursion</a></li>
  <li><a href="../Python_Course/Lecture7_py.pdf" target="_blank">📄 Lecture 7 — File I/O</a></li>
  <li><a href="../Python_Course/Lecture8_py.pdf" target="_blank">📄 Lecture 8 — OOP in Python</a></li>
</ul>

<h2>OOPs Notes PDF</h2>
<p>
  <a href="../Python_Course/OOPs_Notes.md.pdf" target="_blank" class="btn primary" style="display:inline-flex;margin-top:.5rem;">
    📄 Open Complete OOPs Notes
  </a>
</p>

<h2>How to use</h2>
<ul>
  <li>Click any link above to open the PDF in your browser or PDF viewer</li>
  <li>PDFs are located in the <code>Python_Course/</code> directory</li>
  <li>These notes correspond to the YouTube video lectures</li>
</ul>
`
  }
};
