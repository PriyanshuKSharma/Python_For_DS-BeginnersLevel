def insertion_sort(arr):
    """
    Insertion Sort implementation.
    Builds the sorted array one item at a time.
    
    Time Complexity: O(n^2)
    Space Complexity: O(1)
    """
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        # Move elements of arr[0..i-1], that are greater than key,
        # to one position ahead of their current position
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr

if __name__ == "__main__":
    test_arr = [12, 11, 13, 5, 6]
    print(f"Original array: {test_arr}")
    print("Sorting using Insertion Sort...")
    sorted_arr = insertion_sort(test_arr)
    print(f"Sorted array: {sorted_arr}")
