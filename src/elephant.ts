import { pbkdf2 } from "crypto";
import { Animal, State } from "./animal";
import { ModuleRef } from '@nestjs/core';
import { ChangeHealthState, monkeyHealthIncrease, HealthIncrease, assertUnreachable } from './utility';

export function monkeyMoreHealthState(state: State): State {
    let val = 0;
    val = state.health;
    switch (state.tag) {
        case 'Alive':
            val = val * 1.2;
            if (val > 100) {
                return { tag: 'Alive', health: 100 };
            }
            return { tag: 'Alive', health: val };
            break;
        case 'Dead':
            return { tag: 'Dead', health: val };
    }
}

export function monkeyLessHealthState(state: State): State {
    let val = 0;
    val = state.health;
    switch (state.tag) {
        case 'Alive':
            val = val * 0.9;
            if (val < 70) {
            }
            return { tag: 'Alive', health: val };
            break;
        case 'Dead':
            return { tag: 'Dead', health: val };
    }
}

export function monkeyLessHealthRandom(state: State): State {
    const monkeyDies = 70
    let val = state.health;
    switch (state.tag) {
        case 'Alive':
            val = val * (1 - 0.2 * Math.random());
            if (val < monkeyDies) {
                return { tag: 'CannotWalk', health: val };
            }
            return { tag: 'Alive', health: val };
            break;
        case 'CannotWalk':
            val = val * (1 - 0.2 * Math.random());
            return { tag: 'CannotWalk', health: val };
            return { tag: 'Alive', health: val };
        case 'Dead':
            return { tag: 'Dead', health: val };
        default:
            assertUnreachable(state);
    }
}

export function monkeyMoreHealthRandom(fn: monkeyHealthIncrease, state: State): State {
    let val = state.health;
    switch (state.tag) {
        case 'Alive':
            val = val + val * fn() / 100; // fn() is percentage increase
            if (val > 100) {
                return { tag: 'Alive', health: 100 };
            }
            return { tag: 'Alive', health: val };
            break;
        case 'CannotWalk':
            val = val + val * fn() / 100; // fn() is percentage increase
            if (val > 70) {
                return { tag: 'Alive', health: val };
            }
            return { tag: 'Dead', health: val };
            break;
        case 'Dead':
            return { tag: 'Dead', health: val };
        default:
            assertUnreachable(state);
    }
}

export function lessHealthState(state: State): State {
    const monkeyDies = 70
    let val = state.health;
    switch (state.tag) {
        case 'Alive':
            val = val * 0.9;
            if (val < monkeyDies) {
            }
            return { tag: 'Alive', health: val };
            break;
        case 'Dead':
            return { tag: 'Dead', health: val };
    }
}
export function moreHealthState(state: State): State {
    let val = 0;
    val = state.health;
    switch (state.tag) {
        case 'Alive':
            val = val * 1.2;
            if (val > 100) {
                return { tag: 'Alive', health: 100 };
            }
            return { tag: 'Alive', health: val };
            break;
        case 'Dead':
            return { tag: 'Dead', health: val };
    }
}

export class Elephant extends Animal {
    constructor(name: string, state?: State) {
        super('Elephant', state);
    }

    getHealth(): number {
        return super.getHealth();
    }

    reduceHealth(fn: ChangeHealthState): Animal {
        // this.currentState =  { tag: "Alive", health: 100 };
        this.currentState = fn(this.currentState);
        var val: Animal = new Elephant(this.name, this.currentState);
        return val;
    }

    increaseHealth(fn: monkeyHealthIncrease): Animal {
        this.currentState = monkeyMoreHealthRandom(fn, this.currentState);
        var val: Animal = new Elephant(this.name, this.currentState);
        return val;
    }
}

