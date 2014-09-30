var ancestry = require('./ancestry.js');
//console.log(ancestry);
//
//Supplied by EloquentJS
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

//supplied by EloquentJS
var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

//Get all the people who have a mother in the dataset
var children = ancestry.filter(function(person){
	return byName[person.mother] !== undefined;
});
//console.log(children);
//Compute the age differences between children and their mothers 
var momChildAgeDiffs = children.map(function(person){
	return person.born - byName[person.mother].born;
});
//console.log(momChildAgeDiffs);

//Compute the average age difference
var averageDiff = average(momChildAgeDiffs);

console.log(averageDiff);