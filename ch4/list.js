var prepend = function(newVal, list){
  var output = {
    value: newVal,
    rest: list
  };
  return output;
};

var nth = function(target, list){
  var currNode = list;
  for(var i = 0; i < target; i++){
    currNode = currNode.rest;
  }
  return currNode || undefined;
};

var recursiveNth = function(target, depth, list){
  if(depth === target){
    return list;
  }
  else{
    return recursiveNth(target, depth-1, list.rest);
  }
};

var arrayToList = function(input){
  var output = {};
  var nextVal = input.shift();
  var currNode = output;
  while(nextVal){
    currNode.value = nextVal;
    currNode.rest = {};
    currNode = currNode.rest;
    nextVal = input.shift();
  }
  currNode.rest = null;
  return output;
};

var listToArray = function(input){
  var output = [];
  var nextVal = input.value;
  var currNode = input;
  while(nextVal){
    output.push(nextVal);
    currNode = currNode.rest;
    if(!currNode){
      break;
    }
    nextVal = currNode.value;
  }
  return output;
};

console.log(arrayToList([1, 2, 3]));
var testList = arrayToList([1, 2, 3]);
console.log(listToArray(testList));
