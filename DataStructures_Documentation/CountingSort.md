# 📊 Counting Sort (काउंटिंग सॉर्ट)

## Concept (English)

Counting sort is a sorting technique based on keys between a specific range. It works by counting the number of objects having distinct key values (kind of hashing). Then doing some arithmetic to calculate the position of each object in the output sequence.

## Concept (Hinglish)

Counting Sort tab use hota hai jab humein pata ho ki numbers ek **choti si range** (jaise 0 se 100) ke beech mein hain.

1. **Count:** Hum ginte hain ki har number list mein kitni baar aaya hai.
2. **Place:** Phir uss count ki madad se hum seedha har number ko uski sahi jagah par rakh dete hain.
   Yeh kisi bhi element ko dusre se compare nahi karta (non-comparison sort).

**Example/Udaharan:**
List: `[1, 4, 1, 2, 7, 5, 2]`

- `1` do baar hai.
- `2` do baar hai.
- `4` ek baar hai.
- `5` ek baar hai.
- `7` ek baar hai.
- Output: `[1, 1, 2, 2, 4, 5, 7]`

## Complexity

- **Time Complexity:** O(n + k) - Jahan n number of elements hain aur k range hai.
- **Space Complexity:** O(k) - Count store karne ke liye alag list chahiye.

## Code Implementation

```python
def counting_sort(arr):
    if not arr:
        return arr

    max_val = max(arr)
    min_val = min(arr)
    # Range of elements
    range_of_elements = max_val - min_val + 1

    count_arr = [0] * range_of_elements
    output_arr = [0] * len(arr)

    # Store count of each character
    for i in range(len(arr)):
        count_arr[arr[i] - min_val] += 1

    # Change count_arr[i] so that count_arr[i] now contains actual
    # position of this character in output array
    for i in range(1, len(count_arr)):
        count_arr[i] += count_arr[i - 1]

    # Build the output character array
    for i in range(len(arr) - 1, -1, -1):
        output_arr[count_arr[arr[i] - min_val] - 1] = arr[i]
        count_arr[arr[i] - min_val] -= 1

    return output_arr
```
