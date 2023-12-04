//findIndex - search inside the array and return the FIRST INDEX which callback function return a truthy value. This function return only a single index OR an -1 if not found

console.log("The file 21-findIndex.js has been loaded");

const numbers = [43,12,78,123,999,47];

const foundIndex = numbers.findIndex(element => element === 999);

if (foundIndex === -1){
    console.log(`Sorry not found element`)
}
//Element found
else {
    console.log(foundIndex);
}

