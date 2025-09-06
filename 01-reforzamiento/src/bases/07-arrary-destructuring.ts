const characterNames = ['Goku', 'Vegeta', 'Trunks']

const [, , trunks] = characterNames;

console.log({trunks});


const returnArrayFn = () => {
    return ['ABC', 123] as const; // As const define que el primero es string y el segundo number;
}

const [letters, numbers] = returnArrayFn();

console.log(numbers + 100);


const userState = (value:string) => {return ([value, (name:string):void => console.log(name)] as const);}

const [name, setName] = userState('Goku');

console.log(name);
setName('Vegeta')
