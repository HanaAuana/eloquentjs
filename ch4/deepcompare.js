var deepEqual = function(obj1, obj2){
  if(typeof obj1 === "object" && typeof obj2 === "object"){
    for(var prop in obj1){
      if(prop in obj2){
        if(deepEqual(obj1[prop], obj2[prop])){
        }
        else{
          return false;
        }
      }
      else{
        return false;
      }
    }
  }
  else if(typeof obj1 === "object" || typeof obj2 === "object"){
    return false;
  }
  else{
    if(obj1 === obj2){
    }
    else{
      return false;
    }
  }
  return true;
};

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
