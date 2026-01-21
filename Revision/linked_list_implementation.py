# Node class represents a single element in the linked list
class Node:
    def __init__(self, data):
        self.data = data  # Assign data to the node
        self.next = None  # Initialize next as None (null pointer)

class DoublyNode(Node):
    def __init__(self, data):
        super().__init__(data)
        self.prev = None

# Singly Linked List
class SinglyLinkedList:
    def __init__(self):
        self.head = None

    # TRAVERSAL OPERATION
    def traverse(self):
        """Traverse and print all elements in the list."""
        current_node = self.head
        if current_node is None:
            print("Singly List: Empty")
            return
        
        print("Singly List: ", end="")
        while current_node is not None:
            print(current_node.data, end=" -> ")
            current_node = current_node.next
        print("None")

    # INSERTION OPERATIONS
    def insert_at_beginning(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def insert_at_end(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return
        last_node = self.head
        while last_node.next is not None:
            last_node = last_node.next
        last_node.next = new_node

    def insert_at_position(self, position, data):
        if position == 0:
            self.insert_at_beginning(data)
            return
        new_node = Node(data)
        current_node = self.head
        count = 0
        while current_node is not None and count < position - 1:
            current_node = current_node.next
            count += 1
        if current_node is None:
            print("Index out of bounds")
            return
        new_node.next = current_node.next
        current_node.next = new_node

    # DELETION OPERATIONS
    def delete_by_value(self, key):
        current_node = self.head
        if current_node is None:
            print("List is empty")
            return
        if current_node.data == key:
            self.head = current_node.next
            current_node = None
            return
        prev = None
        while current_node is not None and current_node.data != key:
            prev = current_node
            current_node = current_node.next
        if current_node is None:
            print(f"Value {key} not found")
            return
        prev.next = current_node.next
        current_node = None

    def delete_at_position(self, position):
        if self.head is None:
            print("List is empty")
            return
        current_node = self.head
        if position == 0:
            self.head = current_node.next
            current_node = None
            return
        prev = None
        count = 0
        while current_node is not None and count != position:
            prev = current_node
            current_node = current_node.next
            count += 1
        if current_node is None:
            print("Position out of bounds")
            return
        prev.next = current_node.next
        current_node = None


# Doubly Linked List
class DoublyLinkedList:
    def __init__(self):
        self.head = None

    def traverse(self):
        current_node = self.head
        if current_node is None:
            print("Doubly List: Empty")
            return
        print("Doubly List: ", end="")
        while current_node is not None:
            print(current_node.data, end=" <-> ")
            current_node = current_node.next
        print("None")

    def insert_at_beginning(self, data):
        new_node = DoublyNode(data)
        new_node.next = self.head
        if self.head is not None:
            self.head.prev = new_node
        self.head = new_node

    def insert_at_end(self, data):
        new_node = DoublyNode(data)
        if self.head is None:
            self.head = new_node
            return
        last_node = self.head
        while last_node.next is not None:
            last_node = last_node.next
        last_node.next = new_node
        new_node.prev = last_node

    def delete_by_value(self, key):
        current_node = self.head
        if current_node is None:
            print("List is empty")
            return
        
        # Head node to be deleted
        if current_node.data == key:
            self.head = current_node.next
            if self.head:
                self.head.prev = None
            current_node = None
            return

        # Search for the key
        while current_node is not None and current_node.data != key:
            current_node = current_node.next
        
        if current_node is None:
            print(f"Value {key} not found")
            return

        # Unlink the node
        if current_node.next:
            current_node.next.prev = current_node.prev
        if current_node.prev:
            current_node.prev.next = current_node.next
        current_node = None


# Circular Linked List
class CircularLinkedList:
    def __init__(self):
        self.head = None

    def traverse(self):
        if self.head is None:
            print("Circular List: Empty")
            return
        print("Circular List: ", end="")
        current_node = self.head
        while True:
            print(current_node.data, end=" -> ")
            current_node = current_node.next
            if current_node == self.head:
                break
        print("(Head)")

    def insert_at_beginning(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            new_node.next = self.head
        else:
            current_node = self.head
            while current_node.next != self.head:
                current_node = current_node.next
            new_node.next = self.head
            current_node.next = new_node
            self.head = new_node

    def insert_at_end(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            new_node.next = self.head
        else:
            current_node = self.head
            while current_node.next != self.head:
                current_node = current_node.next
            current_node.next = new_node
            new_node.next = self.head

    def delete_by_value(self, key):
        if self.head is None:
            print("List is empty")
            return
        
        # Deleting head
        if self.head.data == key:
            if self.head.next == self.head: # Only one node
                self.head = None
            else:
                current_node = self.head
                while current_node.next != self.head:
                    current_node = current_node.next
                current_node.next = self.head.next
                self.head = self.head.next
            return

        current_node = self.head
        prev = None
        while current_node.next != self.head:
            prev = current_node
            current_node = current_node.next
            if current_node.data == key:
                prev.next = current_node.next
                current_node = None
                return
        
        print(f"Value {key} not found")


# Example Usage
if __name__ == "__main__":
    print("\nXXX SINGLY LINKED LIST XXX")
    sll = SinglyLinkedList()
    sll.insert_at_beginning(5)
    sll.insert_at_end(10)
    sll.insert_at_position(1, 7) # 5 -> 7 -> 10
    sll.traverse()
    sll.delete_by_value(7) # 5 -> 10
    sll.traverse()

    print("\nXXX DOUBLY LINKED LIST XXX")
    dll = DoublyLinkedList()
    dll.insert_at_beginning(20)
    dll.insert_at_end(30) # 20 <-> 30
    dll.insert_at_beginning(10) # 10 <-> 20 <-> 30
    dll.traverse()
    dll.delete_by_value(20) # 10 <-> 30
    dll.traverse()

    print("\nXXX CIRCULAR LINKED LIST XXX")
    cll = CircularLinkedList()
    cll.insert_at_beginning(100)
    cll.insert_at_end(200) # 100 -> 200 -> (Head)
    cll.insert_at_beginning(50) # 50 -> 100 -> 200 -> (Head)
    cll.traverse()
    cll.delete_by_value(100) # 50 -> 200 -> (Head)
    cll.traverse()
