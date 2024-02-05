let score  = "778ada"

console.log(typeof score);
console.log(typeof (score));

let valNumber = Number(score)
console.log(typeof valNumber);
console.log(valNumber); // actual it is not a number its a NaN because of it a converion of string

// 33 => 33
// "33a" => NaN
// true => 1