# 📥 Insertion Sort (इन्सर्शन सॉर्ट)

## Concept (English)

Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.

## Concept (Hinglish)

Insertion Sort bilkul waise kaam karta hai jaise hum **taash ke patte (playing cards)** haath mein lagate hain. Hum maan lete hain ki pehla element pehle se hi sorted hai. Phir hum agla element uthate hain aur usko piche wale elements se compare karte hain. Agar woh chota hai, toh hum jagah banate hain aur usko **sahi jagah par "insert"** kar dete hain.

**Example/Udaharan:**
List: `[12, 11, 13, 5, 6]`

1. `12` sorted maana gaya. `11` ko uthaya. `11` chota hai `12` se, toh `12` ko aage khiskaya aur `11` ko pehle laga diya. -> `[11, 12, 13, 5, 6]`
2. `13` ko uthaya. `13` bada hai `12` se. Sahi jagah par hai. -> `[11, 12, 13, 5, 6]`
3. `5` ko uthaya. `5` chota hai `13`, `12`, aur `11` sabse. Sabko aage khiskaya aur `5` ko starting mein laga diya. -> `[5, 11, 12, 13, 6]`

## Complexity

- **Time Complexity:** O(n²) - Average aur worst case mein.
- **Space Complexity:** O(1)

## Code Implementation

```python
def insertion_sort(arr):
    # Traverse through 1 to len(arr)
    for i in range(1, len(arr)):
        key = arr[i]
        # Move elements of arr[0..i-1], that are greater than key,
        # to one position ahead of their current position
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr
```
