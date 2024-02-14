const letters = new Set([80,50,70]); 

// Add Values to the Set
const x = new Set();
x.add(10); 
x.add(20);
x.add(30);

// Size
let sizes = x.size;  

// Delete Method
x.delete(20);

// has() Method
x.has(10); 
x.has(20);  

// values() Method
x.values();  

// forEach() Method
let txt = "";

x.forEach((value)=>{
			txt += value +"\t";
});