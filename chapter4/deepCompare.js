var deepEqual = function(obj1, obj2){

	if(typeof obj1 !== "object" || typeof obj2 !== "object" || typeof obj1 === null || typeof obj2 === null){
		return obj1 === obj2;
	}
	else if(Object.keys(obj1).length !== Object.keys(obj2).length){
		return false;
	}
	else{
		for( var o in obj1){
			if( !(o in obj2) ){
				return false;
			}
			else{
				if(typeof obj1[o] !== "object"){
					if(obj1[o] !== obj2[o]){
						return false;
					}
				}
				else{
					if(deepEqual(obj1[o], obj2[o]) === false){
						return false;
					}
				}
			}
		}
	}
	return true;
};

var obj = {
	here: { is: "an"},
	object: 2
};

console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, {here: 1, object: 2}));

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));