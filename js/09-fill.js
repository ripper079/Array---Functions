//fill - Changes/modifies all element in the existing array with the provided value. It also returns the modified array.
//Arryas are zero based

//The original array is NOT modified!
console.log("The 09-fill.js file has been loaded");

const numbers = [13, 46, 11, 78, 33, 66, 12];

//Ex 1 - Whole array fill
// const copyNumberFill = numbers.fill('bye');
// console.log(numbers);               //[ "bye", "bye", "bye", "bye", "bye", "bye", "bye" ]
// console.log(copyNumberFill);        //[ "bye", "bye", "bye", "bye", "bye", "bye", "bye" ]

//Ex - Partionally fill the array
//Param 2 - First index(included) and Param 3 - Last Index(excluded)
const newArrayContent = numbers.fill('Gone', 2, 5);
console.log(numbers);               //[ 13, 46, "Gone", "Gone", "Gone", 66, 12 ]
console.log(newArrayContent);       //[ 13, 46, "Gone", "Gone", "Gone", 66, 12 ]