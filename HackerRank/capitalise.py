"""
You are asked to ensure that the first and last names of people begin with a capital letter in their passports. For example, alison heck should be capitalised correctly as Alison Heck.
Given a full name, your task is to capitalize the name appropriately.
Input Format
A single line of input containing the full name, .
Constraints
The string consists of alphanumeric characters and spaces.
Note: in a word only the first character is capitalized. Example 12abc when capitalized remains 12abc.
Output Format
Print the capitalized string, .
Sample Input
chris alan
Sample Output
Chris Alan
"""

#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the solve function below.
def solve(s):
    # Split the string by single spaces to preserve multiple spaces
    words = s.split(' ')
    
    # Capitalize only the first letter of each word
    # .capitalize() handles "12abc" correctly (leaves it as "12abc")
    capitalized_words = [word.capitalize() for word in words]
    
    # Join the words back together with a space
    return ' '.join(capitalized_words)

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    result = solve(s)

    fptr.write(result + '\n')

    fptr.close()
