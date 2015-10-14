var deepEqual = function(item1, item2){
  //If two primatives match, return true
  if(item1 === item2){
    return true;
  }
  //If one of the items is null, return false
  else if( item1 === null || item2 === null){
    return false;
  //If one of the items is not an object, return false
  }else if (typeof item1 !== "object" || typeof item2 != "object"){
    return false;
  }
  else{
    var numProps1 = 0;
    var numProps2 = 0;
    for(var p in item1){
      numProps1++;
    }
    for(var prop in item2){
      //If a property isn't in both items,
      //or if the number of properties is different, return false
      if(deepEqual(item1[prop], item2[prop])){
        return true;
      }
      if(!(prop in item1) || (numProps1 !== numProps2)){
        return false;
      }
    }
  }

};

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
console.log(deepEqual(obj, null));
