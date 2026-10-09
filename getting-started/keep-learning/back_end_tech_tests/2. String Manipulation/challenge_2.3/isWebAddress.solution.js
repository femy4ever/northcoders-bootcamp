// ^ -> Regex must be placed at the start of the string
// (http(s){0,1}:\/\/){0,1} -> can have https:// or http:// zero or one time in the string
// (www\.){0,1} -> can have www. 0 or 1 time in string
// \w+ -> any sequence of alphanumeric characters
// \. -> must include a .
// \w{2,3} -> must include 2 - 3 alphanumeric characters
 module.exports = /^(http(s){0,1}:\/\/){0,1}(www\.){0,1}\w+\.\w{2,3}/