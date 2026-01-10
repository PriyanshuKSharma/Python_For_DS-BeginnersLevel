dict1 = {
  1:"hello",
  (1,2,3): "1,2,3",
  10.21:100,
  "name": "PriyanshuKSharma"
}

print(dict1)
print(type(dict1))
print(len(dict1))

print(dict1[1])
print(dict1["name"])
print(dict1)

dict1[5]="sharma"
dict1[2]="abhi"
dict1.update(
  {
  1:"abhishek",
  10: "yuvraj"
  }
  )

print(dict1)

# dict2=dict("1"="Name", hello="Priyanshu")  #"1" is not possible

dict3 = {
  1:"priyanshu",
  2:"kumar",
  3:"sharma",
  4:"prikush",
  5:"PKS"
} 

print(dict3)


# print(dict3.get(3))
# dict3.pop(2)
# del dict3[3]
# print(dict3)

# dict3.clear()
print(dict3)

# keys(), items(), values()

# keys()-> retrieves keys from dictionary
print("Keys: ",dict3.keys())
for key in dict3.keys():
  print("Keys: ",key)

# values()-> retieves values from dictionary
print("Values: ",dict3.values())
for values in dict3.values():
  print("Values: ",values)

# items()-> retrieves (keys,values) in pair from dictionary
for keys,values in dict3.items():
  print("(keys,values):", (keys,values))


#frequency of elements in list
list1 =["abhinav", "aman", "abhinav", "priyanshu", "kumar", "aman", "sharma", "yash", "aman"]

freq = {}

for name in list1:
  if name not in freq:
    freq[name]=1

  else:
    freq[name]+=1

print(freq)

s = "priyanshu kumar sharma"

freq = {}

for name in s:
  if name not in freq:
    freq[name]=1

  else:
    freq[name]+=1

print(freq)