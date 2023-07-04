# my_list = list(zip(['a', 'b', 'c'], [1, 2, 3]))

# print(my_list)

# letters = ['a', 'b', 'c']
# nums = [1, 2, 3]

# for letter, num in zip(letters, nums):
#     print(f"{letter}: {num}")

# some_list = [('a', 1), ('b', 2), ('c', 3)]
# letters, nums = zip(*some_list)
# print(letters, nums)

# letters = ['a', 'b', 'c', 'd', 'e']
# for i, letter in enumerate(letters):
#     print(i, letter)


x_coord = [23, 53, 2, -12, 95, 103, 14, -5]
y_coord = [677, 233, 405, 433, 905, 376, 432, 445]
z_coord = [4, 16, -6, -42, 3, -6, 23, -1]
labels = ["F", "J", "A", "Q", "Y", "B", "W", "X"]

points = []
for point in zip(labels, x_coord, y_coord, z_coord):
    points.append("{}: {}, {}, {}".format(*point))

for point in points:
    print(point)

#####
cast_names = ["Barney", "Robin", "Ted", "Lily", "Marshall"]
cast_heights = [72, 68, 72, 66, 76]

cast = dict(zip(cast_names, cast_heights))
print(cast)

#####
cast = (("Barney", 72), ("Robin", 68), ("Ted", 72), ("Lily", 66), ("Marshall", 76))

names, heights = zip(*cast)
print(names)
print(heights)

####
cast = ["Barney Stinson", "Robin Scherbatsky", "Ted Mosby", "Lily Aldrin", "Marshall Eriksen"]
heights = [72, 68, 72, 66, 76]

for i, character in enumerate(cast):
    cast[i] = character + " " + str(heights[i])

print(cast)