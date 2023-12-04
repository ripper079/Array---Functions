//reverse - reverse the elements in the array. Changes the original array and return the new array too

console.log("The 12-reverse.js file has been loaded");

const numbers = [1,2,3,4,5,6,7];
const copyNumbers = numbers.reverse();
const names = ["Daniel", "Jen", "Olle", "Pelle"];
names.reverse();


console.log(numbers);           //[ 7, 6, 5, 4, 3, 2, 1 ]
console.log(copyNumbers);       //[ 7, 6, 5, 4, 3, 2, 1 ]
console.log(names);             //[ "Pelle", "Olle", "Jen", "Daniel" ]


//Reverse a string
const str = "Coding is fun!";
const splittedString = str.split('');               //[ "C", "o", "d", "i", "n", "g", " ", "i", "s", " ", "f", "u","n", "!""]
const reverseString = splittedString.reverse();     // [  '!', 'n', 'u', 'f', ' ', 's', 'i', ' ', 'g', 'n', 'i', 'd', 'o', 'C']
const strReverse = reverseString.join('');          // [ "Pelle", "Olle", "Jen", "Daniel" ]
