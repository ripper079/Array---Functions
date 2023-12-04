//concat - merge 2 or MORE arrays into one new array. Do NOT modify the original array
//index are zero based!!! Important

//The original array is NOT modified!
console.log("The 08-concat.js file has been loaded");

const a = [1,2,3];
const b = [6,7,8];
const c = [11,13,15];

const twoArrays = a.concat(b);
console.log(twoArrays);                 //[ 1, 2, 3, 6, 7, 8 ]
const threeArrays = a.concat(b,c);      
console.log(threeArrays);               //[ 1, 2, 3, 6, 7, 8, 11, 13, 15 ]

//Can work as a push to
const mixedArray = c.concat('L', '😊', 'V', 'E');
console.log(mixedArray);                //[ 11, 13, 15, "L", "😊", "V", "E" ]
