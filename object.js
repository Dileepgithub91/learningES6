// const result={
//     name:"Dileep",
//     age  :26,
//     add:"Ludhiana"
// }
// console.log(result)
// //create key
// result.gmail="dileepkm@gmail.com";
// console.log(result);

// //find  specifiyed key and ther value
// console.log(result.name);
// console.log(result["age"]);

//find all keys
//console.log(keys(result.keys());

//find all values
//console.log(result.values());

// const person = new Object();
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue"; 
// console.log(person);



//.........JavaScript for...in Loop.............

/*The JavaScript for...in statement loops through the properties of an object.

Syntax
for (let variable in object) {
  // code to be executed
}
The block of code inside of the for...in loop will be executed once for each property.

Looping through the properties of an object:
*/



const per = {
    fname:"dileep",
    lname:"kumar",
    age:25
  }; 
  
  for (let x in per) {
    console.log(x);
  }
 
