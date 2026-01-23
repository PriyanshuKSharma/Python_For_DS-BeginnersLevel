"""
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]
 
Constraints:
The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
"""

class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        # Step 1: Find the length of the linked list
        length = 0
        curr = head
        while curr:
            length += 1
            curr = curr.next
        
        # Step 2: Create a dummy node to handle head deletion
        dummy = ListNode(0, head)
        curr = dummy
        
        # Step 3: Move to the node right before the one we want to delete
        # The node to remove is at (length - n) from the start
        steps_to_move = length - n
        for _ in range(steps_to_move):
            curr = curr.next
            
        # Step 4: Skip the target node
        curr.next = curr.next.next
        
        return dummy.next