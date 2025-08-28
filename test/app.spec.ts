import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';
import { Animal, State } from '../src/animal';
import { lessHealthState, Monkey, moreHealthState,monkeyLessHealthRandom } from '../src/monkey';

describe('Simple expression tests', () => {
  test('Less health', () => {
    var currentState: State = { tag: 'Alive', health: 100 };
    var result = lessHealthState(currentState);
    expect(result.health).toBeLessThan(100);
  });

  test('Less health', () => {
    var currentState: State = { tag: 'Alive', health: 100 };
    var result = lessHealthState(currentState);
    expect(result.health).toBeLessThan(100);
  });

  test('Less health but not below 70', () => {
    var currentState: State = { tag: 'Alive', health: 75 };
    var result = lessHealthState(currentState);
    expect(result.health).toBeLessThan(70);
    expect(result.tag).toEqual('Alive');
  });

  test('More health', () => {
    var currentState: State = { tag: 'Alive', health: 70 };
    var result = moreHealthState(currentState);
    expect(result.health).toBeGreaterThan(83);
  });

  test('20% increase limited to 100', () => {
    var currentState: State = { tag: 'Alive', health: 90 };
    var result = moreHealthState(currentState);
    expect(result.health).toBeGreaterThanOrEqual(100);
  });


  test('Multiple reductions of health for monkey', () => {
    var currentState: State = { tag: 'Alive', health: 90 };
    var result = monkeyLessHealthRandom(currentState);
    var resultHealth: number = result.health
    expect(resultHealth).toBeLessThanOrEqual(90);
    var result = monkeyLessHealthRandom(result);
   expect(result.health).toBeLessThanOrEqual(resultHealth);
   var expected = { tag: "Alive" } // Checks tag is Alive
   expect(result).toMatchObject(expected);
  });

    test('MOnkey < 30 then state = Dead', () => {
    var currentState: State = { tag: 'Alive', health: 25 };
    var result = monkeyLessHealthRandom(currentState);
   var expected = { tag: "Dead" } // Checks tag is Dead
   expect(result).toMatchObject(expected);
  });

});
