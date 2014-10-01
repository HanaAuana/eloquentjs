var ancestry = require('./ancestry.js');
//console.log(ancestry);
//
//Supplied by EloquentJS
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

//Given a person, return the century they belong in
var getCentury = function(person){
	return Math.ceil(person.died/100);
};

//Given an array, and a grouping function, return an object containing the groups
var groupBy = function(arr, grouping){
	var groups = {};

	arr.forEach(function(person){
		var group = grouping(person);
		if(group in groups){
			groups[group].push(person);
		}
		else{
			groups[group] = [person];
		}
	});
	return groups;
};

var groups = groupBy(ancestry, function(person){
	return getCentury(person);
});
//console.log(groups);

for (var group in groups){
	var lifespans = groups[group].map(function(person){
		return person.died - person.born;
	});
	console.log(group+" : "+ average(lifespans));
}