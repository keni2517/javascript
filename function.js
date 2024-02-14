// basic function

function division(x , y){
    return x/y;
}

console.log(division(80,10));


// anoymous function

let k = function(a , b){
    return a - b;
};

console.log(k(50,80));

//IIFE


let y = (function add(a , b){
    return a +b;
})(10,15);

console.log(y);


