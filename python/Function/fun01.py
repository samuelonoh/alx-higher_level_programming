def print_first_function():
    print('My first function!')

print_first_function()

# Return function
def second_function():
    return 'My second function!'

print(second_function())

# Return multiple values
def return_numbers():
    return 10, 2

print(return_numbers())

# One argument
def my_number(num):
    return 'My number is: ' + str(num)

print(my_number(10))

# Two or more Arguments
def add(first_number, second_number):
    return first_number + second_number

print(add(10,3))

# Three Arguments
def adding_again(first_one, second_one, third_one):
    return first_one * second_one ** third_one
print(adding_again(5, 5, 2))

# Default value
def my_number(my_number = 30):
    return 'My number is: ' + str(my_number)

print(my_number(10))
print(my_number())

# Keyword or Named Arguments
def my_numbers(first_number, second_number):
    return 'The numbers are: ' + str(first_number) + ' and ' + str(second_number)
print(my_numbers(second_number=30, first_number=10))


# Any number of arguments
def my_numbers(*args):
    for arg in args:
        print(arg)

my_numbers(10, 2, 3)

# Any number of Keyword/Named arguments
def my_numbers(**kwargs):
    for key, value in kwargs.items():
        print(key)
        print(value)

my_numbers(first_number=30, second_number=10)

# other types as arguments
def my_sport(sport):
    print('I like ' + sport)

my_sport('football')
my_sport('Swimming')

def my_numbers(numbers):
    for number in numbers:
        print(number)

my_numbers([10, 2, 3, 4, -7])