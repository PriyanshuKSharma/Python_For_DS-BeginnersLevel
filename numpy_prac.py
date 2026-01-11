import numpy as np

listarray = np.array(
  [[1,2,3,4], 
  [5,6,7,8]]
)
print("Array using numpy:",listarray)
print("Data Type:",listarray.dtype)
print("Shape:",listarray.shape)
print("Size of an array: ",listarray.size) #creates the list of arrays


print(np.linspace(0,1,5))


arr = np.array([[1,2,3],
  [4,5,6],
  [7,8,9]]
  )

print(arr)

#Single element
print("Single Element: ",arr[1,2])

#Row and column
print("Elements from 2nd row(from top)",arr[1, :])
print("Elements till 2nd row(from bottom)",arr[:, 2])

#Slicing
print("rows: (0 to 2nd index) coloumns: (1 to 3rd index):",arr[0:2, 1:3]) #rows: (0 to 2nd index) coloumns: (1 to 3rd index)
print(arr[::-1])

diag = np.diag([1,2,3])
print(diag)

arr1 = np.array([1,2,3,4])
arr2 = np.array([5,6,7,8])

print(arr1+arr2)
print(arr1*arr2)
print(arr1**2)

print(np.sqrt(arr1))
print(np.exp(arr1))
print(np.sin(arr2))
print(np.cos(arr2))
print(np.tan(arr2))

print(np.sum(arr1))
print(np.mean(arr1))