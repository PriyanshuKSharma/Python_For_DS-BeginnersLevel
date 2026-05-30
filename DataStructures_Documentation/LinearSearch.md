# 🚶 Linear Search (लीनियर सर्च)

## Concept (English)

Linear Search is the basic searching algorithm. It iterates through the list sequentially to find the target element. If the element is found, it returns the index; otherwise, it returns -1. It works on both sorted and unsorted arrays.

## Concept (Hinglish)

Linear Search sabse seedha aur aasaan search karne ka tarika hai.

1. Hum list ke **pehle element se shuru** karte hain.
2. Ek-ek karke har element ko check karte hain ki kya yeh wahi element hai jise hum dhund rahe hain.
3. Agar mil gaya, toh uski position (index) bata dete hain.
4. Agar list khatam ho gayi aur nahi mila, toh bol dete hain ki element nahi hai (-1).

**Example/Udaharan:**
List: `[10, 50, 30, 70]`
Target: `30`

- Pehle `10` check kiya -> Nahi mila.
- Phir `50` check kiya -> Nahi mila.
- Phir `30` check kiya -> Mil gaya! Index 2 return karenge.

## Complexity

- **Time Complexity:** O(n) - Agar element last mein ho ya na ho, toh pura list check karna padega.
- **Space Complexity:** O(1)

## Code Implementation

```python
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1
```
