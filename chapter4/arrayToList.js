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

console.log(arrayToList([1, 2, 3]));
