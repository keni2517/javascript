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


//arrow 


let x = (a , b ,c)  => a*b+c;

console.log(x(47,85,8));


let z = (a , b ,c)  => {
    return a+b*c;
}

console.log(z(47,85,8));


//constructor

const m = new Function("a", "b", "return a / b");
console.log(m(9 , 3));
