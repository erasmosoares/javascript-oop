const _radius = Symbol(); //unique value
const _draw = Symbol();

class Circle{
    constructor(radius){
        //private
        this[_radius] = radius;
    }

    [_draw](){
        
    }
}
