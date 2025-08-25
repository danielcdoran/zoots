import { pbkdf2 } from "crypto";
import { Animal } from "./animal"
import { ModuleRef } from "@nestjs/core";



// // export type Alive = TaggedState<"Alive"> & {health: number}; 
// // export type Dead = TaggedState<"Dead"> & {health: number}; 
// // export type State = Alive | Dead ;

// type TaggedAction<T extends string> = { tag: T };
// export type AliveFeed = TaggedAction<"AliveFeed">;
// export type DeadFeed = TaggedAction<"DeadFeed">;
// // export type AliveLessHealth = TaggedAction<"AliveLessHealth">;
// // export type DeadLessHealth = TaggedAction<"DeadLessHealth">;

// type Reducer = (action: Action, state: State) => State;

// export type Action = AliveFeed | DeadFeed

// // class test<Alive> {

// // }
type TaggedState<T extends string> = { tag: T };
export type Alive = TaggedState<"Alive"> & { health: number };
export type Dead = TaggedState<"Dead"> & { health: number };

type State = Alive | Dead;

export class Monkey extends Animal {

    constructor(name: string, health?: number) {
        super("Monkey", health);
        // this.currentState.health = 100
        // this.currentState.tag = "Alive";
    }
    // currentState: State;

    // lessHealth(action: Action): void {
    //     let val = 0
    //     val = this.currentState.health
    //     switch (action.tag) {
    //         case "AliveFeed":
    //             val = val * 0.9
    //             if (val < 70) {
    //                 this.currentState = { tag: "Dead", health: val };
    //             }
    //             this.currentState =  { tag: "Alive", health: val };
    //             break;
    //         case "DeadFeed":
    //             this.currentState =  { tag: "Dead", health: val };
    //     }
    // }
    getHealth(): number {
        return super.getHealth();
    }

    reduceHealth(): Animal {
        var val: Animal = new Monkey(this.name, 0.9 * this.health)
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
