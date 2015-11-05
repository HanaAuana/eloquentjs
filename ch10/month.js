var month = function(){
  var names = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  return {
    'name': function(num){
      return names[num];
    },
    'number': function(name){
      return names.indexOf(name);
    }
  };

}();

console.log(month.name(2));
// → March
console.log(month.number("Nov"));
// → 10
