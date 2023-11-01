'''#SEQUENTIAL DATA TYPES
#LIST TUPLE SET DICTIONARY
tu=("rahul", "Python", 3.4, 89)
tu1=("rahul", "Python", 3.4, 89)
print(tu is tu1)
print(id(tu))
print(type(tu))'''

'''#LIST TUPLE SET DICTIONARY
se1={10,20,30,40,50,50,60,80,100}
se2={10,20,30,40,50,50,60,120,130}
print(se1)S
print(type(se1))
print(se1 is se2)
se3= se1.intersection(se2)
print(se3)
se4= se1.union(se2)
print(se4)'''


#SEQUENTIAL DATA TYPES
#LIST TUPLE SET DICTIONARY
dic={"java":["Notepad", "Eclipse", "Netbeans"], "python":["Pycharm", "Atom", "vscode"], "=2":["CTIS", "dcbc"]}
print(dic)
dic1={"java":["Notepad", "Eclipse", "Netbeans"], "python":["Pycharm", "Atom", "vscode"], "=2":["CTIS", "dcbc"]}
print(dic is dic1)
print(dic.keys())
print(dic.get(3), "NO")#get() func is used to find the index in dictionary


