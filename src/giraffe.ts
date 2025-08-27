import { pbkdf2 } from "crypto";
import { Animal, State } from "./animal"

export class Giraffe extends Animal {

    constructor(name: string,state?: State) {
        super("Giraffe", state);
    }
    getHealth(): number { return super.getHealth() }
    reduceHealth(): Animal {
        return new Giraffe(this.name,this.currentState);
    }
}