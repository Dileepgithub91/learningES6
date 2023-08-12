//The For/Of Loop
//The JavaScript for/of statement loops through the values of an iterable objects.

//for/of lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.


/*The for/of loop has the following syntax:

for (variable of iterable) {
  code block to be executed
}

variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.

iterable - An object that has iterable properties.
*/

// Looping over a array
const names = ["Dileep", "Anu", "Dipesh"];

for (let x of names) {

  console.log(x)
}
 //Looping over a Array
const arr=[19,3,4,5,8];
for(let num of arr){
    console.log(num)
}

//Looping over a String

const str="DileepKumar"
for(let st of str)
console.log(st); 

//Looping over a Map

const details=new Map([
    ["dileep",23],
    ["sonu",22],
    ["monu",21]
]);
console.log(details)//Map(3) { 'dileep' => 23, 'sonu' => 22, 'monu' => 21 }
//console.log(details["dileep"]); //some douts

