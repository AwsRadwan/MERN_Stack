class Ninja {
    constructor(name, health, speed=3, strength=3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(`My Name is: ${this.name}`);
    }
    // simple method in the parent class
    showStats(){
        console.log(`My Name is: ${this.name}, My Health: ${this.health}, Speed= ${this.speed}, Strength= ${this.strength}`);
    }
    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(wisdom=10, name){
        super(name, 200, 10, 10);
        this.wisdom = wisdom;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("Don't Poolshit a Poolshit !!");
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"