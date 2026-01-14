def counting_sort(arr):
    """
    Counting Sort implementation.
    An integer sorting algorithm that assumes the input is a list of integers with a limited range.
    
    Time Complexity: O(n + k) where n is the number of elements and k is the range of input.
    Space Complexity: O(n + k)
    """
    if not arr:
        return arr
    
    # Find the range of input elements
    max_val = max(arr)
    min_val = min(arr)
    range_of_elements = max_val - min_val + 1
    
    # Initialize count array and output array
    count_arr = [0] * range_of_elements
    output_arr = [0] * len(arr)
    
    # Store count of each character
    for i in range(len(arr)):
        count_arr[arr[i] - min_val] += 1
        
    # Change count_arr[i] so that count_arr[i] now contains actual
    # position of this character in output array
    for i in range(1, len(count_arr)):
        count_arr[i] += count_arr[i - 1]
        
    # Build the output character array
    for i in range(len(arr) - 1, -1, -1):
        output_arr[count_arr[arr[i] - min_val] - 1] = arr[i]
        count_arr[arr[i] - min_val] -= 1
        
    # Copy the output array to arr, so that arr now
    # contains sorted characters
    return output_arr

if __name__ == "__main__":
    test_arr = [4, 2, 2, 8, 3, 3, 1]
    print(f"Original array: {test_arr}")
    print("Sorting using Counting Sort...")
    sorted_arr = counting_sort(test_arr)
    print(f"Sorted array: {sorted_arr}")
