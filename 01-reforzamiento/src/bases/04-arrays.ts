const myArray: number[] = [1,2,3,4,5],
    myArray2 = [...myArray]

myArray2.push(+'10')
myArray2.push(11)

console.log(myArray, myArray2);

// for (const myNumber of myArray) {
//     console.log(myArray);
    
// }
