var reverseArray = function(input){
  var output = [];
  for(var i = 0; i < input.length; i++){
    output.unshift(input[i]);
  }
  return output;
};

var reverseArrayInPlace = function(input){
  for(var i = 0; i < Math.floor(input.length/2); i++){
    var temp = input[i];
    input[i] = input[input.length - (i+1)];
    input[input.length - (i+1)] = temp;
  }
};

var testArray = [1, 2, 3, 4, 5];

console.log(reverseArray(["A", "B", "C"]));
reverseArrayInPlace(testArray);
console.log(testArray);
