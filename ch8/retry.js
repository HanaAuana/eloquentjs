function MultiplicatorUnitFailure(message){
  this.message = message;
}
MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);
MultiplicatorUnitFailure.prototype.name = "MultiplicatorUnitFailure";

function primativeMultiply(a, b){
  if(Math.random() < 0.5){
    return (a * b);
  }
  else{
    throw new MultiplicatorUnitFailure("Failure");
  }
}

function reliableMultiply(a,b){
  while(true){
    try{
      return primativeMultiply(a, b);
    }
    catch(error){
      if(error instanceof MultiplicatorUnitFailure){
        console.log(error.message);
      }
      else{
        throw error;
      }
    }
  }
}

console.log(reliableMultiply(8, 8));
