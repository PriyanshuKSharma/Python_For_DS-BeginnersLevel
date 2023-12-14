n = int(input("Enter the number of terms: "))

current_term = 1
common_difference = 2
end_term = current_term + (n - 1) * common_difference
print("\nAP:", end=" ")
for _ in range(current_term, end_term, common_difference):
    print(current_term, end=", ")
    current_term += common_difference
print(current_term)
