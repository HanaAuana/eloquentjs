var counter = 1;
function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "..."){
    console.log(counter+" Skipped ");
    counter++;
    return;
  }
  yes.forEach(function(s) {
    if (!regexp.test(s)){
      console.log(counter+" Failure to match '" + s + "'");
      return;
    }
  });
  no.forEach(function(s) {
    if (regexp.test(s)){
      console.log(counter+" Unexpected match for '" + s + "'");
      return;
    }
  });
  console.log(counter+" All passed");
  counter++;
}

// 1
verify(/ca[rt]/,
       ["my car", "bad cats", "car", "cat"],
       ["camper", "high art"]);
// 2
verify(/pr?op/,
       ["pop culture", "mad props", "pop", "props"],
       ["plop"]);
// 3
verify(/ferr(et|y|ari)/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);
// 4
verify(/ious\b/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);
// 5
verify(/\s[.,:;]/,
       ["bad punctuation ."],
       ["escape the dot"]);
// 6
verify(/\w{7,}/,
       ["hottentottententen"],
       ["no", "hotten totten tenten"]);
// 7
verify(/\b([a-d]|[g-z])+\b/,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape"]);
