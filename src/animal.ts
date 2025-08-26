import { pbkdf2 } from "crypto";
import { Monkey, State } from "./monkey"

export class Animal {
    readonly name: string;
    protected health: number;
    currentState: State = {tag: "Alive", health: 100}

    constructor(name: string, health?: number,state?: State) {
        this.name = name;
        this.health = health ?? 100; // Default age to 0 if not provided 
        this.currentState = state ;
    }

    getHealth(): number {
        return this.health;
    }
    // public reduceHealth(): void {
    reduceHealth(): Animal {
        return new Animal(this.name, 0.9 * this.health,this.currentState);
    }
}

export class Giraffe extends Animal {

    constructor(name: string, health?: number,state?: State) {
        super("Giraffe", health,state);
    }
    getHealth(): number { return super.getHealth() }
    reduceHealth(): Animal {
        return new Giraffe(this.name,0.9 * this.health);
    }
}