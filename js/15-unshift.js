//unshift - Add one OR more elements at the begining of the array and return the nex length of the array. Modifies the existing array

console.log("The file 15-unshift.js has been loaded");


const numbers = [1,2,3];

numbers.unshift(-1, 0);
console.log(numbers);                //[ -1, 0, 1, 2, 3 ]
numbers.unshift("Before -1");
console.log(numbers);               // [ "Before -1", -1, 0, 1, 2, 3 ]

