# Given an array of integers nums, sort the array in ascending order and return it.
# You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.
# Example 1:
# Input: nums = [5,2,3,1]
# Output: [1,2,3,5]
# Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
# Example 2:
# Input: nums = [5,1,1,2,0,0]
# Output: [0,0,1,1,2,5]
# Explanation: Note that the values of nums are not necessarily unique.

# Constraints:
# 1 <= nums.length <= 5 * 104
# -5 * 104 <= nums[i] <= 5 * 104


class Solution:
    # 1. Bubble Sort

    def bubble(nums):
        """
        Bubble Sort
        Time Complexity: 
            - Best: O(n) (when array is already sorted)
            - Worst: O(n^2) (when array is reverse sorted)
            - Average: O(n^2)
        Space Complexity: O(1) (In-place sort)
        Explanation: compares adjacent elements and swaps them if they are in the wrong order.
        """
        n = len(nums)

        for i in range(n):
            isSwap = False
            for j in range(n-i-1):
                if nums[j] > nums [j+1]:
                    #swap
                    temp = nums[j]
                    nums[j] = nums[j+1]
                    nums[j+1] = temp
                    isSwap = True
                    
            if not isSwap:
                break
        return nums
    
    print("Bubble Sort:",bubble([5,3,4,6,7]))

    # 2. Insertion Sort

    def insert(nums):
        """
        Insertion Sort
        Time Complexity: 
            - Best: O(n) (when array is already sorted)
            - Worst: O(n^2) (when array is reverse sorted)
            - Average: O(n^2)
        Space Complexity: O(1) (In-place sort)
        Explanation: Builds the sorted array one item at a time. Efficient for small data sets.
        """
        n = len(nums)

        for i in range(1, n):
            key = nums[i]
            j = i - 1 #considering the 1st element to be sorted so we will compare it with the key if its smaller than the key it will remain same but if greater than key we will swap

            while j >= 0 and nums[j] > key:
                nums[j + 1] = nums[j]
                j -= 1

            nums[j + 1] = key

        return nums

    print("Insert Sort:",insert([5,3,4,6,7]))


    # 3. Selection Sort
    def select(nums):
        """
        Selection Sort
        Time Complexity: 
            - Best: O(n^2)
            - Worst: O(n^2)
            - Average: O(n^2)
        Space Complexity: O(1) (In-place sort)
        Explanation: Repeatedly finds the minimum element and puts it at the beginning. 
        Does not depend on initial order.
        """
        n = len(nums)

        for i in range(n):
            mn = nums[i] #let the first number be the min value
            ind = i
            for j in range(i+1,n):
                if nums[j]<mn:
                    mn=nums[j]
                    ind=j

            temp = nums[i]
            nums[i] = nums[ind]
            nums[ind] = temp

        return nums

    print("Selection Sort:",select([5,3,4,6,7]))


    # 4. Merge Sort

    def sortArray(self, nums):
        """
        Merge Sort (Main function)
        Time Complexity: 
            - Best: O(n log n)
            - Worst: O(n log n)
            - Average: O(n log n)
        Space Complexity: O(n) (Requires extra space for merging)
        Explanation: Divide and Conquer algorithm. Always splits array in half.
        """
        return self.merge_sort(nums)

    def merge_sort(self, arr):
        if len(arr) <= 1:
            return arr

        mid = len(arr) // 2
        left = self.merge_sort(arr[:mid])
        right = self.merge_sort(arr[mid:])

        return self.merge(left, right)

    def merge(self, left, right):
        result = []
        i = j = 0

        while i < len(left) and j < len(right):
            if left[i] <= right[j]:
                result.append(left[i])
                i += 1
            else:
                result.append(right[j])
                j += 1

        result.extend(left[i:])
        result.extend(right[j:])
        return result

    # 5. Quick Sort

    def partition(self, nums, l, r):
        key = nums[r]        # choosing last element as pivot
        start = l            # index for smaller element

        for i in range(l, r):        # iterate till r-1
            if nums[i] <= key:
                temp = nums[i]
                nums[i] = nums[start]
                nums[start] = temp
                start += 1           # IMPORTANT

        # place pivot at correct position
        nums[start], nums[r] = nums[r], nums[start]
        return start                 # correct pivot index


    def quickSort(self, nums, l, r):
        # base case
        if l >= r:
            return

        pivot = self.partition(nums, l, r)
        self.quickSort(nums, l, pivot - 1)
        self.quickSort(nums, pivot + 1, r)


    def sortArray1(self, nums):
        """
        Quick Sort (Main function)
        Time Complexity: 
            - Best: O(n log n)
            - Worst: O(n^2) (When pivot is smallest/largest element e.g. already sorted)
            - Average: O(n log n)
        Space Complexity: O(log n) (Stack space for recursion)
        Explanation: Partitioning logic. Efficiency depends on pivot choice.
        """
        n = len(nums)
        self.quickSort(nums, 0, n - 1)
        return nums


    # 6. Counting Sort
    def sortArray2(self, nums):
        """
        Counting Sort
        Time Complexity: 
            - Best: O(n + k)
            - Worst: O(n + k)
            - Average: O(n + k)
        Space Complexity: O(k) (Frequency array)
        Explanation: Non-comparison sort. Constraints: n is number of elements, k is range of inputs.
        Fails if range k is very large or numbers are negative (needs modification).
        """
        n=len(nums)
        mx=max(nums)

        freq = [0]*(mx+1) #How many times the the element has repeated

        for i in nums:
            freq[i]+=1

        nums=[]
        for i in range(0,mx+1):
            while freq[i]>0:
                nums.append(i)
                freq[i]-=1

        return nums





sol = Solution()
print("Merge Sort:", sol.sortArray([5,3,4,6,7]))
print("Quick Sort:", sol.sortArray1([5,3,4,6,7]))
print("Counting Sort:", sol.sortArray2([5,3,4,6,7]))
  