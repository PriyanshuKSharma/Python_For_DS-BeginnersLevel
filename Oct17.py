a=0B1111
print(a)
print(type(a))

b=55456548451218485562554878
print(type(b))
print(id(a))
print(id(15))

a+=1
print(a)
print(type(a))
print(id(a))
print(id(15))

c=0xface
print(c)
print(hex(c))
print(oct(c))

d=20.68
print(type(d))
print(id(d))

e=20.68
f=20.68
print(id(e))
print(id(f))

g=20.58e8
print(g)

h=10_0_0_0 # '_' is used to count the no. of digits in a no.
print(h)

i=23_4_5_6_7
print(i)

print(float(45))
print(float(0b11111))
print(int(45.78)) #data loss


j=10+2J
print(j.imag)
print(j.real)
print(j)

k=0b111 + 20.8j
print(k.imag)
print(k.real)
print(k)

l=True
print(l)
print(type(l))
print(int(l))
print(float(l))
print(bin(l))
print(complex(l))

print(True+True*False)

#iteration statements
if(True):
    print("hello")

else:
    print("hi")

print(bool(-78))
print(bool(000000.000008)) #except 0 every non zero no. will give True output in boolean

if(""):
    print("hello")

else:
    print("hi") #anti string i.e., nothing present b/w "" then it will print false in bool

if(" "):
    print("hello")

else:
    print("hi") #if " " has some space b/w them then it will print true in bool

#DataTypes
s="rahul"
print(s)
print(type(s))
print(id(s))

p="rahul's \"Acer\" laptop"
print(p)
print(type(p))
print(id(p))

q="""rahul is
a
smart
boy"""
print(q)

o=int("10")
print(o)

print(~19)
#2's complement- for -ve from +ve
#2's complement = 1's complement + 1
print(bin(19))
print(bin(~19))
print(bin(23))
print(~(-23))
