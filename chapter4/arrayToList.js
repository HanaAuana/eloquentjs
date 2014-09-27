var arrayToList = function(arr){
	var list = null;
	for( var i = arr.length - 1; i >= 0; i --){
		list = {
			value: arr[i],
			rest: list
		};
	}
	return list;
};

var listToArray = function(list){
	var arr = [];
	for( var node = list; node; node = node.rest){
		arr.push(node.value);
	}
	return arr;
};

var prepend = function(element, list){
	return {
		value: element,
		rest: list
	};
};

//0 based indexing
var nth = function(num, list){
	if(num === 0){
		return list.value;
	}
	else{
		return nth(num-1, list.rest);
	}
};

console.log(arrayToList([10, 20, 30]));

console.log(listToArray(arrayToList([10, 20, 30])));

console.log(prepend(10, prepend(20, null)));

console.log(nth(1, arrayToList([10, 20, 30])));