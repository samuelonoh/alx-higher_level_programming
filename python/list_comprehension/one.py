# capitalized_cities = []
# for city in cities:
#     capitalized_cities.append(city.title())

# 1
cities = ['abia', 'abuja', 'lagos', 'kampala']
capitalized_cities = [city.title() for city in cities]

print(capitalized_cities)


# 2

# squares = [x**2 for x in range(9) if x % 2 == 0]

squares = [x**2 if x % 2 == 0 else x + 3 for x in range(9)]

print(squares)