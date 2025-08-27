import { pbkdf2 } from "crypto";
import { Animal, State } from "./animal" ;
import {lessHealthState, moreHealthState} from "./monkey"

export class Giraffe extends Animal {

    constructor(name: string, state?: State) {
        super("Giraffe", state);
    }
    getHealth(): number { return super.getHealth() }

    reduceHealth(): Animal {
        // this.currentState =  { tag: "Alive", health: 100 };
        this.currentState = lessHealthState(this.currentState) ;
        var val: Animal = new Giraffe(this.name, this.currentState);
        return val;
    }
    increaseHealth(): Animal {
        this.currentState = moreHealthState(this.currentState) ;
        var val: Animal = new Giraffe(this.name, this.currentState);
        return val;
    }

}