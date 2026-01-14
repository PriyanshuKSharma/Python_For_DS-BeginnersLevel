def linear_search(arr, target):
    """
    Performs a linear search for the target in the array.
    
    Args:
        arr: The list to search through.
        target: The value to search for.
    
    Returns:
        The index of the target if found, otherwise -1.
        
    Time Complexity: O(n)
    Space Complexity: O(1)
    """
    print(f"Starting linear search for {target} in a list of size {len(arr)}")
    for i in range(len(arr)):
        if arr[i] == target:
            print(f"Target found at index {i}")
            return i
    print("Target not found")
    return -1

if __name__ == "__main__":
    test_arr = [10, 50, 30, 70, 80, 20]
    target_val = 30
    print(f"Array: {test_arr}")
    
    # Test finding a value
    result = linear_search(test_arr, target_val)
    if result != -1:
        print(f"Element {target_val} found at index {result}")
    else:
        print(f"Element {target_val} not found")
        
    # Test not finding a value
    target_val = 99
    print(f"\nSearching for {target_val}...")
    result = linear_search(test_arr, target_val)
    if result != -1:
        print(f"Element {target_val} found at index {result}")
    else:
        print(f"Element {target_val} not found")
