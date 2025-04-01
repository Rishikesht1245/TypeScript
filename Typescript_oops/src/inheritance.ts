class Animal{
    hunger : number
    health : number
    // can access in sub classes 
    protected coordX : number
    protected coordY : number

    setCoordX(x: number){
        this.coordX = x;
    }

    setCoordY(y:number){
        this.coordY = y;
    }

    eat(){
        console.log("I am eating");
    }

    sleep(){
        console.log("I am sleeping");
    }

    move(){
        console.log("I am moving");
    }

    makeNoise(){
        console.log("make noise")
    }
}

// Dog is an Animal
class Dog extends Animal{

    owner : string; // Dog has an owner

    // overrided the parent method here
    makeNoise(): void {
        console.log("Make barksss")
    }

    returnToOwner(){
        console.log(`I am at ${this.coordX}, ${this.coordY} and now I am returning to owner`)
    }
}

class Cat extends Animal{
    makeNoise(): void {
        console.log("Make meawah")
    }
}

const dog = new Dog();
dog.setCoordX(19);
dog.setCoordY(20);
dog.returnToOwner();
dog.makeNoise()


const cat = new Cat();

class Canine extends Animal{
    makeNoise(): void {
        console.log("Bark bark bark.")
    }
}

class Dogs extends Canine{
    owner : string
    returnToOwner(){
        console.log(`Returning to owner`)
    }

    makeNoise(): void {
        super.makeNoise();
    }
}

const dogs = new Dogs()

dogs.returnToOwner();

