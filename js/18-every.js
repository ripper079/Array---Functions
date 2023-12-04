//every - Executes a given function on every element and return true if every value if truefy, otherwise it return false immediately. Do not modify the array
//Possible to privide element, index, array. Usually we only work with the elements

console.log("The file 18-every.js has been loaded");

const number = [1, 2, 3, 4, 5];

const isAllValuesPositive = number.every(element => {
    if (element > 0){
        return true;
    }
    return false;
});

console.log("Is ALL values positive:" + isAllValuesPositive);            //true

const isAllValuesEven = number.every(element => {
    if (element % 2 == 0){
        return true;
    }
    return false;
});

console.log("Is all values even:" + isAllValuesEven);                   //false