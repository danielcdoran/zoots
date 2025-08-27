import { pbkdf2 } from "crypto";
import { Monkey } from "./monkey"

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

export class Animal {
    readonly name: string;
    // protected health: number;
    currentState: State = { tag: "Alive", health: 100 }

    constructor(name: string, state?: State) {
        this.name = name;
        // this.health = health ?? 100; // Default age to 0 if not provided 
        this.currentState = state;
    }

    getHealth(): number {
        return this.currentState.health;
    }
    // public reduceHealth(): void {
    reduceHealth(): Animal {
        return new Animal(this.name, this.currentState);
    }

    increaseHealth(): Animal {
        return new Animal(this.name, this.currentState);
    }
}

