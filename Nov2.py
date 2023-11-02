#Demonstration of break keyword
no_of_chocolates=20
chocolates_req=int(input("How many chocolates you want beta !!!"))
i=1
while(i<=chocolates_req):
    if(i>no_of_chocolates):
        print("Sorry beta out of stock\nBye")
        break
    print("Chocolate:",i)
    i+=1

#Demonstration of continue keyword
#step parameter
for i in range(1,21):
    n=i%2
    if(n!=0):
        continue
    print(i)
