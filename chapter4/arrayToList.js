var arrayToList = function(arr){
	var list = null;
	for( var i = array.length - 1; i >= 0; i --){
		list = {
			value: array[i],
			rest: list
		};
	}
	return list;
};

var listToArray = function(list){
	var arr = [];
	var next = list;
	while(next.value !== undefined){
		arr.push(next.value);
		next = next.rest;
	}
	return arr;
};

var prepend = function(element, list){
	var newList = {
		value: element,
		rest: list
	};
	return newList;
};

console.log(arrayToList([10, 20, 30]));

console.log(listToArray(arrayToList([10, 20, 30])));

console.log(prepend(10, prepend(20, null)));
