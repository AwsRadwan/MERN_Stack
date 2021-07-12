class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}


class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    ataack(target) {
        if( target instanceof Unit ) {
            target.power -= 10;
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }


}
const unit1 = new Unit("Red_Belt_Ninja", 3, 3, 4);
const unit2 = new Unit("Black Belt Ninja", 4, 5, 4);


class Effect extends Card{
    constructor(name, cost, text, stat, amount){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.amount = amount;
    }
    effect(target){
        if( target instanceof Unit ) {
            if(this.stat == "resilience"){
                target.res += this.amount;
            }
            if(this.stat == "power"){
                target.power += this.amount;
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}
	
const effect1 = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
const effect2 = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
const effect3 = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);

effect1.effect(unit1);
effect2.effect(unit2);
effect3.effect(unit2);
unit1.ataack(unit2);
console.log(`Power1 ${unit1.power} ,, Resilience ${unit1.res}`);
console.log(`Power2 ${unit2.power} ,, Resilience2 ${unit2.res}`);