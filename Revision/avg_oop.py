#Create student class that takes name and marks of 3 subjects as arguments in constructor
#and creates a method to calculate the average of the 3 marks.
#Creates a method to print the name and the average. 

class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks
        
    def get_avg(self):
        sum = 0
        for val in self.marks:
            sum += val
        print(f"Hello!! {self.name}, Your marks are:{self.marks}, Your average is:{sum/len(self.marks)}")

s1 = Student("Priyanshu", [90, 80, 70])
s1.get_avg()

s2 = Student("Anushka", [50, 30, 20])
s2.get_avg()

s3 = Student("Tiya", [100, 90, 80])
s3.get_avg()