# 🎯 Selection Sort (सिलेक्शन सॉर्ट)

## Concept (English)

The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array:

1. The subarray which is already sorted.
2. Remaining subarray which is unsorted.

## Concept (Hinglish)

Selection Sort ka main idea yeh hai ki hum puri list mein se **sabse chota (minimum) element dhundhte hain** aur use **pehli position** par rakh dete hain. Phir bachi hui list mein se dubara sabse chota element dhundhte hain aur use second position par rakh dete hain. Yeh process chalta rehta hai jab tak puri list sort nahi ho jati.

**Example/Udaharan:**
List: `[64, 25, 12, 22, 11]`

1. Sabse chota element `11` hai. Isko pehle element `64` ke saath swap kar denge.
   List ban gayi: `[11, 25, 12, 22, 64]` (Ab 11 sorted hai).
2. Ab bachi hui list `[25, 12, 22, 64]` mein sabse chota `12` hai. Isko `25` ke saath swap karenge.
   List ban gayi: `[11, 12, 25, 22, 64]` (Ab 11, 12 sorted hain).

## Complexity

- **Time Complexity:** O(n²) - Do nested loops use hote hain.
- **Space Complexity:** O(1) - In-place sorting hai.

## Code Implementation

```python
def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        # Find the minimum element in remaining unsorted array
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        # Swap the found minimum element with the first element of unsorted part
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr
```
