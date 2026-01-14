def bubble_sort(arr):
    """
    Bubble Sort implementation.
    Repeatedly swaps adjacent elements if they are in the wrong order.
    
    Time Complexity: O(n^2)
    Space Complexity: O(1)
    """
    n = len(arr)
    # Optimize: Track if any swap happens
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        # If no two elements were swapped by inner loop, then break
        if not swapped:
            break
    return arr

if __name__ == "__main__":
    test_arr = [64, 34, 25, 12, 22, 11, 90]
    print(f"Original array: {test_arr}")
    print("Sorting using Bubble Sort...")
    sorted_arr = bubble_sort(test_arr)
    print(f"Sorted array: {sorted_arr}")
