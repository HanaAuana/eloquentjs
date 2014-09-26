var arrayToList = function(arr){
	var list = {};
	var curNode = list;
	while(arr.length !== 0){
		curNode.value = arr.shift();
		curNode.rest ={};
		curNode = curNode.rest;
	}
	curNode.rest = null;
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

console.log(arrayToList([10, 20, 30]));

console.log(listToArray(arrayToList([10, 20, 30])));
