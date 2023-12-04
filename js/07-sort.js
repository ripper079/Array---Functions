//sort - sorts the array by manipulating the array. Make sure to make a copy and then sort if you do NOT want to modify the original array
//index are zero based!!! Important

//The original array is NOT modified!
console.log("The 07-sort.js file has been loaded");

console.log("Hello");

//The data
var numbers = [14,12,1,78,36,100];
var arrayOfPeople = [
  { name: 'John', age: 25, city: 'New York' },
  { name: 'Alice', age: 30, city: 'San Francisco' },
  { name: 'Jim', age: 8, city: 'Detroit' },
  { name: 'Pelle', age: 67, city: 'Chicago' },
  { name: 'Bob', age: 22, city: 'Seattle' }
];
//Copy of data
//Shallow copy
var copyShallowPeople = arrayOfPeople.slice();
//Deep copy
var deepCopyPeople = JSON.parse(JSON.stringify(arrayOfPeople));



//Sorting
var sortedNumbers = numbers.sort((a, b) => {
    return a - b;
});


//Creates a new sorted array
var newArrayBasedOnAge = arrayOfPeople.slice().sort((a, b) => {
  return a.age - b.age;
});

//Or using a compare function
function compare_fn(a, b){
  if (a.age < b.age){
      return -1;
  }
  if (a.age > b.age){
      return 1;
  }
  return 0;
}

  //Sorts the actual array
arrayOfPeople.sort(compare_fn);
console.log(arrayOfPeople);
// console.log(arrayOfPeople[0]);//{ name: "Jim", age: 8, city: "Detroit" }
// console.log(arrayOfPeople[1]);// { name: "Bob", age: 22, city: "Seattle" }
// console.log(arrayOfPeople[2]);// { name: "John", age: 25, city: "New York" }
// console.log(arrayOfPeople[3]);// { name: "Alice", age: 30, city: "San Francisco" }
// console.log(arrayOfPeople[4]);// { name: "Pelle", age: 67, city: "Chicago" }