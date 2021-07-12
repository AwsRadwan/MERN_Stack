class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 0;
        this.speed = 3;
        this.stength = 3;
    }
    sayName() {
        console.log(`My Name is: ${this.name}`);
    }
    // simple method in the parent class
    showStats(){
        console.log(`My Name is: ${this.name}, My Health: ${this.health}, Speed= ${this.speed}, Strength= ${this.stength}`);
    }
    drinkSake() {
        this.health += 10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();
