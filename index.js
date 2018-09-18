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
circle.location = {x:1}; //Adding properties
circle['location'] = {x:1};

delete circle.location;
delete circle['location'];

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

for (let key in circle){
    if(typeof circle[key] !== 'function')
    console.log(key, circle[key]);    
}

if('radius' in circle)
console.log('Circle has a radius');

//----------------------------//
