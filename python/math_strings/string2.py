samp_string = "This is a very important string"

# To access the first character
print(samp_string[0])

# To access the last character
print(samp_string[-1])

# Indexex can also be added
print(samp_string[3+5])

# string length
print("Length :", len(samp_string))

# Slicing
print(samp_string[0:4])
print(samp_string[8:])

# print individual characters
for char in samp_string:
    print(char)
    
# Print in pairs and reduce the length by 1
for i in range(0, len(samp_string)-1, 2):
    print(samp_string[i] + samp_string[i+1])
    
