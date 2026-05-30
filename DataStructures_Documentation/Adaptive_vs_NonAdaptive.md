# ⚡ Adaptive vs Non-Adaptive Sorting Algorithms

## 📘 Concept (English)

### What is an Adaptive Algorithm?

A sorting algorithm is called **adaptive** if it takes advantage of the existing order in the input sequence. This means that if the input list is already sorted (or almost sorted), the algorithm performs better (runs faster).

For example, **Insertion Sort** is adaptive. If you give it a list that is already sorted, it takes **O(n)** time. If the list is reverse sorted, it takes **O(n²)** time.

### What is a Non-Adaptive Algorithm?

A **non-adaptive** sorting algorithm acts independent of the initial order of elements. It will perform the same number of comparisons and operations regardless of whether the list is sorted, random, or reverse sorted.

For example, **Selection Sort** is non-adaptive. It will always take **O(n²)** time, even if the list is already sorted, because it still searches for the minimum element in the remaining unsorted part every single time.

---

## 📙 Concept (Hinglish)

### Adaptive Algorithm kya hai?

Ek sorting algorithm ko **adaptive** tab kaha jata hai jab woh apne input data ke existing order ka faayda utha sake. Iska matlab yeh hai ki agar list pehle se sorted hai (ya thodi bahut sorted hai), toh algorithm jaldi kaam khatam kar lega.

Example ke liye, **Insertion Sort**. Agar aap isse ek sorted list doge, toh yeh sirf **O(n)** time lega. Lekin agar list reverse sorted hai, toh **O(n²)** time lega.

### Non-Adaptive Algorithm kya hai?

Ek **non-adaptive** algorithm ko isse koi farak nahi padta ki list pehle se sorted hai ya nahi. Woh har case mein utna hi time lega aur utne hi comparisons karega.

Example ke liye, **Selection Sort**. Chaahe aap isse sorted list do ya random, yeh hamesha **O(n²)** time hi lega kyunki yeh har baar bache hue elements mein se minimum dhoondhne jayega hi jayega.

---

## 🔍 Classification

### ✅ Adaptive Algorithms (Gets Faster on Sorted Data)

These algorithms improve their performance when data is partially or fully sorted:

1.  **Bubble Sort:** Optimized version stops early if no swaps are made in a pass. Best case: O(n).
2.  **Insertion Sort:** Stops scanning backwards once the correct position is found. Best case: O(n).
3.  **Shell Sort:** An extension of insertion sort, also adaptive.

### ❌ Non-Adaptive Algorithms (Same Speed Always)

These algorithms generally perform the same amount of work regardless of data order:

1.  **Selection Sort:** Always scans the rest of the list to find the minimum. Always O(n²).
2.  **Merge Sort:** Always divides the list and merges back. Always O(n log n).
3.  **Quick Sort:** Standard implementation is not adaptive (and can be worse on sorted data).
4.  **Heap Sort:** Building and sorting the heap takes the same effort.

---

## 📝 Summary Table

| Algorithm          | Adaptive? | Reason                                       | Best Case Complexity |
| :----------------- | :-------- | :------------------------------------------- | :------------------- |
| **Bubble Sort**    | Yes       | Stops if no swaps occur (optimized).         | O(n)                 |
| **Insertion Sort** | Yes       | Breaks inner loop early if order is correct. | O(n)                 |
| **Selection Sort** | No        | Always scans for minimum element.            | O(n²)                |
| **Merge Sort**     | No        | Always divides and merges recursively.       | O(n log n)           |
| **Quick Sort**     | No        | Partitioning happens regardless of order.    | O(n log n)\*         |
| **Heap Sort**      | No        | Always builds heap and extracts max.         | O(n log n)           |

_\*Note: Quick Sort's best case is O(n log n), but it can degrade to O(n²) on sorted data if the pivot choice is poor (like always picking the first element)._
