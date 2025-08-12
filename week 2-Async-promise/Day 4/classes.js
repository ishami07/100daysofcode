// Notes link:- https://projects.100xdevs.com/tracks/promises-async-await/Promises-and-async--await-2

// Classes
// In JavaScript, classes are a way to define blueprints for creating objects 
// (these objects are different from the objects defined in the last section).

// recommended for classes : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
// recommended for constructors: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor

class Rectangle{
    constructor(height, weight, color){
        this.height=height;
        this.weight=weight;
        this.color=color;
    }

    area(){
        const area = this.height * this.weight ;
        return area;
    }

    print(){
        console.log("printing with the color " + this.color);
    }
}

const rect = new Rectangle(10,20,"red"); // creating object of a class OR creating a instance of a class 

console.log(rect.area());

console.log(rect.print());