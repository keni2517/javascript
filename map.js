// Create a Map
const k = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

// Set Map Values
const fruits = new Map();
fruits.set("apples", 500);
fruits.set("bananas", 300);


// Get Map Values
fruits.get("apples");
let size = fruits.size; 

// Delete Map Value
const deleteApple = fruites.delete("apple");
const deleteOreange = fruites.delete("oranges");

// has() method
fruits.has("apples"); 
fruits.has("Kiwi"); 

// forEach() method
let txt = "";

fruits.forEach((value, key)=>{
txt += key + " => " + value +"\n";
});