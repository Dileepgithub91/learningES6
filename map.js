// .......Map Method......

//A Map holds key-value pairs where the keys can be any datatype.

//A Map remembers the original insertion order of the keys.

//A Map has a property that represents the size of the map.

// const arr=[2,4,5,6,8];
// const result=arr.map((ele)=>{
//     return ele*2
// })
// console.log(result); //[ 4, 8, 10, 12, 16 ]
//console.log(result);

//........map method....................
//new Map()	Creates a new Map object
//set()	Sets the value for a key in a Map
//get()	Gets the value for a key in a Map
//clear()	Removes all the elements from a Map
//delete()	Removes a Map element specified by a key
//has()	Returns true if a key exists in a Map
//forEach()	Invokes a callback for each key/value pair in a Map
//entries()	Returns an iterator object with the [key, value] pairs in a Map
//keys()	Returns an iterator object with the keys in a Map
//values()	Returns an iterator object of the values in a Map
//size	Returns the number of Map elements

// Create a Map 
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200],
    ["grapps",]
  ]);
  
  //get:get the value for a key in a Map
  console.log(fruits.get("apples"));
  console.log(fruits.get("grapps"));

  //set:Sets the value for a key in a Map
  console.log(fruits.set("grapps",1400));

  //clear:Removes all the elements from a Map

  //console.log(fruits.clear);

  //delete :Removes a Map element specified by a key
  console.log(fruits.delete("oranges"))
  //console.log(fruits);

  //has():	Returns true if a key exists in a Map
  console.log(fruits.has("apples"));//true

  //keys: find all keys in map
  console.log(fruits.keys())

  //values: find all vaules of keys in map

  console.log(fruits.values());

  //size

  console.log(fruits.size); //3


  //entries()	Returns an iterator object with the [key, value] pairs in a Map
  console.log(fruits.entries()) 



//.............//forEach():	Invokes a callback for each key/value pair in a Map...........

// fruits.forEach((num,index)=>{
//     fruits[index]=num;
// });
// console.log(fruits);

const numbers=[1,2,3,4,5];
numbers.forEach((num,index)=>{
    numbers[index]=num*2;
});
console.log(numbers);



//diffrence between object and Map


//Object	                         Map
// Not directly iterable       	    Directly iterable
// Do not have a size property	    Have a size property
// Keys must be Strings (or Symbols) Keys can be any datatype
// Keys are not well ordered	     Keys are ordered by insertion
// Have default keys	             Do not have default keys