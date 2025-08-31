import { Animal, Dead, State } from './animal';

export type ChangeHealthState = (state: State) => State;

function monkeyFeed() {
  return function (health: number) {
    return 0.9 * health;
  }; // 10% reduction
}
export function assertUnreachable(x: never): never {
  throw new Error("Unhandled case: " + x);
}

export type HealthIncrease = (monkeyHealthIncrease,State) => number;
export type monkeyHealthIncrease = () => number;

// This produces a single random value. Its basically a static.
export function createRandom() {
  var allowChange: boolean = true;
  var randomVal: number;
  return function () {
    if (allowChange) {
      randomVal = 10 + 15 * Math.random();
      allowChange = false;
    }
    return randomVal;
  };
}
