function greet(name:string): string {
    return  `Hola ${name}`
}

const greet2 = (name: string):string =>  `Hola ${name}`


function getUser():User {
    return {uid: 'ABC-123',
    username: 'El_Papi123',
    }
}

interface User {
    uid: string,
    username : string,
}


const getUser2 = ():User => ({
        uid: 'ABC-123',
        username: 'El_Papi123',
    })


const message = greet('Goku'),
    message2 = greet2('Vegeta'),
    user1 = getUser(),
    user2 = getUser2();

console.log({message, message2});
console.log({user1, user2});

const myNumbers: number[] = [1,2,3,4,5,6];

// myNumbers.forEach(function(value) {
//     console.log(value);
// })

// myNumbers.forEach( (value) => {
//     console.log(value);
// });

// myNumbers.forEach(console.log)