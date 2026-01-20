set1 = {'hello', 2, 3, "abhinav"}

if "hi" in set1:
  print(True)

else:
  print(False)

print(set1)
# set1.clear()
# print(set1)

set2=set1
set2.add(4)

print(set1)
print(set2)

# Set Operations
set3 = {1,8,5,2,4}
set4={8,2,9,6}

#union
print(set3 | set4)
print(set3.union(set4))

#intersection
print(set3&set4)
print(set3.difference(set4))

#difference
print(set3-set4)
print(set3.difference(set4))

print(set4-set3)
print(set4.difference(set3))