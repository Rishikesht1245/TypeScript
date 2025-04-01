class Patient {
    private name : number;
    private health : number;
    private age : number;

    setHealth(health : number){
        if(health < 0){
            console.log("You can't set the health below 0");
            return;
        }
        this.health = health;
    }

    getHealth(){
        return this.health;
    }
}

const vasu = new Patient();
vasu.setHealth(-3);
console.log(vasu.getHealth());