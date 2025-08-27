import { pbkdf2 } from "crypto";
import { Animal, Dead, State } from "./animal"
import { ModuleRef } from "@nestjs/core";

   export function lessHealthState(state: State): State {
        let val = 0
        val = state.health
        switch (state.tag) {
            case "Alive":
                val = val * 0.9
                if (val < 70) {
                }
                return { tag: "Alive", health: val };
                break;
            case "Dead":
                return { tag: "Dead", health: val };
        }
    }
   export function moreHealthState(state: State): State {
        let val = 0
        val = state.health
        switch (state.tag) {
            case "Alive":
                val = val * 1.20
                if (val > 100) {
                    return { tag: "Alive", health: 100 };
                }
                return { tag: "Alive", health: val };
                break;
            case "Dead":
                return { tag: "Dead", health: val };
        }
    }


export class Monkey extends Animal {

    constructor(name: string, state?: State) {
        super("Monkey", state);
    }

    lessHealth(): State {
        let val = 0
        val = this.currentState.health
        switch (this.currentState.tag) {
            case "Alive":
                val = val * 0.9
                console.log(val)
                if (val < 70) {
                }
                return { tag: "Alive", health: val };
                break;
            case "Dead":
                return { tag: "Dead", health: val };
        }
    }

    increase(): State {
        let val = 0
        val = this.currentState.health
        switch (this.currentState.tag) {
            case "Alive":
                val = val * 0.95
                console.log(val)
                if (val > 100) {
                    return { tag: "Alive", health: 100 };
                }
                return { tag: "Alive", health: val };
                break;
            case "Dead":
                return { tag: "Dead", health: val };
        }
    }

    getHealth(): number {
        return super.getHealth();
    }

    reduceHealth(): Animal {
        // this.currentState =  { tag: "Alive", health: 100 };
        this.currentState = lessHealthState(this.currentState) ;
        console.log(this.currentState);
        console.log(typeof (this.currentState));
        var val: Animal = new Monkey(this.name, this.currentState);
        return val;
    }
    increaseHealth(): Animal {
        this.currentState = moreHealthState(this.currentState) ;
        console.log(this.currentState);
        console.log(typeof (this.currentState));
        var val: Animal = new Monkey(this.name, this.currentState);
        return val;
    }
}

export class MonkeyDeath extends Monkey {
    constructor(name: string, state?: State) {
        super("MonkeyDead", state);
    }

    getHealth(): number {
        return super.getHealth();
    }
    reduceHealth(): Animal {
        return new MonkeyDeath("MonkeyDeath", this.currentState);
    }
    increaseHealth(): Animal {
        return new Animal(this.name, this.currentState);
    }
}
