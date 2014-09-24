var range = function(start, end){
	var nums = [];
	for (var i = start; i <= end; i++) {
		nums.push(i);
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