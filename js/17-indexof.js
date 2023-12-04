//indexof - returns the index of the FIRST element found in the array. If not found it returns -1
//Most suitable for arrays that contain primitive types. If array contains objects user findIndex function insteed.

//There is a corresponding function lastIndexOf which return the last index(e.i the array contains duplicates)
console.log("The file 17-indexof.js has been loaded");


const names = ["Jen", "Pelle", "Oscar"];
//Find index for pelle
const idx = names.indexOf("Pelle");

//This mean it found Pelle
if (idx != -1){
    //Change Pelle for Daniel
    names[idx] = "Daniel";
}

console.log(names);         //[ "Jen", "Daniel", "Oscar" ]


