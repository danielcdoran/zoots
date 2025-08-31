import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';
import { Animal, State } from '../src/animal';
import {
  lessHealthState,
  Elephant,
  moreHealthState,
  monkeyLessHealthRandom,monkeyMoreHealthRandom,
} from '../src/elephant';
import { createRandom, monkeyHealthIncrease } from '../src/utility';

describe('Simple expression tests', () => {

  test('Elephant Alive to CannotWalk', () => {
    var currentState: State = { tag: 'Alive', health: 69 };
    var result = monkeyLessHealthRandom(currentState);
    var expected = { tag: 'CannotWalk' }; // Checks tag is Dead
    expect(result).toMatchObject(expected);
  });

  test('Elephant CannotWalk to Dead', () => {
        let monkeyIncrease = createRandom() ;
    var currentState: State = { tag: 'CannotWalk', health: 20 };
    var result = monkeyMoreHealthRandom(monkeyIncrease,currentState);
    var expected = { tag: 'Dead' }; // Checks tag is Dead
    expect(result).toMatchObject(expected);
  });

    test('Elephant CannotWalk to Alive', () => {
        let monkeyIncrease = createRandom() ;
    var currentState: State = { tag: 'CannotWalk', health: 69 };
    var result = monkeyMoreHealthRandom(monkeyIncrease,currentState);
    var expected = { tag: 'Alive' }; // Checks tag is Dead
    expect(result).toMatchObject(expected);
  });

//       test('Elephant CannotWalk to CannotWalk', () => {
//         let monkeyIncrease = createRandom() ;
//     var currentState: State = { tag: 'CannotWalk', health: 22 };
//     var result = monkeyMoreHealthRandom(monkeyIncrease,currentState);
//     var expected = { tag: 'CannotWalk' }; // Checks tag is Dead
//     expect(result).toMatchObject(expected);
//   });

});
