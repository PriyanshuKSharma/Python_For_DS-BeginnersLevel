def quick_sort(arr):
    """
    Quick Sort implementation.
    Divide and conquer algorithm. Picks an element as a pivot and partitions
    the given array around the picked pivot.
    
    Time Complexity: O(n log n) average, O(n^2) worst case
    Space Complexity: O(log n) stack space
    """
    if len(arr) <= 1:
        return arr
    else:
        pivot = arr[0]
        # Elements smaller than or equal to pivot
        less_than_pivot = [x for x in arr[1:] if x <= pivot]
        # Elements greater than pivot
        greater_than_pivot = [x for x in arr[1:] if x > pivot]
        
        return quick_sort(less_than_pivot) + [pivot] + quick_sort(greater_than_pivot)

if __name__ == "__main__":
    test_arr = [10, 7, 8, 9, 1, 5]
    print(f"Original array: {test_arr}")
    print("Sorting using Quick Sort...")
    sorted_arr = quick_sort(test_arr)
    print(f"Sorted array: {sorted_arr}")
