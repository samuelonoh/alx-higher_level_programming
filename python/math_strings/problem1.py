'''A - Z 65 - 90
a - z 97 - 122
'''

# Enter a string to hide in uppercase : HIDE

# Secret Message : 56349078 

# Original Message HIDE

# Input "Enter a string to hide in uppercase"
norm_string = input("Enter a string to hide in uppercase : ")
secret_string =""

# Cycle through each character in the string
for char in norm_string:

# Stor each character code in a new string
    secret_string += str(ord(char) -23)

# Print "Secret Message : 56349078"
print("Secret Message :", secret_string)

# Cycle through each character code 2 at a time by incrementing by 2 each time
norm_string = ""
for i in range (0, len(secret_string)-1, 2):

# Get the 1st and 2nd for the digit number
    char_code = secret_string[i] + secret_string[i+1]

# Convert the code into characters and add them to a new string
    norm_string += chr(int(char_code) +23)

# Print Original Message : HIDE
print("Original Message :", norm_string)