# 🛁 Bubble Sort (बबल सॉर्ट)

## Concept (English)

Bubble Sort is the simplest sorting algorithm that works by repeatedly **swapping the adjacent elements** if they are in wrong order. This algorithm is **not suitable for large data** sets as its **average and worst case complexity are of O(n^2)** where n is the number of items.

## Concept (Hinglish)

Bubble Sort mein hum **adjacent elements** (pass-pass wale elements) ko compare karte hain. Agar left wala element right wale se bada hai, toh hum unhe **swap** kar dete hain. Yeh process tab tak repeat karte hain jab tak puri list sort nahi ho jati. Iska naam "Bubble" isliye hai kyunki har pass mein sabse bada element "bubble" ki tarah list ke end mein pahunch jata hai.

**Example/Udaharan:**
Agar list hai `[5, 1, 4, 2, 8]`:

1. Pehle 5 aur 1 compare honge. 5 bada hai, toh swap ho jayenge -> `[1, 5, 4, 2, 8]`
2. Phir 5 aur 4 compare honge. 5 bada hai -> `[1, 4, 5, 2, 8]`
3. ...aise hi chalta rahega.

## Complexity

- **Time Complexity:** O(n²) - Bahut slow hai bade lists ke liye.
- **Space Complexity:** O(1) - Alag se memory nahi chahiye.

## Code Implementation

```python
def bubble_sort(arr):
    n = len(arr)
    # Traverse through all array elements
    for i in range(n):
        swapped = False
        # Last i elements are already in place
        for j in range(0, n - i - 1):
            # Traverse the array from 0 to n-i-1
            # Swap if the element found is greater than the next element
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        # IF no two elements were swapped by inner loop, then break
        if not swapped:
            break
    return arr
```
