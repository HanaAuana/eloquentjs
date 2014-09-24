var range = function(start, end, step){
	var nums = [];

	if(step === undefined){
		step = 1;
	}
	if(end < start){
		step = -1;
	}
	if( step > 0){
		for (var i = start; i <= end; i+=step) {
			nums.push(i);
		}
	}
	else{
		for (var j = start; j >= end; j+=step) {
			nums.push(j);
		}
	}
	return nums;
};

var sum = function(nums){
	var sum = 0;
	for (var i = 0; i < nums.length; i++) {
		sum += nums[i];
	}
	return sum;
};
console.log(sum(range(1,10)));

console.log(range(5,2, -1));