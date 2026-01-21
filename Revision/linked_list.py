class Node:
  def __init__(self, data):
    self.data = data
    self.next = None

# Creating nodes
a = Node(5)
b = Node(10)
c = Node(7)

# Linking the nodes
a.next = b
b.next = c

# Defining head node
head = a #head node: the initial node of linked lists
# print(head.data) # 5
# print(head.next.data) #10
# print(head.next.next.data) #7

#Traversing
def traverseLinkedList(head):
  curr = head #current node

  while curr!=None:
    print("Linked List: ",curr.data)
    curr = curr.next

# traverseLinkedList(head)

#Insertion at beginning
newNode = Node(4) #First create a node
newNode.next = head #Provide the address of the head node
head = newNode #Update the head node with the new one
# print("Updated head", head.data)

# traverseLinkedList(head)

#Insertion at end
newNode = Node(1)
curr = head
# traverse till the last element
while curr.next!= None:
  curr = curr.next

curr.next = newNode
# traverseLinkedList(head)

#Insertion at kth index
k = 3
newNode = Node(6)
curr = head

for i in range(k-1):
  curr = curr.next

newNode.next = curr.next
curr.next = newNode
# traverseLinkedList(head)

#Deletion at begiining
head = head.next
# traverseLinkedList(head)

#Deletion at end
curr = head

while curr.next.next!=None:
  curr = curr.next

curr.next = None
traverseLinkedList(head)