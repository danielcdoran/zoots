import { pbkdf2 } from "crypto";
import { Animal } from "./animal"
import { ModuleRef } from "@nestjs/core";

// type TaggedAction<T extends string> = { tag: T };
// export type AliveFeed = TaggedAction<"AliveFeed">;
// export type DeadFeed = TaggedAction<"DeadFeed">;
// // export type AliveLessHealth = TaggedAction<"AliveLessHealth">;
// // export type DeadLessHealth = TaggedAction<"DeadLessHealth">;

// type Reducer = (action: Action, state: State) => State;

// export type Action = AliveFeed | DeadFeed

type TaggedState<T extends string> = { tag: T };
export type Alive = TaggedState<"Alive"> & { health: number };
export type Dead = TaggedState<"Dead"> & { health: number };

export type State = Alive | Dead;

export class Monkey extends Animal {

    constructor(name: string, health?: number,state?: State) {
        super("Monkey", health, state);
    }
    lessHealth(): State {
        let val = 0
        val = this.currentState.health
        switch (this.currentState.tag) {
            case "Alive":
                val = val * 0.9
                console.log(val)
                if (val < 70) {
                    return { tag: "Dead", health: val };
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
        var stuff: State = { tag: "Dead", health: 100 };;
        // stuff = this.lessHealth() ;
        console.log(stuff)
        var val: Animal = new Monkey(this.name, 0.9 * this.health,stuff)
        if (val.getHealth() < 70) {
            return new MonkeyDeath("MonkeyDeath", val.getHealth(),stuff) //super.reduceHealth();
        }
        return val
    }
}

export class MonkeyDeath extends Monkey {
    constructor(name: string, health?: number,state?: State) {
        super("MonkeyDead", health, state);
    }

    getHealth(): number {
        return super.getHealth();
    }
    reduceHealth(): Animal {
        return new MonkeyDeath("MonkeyDeath", this.getHealth());
    }

}
