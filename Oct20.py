'''str="abcdefghijklmnop"
print(str[1])
print(str[3])
print(str[-1])
#print(str[100]) will show error index out of range

#Slicing
#str_namr[start:end-1:step] step=1
print(str[:4]) #by default it will consider start as 0th index
print(str[4:]) #it will start with 4th index
print(str[4:100])
print(str[:4:1])
print(str[:4:2])
print(str[-13:]) #will print from left to right
print(str[-13::1])
print(str[-13::-1])
print(str[-13::-2])
print(str[-2:-13]) #it will print an empty string bcauz slicing traverse from left to right
print(str[-2:-13:-1])
print(str[::-1])
print(str[::-2]) '''


#sequential data types
'''s="adypua"
print(s[0].upper()+s[1:])
print(s.count('a'))
print(s) '''

#List, tuple, set, dictionary
#list-[]- it doesnot support object reusability concept
#adding element is applicable in list
#supports slicing operation
'''li=["Ravi",87.9,18]
li2=["Ravi",87.9,18]
li3=["Rakhi",17,56.9]
print(type(li))
print(id(li))
print(id(li2))
print(li==li2) #checks the elements present in lists
print(li is li2) #checks the address of the lists
li.append('car') #adds element in the list
li.extend(li3) #combines the 2 lists
print(li)
li.insert(0,"Rahul")
print(li) '''


#tuple-()-supports object reusability
#adding new element is not applicable
#supports slicing
'''tup=("Ravi",19,56.78)
tup1=("Ravi",19,56.78)
print(tup)
print(type(tup))
print(tup==tup1)
print(tup is tup1)
print(tup.index("Ravi"))
print(tup.count(19))'''

#set-{}-slicing operation is not supported in set
#object reusability ko support nahi karrta
#mutable
#union()- prints all elements present in all the sets
#instersection()- prints only the common elements
se={10,20,30,40,50,78,10,20,40}
print(se) #doesnot print in same order
se1={10,20,30}
print(se1)
print(se)
print(se is se1)
se2={10,20,30,40,50,78,10,20,40}
print(se==se2)
print(se.union(se1))
print(se.intersection(se1))

#dictionary-{}-key value form
#doesnot support object reusability concept-mutable
'''dic={1:"One",2:"Two",3:"Three"}
print(dic)
print(dic.keys())
print(dic.values())
print(dic.get(30))
dic1={1:"One",2:"Two",3:"Three"}
print(dic1==dic)
print(dic is dic1)'''