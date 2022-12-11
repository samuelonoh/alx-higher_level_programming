# Do While loop always execute the code atleast once and then  check if the condition is true

# Guess a number between 1 and 10 :1

secret_number = 7

while True:
    guess = int(input("Guess a number between 1 and 10 : "))
    
    if guess == secret_number:
        print("You guessed it")
        break