//pop - Removes the last item in the array. It also returns the value that was popped

console.log("The file 14-pop.js has been loaded");

const numbers = [1,2,3,4];
//PS remmber that const only means that you cannot re-assign the variable
//numbers = ["New", "Value", "Here", "not", "allowed"];


const elementPopped = numbers.pop();
console.log(elementPopped);             //4
console.log(numbers);                   //[ 1, 2, 3 ]

