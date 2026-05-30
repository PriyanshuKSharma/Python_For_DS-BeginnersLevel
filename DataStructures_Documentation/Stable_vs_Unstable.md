# ⚖️ Stable vs Unstable Sorting Algorithms

## 📘 Concept (English)

### What is Stability?

A sorting algorithm is said to be **stable** if two objects with equal keys appear in the same order in the sorted output as they appear in the input array.

### Why does it matter?

Stability matters when you sort key-value pairs. For example, if you have a list of students sorted by name, and you sort them again by grade, a stable sort guarantees that students with the same grade will remain sorted by name.

### Unstable Sort

An **unstable** sorting algorithm does not guarantee the preservation of the original order of equal elements.

---

## 📙 Concept (Hinglish)

### Stability kya hai? (What is Stability?)

Sorting mein **Stability** ka matlab hai ki agar list mein do elements ki value same hai, toh sort hone ke baad bhi unka **relative order** (kaun pehle tha, kaun baad mein) waisa hi rehna chahiye jaisa original list mein tha.

### Example samjho (Understand with Example)

Maan lo humare paas cards hain: `5 (Hearts)`, `2 (Spades)`, `5 (Spades)`.
Yahan do `5` hain: Pehla `5 (Hearts)` hai aur dusra `5 (Spades)` hai.

**Sorted List (Stable Sort):**
`2 (Spades)`, `5 (Hearts)`, `5 (Spades)`
(Dekho, `5 (Hearts)` abhi bhi `5 (Spades)` se pehle hai, bilkul original list ki tarah. Yeh stable hai.)

**Sorted List (Unstable Sort):**
`2 (Spades)`, `5 (Spades)`, `5 (Hearts)`
(Yahan `5 (Spades)` pehle aa gaya. Order badal gaya. Yeh unstable hai.)

### Iska use kya hai?

Agar aap Excel mein data sort karte ho, toh yeh bahut kaam aata hai.
Example: Pehle aapne "Name" se sort kiya, phir "Marks" se. Agar sort Stable hai, toh jinke Marks same honge, unke naam alphabetical order mein hi rahenge (kyunki pichla sort preserve hua).

---

## 🔍 Classification

### ✅ Stable Algorithms (Order Change Nahi Hota)

Yeh algorithms equal elements ka order maintain karte hain:

1.  **Bubble Sort:** Adjacent elements sirf tabhi swap hote hain jab woh bade hon (equal hone par nahi), isliye order maintain rehta hai.
2.  **Insertion Sort:** Equal element ko pehle wale equal element ke baad hi jagah milti hai.
3.  **Merge Sort:** Merge karte waqt hum left (pehle) wale element ko priority dete hain agar values equal hon.
4.  **Counting Sort:** Calculation aise hoti hai ki stability bani rehti hai.

### ❌ Unstable Algorithms (Order Change Ho Sakta Hai)

Inme equal elements apni jagah badal sakte hain:

1.  **Selection Sort:** Swap karte waqt door wale elements ko utha kar laate hain, jisse beech ke elements ka order bigad sakta hai.
2.  **Quick Sort:** Partition karte waqt elements bahut door-door swap hote hain, isliye stability nahi rehti.
3.  **Heap Sort:** Tree structure mein swap hone ki wajah se order preserve nahi hota.

---

## 📝 Summary Table

| Algorithm          | Stable? | Reason                                         |
| :----------------- | :------ | :--------------------------------------------- |
| **Bubble Sort**    | Yes     | Equal elements are never swapped.              |
| **Insertion Sort** | Yes     | Elements are inserted after equal elements.    |
| **Selection Sort** | No      | Long-distance swaps can bypass equal elements. |
| **Merge Sort**     | Yes     | Left sub-array is preferred during merge.      |
| **Quick Sort**     | No      | Partitioning involves arbitrary swaps.         |
| **Heap Sort**      | No      | Heapify destroys relative order.               |
| **Counting Sort**  | Yes     | Position calculation preserves order.          |
