var some = function(input, test){
  for(var i = 0; i < input.length; i++){
    if(test(input[i])){
      return true;
    }
  }
  return false;
};

var every = function(input, test){
  for(var i = 0; i < input.length; i++){
    if(!test(input[i])){
      return false;
    }
  }
  return true;
};

var isEven = function(num){
  return ((num % 2) === 0);
};

var testArray = [1, 2, 3, 4, 5];

console.log(some(testArray, isEven));
console.log(every(testArray, isEven));
console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));
console.log(some([NaN, 3, 4], isNaN));
console.log(some([2, 3, 4], isNaN));
