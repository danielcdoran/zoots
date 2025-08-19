export class Animal {
    name: string;
    protected health: number;
    // constructor() { this.health = 100 }
    constructor(name: string) {
       this.name = name;
    }
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
    constructor(name: string) {
        super(name);
    }
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

export class Horse extends Animal {
    constructor(name: string) {
        super(name);
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