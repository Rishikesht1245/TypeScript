"use strict";
class Player {
}
// object === Instance
const mario = new Player();
mario.name = "Mario";
mario.health = 10;
mario.isInvicible = true;
console.log({ mario });
const peach = new Player();
peach.name = "Peach";
peach.health = 10;
peach.isInvicible = false;
