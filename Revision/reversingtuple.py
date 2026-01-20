#reversing the tuples
def reverse(tuples):
    list=[]
    for k in reversed(tuples):
        list=list+[k]
    tuple(list)
    print(list)

tuples=(10,20,30,40,50,60)
reverse(tuples)

#[60,50,40,30,20,10]
