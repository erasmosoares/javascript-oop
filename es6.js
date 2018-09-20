/*
function Circle(radius){
    this.radius = radius;

    this.draw = function(){
        console.log('draw');
    }
}
*/

//prevent to modify global object
// EC6 by default strict mode
//'use strict';

// same as function
// typeof Circle
class Circle{

    constructor(radius){
        this.radius = radius;
    }

    //Instance method
    draw(){
        console.log('draw');
    }

    //Static method
    static parse(str){
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

// Class Expression
const Square = class{

}

//es6 force new operator
const c = new Circle(1);
const circle = Circle.parse('{"radius":1}');

console.log(Circle);