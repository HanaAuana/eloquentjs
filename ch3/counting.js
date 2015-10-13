var countBs = function(input){
  return countChar('B', input);
};

var countChar = function(toCount, input){
  var count = 0;
  for(var i = 0; i < input.length; i++){
    if(input.charAt(i) === toCount){
      count++;
    }
  }
  return count;
};

console.log(countBs("BBC"));
console.log(countChar('k', "kakkerlak"));
