i = 1

# The even numbers were skip because of the continue
while i <= 20:
    if (i % 2) == 0:
        i += 1
        continue
    
    if i == 15:
        break
    
    print("Odd : ", i)
    
    i += 1