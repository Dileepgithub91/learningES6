//               Spread (...) Operator

//The ... operator expands an iterable (like an array) into more elements:

const a1=["jan","feb","march"];
console.log(...a1)
const a2=["april","may","jun"];
console.log(...a2)

console.log(...a1 ,...a2)


//The ... operator can be used to expand an iterable into more arguments for function calls:
const arr=[10,2,4,5,6,1];
console.log(...arr);//10 2 4 5 6 1
//find max no
console.log(Math.max(...arr)) //10

//find min
console.log(Math.min(...arr));//1

