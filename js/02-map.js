//map - Executes a given function on each element AND returns a NEW array. The number(count) of elements in the new array will be the same as in the original
//The original array is NOT modified!
console.log("The 02-map.js file has been loaded");
//PS One thing to know is that every array function have access to element, index and the whole array. Usually we work only with elements

const number = [34, 67,1,45,-5,73,123,25,80];
const names = ["bob eriksson", "emil svensson", "petter Peloni", "lina Wolf", "alexia ingarvsson", "daniela bjoksson"];

//The benefit with a "seperate" function if that you can reuse this function in may places
function doubleUp(value, index, arr){
    return value * 2;
}

//Ex 1 - With functions
// let doubleNumber = number.map(doubleUp);
// console.log(doubleNumber);          // [68, 134, 2, 90, -10, 146, 246, 50, 160 ]

//Ex 2 - With arrow function (only with elements)
// let tripleNumber = number.map((element) => {
//     return element * 3;
// });
// console.log(tripleNumber);          //[ 102, 201, 3, 135, -15, 219, 369, 75, 240 ]

//Ex 3 - If the body of the arrow function is only one line it is possible to omit the body and return statement
// let tripleNumberOneLiner = number.map((element) => 3*element);
// console.log(tripleNumberOneLiner);      //[ 102, 201, 3, 135, -15, 219, 369, 75, 240 ]

//Ex 4 make each letter uppercase
// let upperCaseLetter = names.map((elementName) =>  elementName.charAt(0).toUpperCase() + elementName.slice(1));
// console.log(upperCaseLetter);       //[ "Bob eriksson", "Emil svensson", "Petter Peloni", "Lina Wolf", "Alexia ingarvsson", "Daniela bjoksson" ]

//Ex 5 - Complexed
// let UpperCaseAllLetters = names.map((elementName) => {
//     let capitalizedNames = 
//     elementName
//     .split(' ')
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(' ')

//     return capitalizedNames;
// });
// console.log(UpperCaseAllLetters);       //[ "Bob Eriksson", "Emil Svensson", "Petter Peloni", "Lina Wolf", "Alexia Ingarvsson", "Daniela Bjoksson" ]

//Ex 6
const products = [
    {
        name: "computer",
        price: 5000,
        count: 8
    },
    {
        name: "apple",
        price: 10,
        count: 231
    },
    {
        name: "keyboard",
        price: 899,
        count: 45
    }
];
// //Creates single values in the new array
// const totalValue = products.map((elementOneProduct) => elementOneProduct.price * elementOneProduct.count);
// console.log(totalValue);            // [ 40000, 2310, 40455 ]

//Creates object in the new array, observe the extra () parateses when using this solution - POWER USER
// const totalValueEachProduct = products.map((elementProduct) =>  ({                              //
//     product_name: elementProduct.name,                                                          //
//     total_value: elementProduct.price * elementProduct.count                                    //
// }));
// console.log(totalValueEachProduct);
// console.log(totalValueEachProduct[0]);            // { product_name: "computer", total_value: 40000 }
// console.log(totalValueEachProduct[1]);            // { product_name: "apple", total_value: 2310 }
// console.log(totalValueEachProduct[2]);            // { product_name: "keyboard", total_value: 40455 }