class Animal {
    setCoordX(x) {
        this.coordX = x;
    }
    setCoordY(y) {
        this.coordY = y;
    }
    eat() {
        console.log("I am eating");
    }
    sleep() {
        console.log("I am sleeping");
    }
    move() {
        console.log("I am moving");
    }
    makeNoise() {
        console.log("make noise");
    }
}
// Dog is an Animal
class Dog extends Animal {
    // overrided the parent method here
    makeNoise() {
        console.log("Make barksss");
    }
    returnToOwner() {
        console.log(`I am at ${this.coordX}, ${this.coordY} and now I am returning to owner`);
    }
}
class Cat extends Animal {
    makeNoise() {
        console.log("Make meawah");
    }
}
const dog = new Dog();
dog.setCoordX(19);
dog.setCoordY(20);
dog.returnToOwner();
dog.makeNoise();
const cat = new Cat();
class Canine extends Animal {
    makeNoise() {
        console.log("Bark bark bark.");
    }
}
class Dogs extends Canine {
    returnToOwner() {
        console.log(`Returning to owner`);
    }
    makeNoise() {
        super.makeNoise();
    }
}
const dogs = new Dogs();
dogs.returnToOwner();
