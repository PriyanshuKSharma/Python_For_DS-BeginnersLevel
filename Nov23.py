#Functions in python
#Function defination
def greet():
    print("Welcome user")
    print("Welcome coders to programming")

def Additon(a,b):
    #print(a+b) --> Additon(8,9)
    return(a+b)

def Add_sub(a,b):
    return(a+b),(a-b)

#function calling
greet()
result, result1=Add_sub(17,13)
print(result)
print(result1)

def update(a):
    print(id(a))
    a=10
    print(a)
b= 20
update(b)
print(id(b))

def update1(x):
    x[0]=22
    print(x)

lst=[20,30,40]
update1(lst)
print(lst)

#python doesnot support call by value and call by reference

#types of parameter --> positon, keyword, default
#position is mandatory
def person(name, age):
    print(name) #position
    print(age)
person(name="Rahul", age=15)
person(age=15, name="Rahul") #keyword

def person1(name, age=18):
    print(name) #position
    print(age+5)
person1("Rahul") #keyword

#variable argument
# *b in tuple form
def sum(a, *b):
    c=a
    for i in b:
        c=c+i
    print("addition is:",c)
sum(10,20,30,40,50,60, 78, 79, 56, 34)

def sum1(*b):
    add=0
    for i in b:
        add=add+i
    print("addition is:",add)
sum1(10,20,30,40,50,60, 78, 79, 56, 34)

#keyword variable lenght
#in dictionary form
def person(**b):
    print(b)
person(name="Rahul", age=15, contact="9638527410")

def person1(**c):
    for i in b.items():
        print(i)
person(name="Rahul", age=15, contact="9638527410", marks=89)

#lambda function
f = lambda a:a*a
print(f(3))
print(f(5))

g = lambda x,y:x+y
print(g(4,5))

h = lambda l,m:l*m
print(h(4,5))