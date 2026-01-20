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

## 🛠 Common Operations (Concept)

### 1. Traversal (Ghumna)

- **English**: Visiting every node in the list one by one to check values or print them. We start from Head and move next until we reach `None`.
- **Hinglish**: List ke har ek node par ja kar uska data check karna ya print karna. Hum Head se shuru karte hain aur jab tak Next `None` nahi milta, aage badhte rehte hain.

### 2. Insertion at Position (Beech mein dalna)

- **English**: To insert at index `P`, traversing to index `P-1`. Point the new node to the node currently at `P`, and update `P-1`'s next to point to the new node.
- **Hinglish**: Agar kisi specific jagah (position) par data dalna hai, toh usse **ek pehle** wale node par ruk jao.
  - Example: Position 2 par dalna hai, toh Position 1 wale node ka 'Next' naye node par point kara do.

### 3. Deletion (Hatana)

- **English**: To delete a node at index `P`, traverse to `P-1`. Change `P-1`'s next pointer to skip the `P`th node and point directly to `P+1`.
- **Hinglish**: Kisi node ko hatane ke liye, usse **pichle** node ka connection direct **agle** node se kar do. Beech wala node apne aap list se alag ho jayega (bypass ho jayega).

---

## 💻 Implementation (Singly Linked List)

Check `Revision/linked_list_implementation.py` for the complete code with line-by-line comments.

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

## ⏳ Time Complexity Analysis (Detailed)

### 1. Accessing an Element (Access)

- **Time Complexity**: **O(n)**
- **Explanation**: To get the 5th element, you cannot jump directly (like arrays `arr[4]`). You must start from Head -> Node 1 -> Node 2 -> ... -> Node 5.
- **Hinglish**: Agar aapko 5th element chahiye, toh aap direct wahan nahi ja sakte. Aapko pehle node se shuru karke ek-ek karke aage badhna padega.

### 2. Searching for an Element (Search)

- **Time Complexity**: **O(n)**
- **Explanation**: In the worst case (element is at the end or not present), you have to traverse the entire list.
- **Hinglish**: Agar element last mein hua ya list mein hua hi nahi, toh poori list check karni padegi.

### 3. Insertion (Jodna)

- **At Beginning (Start)**: **O(1)**
  - **Why?**: Just update the new node's next pointer to Head, and make new node the Head. No traversal needed.
  - _Bas Head pointer change karna hota hai._
- **At (End)**: **O(n)** (if no Tail pointer)
  - **Why?**: You have to traverse the whole list to reach the last node.
  - _Agar Tail pointer nahi hai, toh poori list traverse karni padegi last tak_.
- **At Position P**: **O(P)** -> effectively **O(n)**
  - **Why?**: You must traverse P nodes to reach the correct position.

### 4. Deletion (Hatana)

- **Delete from Beginning**: **O(1)**
  - **Why?**: Just move Head to Head.next.
- **Delete from End**: **O(n)**
  - **Why?**: You need to traverse to the second-last node to update its pointer to None.
- **Delete by Value**: **O(n)**
  - **Why?**: You have to search for the value first.

| Operation          | Best Case            | Average Case | Worst Case |
| :----------------- | :------------------- | :----------- | :--------- |
| **Access**         | O(1) (Head)          | O(n)         | O(n)       |
| **Search**         | O(1) (Head)          | O(n)         | O(n)       |
| **Insert (Start)** | O(1)                 | O(1)         | O(1)       |
| **Insert (End)**   | O(1) (if Tail known) | O(n)         | O(n)       |
| **Delete (Start)** | O(1)                 | O(1)         | O(1)       |
| **Delete (End)**   | O(n)                 | O(n)         | O(n)       |

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
