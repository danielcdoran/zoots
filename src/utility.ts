import { Animal, Dead, State } from "./animal"

export type ChangeHealthState = (state: State) => State;

function monkeyFeed()
 { 
  return function(health: number) { 
    return  0.9 *health; };  // 10% reduction
} 

