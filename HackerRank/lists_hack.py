"""Consider a list (list = []). You can perform the following commands:

insert i e: Insert integer  at position .
print: Print the list.
remove e: Delete the first occurrence of integer .
append e: Insert integer  at the end of the list.
sort: Sort the list.
pop: Pop the last element from the list.
reverse: Reverse the list.
Initialize your list and read in the value of  followed by  lines of commands where each command will be of the  types listed above. Iterate through each command in order and perform the corresponding operation on your list.

The first line contains an integer, , denoting the number of commands.
Each line  of the  subsequent lines contains one of the commands described above.

Constraints
The elements added to the list must be integers.
Output Format
For each command of type print, print the list on a new line.
Sample Output 0
[6, 5, 10]
[1, 5, 9, 10]
[9, 5, 1]"""

if __name__ == '__main__':
    # Read number of commands
    N = int(input())

    # Create an empty list
    lst = []

    # Loop through each command
    for _ in range(N):

        # Read command and split it into words
        command = input().split()

        # Check which command to execute
        if command[0] == "insert":
            # Insert element e at index i
            i = int(command[1])
            e = int(command[2])
            lst.insert(i, e)

        elif command[0] == "print":
            # Print the list
            print(lst)

        elif command[0] == "remove":
            # Remove first occurrence of e
            e = int(command[1])
            lst.remove(e)

        elif command[0] == "append":
            # Add element e to the end
            e = int(command[1])
            lst.append(e)

        elif command[0] == "sort":
            # Sort the list
            lst.sort()

        elif command[0] == "pop":
            # Remove last element
            lst.pop()

        elif command[0] == "reverse":
            # Reverse the list
            lst.reverse()
