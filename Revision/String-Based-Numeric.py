# ### Problem Statement
# You are given a string consisting of words that represent numbers and their frequencies.
# Each number word (`one`, `two`, `three`, etc.) represents a digit that should be added **once** to the result.
# The words **`double`** and **`triple`** indicate that the **next number** should be repeated **two** or **three** times respectively.
# Your task is to **convert the given string into an integer** following these rules.

# ---
# ### Input
# A string containing words separated by spaces.

# ### Output
# An integer formed by interpreting the words in the string.

# ---
# ### Example
# **Input:**

# ```
# "one two triple four five"
# ```
# **Explanation:**

# * `one` → 1
# * `two` → 2
# * `triple four` → 4 repeated 3 times → 444
# * `five` → 5

# **Output:**
# ```
# 124445
# ```
# ---
# ### Constraints (optional, for interviews)

# * The input string is valid.
# * Words are in lowercase.
# * Numbers range from `zero` to `nine`.

def convert_to_integer(s):
    word_to_num = {
        "zero": "0",
        "one": "1",
        "two": "2",
        "three": "3",
        "four": "4",
        "five": "5",
        "six": "6",
        "seven": "7",
        "eight": "8",
        "nine": "9"
    }

    words = s.split()
    result = ""
    i = 0

    while i < len(words):
        if words[i] == "double":
            result += word_to_num[words[i+1]] * 2
            i += 2
        elif words[i] == "triple":
            result += word_to_num[words[i+1]] * 3
            i += 2
        else:
            result += word_to_num[words[i]]
            i += 1

    return int(result)


# Example
s = "one two triple four five"
print(convert_to_integer(s))
