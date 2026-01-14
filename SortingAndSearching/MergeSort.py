def merge_sort(arr):
    """
    Merge Sort implementation.
    Divide and conquer algorithm. Divides the input array into two halves,
    calls itself for the two halves, and then merges the two sorted halves.
    
    Time Complexity: O(n log n)
    Space Complexity: O(n)
    """
    if len(arr) > 1:
        mid = len(arr) // 2
        L = arr[:mid]
        R = arr[mid:]

        # Recursive calls
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

if __name__ == "__main__":
    test_arr = [12, 11, 13, 5, 6, 7]
    print(f"Original array: {test_arr}")
    print("Sorting using Merge Sort...")
    sorted_arr = merge_sort(test_arr)
    print(f"Sorted array: {sorted_arr}")
