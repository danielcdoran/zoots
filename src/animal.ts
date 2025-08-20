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

    // public static animalName(p1: string): Animal {
    //     const cls = new Animal();
    //     cls.name = p1;
    //     cls.health = 100
    //     return cls;
    // }
    // public static animalHealth(p1: string, p2: number): Animal {
    //     const cls = new Animal();
    //     cls.name = p1;
    //     cls.health = p2
    //     return cls;
    // }
    getHealth(): number {
        return this.health;
    }
    // public reduceHealth(): void {
    reduceHealth(): void {
        this.health = 0.9 * this.health;
        this.name = "nothing"
    }

    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

export class Monkey extends Animal {
    constructor(name: string, health?: number) {
        super(name, health);
    }
    //     public static monkeyName(p1: string): Monkey {
    //     const cls = Animal.animalName(p1)
    //     cls.name = p1;
    //     cls.health = 100
    //     return cls;
    // }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
    getHealth(): number {
        return super.getHealth();
    }
    reduceHealth(): void {
        super.reduceHealth();
    }

}

export class Giraffe extends Animal {
    // constructor(name: string) {
    //     super(name);
    // }
    constructor(name: string, health?: number) {
        super(name, health);
    }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
    getHealth(): number { return super.getHealth() }
    reduceHealth() {
        super.reduceHealth();
    }
}