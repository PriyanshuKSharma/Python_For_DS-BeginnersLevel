# ✂️ Binary Search (बाइनरी सर्च)

## Concept (English)

Binary Search is an efficient algorithm for searching in a **sorted** array. It works by repeatedly dividing the search interval in half. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise, narrow it to the upper half.

## Concept (Hinglish)

Binary Search bahut fast hai, lekin iske liye **List ka Sorted hona zaruri hai**.

1. Hum list ke **beech (middle)** wala element dekhte hain.
2. Agar beech wala number target ke barabar hai, toh kaam ho gaya.
3. Agar target **chota** hai, toh hum sirf **Left** side (aadhe hisse) mein dhundte hain.
4. Agar target **bada** hai, toh hum sirf **Right** side (aadhe hisse) mein dhundte hain.
   Isse har step mein dhundne ki jagah aadhi ho jati hai.

**Example/Udaharan:**
List: `[10, 20, 30, 40, 50, 60, 70]` (Sorted)
Target: `60`

- Middle: `40`. `60` bada hai `40` se. Right taraf jayenge.
- Nayi Range: `[50, 60, 70]`. Middle: `60`.
- Mil gaya!

## Complexity

- **Time Complexity:** O(log n) - Bahut tez hai. 1000 elements mein sirf 10 checks lagenge.
- **Space Complexity:** O(1) (Iterative walah).

## Code Implementation

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
