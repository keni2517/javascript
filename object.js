let person={
    firstname :"keni",
    lastname : "kakadiya",
    email: "kenikakadita@gmai.com"
}

//console.log(person);
//console.log(person.firstname);
//console.log(person["lastname"]);

person.gender={
    gender1:"male",
    gender2 : "female"
}
console.log(person);

person.address = {
    line : "208,city center",
    city:"surat",
    state:"gujarat"
}
//console.log(person);

person.hobies = ['reading', 'dancing', 'music'];
//console.log(person);
console.log(person["hobies"]["1"]);
//console.log(person["address"]["city"]);

delete person.firstname;
console.log(person);


