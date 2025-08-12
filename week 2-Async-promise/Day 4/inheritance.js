// inheritance in js 
// inheritance is the js allow the class to inherits the properties and methods from another class .
// This mechanism enables code reuse, making it easier to create new classes that are based on existing ones, without having to duplicate code.


INCOMPLETE 


// base class 
class shape{
    constructor(color){
        this.color=color;
    }
    print(){
        console.log("painting with the color " + this.color);
    }
    area(){
        throw new error("the are is calculated in the child/subclass !");
    }
    description(){
        console.log("a shape is of the color "+ this.color);
    }
}

class circle extends shape {
    constructor(radius, color){
        this.height=height;
        this.weight;
    }
    area(){
        return 3.14*this.radius*this.radius;
    }

}
