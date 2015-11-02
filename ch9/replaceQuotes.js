var text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
console.log(text.replace(/(^'|'$|'\s|\s')/g, "\""));
// → "I'm the cook," he said, "it's my job."
