//slice - Returns a shallow copy of a PORTION of the array(returns array). Start-index and end-index
//index are zero based!!! Important

//The original array is NOT modified!
console.log("The 05.slice.js file has been loaded");
//PS One thing to know is that this function have access to element, index and the whole array. Usually we work only with elements

const numbers = [1, 23, 11, 67, 56, 90, 56, 37, 80];
//If parameter 2 is emitted it takes the whole array
console.log(numbers.slice(2));          // [ 11, 67, 56, 90, 56, 37, 80 ]
//Second parameter takes 6 elements from the whole array but start at index 3
console.log(numbers.slice(3, 6));       // [ 67, 56, 90 ]
console.log(numbers.slice(1, 6));       // [ 23, 11, 67, 56, 90 ]

//Careful when using negative index - Tricky
//The 2 last element in the array
console.log(numbers.slice(-2));         // [ 37, 80 ]
//The 5 last element in the array
console.log(numbers.slice(-5));         // [ 56, 90, 56, 37, 80 ]
//starts from the 5th element from the end.
console.log(numbers.slice(-5, -3));     // [ 56, 90 ]



