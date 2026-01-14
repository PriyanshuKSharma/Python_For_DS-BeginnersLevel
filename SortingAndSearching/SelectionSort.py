def selection_sort(arr):
    """
    Selection Sort implementation.
    Repeatedly finds the minimum element from the unsorted part and puts it at the beginning.
    
    Time Complexity: O(n^2)
    Space Complexity: O(1)
    """
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        # Swap the found minimum element with the first element
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr

if __name__ == "__main__":
    test_arr = [64, 25, 12, 22, 11]
    print(f"Original array: {test_arr}")
    print("Sorting using Selection Sort...")
    sorted_arr = selection_sort(test_arr)
    print(f"Sorted array: {sorted_arr}")
