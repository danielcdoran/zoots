import { pbkdf2 } from "crypto";
import { Animal } from "./animal"

export class Monkey extends Animal {
    constructor(name: string, health?: number) {
        super("Monkey", health);
    }

    getHealth(): number {
        return super.getHealth();
    }
    reduceHealth(): Animal {
        var val: Animal = new Monkey(this.name,0.9 * this.health)
        if (val.getHealth() < 70) {
            return new MonkeyDeath("MonkeyDeath", val.getHealth()) //super.reduceHealth();
        }
        return val
    }
}

export class MonkeyDeath extends Monkey {
    constructor(name: string, health?: number) {
        super("MonkeyDead", health);
    }

    getHealth(): number {
        return super.getHealth();
    }
    reduceHealth(): Animal {
        return new MonkeyDeath("MonkeyDeath", this.getHealth());
    }

}
