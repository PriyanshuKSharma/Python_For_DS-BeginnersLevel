# Python Sorting and Searching Algorithms - Complete Guide

## 📋 Overview

Sorting and searching are fundamental operations in computer science. This guide covers the implementation, complexity, and use cases for common algorithms in Python. All explanations are available in **Hinglish** for better understanding.

## 🔢 Sorting Algorithms (सॉर्टिंग एल्गोरिदम)

| Algorithm          | Description                                                  | Link                                               |
| :----------------- | :----------------------------------------------------------- | :------------------------------------------------- |
| **Bubble Sort**    | Simple swapping of adjacent elements.                        | [Read Concept (Hinglish)](README_BubbleSort.md)    |
| **Selection Sort** | Selecting the smallest element and moving it to sorted part. | [Read Concept (Hinglish)](README_SelectionSort.md) |
| **Insertion Sort** | Inserting element at correct position (like playing cards).  | [Read Concept (Hinglish)](README_InsertionSort.md) |
| **Merge Sort**     | Divide and Conquer strategy. Stable sort.                    | [Read Concept (Hinglish)](README_MergeSort.md)     |
| **Quick Sort**     | Divide and Conquer using pivots. Very fast.                  | [Read Concept (Hinglish)](README_QuickSort.md)     |
| **Counting Sort**  | Integer sorting based on keys range.                         | [Read Concept (Hinglish)](README_CountingSort.md)  |

## 🧠 Theoretical Concepts

- 👉 **[Understand Stable vs Unstable Sorting (Hinglish Guide)](README_Stable_vs_Unstable.md)**
- 👉 **[Understand Adaptive vs Non-Adaptive Sorting (Hinglish Guide)](README_Adaptive_vs_NonAdaptive.md)**

## 🔍 Searching Algorithms (सर्चिंग एल्गोरिदम)

| Algorithm         | Description                                            | Link                                              |
| :---------------- | :----------------------------------------------------- | :------------------------------------------------ |
| **Linear Search** | Sequential check. Works on unsorted lists.             | [Read Concept (Hinglish)](README_LinearSearch.md) |
| **Binary Search** | Divide and conquer search. Works ONLY on sorted lists. | [Read Concept (Hinglish)](README_BinarySearch.md) |

## ⚖️ Complexity Comparison

| Algorithm          | Best Time  | Average Time | Worst Time | Space    | Stable? | Adaptive? |
| :----------------- | :--------- | :----------- | :--------- | :------- | :------ | :-------- |
| **Bubble Sort**    | O(n)       | O(n²)        | O(n²)      | O(1)     | Yes     | Yes       |
| **Selection Sort** | O(n²)      | O(n²)        | O(n²)      | O(1)     | No      | No        |
| **Insertion Sort** | O(n)       | O(n²)        | O(n²)      | O(1)     | Yes     | Yes       |
| **Merge Sort**     | O(n log n) | O(n log n)   | O(n log n) | O(n)     | Yes     | No        |
| **Quick Sort**     | O(n log n) | O(n log n)   | O(n²)      | O(log n) | No      | No        |
| **Linear Search**  | O(1)       | O(n)         | O(n)       | O(1)     | N/A     | N/A       |
| **Binary Search**  | O(1)       | O(log n)     | O(log n)   | O(1)     | N/A     | N/A       |
