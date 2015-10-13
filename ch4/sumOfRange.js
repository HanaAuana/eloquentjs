var range = function(start, end){
  var result = [];
  for(var i = start; i <= end; i++){
    result.push(i);
  }
  return result;
};

var sum = function(array){
  var result = 0;
  for(var i = 0; i < array.length; i++){
    result += array[i];
  }
  return result;
};

console.log(sum(range(1, 10)));
