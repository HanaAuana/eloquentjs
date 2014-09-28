var deepEqual = function(obj1, obj2){

	if( obj1 === obj2){
		return true;
	}
	if(typeof obj1 !== "object" || typeof obj2 !== "object" ||
		typeof obj1 === null || typeof obj2 === null){
		return false;
	}
	
	if(Object.keys(obj1).length !== Object.keys(obj2).length){
		return false;
	}

	var numPropsIn1 = 0;
	var numPropsIn2 = 0;
	for( var p1 in obj1){
		numPropsIn1++;
	}

	for( var p2 in obj2){
		numPropsIn2++;
		if( !(p2 in obj1) || !deepEqual(obj1[p2], obj2[p2])){
			return false;
		}
	}
	return numPropsIn1 === numPropsIn2;
};

var obj = {
	here: { is: "an"},
	object: 2
};

console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, {here: 1, object: 2}));

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));