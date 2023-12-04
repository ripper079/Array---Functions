//splice - Changes the ORIGINAL array by removing or replacing existing element from it
//a starting index and a count
//It return an array with the removed items

console.log("The 06-splice.js file has been loaded");

const numbers = [1, 22, 11, 67, 90, 41, 17, 555, 121, 66];
//Caution be sure to only have one ex code "active", uncommented. Rememeber that the original array is modified

//Ex 1 - Remove items
//First parameter in the starting index(zero bases) and the second parameter how many item to remove
// const deleteditems = numbers.splice(2,3);
// console.log(numbers);               //  [ 1, 22, 41, 17, 555, 121, 66 ]
// console.log(deleteditems);          //  [ 11, 67, 90 ]


//Ex 2 - Remove items and add more
//Item to be added
// let item1 = 999;
// let item2 = 666;
// let item3 = 888;
// let itemArray = [999, 666, 888];
// //const deleteditems = numbers.splice(4, 2, item1, item2, item3);
// const deleteditems = numbers.splice(4, 2, ...itemArray);
// console.log(numbers);               //  [ 1, 22, 11, 67, 999, 666, 888, 17, 555, 121, 66, 11 ]
// console.log(deleteditems);          //  [ 90, 41 ]

