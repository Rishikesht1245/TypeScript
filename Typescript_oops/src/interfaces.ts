abstract class Character {
    hunger : number;
    health : number;

    abstract eat():void;
}

// class CharHero extends Character{
//     heroId : number;

//     eat(){
//         this.hunger += 3;
//     }
// }


class Enemy extends Character{
    enemeId : number;
    
    eat(){
        this.hunger += 3;
    }
}

// this is not possible it can extend from only a single class 
// class Spy extends CharHero, Enemy{

// }

// to solve the above issue we can create interfaces
interface CharHero extends Character{
    heroId : number
}

interface CharEnemy extends Character{
    enemeId : number
}

class Spy implements CharHero, CharEnemy{
    heroId: number; 
    enemeId: number;
    hunger: number;
    health: number;

    eat(): void {
        this.hunger += 3;
    }
}