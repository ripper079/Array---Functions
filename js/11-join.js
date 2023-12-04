//join - creates a new string from an array by concatinating all elements in the array. Uses the comma as a separator as default

countries = ["Sweden", "Finland", "Germany", "Spain"];
const allCountries = countries.join();
const prettyfyAllCountriesString = countries.join(' - ');


//The original array is NOT modified!
console.log("The 11-join.js file has been loaded");
console.log(allCountries);                      //Sweden,Finland,Germany,Spain
console.log(prettyfyAllCountriesString);        //Sweden - Finland - Germany - Spain

