// Rest Parameter
//The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:

function sum(...arrs){
    let sum=0;
    for(let arr of arrs)
     sum=sum+arr;
     return sum;

}
let result=sum(3,4,2,4,5,6,4);
console.log(result);