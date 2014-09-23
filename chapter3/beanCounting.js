var countChar = function(s, char){
	var count = 0;

	for (var i = 0; i < s.length; i++) {
		if (s.charAt(i) === char){
			count++;
		}
	}
	return count;
};

var countBs = function(s){
	return countChar(s, "B");
};

console.log(countBs("BBC"));

console.log(countChar("kakkerlak", "k"));