//----- Creating objects -----//

let x = {}
//let x = new Object();

//factory function
function createCircle(radius){
    return {
        radius,
        draw: function(){
            console.log('draw');
        }
    };
}

const circle = createCircle(1);
circle.draw();

//construction function
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

Circle.call({},1);
Circle.apply({},[1,2,,3]);

const another = new Circle(1);

//----------------------------//