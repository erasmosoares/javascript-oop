const _move = new WeakMap();

class Shape{

    constructor(){
        _move.set(this,()=>{
            console.log('move',this);
        });
    }

    move(){
        _move.get(this)();
    }
}

const _radius = new WeakMap(); //key obj, values entities


class Circle extends Shape{
    constructor(radius){
        super();
        _radius.set(this, radius);  
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
       console.log('draw');
    }
}


const c = new Circle(1);