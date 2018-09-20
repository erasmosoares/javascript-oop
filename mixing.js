
//Composition than inheritance
function mixin(target, ...sources){
  Object.assign(target, ...sources);
}

const canEat = {
    eat: function(){
        this.hunger--;
        console.log('eating');
    }
};

const canWalk = {
    walk: function(){
        this.hunger--;
        console.log('Swin');
    }
};

const Swin = {
    Swin: function(){
        this.hunger--;
        console.log('walking');
    }
};

function Person(){

}

mixin(Person.prototype, canEat, canWalk);

const person = new Person();
console.log(person);

function GoldFish(){

}

mixin(Person.GoldFish, canEat, Swin);