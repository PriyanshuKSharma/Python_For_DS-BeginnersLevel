# ⏳ Universal Time Complexity Guide (Data Structures)

## 📘 Overview

This guide provides the **Big-O Time Complexity** for common operations across all major Python data structures. Understanding these complexities is crucial for writing efficient code.

---

## 🚀 1. Python Lists (Arrays)

Python Lists are implemented as **Dynamic Arrays**.

| Operation                         | Best Case  | Average Case | Worst Case | Explanation                                       |
| :-------------------------------- | :--------- | :----------- | :--------- | :------------------------------------------------ |
| **Index Access** `arr[i]`         | O(1)       | O(1)         | O(1)       | Direct memory access.                             |
| **Append** `arr.append(x)`        | O(1)       | O(1)         | O(1)       | Amortized O(1) (occasionally O(n) when resizing). |
| **Pop Last** `arr.pop()`          | O(1)       | O(1)         | O(1)       | Just removing the last element.                   |
| **Pop Intermediate** `arr.pop(i)` | O(n)       | O(n)         | O(n)       | Requires shifting all elements after index `i`.   |
| **Insert** `arr.insert(i, x)`     | O(n)       | O(n)         | O(n)       | Requires shifting elements to make space.         |
| **Search/Membership** `x in arr`  | O(1)       | O(n)         | O(n)       | Linear search (checks every element).             |
| **Sort** `arr.sort()`             | O(n log n) | O(n log n)   | O(n log n) | Uses Timsort.                                     |

---

## 🔗 2. Linked Lists

Implemented as nodes with pointers. (See [Full Guide](README_LinkedList.md)).

| Operation             | Complexity | Explanation (Hinglish)                                  |
| :-------------------- | :--------- | :------------------------------------------------------ |
| **Access Element**    | **O(n)**   | Head se start karke traverse karna padta hai.           |
| **Search Element**    | **O(n)**   | Poori list check karni pad sakti hai.                   |
| **Insert at Start**   | **O(1)**   | Bas Head pointer change karna hai.                      |
| **Insert at End**     | **O(n)**   | Last node tak jana padega (unless Tail pointer exists). |
| **Delete from Start** | **O(1)**   | Head ko aage badha do.                                  |
| **Delete from End**   | **O(n)**   | Second last node tak jana padega.                       |

---

## 🗝️ 3. Dictionaries (Hash Maps)

Implemented using **Hash Tables**. Fast lookups!

| Operation                    | Average Case | Worst Case | Explanation                                             |
| :--------------------------- | :----------- | :--------- | :------------------------------------------------------ |
| **Get Item** `d[key]`        | **O(1)**     | O(n)       | Instant lookup via Hash (Rare collision leads to O(n)). |
| **Set Item** `d[key] = val`  | **O(1)**     | O(n)       | Hashing key to find slot.                               |
| **Delete Item** `del d[key]` | **O(1)**     | O(n)       | Hashing key to find and remove.                         |
| **Check Key** `key in d`     | **O(1)**     | O(n)       | Very fast membership testing.                           |

> **Note**: Worst case O(n) happens only with many hash collisions (very rare in practice).

---

## 🌀 4. Sets

Implemented using **Hash Tables** (like Dictionaries, but keys only).

| Operation                | Average Case           | Worst Case         | Explanation                     |
| :----------------------- | :--------------------- | :----------------- | :------------------------------ |
| **Add** `s.add(x)`       | **O(1)**               | O(n)               | Hashing val to find slot.       |
| **Remove** `s.remove(x)` | **O(1)**               | O(n)               | Hashing val to find and remove. |
| **Check** `x in s`       | **O(1)**               | O(n)               | Best way to check existence!    |
| **Union** `s             | t`                     | O(len(s) + len(t)) | -                               |
| **Intersection** `s & t` | O(min(len(s), len(t))) | -                  |

---

## 📦 5. Tuples

Immutable sequences. Similar performance to Lists for access.

| Operation               | Complexity | Explanation      |
| :---------------------- | :--------- | :--------------- |
| **Index Access** `t[i]` | **O(1)**   | Direct access.   |
| **Search** `x in t`     | **O(n)**   | Linear search.   |
| **Iteration**           | **O(n)**   | Visit all items. |

---

## 🏆 Summary Comparison

| Data Structure   | Access   | Search   | Insert           | Delete           | Best For                                |
| :--------------- | :------- | :------- | :--------------- | :--------------- | :-------------------------------------- |
| **List (Array)** | **O(1)** | O(n)     | O(n) (End: O(1)) | O(n) (End: O(1)) | Sequential data, random access.         |
| **Linked List**  | O(n)     | O(n)     | **O(1)** (Start) | **O(1)** (Start) | Frequent insertions/deletions at start. |
| **Dictionary**   | N/A      | **O(1)** | **O(1)**         | **O(1)**         | Key-Value pairs, fast lookup.           |
| **Set**          | N/A      | **O(1)** | **O(1)**         | **O(1)**         | Unique items, fast membership check.    |
