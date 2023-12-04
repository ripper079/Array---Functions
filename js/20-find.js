//find - search inside the array and return the FIRST element which callback function return a truthy value. This function return only a single element OR an undefined. 
//array.find(callback(element[, index[, array]])[, thisArg]);

console.log("The file 20-find.js has been loaded");

const number = ["Erik", "Kalle", "Daniel", "Jen", "Oscar", "Daniel", "Johan"];

//Returns if a value is five
const elementFound = number.find(findDaniel);

function findDaniel(element, index, arr){
    if (element === "Daniel"){
        //console.log(`The index:${index}`);
        return true;
    }
    return false;
}

console.log(elementFound);


