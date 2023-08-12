//......let varible....

//let variable used in Block scope, Re-declare not possible,Re-Asign possible 

let x//declaretion
x=10 //value assign 
console.log(x) //output 10
x=11    //re-assign value
console.log(x)  //output 11

let p=15
{
    let p=5
    console.log(p) // 5
}
console.log(p) //15




//.......................const variable......

//const variable is not re-Declare and Re-assign , It is used for local(Block) scope


const z=7;
console.log(z) //output 7
//const z=10//error because const not support re-declared and re-asign



