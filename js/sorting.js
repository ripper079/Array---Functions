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
function compare(a, b){
  if (a.age < b.age){
      return -1;
  }
  if (a.age > b.age){
      return 1;
  }
  return 0;
}

  //Sorts the actual array
arrayOfPeople.sort(compare);

console.log(arrayOfPeople);