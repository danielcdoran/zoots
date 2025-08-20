import { pbkdf2 } from "crypto";
import {Animal} from "./animal"

export class Monkey extends Animal {
    constructor(name: string, health?: number) {
        super("Monkey",health);
    }
    
    getHealth(): number {
        return super.getHealth();
    }
    reduceHealth(): void {
        super.reduceHealth();
    }

}


export class MonkeyDeath extends Monkey {
    constructor(name: string, health?: number) {
        super("MonkeyDead",health);
    }
    
    getHealth(): number {
        return super.getHealth();
    }
    reduceHealth(): void {
        super.reduceHealth();
    }

}
