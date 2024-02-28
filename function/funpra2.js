
// 2. Write a JS function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.


let x = "webmaster";

let y = x.split('').sort().join('');
console.log(y);