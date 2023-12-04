//Filter creates a shallow copy based on a condition

//The data
var moreNumbers = [14,12,1,78,36,100];
var people = [
  { name: 'John', age: 25, city: 'New York', male: true },
  { name: 'Alice', age: 65, city: 'San Francisco', male: true  },
  { name: 'Jim', age: 8, city: 'Detroit', male: true  },
  { name: 'Pelle', age: 5, city: 'Chicago', male: false  },
  { name: 'Oscar', age: 98, city: 'Göteborg', male: true  },
  { name: 'Peter', age: 1, city: 'Washington', male: true  },
  { name: 'Bob', age: 22, city: 'Seattle', male: false  }
];



var adultPeople = people.filter(aPerson => {
    return aPerson.age >= 18;
});
//When only one liner like the previous one
var elderyPeople = people.filter(aPerson => aPerson.age >= 65);

//console.log(people);
console.log(adultPeople);
console.log(elderyPeople);

function filterByMaleMinor(aPerson){
    if (aPerson.age <= 18 && aPerson.male){
        return true;
    }
    return false;
}


//var minorMalePeople = people.filter(filterByMaleMinor);
//OR
var minorMalePeople = people.filter(aPerson => aPerson.age <=18 && aPerson.male);
console.log(minorMalePeople);