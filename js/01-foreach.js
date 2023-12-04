//foreach - Executes a given function on each element

console.log("The 01-foreach.js file has been loaded");

//PS One thing to know is that every array function have access to element, index and the whole array. Usually we work elements
//var scoped to the immediate function body
//let are scoped to block scope

const number = [45,12,1,78,344,16];
const names = ["Daniel", "Pelle", "Sven", "Maria", "Jenny", "Natalie", "Alexander"];


//The index is also sometimes called the key
function printNumbers(element, index, array){
    console.log(`The element is ${element}`);        
    console.log(`The index is ${index}`);
    console.log(`The array is ${array}`);
    console.log("------------------------------------------------------------");
}

//Example 1
//number.forEach(printNumbers);


//Example 2 With arrow functions
// names.forEach((elementName) => {
//     console.log(`Current name is:${elementName}`);
// });

//Example 3 - Arrow function with element,index, array
names.forEach((elementName, elementIndex, array) =>{
    console.log(`The element is ${elementName}`);        
    console.log(`The index is ${elementIndex}`);
    console.log(`The array is ${array}`);
    console.log("------------------------------------------------------------");
});
