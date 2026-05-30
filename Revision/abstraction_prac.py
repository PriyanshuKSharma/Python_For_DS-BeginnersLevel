# ──────────────────────────────────────────────────────────────────────────────
# CONCEPT: ABSTRACTION IN PYTHON
# ──────────────────────────────────────────────────────────────────────────────
# Abstraction is the OOP concept of hiding complex internal implementation details
# and exposing only the essential, high-level features/interfaces to the user.
#
# How this Car example demonstrates Abstraction:
# 1. Internal Complexity (Hidden):
#    The states of the pedals (`self.acc`, `self.brk`, `self.clutch`) represent the
#    underlying mechanical logic. The driver does NOT need to manually manage these.
# 2. Simple Interface (Exposed):
#    The methods `start()` and `drive()` represent the simple buttons/controls that
#    the driver interacts with. The driver calls `car1.start()`, and the car handles
#    the internal coordination of the clutch and accelerator automatically.
# ──────────────────────────────────────────────────────────────────────────────

class Car:
    def __init__(self):
        # Hidden/internal states (often made protected or private in production)
        self.acc = False
        self.brk = False
        self.clutch = False
        
    def start(self):
        # Internal coordination happens behind the scenes
        self.clutch = True
        self.acc = True
        print("Car Started ✅")

    def drive(self):
        # The user just wants to drive; the method checks the internal state
        if self.acc == True and self.clutch == True:
            print("Car is Driving 🚗💨")
        else:
            print("Cannot Drive ❌ (Clutch or Accelerator not engaged)")
            
        

# --- Driver / Client Code ---
# The client only interacts with the public, abstract interface (start & drive)
car1 = Car()
# car1.start()  # Hides the complex step-by-step state changes of clutch and acc
# car1.drive()  # Simply executes the drive action


#Practice Question
#Create accoint class with 2 attributes - balance & account no. 
#Create methods for debit, credit & printing the balance. 
class Account:
    def __init__(self, bal, acc):
        self.balance = bal
        self.account_no = acc

    def debit(self, amount):
        self.balance -= amount
        print("Rs.", amount, "was debited")

    def credit(self, amount):
        self.balance += amount
        print("Rs.", amount, "was credited")

    def print_balance(self):
        print("Balance:", self.balance)


acc1 = Account(100000, 123456)
# print(acc1.balance)
# print(acc1.account_no)
debit=acc1.debit(1000)
print(acc1.balance)
credit=acc1.credit(2000)
print(acc1.balance)
print_balance=acc1.print_balance()
print(acc1.balance)


# ──────────────────────────────────────────────────────────────────────────────
# THE `del` KEYWORD IN PYTHON
# ──────────────────────────────────────────────────────────────────────────────
# In Python, `del` is a powerful keyword used to delete objects, variables, 
# list items, dictionary keys, or object attributes.
#
# Let's see how it applies to OOP:

# 1. Deleting an Object Attribute:
# We can delete a specific property of an object using `del object.attribute`.
print("\n--- Deleting an attribute ---")
print("Before deleting balance:", acc1.balance)
del acc1.balance
print("Attribute 'balance' deleted successfully.")

# Try to access it now -> raises AttributeError: 'Account' object has no attribute 'balance'
try:
    print(acc1.balance)
except AttributeError as e:
    print(f"AttributeError caught: {e}")

# 2. Deleting the Entire Object:
# We can delete the reference to the object entirely using `del object`.
print("\n--- Deleting the entire object ---")
print("acc1 reference exists right now.")
del acc1
print("Object 'acc1' deleted successfully.")

# Try to access it now -> raises NameError: name 'acc1' is not defined
try:
    print(acc1)
except NameError as e:
    print(f"NameError caught: {e}")

