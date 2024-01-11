interface User {
    firstName: string;
    surname: string;
    age: number;
    isAdmin: boolean;
}

const user: User = {
    firstName: 'Samuel',
    surname: 'onoh',
    age: 17,
    isAdmin: true
}

interface User2 extends User {
    proffession: string;
}

const user2: User2 = {
    firstName: 'Joe',
    surname: 'Michael',
    age: 20,
    isAdmin: false,
    proffession: 'Dev'
}

type Wrapped<T> = { value: T };

const WrappedValue: Wrapped<string> = {value: 'sam'}