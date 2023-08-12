//Arrow functions allows a short syntax for writing function expressions.
//You don't need the function keyword, the return keyword, and the curly brackets.
//Arrow functions do not have their own this. They are not well suited for defining object methods.
//Arrow functions are not hoisted. They must be defined before they are used.

//Example arrow function

// const sum=(x,y)=>{
//     return x+y;
// }
// console.log(sum(4,9))

const sum=(x,y)=>x+y;
console.log(sum(3,8))


