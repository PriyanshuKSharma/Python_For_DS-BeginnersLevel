# Node class represents a single element in the linked list
class Node:
    def __init__(self, data):
        self.data = data  # Assign data to the node
        self.next = None  # Initialize next as None (null pointer)

# LinkedList class manages the nodes
class LinkedList:
    def __init__(self):
        self.head = None  # Initialize the head of the list as None (empty list)

    # TRAVERSAL OPERATION
    def traverse(self):
        """Traverse and print all elements in the list."""
        current_node = self.head  # Start from the head of the list
        
        # Check if the list is empty
        if current_node is None:  # If head is None
            print("List is empty")  # Print message
            return  # Exit the function

        # Loop until the end of the list (when current_node becomes None)
        while current_node is not None:  # While there is a node to visit
            print(current_node.data, end=" -> ")  # Print the data of the current node
            current_node = current_node.next  # Move to the next node
        print("None")  # Print None at the end to indicate end of list

    # INSERTION OPERATIONS
    def insert_at_beginning(self, data):
        """Insert a new node at the beginning of the list."""
        new_node = Node(data)  # Create a new node with the given data
        new_node.next = self.head  # Point the new node's next to the current head
        self.head = new_node  # Update head to point to the new node

    def insert_at_end(self, data):
        """Insert a new node at the end of the list."""
        new_node = Node(data)  # Create a new node with the given data
        
        # If the list is empty, make the new node the head
        if self.head is None:  # Check if head is None
            self.head = new_node  # Set head to the new node
            return  # Exit as the job is done

        last_node = self.head  # Start from the head to find the last node
        
        # Traverse to the last node
        while last_node.next is not None:  # While the current node has a next node
            last_node = last_node.next  # Move to the next node
        
        last_node.next = new_node  # Set the next of the last node to the new node

    def insert_at_position(self, position, data):
        """Insert a new node at a specific position (0-indexed)."""
        if position == 0:  # If the position is 0 (beginning)
            self.insert_at_beginning(data)  # Reuse the insert_at_beginning method
            return  # Exit function

        new_node = Node(data)  # Create the new node
        current_node = self.head  # Start traversing from the head
        count = 0  # Initialize a counter to track position

        # Traverse to the node JUST BEFORE the position we want to insert at
        # current_node MUST exist and we stop before we go past valid nodes
        while current_node is not None and count < position - 1:
            current_node = current_node.next  # Move to next node
            count += 1  # Increment counter

        # If current_node is None, it means the position is out of bounds
        if current_node is None:
            print("Index out of bounds")  # Error message
            return  # Exit

        # Perform the insertion
        new_node.next = current_node.next  # New node points to the node currently at 'position'
        current_node.next = new_node  # The previous node now points to the new node

    # DELETION OPERATIONS
    def delete_by_value(self, key):
        """Delete the first occurrence of a node with the given value."""
        current_node = self.head  # Start from the head

        # Case 1: The list is empty
        if current_node is None:  # Check if head exists
            print("List is empty")  # Nothing to delete
            return

        # Case 2: The head node itself holds the key
        if current_node.data == key:  # If head's data matches the key
            self.head = current_node.next  # Move head to the next node
            current_node = None  # Free the old head (optional in Python due to GC)
            return  # Exit

        # Case 3: Search for the key in the rest of the list
        prev = None  # To keep track of the previous node
        while current_node is not None and current_node.data != key:  # Traverse until match or end
            prev = current_node  # Update prev to current
            current_node = current_node.next  # Move current to next

        # If key was not found (current_node became None)
        if current_node is None:
            print(f"Value {key} not found")  # Key not in list
            return  # Exit

        # Unlink the node
        prev.next = current_node.next  # Previous node skips the current node
        current_node = None  # Remove reference to the deleted node

    def delete_at_position(self, position):
        """Delete the node at a specific position (0-indexed)."""
        # Case 1: List is empty
        if self.head is None:
            print("List is empty")
            return

        # Case 2: Deleting the head (position 0)
        current_node = self.head  # Start at head
        if position == 0:  # If position is 0
            self.head = current_node.next  # Move head pointer to the next node
            current_node = None  # Clean up
            return  # Exit

        # Case 3: Traverse to find the node just before the one to delete
        prev = None
        count = 0
        while current_node is not None and count != position:
            prev = current_node  # Keep track of previous node
            current_node = current_node.next  # Move to next node
            count += 1  # Increment counter

        # If position was greater than list size
        if current_node is None:
            print("Position out of bounds")
            return

        # Unlink the node
        prev.next = current_node.next  # Bypass the node to be deleted
        current_node = None  # Clean up

# Example Usage
if __name__ == "__main__":
    ll = LinkedList()  # Create a new LinkedList object

    print("--- 1. Insert at Beginning ---")
    ll.insert_at_beginning(5)  # List: 5
    ll.traverse()  # Display list

    print("\n--- 2. Insert at End ---")
    ll.insert_at_end(10)  # List: 5 -> 10
    ll.insert_at_end(20)  # List: 5 -> 10 -> 20
    ll.traverse()

    print("\n--- 3. Insert at Position 1 (Value 15) ---")
    ll.insert_at_position(1, 15)  # List: 5 -> 15 -> 10 -> 20
    ll.traverse()

    print("\n--- 4. Delete by Value (20) ---")
    ll.delete_by_value(20)  # List: 5 -> 15 -> 10
    ll.traverse()

    print("\n--- 5. Delete at Position 0 (Value 5) ---")
    ll.delete_at_position(0)  # List: 15 -> 10
    ll.traverse()
