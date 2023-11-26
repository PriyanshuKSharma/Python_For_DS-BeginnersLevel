#Basic Calculator In Python
first = input("Enter your first no: ")
operator = input("Enter your operator(+,-,*,/,%): ")
second = input("Enter your second no: ")

first=int(first)
second=int(second)

if operator=='+':
    print(first+second)

elif operator=='-':
    print(first-second)

elif operator=='*':
    print(first*second)

elif operator=='/':
    print(first/second)

elif operator=='%':
    print(first%second)

else:
    print("Invalid Operator")
