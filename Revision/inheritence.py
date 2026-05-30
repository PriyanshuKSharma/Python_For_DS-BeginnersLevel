class Car:
    
    @staticmethod
    def start():
        print('car started')

    @staticmethod
    def stop():
        print('car stopped')

class ToyotaCar(Car):
    def __init__(self, brand):
        self.brand = brand

#Multilevel inheritence
class Fortuner(ToyotaCar):
    def __init__(self, type):
        self.type = type
        ToyotaCar.__init__(self, brand="Toyota")


#Multiple inheritence
class HybridCar(ToyotaCar, Fortuner):
    def __init__(self, brand):
        self.brand = brand



car1 = Fortuner("Legender")
car1.start()
car1.stop()
print(car1.brand, car1.type)
        
