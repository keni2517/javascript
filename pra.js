

// var a = "hello";
// console.log(a.charCodeAt(4));
// var sum = 0;
//  for (var i = 0; i < a.length; i++) {
//          sum +=(a.charCodeAt(i) - 'a'.charCodeAt(0));
// }

// console.log(sum);

const obj1 = { name:"hello" ,Age:16};
const obj2 = { name:"hello" ,Age:16};

console.log(obj1 === obj2);

function show(...args){
    let sum =0;
    for(let i in args)
    sum+=args[i];
console.log(sum);
}
show(40,11,5);


const numbers = [45, 4, 9, 16, 25];
const firstIndex = numbers.findIndex(function (val){
			return val > 18;
});
console.log(firstIndex);