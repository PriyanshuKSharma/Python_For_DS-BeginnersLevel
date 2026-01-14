# 🤝 Merge Sort (मर्ज सॉर्ट)

## Concept (English)

Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves. It is a stable sort, meaning it preserves the relative order of equal elements.

## Concept (Hinglish)

Merge Sort **"Divide and Conquer"** (todo aur raaj karo) strategy par kaam karta hai.

1. **Divide:** Hum list ko tab tak beech se aadha (divide) karte rehte hain jab tak humare paas chote-chote tukde na bachein (jab tak har tukde mein sirf ek element na reh jaye).
2. **Conquer (Merge):** Phir hum in tukdon ko wapas jodte (merge karte) hain. Lekin jodte waqt hum unhe compare karte hain taaki woh **sorted order** mein juden.

**Example/Udaharan:**
List: `[6, 5, 3, 1]`

1. Do hisson mein toda: `[6, 5]` aur `[3, 1]`
2. Aur toda: `[6]`, `[5]`, `[3]`, `[1]`
3. Ab jodna shuru (Merge):
   - `[6]` aur `[5]` ko joda -> `[5, 6]` (sorted)
   - `[3]` aur `[1]` ko joda -> `[1, 3]` (sorted)
4. Ab `[5, 6]` aur `[1, 3]` ko merge kiya -> `[1, 3, 5, 6]`

## Complexity

- **Time Complexity:** O(n log n) - Har case mein fast hota hai.
- **Space Complexity:** O(n) - Extra memory chahiye hoti hai list ko store karne ke liye.

## Code Implementation

```python
def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        L = arr[:mid]
        R = arr[mid:]

        merge_sort(L)
        merge_sort(R)

        i = j = k = 0

        # Copy data to temp arrays L[] and R[]
        while i < len(L) and j < len(R):
            if L[i] < R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1

        # Checking if any element was left
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
