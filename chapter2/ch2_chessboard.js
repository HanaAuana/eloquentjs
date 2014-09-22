var size = 8;

for (var row = 0; row < size; row++) {
	var r = "";
	for (var col = 0; col < size; col++) {
		if( (row+col)%2 === 0 ){
			r +="#";
		}
		else{
			r+= " ";
		}
	};
	console.log(r);
};