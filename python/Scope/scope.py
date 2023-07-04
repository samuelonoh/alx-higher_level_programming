# Global Scope
name = 'Bob'

def print_name():
    print('My name is ' + name)

print_name()


# Local Scope
def print_name1():
    name = "Samuel"
    print('My name is ' + name)

print_name1()