let user = {
    name: 'Zakiya',
    Age: 20,
    club: 'Arsenal',
    hobbies: ['football', 'coding'],
    greeting: function() {
        console.log('Good evening' + ' ' + this.name)
        return "sammy loves you"
    },
};
console.log(user)
console.log(user.greeting())