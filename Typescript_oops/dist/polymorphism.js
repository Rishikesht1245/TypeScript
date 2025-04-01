class Hero {
    attack() {
        console.log("I am attacking");
    }
    move() {
        console.log("I am moving");
    }
    eat() {
        console.log("I am eating");
    }
}
class Archer extends Hero {
    // over riding here
    attack() {
        super.attack();
        console.log("Archer throwing arrow");
        this.arrows -= 1;
    }
}
class Commando extends Hero {
    // over riding here
    attack() {
        super.attack();
        console.log("Commando firing bullet");
        this.bullets -= 1;
    }
}
// object of a class can be treated as an object of the common super class
const archer = new Archer();
archer.attack();
const commando = new Commando();
class Tribe {
    setHeros(heros) {
        this.heros = heros;
    }
    attack() {
        for (let hero of this.heros) {
            hero.attack();
        }
    }
}
const tribe = new Tribe();
const heros = [archer, commando];
tribe.setHeros(heros);
tribe.attack();
const commando2 = new Commando();
