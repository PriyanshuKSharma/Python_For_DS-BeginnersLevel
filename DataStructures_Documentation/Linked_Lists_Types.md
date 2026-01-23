# Linked List Types

A Linked List is a linear data structure where elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers.

## 1. Singly Linked List

In a Singly Linked List, each node contains:

- **Data**: The value stored in the node.
- **Next**: A pointer (reference) to the next node in the sequence.

**Traversal**: Forward only.
**Memory**: Less memory per node (one pointer).

**Structure:**

```
[Data|Next] -> [Data|Next] -> None
```

## 2. Doubly Linked List

In a Doubly Linked List, each node contains:

- **Data**: The value stored in the node.
- **Next**: A pointer to the next node.
- **Prev**: A pointer to the previous node.

**Traversal**: Forward and Backward.
**Memory**: More memory per node (two pointers).

**Structure:**

```
None <- [Prev|Data|Next] <-> [Prev|Data|Next] -> None
```

## 3. Circular Linked List

In a Circular Linked List, the last node points back to the first node instead of `None`.
It can be singly or doubly circular. (Our implementation is Singly Circular).

**Traversal**: Standard traversal, but needs care to avoid infinite loops.
**Use Cases**: Buffer allocation, round-robin scheduling.

**Structure:**

```
[Data|Next] -> [Data|Next] -> (Points back to Head)
```
