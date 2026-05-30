# ⚡ Quick Sort (क्विक सॉर्ट)

## Concept (English)

QuickSort is a Divide and Conquer algorithm. It picks an element as a pivot and partitions the given array around the picked pivot. There are many versions of quickSort that pick pivot in different ways (first element, last element, random, median).

## Concept (Hinglish)

Quick Sort bhi **"Divide and Conquer"** use karta hai, lekin alag tarike se.

1. **Pivot Chuno:** Hum list mein se kisi bhi ek number ko **"pivot"** (mukhya bindu) maan lete hain.
2. **Partition:** Hum list ko aise arrange karte hain ki:
   - Pivot se **chote** saare elements uske **left** mein aa jayein.
   - Pivot se **bade** saare elements uske **right** mein aa jayein.
3. Phir yahi kaam left wale hisse aur right wale hisse ke saath alag-alag karte hain.

**Example/Udaharan:**
List: `[10, 80, 30, 90, 40]`
Pivot maana `40` (aakhri element).

- Partition ke baad: `[10, 30, 40, 90, 80]`
- Ab `40` apni sahi jagah par hai. Uske left mein `[10, 30]` hai (chote) aur right mein `[90, 80]` hai (bade).
- Ab in dono hisson ko sort karenge.

## Complexity

- **Time Complexity:**
  - Average: O(n log n)
  - Worst: O(n²) (Agar list pehle se sorted ho aur pivot galat chuna jaye).
- **Space Complexity:** O(log n)

## Code Implementation

```python
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    else:
        pivot = arr[0]
        # Elements smaller than or equal to pivot
        less_than_pivot = [x for x in arr[1:] if x <= pivot]
        # Elements greater than pivot
        greater_than_pivot = [x for x in arr[1:] if x > pivot]

        return quick_sort(less_than_pivot) + [pivot] + quick_sort(greater_than_pivot)
```
