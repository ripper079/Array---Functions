//filter - Creates a new array, that is filtered based on some condition. The size of the filtered array may be the same OR less than the original one. The values that are evaluated to true is returned. If its returned false the element is discarded.
//The original array is NOT modified!
console.log("The 03-filter.js file has been loaded");
//PS One thing to know is that every array function have access to element, index and the whole array. Usually we work only with elements


const numbers = [12,3,67,89,12,78,40,100, 90];

//Ex 1
// const evenNumbers = numbers.filter((aNumber) => {
//     //Even??
//     if (aNumber % 2 === 0){
//         return true;
//     }
//     return false;
// });

// console.log(evenNumbers);       //[ 12, 12, 78, 40, 100, 90 ]


const people = [
    {
        name: 'Daniel',
        age: 43
    },
    {
        name: 'Pelle',
        age: 17
    },
    {
        name: 'Linda',
        age: 67
    },
    {
        name: 'Johan',
        age: 3
    }
];

// const peopleAdult = people.filter(elementPerson => elementPerson.age >= 18);
// console.log(peopleAdult);
// console.log(peopleAdult[0]);        //{ name: "Daniel", age: 43 }
// console.log(peopleAdult[1]);        //{ name: "Linda", age: 67 }