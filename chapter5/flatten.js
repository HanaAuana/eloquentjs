var arrays = [[1,2,3], [4,5], [6]];

console.log(arrays.reduce(function(result, current){
		return result.concat(current);
}));