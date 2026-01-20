# 🔗 Linked List in Python

## 📘 Concept (English)

A **Linked List** is a linear data structure where elements are not stored at contiguous memory locations. Instead, the elements are linked using pointers.

- **Node**: Each element in a linked list is called a Node. Not contains two parts:
  1.  **Data**: The value stored.
  2.  **Next**: A pointer (reference) to the next node.
- **Head**: The first node of the linked list.

### Why use Linked Lists?

- **Dynamic Size**: Unlike arrays (where size is fixed in some languages), linked lists can grow and shrink dynamically.
- **Efficient Insertion/Deletion**: Insertions and deletions are easier (O(1) if we have the pointer) compared to arrays where we have to shift elements (O(n)).

---

## 📙 Concept (Hinglish)

**Linked List** ek aisi list hai jahan data memory mein ek ke baad ek (contiguous) store nahi hota. Har element (jise hum **Node** kehte hain) apne agle element ka address rakhta hai.

Imagine karo ek "treasure hunt" jahan har parchii (chit) pe agla clue kahan milega, uska address likha hai.

- **Node**: Linked list ka har tukda 'Node' kehlata hai. Iske do hisse hote hain:
  1.  **Data**: Jo value hum store karna chahte hain (jaise 10, 20).
  2.  **Next**: Agle node ka address.
- **Head**: Pehle node ko 'Head' kehte hain. Agar Head kho gaya, toh puri list kho jayegi!

### Linked List kyun use karein?

- **Size change ho sakta hai**: Arrays ki tarah humein pehle se size batane ki zarurat nahi hoti.
- **Insert/Delete aasaan hai**: Beech mein se kuch delete karne ke liye bas pointers badalne padte hain, baaki elements ko shift nahi karna padta (jo arrays mein karna padta hai).

---

## 💻 Implementation (Singly Linked List)

Check `linked_list_implementation.py` for variables and runnable code.

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None  # Initially, next is None

class LinkedList:
    def __init__(self):
        self.head = None  # Empty list starts with None

    # Insert at End
    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        last = self.head
        while last.next:
            last = last.next
        last.next = new_node

    # Print List
    def display(self):
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")
```

---

## ⚖️ Linked List vs Arrays (Python Lists)

| Feature               | Linked List                  | Array (Python List)               |
| :-------------------- | :--------------------------- | :-------------------------------- |
| **Memory**            | Non-Contiguous (Scattered)   | Contiguous (Continuous block)     |
| **Size**              | Dynamic                      | Dynamic (but resizing is costly)  |
| **Access Time**       | O(n) (Sequential Access)     | O(1) (Random Access via Index)    |
| **Insertion (Start)** | O(1)                         | O(n) (Need to shift all elements) |
| **Insertion (End)**   | O(n) (if no tail pointer)    | O(1) (Amortized)                  |
| **Memory Usage**      | High (Stores data + pointer) | Low (Only data)                   |

### Kab kya use karein?

- **Array (List) use karein** agar aapko kisi bhi element ko index se access karna ho (`arr[5]`).
- **Linked List use karein** agar aapko baar-baar beech mein ya shuru mein data add/remove karna ho.
