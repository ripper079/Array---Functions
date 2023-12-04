//includes - find if an element is included in the array. Returns true or false
//The parameter is the element to be found

//The original array is NOT modified!
console.log("The 10-includes.js file has been loaded");

const names = ["Daniel", "Ivan", "Dennis"];

let isNameFound = names.includes("Daniel");
console.log(isNameFound);                   //true
console.log(names.includes("Panraya"));     //false

