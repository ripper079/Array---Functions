//reduce - Executes a callback function on each element and returns ONE single value. The accumulator has an initial value(is none provided the first element is picked). The return value is new the accumaltor value when next element is iterated.
//Input one array and output a single value
//The original array is NOT modified!
console.log("The 04-reduce.js file has been loaded");
//PS One thing to know is that this function have access to element, index and the whole array. Usually we work only with elements
//array.reduce(callback[, initialValue]);


const number = [45,78,12,67,12,89,21];

function sum (accumulator, value, index, arr){
    console.log(`Current accumulator is ${accumulator}`);
    console.log(`Current value is ${value}`);
    console.log(`------------------------------------------`);
    return accumulator + value;
}

const total = number.reduce(sum, 0);
console.log(`Total value is ${total}`);