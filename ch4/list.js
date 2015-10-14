var prepend = function(newVal, list){
  var output = {
    value: newVal,
    rest: list
  };
  return output;
};

var nth = function(target, list){
  if(!list){
   return undefined;
  }
  else if(target === 0){
    return list.value;
  }
  else{
    return nth(target-1, list.rest);
  }
};

var arrayToList = function(input){
  var output = null;
  for(var i = input.length-1; i >= 0; i--){
    output = {
      value:input[i],
      rest: output
    };
  }
  return output;
};

var listToArray = function(input){
  var output = [];
  for(var n = input; n; n = n.rest){
    output.push(n.value);
  }
  return output;
};

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(1, arrayToList([10, 20, 30])));
