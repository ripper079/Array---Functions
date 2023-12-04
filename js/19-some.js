//some - Executes a given function on every element and return true IF at least one elements returns a trutfy value. Return false ONLY if all elements return a falsy value


//Possible to privide element, index, array. Usually we only work with the elements

console.log("The file 19-some.js has been loaded");

const number = [1, 2, 3, 4, 5];

const isGreaterThenFour = number.some(element => element > 4);
console.log(isGreaterThenFour);     //true

const isAllValuesNegative = number.some(element => element < 0);
console.log(isAllValuesNegative);     //false


const people = [
    {
        name: "Daniel",
        age: 44
    },
    {
        name: "Olle",
        age: 65
    },
    {
        name: "Johan",
        age: 2
    }
];

const hasMinor = people.some(person => person.age < 18);
console.log(hasMinor);      //true
