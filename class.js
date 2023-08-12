//JavaScript Classes are templates for JavaScript Objects.

//Use the keyword class to create a class.

//Always add a method named constructor():


/*   .......syntax................
class ClassName {
    constructor() { statement }
  }

  */

  //example
  

class Car{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
const n1=new Car("pappu",21);
console.log(n1);