abstract class SuperHero {
    health : number;
    weapon : string;

    // the extended class might override this method
    abstract attack(): void;
}

// error : cannot create instance of an abstract class
// const knight = new SuperHero()

// 
class Knight extends SuperHero{
    arrows : number;

    // overriding the abstract class
    attack(): void {
        console.log("Throwing arrows");
        this.arrows -=1;
    }
}


class Spider extends SuperHero{
    web : number;

    attack(): void {
        console.log("SPider throwing Web")
    }
}

const knight = new Knight();
const spider = new Spider();

const superHeros : SuperHero[] = [knight, spider]
