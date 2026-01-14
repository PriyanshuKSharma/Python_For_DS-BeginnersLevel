def binary_search(arr, target):
    """
    Performs a binary search for the target in the sorted array.
    This is an iterative implementation.
    
    Args:
        arr: The sorted list to search through.
        target: The value to search for.
    
    Returns:
        The index of the target if found, otherwise -1.
        
    Time Complexity: O(log n)
    Space Complexity: O(1)
    """
    print(f"Starting iterative binary search for {target}")
    low = 0
    high = len(arr) - 1
    
    while low <= high:
        mid = (low + high) // 2
        print(f"Checking middle element at index {mid}: {arr[mid]}")
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            print(f"{arr[mid]} is less than {target}, searching right half")
            low = mid + 1
        else:
            print(f"{arr[mid]} is greater than {target}, searching left half")
            high = mid - 1
            
    return -1

def binary_search_recursive(arr, target, low, high):
    """
    Recursive implementation of binary search.
    
    Time Complexity: O(log n)
    Space Complexity: O(log n) due to recursion stack
    """
    if low <= high:
        mid = (low + high) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            return binary_search_recursive(arr, target, mid + 1, high)
        else:
            return binary_search_recursive(arr, target, low, mid - 1)
    else:
        return -1

if __name__ == "__main__":
    test_arr = [2, 3, 4, 10, 40, 50, 60, 70, 80] # Must be sorted
    target_val = 10
    print(f"Sorted Array: {test_arr}")
    
    print(f"\n--- Iterative Search for {target_val} ---")
    result = binary_search(test_arr, target_val)
    if result != -1:
        print(f"Element found at index {result}")
    else:
        print("Element not found")

    print(f"\n--- Recursive Search for {target_val} ---")
    result_rec = binary_search_recursive(test_arr, target_val, 0, len(test_arr)-1)
    if result_rec != -1:
        print(f"Element found at index {result_rec}")
    else:
        print("Element not found")
