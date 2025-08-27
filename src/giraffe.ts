import { pbkdf2 } from "crypto";
import { Animal, State } from "./animal"

export class Giraffe extends Animal {

    constructor(name: string, state?: State) {
        super("Giraffe", state);
    }
    getHealth(): number { return super.getHealth() }
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

    reduceHealth(): Animal {
        // this.currentState =  { tag: "Alive", health: 100 };
        this.currentState = this.lessHealth();
        console.log(this.currentState);
        console.log(typeof (this.currentState));
        var val: Animal = new Giraffe(this.name, this.currentState);
        return val;
    }
    increaseHealth(): Animal {
        this.currentState = this.increase();
        console.log(this.currentState);
        console.log(typeof (this.currentState));
        var val: Animal = new Giraffe(this.name, this.currentState);
        return val;
    }

}