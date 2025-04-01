class Hero{
    health : number;
    hunger : number;

    attack(){
        console.log("I am attacking");
    }

    move(){
        console.log("I am moving");
    }

    eat(){
        console.log("I am eating");
    }
}

class Archer extends Hero{
    arrows : number;

    // over riding here
    attack(): void {
        super.attack();
        console.log("Archer throwing arrow");
        this.arrows -= 1;
    }
}

class Commando extends Hero{
    bullets : number;

    // over riding here
    attack(): void {
        super.attack();
        console.log("Commando firing bullet");
        this.bullets -= 1;
    }
}


// object of a class can be treated as an object of the common super class
const archer : Archer = new Archer();
archer.attack();
const commando : Commando = new Commando();

class Tribe {
    // objects of Hero class are passed to here
    heros : Hero[];

    setHeros(heros : Hero[]){
        this.heros= heros
    }

    attack(){
        for(let hero of this.heros){
            hero.attack();
        }
    }
}

const tribe = new Tribe();
const heros = [archer, commando]
tribe.setHeros(heros)
tribe.attack();

const commando2 : Hero = new Commando();