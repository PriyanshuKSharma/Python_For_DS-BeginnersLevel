st = []

#Stack implement using List
# Append
# st.append(8)
# st.append(4)
# st.append(3)
# st.append(10)
# st.append(2)

print(st)

# Popping
# st.pop()

# print(st)
# print(st[-1])


#Using OOP
class Stack:
    def __init__(self):
        self.st = []

    def push(self, x):
        self.st.append(x)

    def pop(self):
        if len(self.st) == 0:
            return -1
        return self.st.pop()

    def top(self):
        if len(self.st) == 0:
            return -1
        return self.st[-1]

    def size(self):
        return len(self.st)


stack = Stack()

stack.push(8)
stack.push(9)
stack.push(5)
stack.push(7)
stack.push(4)
stack.push(3)

print("Printing Top most element",stack.top())  # 3
print("Element popped",stack.pop())  # 3
print("Printing Top most element",stack.top())  # 4
print("Element popped",stack.size()) # 5


#Stack implementation using 


