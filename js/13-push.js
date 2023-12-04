//push - add one or more elements at the end of the array AND returns the new length of the array. Modifies the array.


console.log("The file 13-push.js has been loaded");

const numbers = [1,2,3,4];
//PS remmber that const only means that you cannot re-assign the variable
//numbers = ["New", "Value", "Here", "not", "allowed"];


numbers.push(10);
console.log(numbers);   //[ 1, 2, 3, 4, 10 ]
numbers.push(666,999);  
console.log(numbers);   //[ 1, 2, 3, 4, 10, 666, 999 ]
