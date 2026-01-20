class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def insert_at_beginning(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def insert_at_end(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        
        last_node = self.head
        while last_node.next:
            last_node = last_node.next
        
        last_node.next = new_node

    def delete_node(self, key):
        curr_node = self.head

        # If head node itself holds the key to be deleted
        if curr_node and curr_node.data == key:
            self.head = curr_node.next
            curr_node = None
            return

        # Search for the key to be deleted
        prev = None
        while curr_node and curr_node.data != key:
            prev = curr_node
            curr_node = curr_node.next

        # If key was not present in linked list
        if curr_node is None:
            print(f"Value {key} not found in the list.")
            return

        # Unlink the node from linked list
        prev.next = curr_node.next
        curr_node = None

    def display(self):
        nodes = []
        curr_node = self.head
        while curr_node:
            nodes.append(str(curr_node.data))
            curr_node = curr_node.next
        print(" -> ".join(nodes))

# Example Usage
if __name__ == "__main__":
    ll = LinkedList()
    
    print("Inserting 10, 20, 30 at the end:")
    ll.insert_at_end(10)
    ll.insert_at_end(20)
    ll.insert_at_end(30)
    ll.display()
    
    print("\nInserting 5 at the beginning:")
    ll.insert_at_beginning(5)
    ll.display()
    
    print("\nDeleting 20:")
    ll.delete_node(20)
    ll.display()
    
    print("\nDeleting 100 (not in list):")
    ll.delete_node(100)
    ll.display()
