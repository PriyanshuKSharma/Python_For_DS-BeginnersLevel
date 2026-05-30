'''
privat(like) attributes & methods
conceptual implementation in python
'''

class Account:
    def __init__(self, acc_no, acc_pass):
        self.acc_no = acc_no
        self.__acc_pass = acc_pass  #private

    def reset_password(self):
        print(self.__acc_pass) #accessor method

acc1 = Account(123456, '1234')
# print(acc1.__acc_pass)  #not accessible
# acc1.reset_password()  #accessible
# print(acc1._Account__acc_pass)

class SecretAgent:
    def __init__(self, codename, real_name):
        self.codename = codename      # Public
        self.__real_name = real_name  # Private-like Attribute

    def __decrypt_secret(self):
        return "Decrypted: Target located."

    def reveal_identity(self):
        # Accessible inside the class natively
        print(f"Agent: {self.codename}")
        print(f"Real Name: {self.__real_name}")
        print(self.__decrypt_secret())

secret_agent = SecretAgent("007", "James Bond")
secret_agent.reveal_identity()
print(secret_agent._SecretAgent__decrypt_secret())
