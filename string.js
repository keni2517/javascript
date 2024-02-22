let x = " java script";
console.log(x.length);
let y=x.toUpperCase();
let z=x.toLowerCase();
console.log(y);
console.log(z);
console.log(x.split('j'));


let k = "            keni kakadiya            ";
console.log(k.trim());
console.log(k.trimEnd());
console.log(k.trimStart());


let r = "158427";
console.log(r.padStart(12,'x'));
console.log(r.padEnd(12,'x'));

let text = "JavaScript is the world's most popular programming language.JavaScript is the programming language of the Web.";
let length = text.slice(7, 13);
console.log(length);
let length1 = text.slice(-13, -9);
console.log(length1);
let length2 = text.slice(-13, 9);
console.log(length2);


let length3 = text.substring(7, 13);
console.log(length3);
let length4 = text.substring(-13, -9);
console.log(length4);
let length5 = text.substring(-13, 9);
console.log(length5);

let length6 = text.substr(7, 13);
console.log(length6);
let length7 = text.substr(-13, -9);
console.log(length7);
let length8 = text.substr(-13, 9);
console.log(length8);

let replaceStr = text.replace("JavaScript", "c++");
console.log(replaceStr);