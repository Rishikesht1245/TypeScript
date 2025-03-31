class Player{
    // instance variables (lives in the instance of the object)
    name : string;
    health : number;
    isInvicible : boolean;

    greet() {
        console.log(`welcome ${this.name}`)
    }
}

// object === Instance
const mario = new Player()
mario.name = "Mario";
mario.health = 10;
mario.isInvicible = true;

mario.greet();


const peach = new Player();
peach.name = "Peach";
peach.health = 10;
peach.isInvicible = false;
peach.greet();
