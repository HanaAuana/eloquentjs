var reverseArray = function(arr){
	var newArr = [];

	for (var i = 0; i < arr.length; i++) {
		newArr.unshift(arr[i]);
	}
	return newArr;
};

var reverseArrayInPlace = function(arr){

	for (var i = 0; i < Math.floor(arr.length/2); i++) {
		var temp = arr[i];
		arr[i] = arr[arr.length-i-1];
		arr[arr.length-i-1] = temp;
	}
	return arr;
};

console.log(reverseArray(["A", "B", "C"]));

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);