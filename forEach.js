//forEach(): Invokes a callback for each key/value pair in a Map
const numbers=[1,2,3,4,5];
numbers.forEach((num,index)=>{
    numbers[index]=num*2;
});
console.log(numbers);//output :  [ 2, 4, 6, 8, 10 ]

//Diffrence between map and forEach() method

//forEach(): it does not return anything. 
//it is simply iterates over each element of the array and applies the provided function.
//the  original array is not modify

//Map(): It returs a new array with the results of applying the provided function to each element of the original array.
