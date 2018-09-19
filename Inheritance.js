function Shape(color){
    this.color = color;
}

Shape.prototype.duplicate = function(){
    console.log('duplicate');
}

//Intermediate function inheritance
function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Circle(radius, color){
    Shape.call(this, color);    
    //Instance members
    this.radius = radius;
}

extend(Circle, Shape);

//Prototype members
Circle.prototype.duplicate = function(){
    console.log('draw');
}

function Square(size){
    this.size = size;
}

extend(Square, Shape);

//polymorphism
Square.prototype.duplicate = function(){
    console.log('duplicate square');
}

//Method overriding
Circle.prototype.duplicate = function(){
    console.log('duplicate');
}

let s = new Shape();
let c = new Circle(1, 'red');
let sq = new Square(1);
