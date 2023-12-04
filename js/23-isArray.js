//isArray - check if the passed value is an array. Returns true/false

console.log("The file 23-isArray.js has been loaded");

const names = ["Daniel", "Ivan"];
const str = "Hello World";
const luckyNumber = 999;
const emptyArr = [];

console.log(Array.isArray(names));          //true
console.log(Array.isArray(str));            //false
console.log(Array.isArray(luckyNumber));    //false
console.log(Array.isArray(emptyArr));       //true