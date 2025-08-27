import { pbkdf2 } from "crypto";
import { Monkey, State } from "./monkey"

export class Animal {
    readonly name: string;
    // protected health: number;
    currentState: State = {tag: "Alive", health: 100}

    constructor(name: string,state?: State) {
        this.name = name;
        // this.health = health ?? 100; // Default age to 0 if not provided 
        this.currentState = state ;
    }

    getHealth(): number {
        return this.currentState.health;
    }
    // public reduceHealth(): void {
    reduceHealth(): Animal {
        return new Animal(this.name,this.currentState);
    }
}

export class Giraffe extends Animal {

    constructor(name: string,state?: State) {
        super("Giraffe", state);
    }
    getHealth(): number { return super.getHealth() }
    reduceHealth(): Animal {
        return new Giraffe(this.name,this.currentState);
    }
}