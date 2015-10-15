var flatten = function(input){
  return input.reduce(function(flat, next){
    return flat.concat(next);
  });
};

var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(flatten(arrays));
