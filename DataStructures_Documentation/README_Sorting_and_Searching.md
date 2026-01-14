# Python Sorting and Searching Algorithms - Complete Guide

## 📋 Overview

Sorting and searching are fundamental operations in computer science. This guide covers the implementation, complexity, and use cases for common algorithms in Python.

## 🔢 Sorting Algorithms

Sorting is the process of arranging data in a specific order (usually ascending or descending).

### 🛁 Bubble Sort

**Concept:** Repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break
    return arr
```

### 🎯 Selection Sort

**Concept:** Repeatedly finds the minimum element (considering ascending order) from the unsorted part and puts it at the beginning.

- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)

```python
def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr
```

### 📥 Insertion Sort

**Concept:** Builds the final sorted array one item at a time. It assumes the first element is sorted and then picks the next element and places it in the correct position among the sorted elements.

- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)

```python
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr
```

### 🤝 Merge Sort

**Concept:** A divide-and-conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.

- **Time Complexity:** O(n log n)
- **Space Complexity:** O(n)

```python
def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        L = arr[:mid]
        R = arr[mid:]

        merge_sort(L)
        merge_sort(R)

        i = j = k = 0
        while i < len(L) and j < len(R):
            if L[i] < R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1

        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1

        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1
    return arr
```

### ⚡ Quick Sort

**Concept:** Also a divide-and-conquer algorithm. It picks an element as a pivot and partitions the given array around the picked pivot.

- **Time Complexity:** Average O(n log n), Worst O(n²)
- **Space Complexity:** O(log n)

```python
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    else:
        pivot = arr[0]
        less = [x for x in arr[1:] if x <= pivot]
        greater = [x for x in arr[1:] if x > pivot]
        return quick_sort(less) + [pivot] + quick_sort(greater)
```

### 📊 Counting Sort

**Concept:** An integer sorting algorithm that operates by counting the number of objects that have each distinct key value. It works best when the range of input values is not significantly greater than the number of values.

- **Time Complexity:** O(n + k)
- **Space Complexity:** O(n + k)

```python
def counting_sort(arr):
    if not arr: return arr
    max_val = max(arr)
    min_val = min(arr)
    range_val = max_val - min_val + 1
    count = [0] * range_val
    output = [0] * len(arr)

    for i in range(len(arr)):
        count[arr[i] - min_val] += 1

    for i in range(1, len(count)):
        count[i] += count[i - 1]

    for i in range(len(arr) - 1, -1, -1):
        output[count[arr[i] - min_val] - 1] = arr[i]
        count[arr[i] - min_val] -= 1

    return output
```

## 🔍 Searching Algorithms

Searching is the process of retrieving information stored in some data structure.

### 🚶 Linear Search

**Concept:** Iterates through the list sequentially to find the target. Works on unsorted arrays.

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

```python
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1
```

### ✂️ Binary Search

**Concept:** Efficiently searches a **sorted** array by repeatedly dividing the search interval in half.

- **Time Complexity:** O(log n)
- **Space Complexity:** O(1) for iterative

```python
def binary_search(arr, target):
    low = 0
    high = len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1
```

## ⚖️ Complexity Comparison

| Algorithm          | Best Time  | Average Time | Worst Time | Space    | Stable? |
| :----------------- | :--------- | :----------- | :--------- | :------- | :------ |
| **Bubble Sort**    | O(n)       | O(n²)        | O(n²)      | O(1)     | Yes     |
| **Selection Sort** | O(n²)      | O(n²)        | O(n²)      | O(1)     | No      |
| **Insertion Sort** | O(n)       | O(n²)        | O(n²)      | O(1)     | Yes     |
| **Merge Sort**     | O(n log n) | O(n log n)   | O(n log n) | O(n)     | Yes     |
| **Quick Sort**     | O(n log n) | O(n log n)   | O(n²)      | O(log n) | No      |
| **Counting Sort**  | O(n+k)     | O(n+k)       | O(n+k)     | O(n+k)   | Yes     |
| **Linear Search**  | O(1)       | O(n)         | O(n)       | O(1)     | N/A     |
| **Binary Search**  | O(1)       | O(log n)     | O(log n)   | O(1)     | N/A     |

---

**Note:** `n` is the number of elements, `k` is the range of input values.
