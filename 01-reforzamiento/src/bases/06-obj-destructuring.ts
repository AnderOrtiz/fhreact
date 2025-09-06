const person  = {
    name: 'Tony',
    age: 45,
    key: 'ironman',
};

const {key, name: ironmanName, age} = person;

console.log({key, ironmanName, age});

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const userContext = ({key, name, age, rank = 'Sin rango'}: Hero) => {
    return {
        keyName: key,
        user: {
            name,
            age,
        },
        rank,
    };
};

// const {keyName, rank, user: {name}} = userContext(person);
const {keyName,
    rank,
    // user: {name},
    user
} = userContext(person);

const {name} = user

console.log(keyName, rank, name)




