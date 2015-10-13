var range = function(start, end, increment){
  var step = increment || 1;
  var result = [];
  if(step < 0){
    for(var i = start; i >= end; i+= step){
      result.push(i);
    }
  }
  else{
    for(var j = start; j <= end; j+= step){
      result.push(j);
    }
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
console.log(range(5, 2, -1));
