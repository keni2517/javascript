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


//function are object

function myFunction(a, b,c,d,e,f,g,h) {
    return arguments.length; 
}

let text = myFunction(4,7,8,7,4,5,9,2);
console.log(text);


//function rest parameters

function sum(...args) {
    let sum = 0;
for (let i=0 ; i<=arguments.length ; i++) 
                sum += args[i];
return sum;
}

let r = sum(4, 9); 
console.log(r);


//Generator Function

function* generate() {
    yield 1;
    yield 2;
    return 3;
}  

let generator = generate();
console.log(generator.next().value);
console.log(generator.next().value); 
console.log(generator.next().value); 


//this keyword

const person = {
    firstName: "keni",
    lastName: "kakadiya",
    id:2517,
    fullName : function() {
                    return this.firstName + this.lastName;
        }
};  

console.log(person);