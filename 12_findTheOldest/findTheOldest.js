const findTheOldest = function(arr) {
  for (let person of arr) {
    if (!person.yearOfDeath) {
      person.yearOfDeath = 2023;
    }
  }
 return arr.sort((a,b) => (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? -1 : 1)[0]
};
const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]
console.log(findTheOldest(people))

// Do not edit below this line
module.exports = findTheOldest;
