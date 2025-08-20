import { pbkdf2 } from "crypto";

export class Animal {
    name: string;
    protected health: number;

    constructor(name: string);
    constructor(name: string, health: number);

    // Implementation of the constructor 
    constructor(name: string, health?: number) {
        this.name = name;
        this.health = health ?? 100; // Default age to 0 if not provided 
    }

    getHealth(): number {
        return this.health;
    }
    // public reduceHealth(): void {
    reduceHealth(): void {
        this.health = 0.9 * this.health;
    }
}

export class Giraffe extends Animal {

    constructor(name: string, health?: number) {
        super("Giraffe", health);
    }
    getHealth(): number { return super.getHealth() }
    reduceHealth() {
        super.reduceHealth();
    }
}