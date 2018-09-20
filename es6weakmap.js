//Weakmaps are used to implement private properties and function
// why?? key are weak, if there no refereces for the keys, they 
// would be garbaged collected

const _radius = new WeakMap(); //key obj, values entities
const _move = new WeakMap();

class Circle{
    constructor(radius){
        _radius.set(this, radius);
        _move.set(this,()=>{
            console.log('move',this);
        });
    }

    get radius(){
        return _radius.get(this);
    }

    set radius(value){
        if(value <= 0)
         throw new Error('invalid radius');   
        _radius.set(this, value);
    }

    draw(){
       console.log(_radius.get(this));
       _move.get(this)();
       console.log('draw');
    }
}


const c = new Circle(1);