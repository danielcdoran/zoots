import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';
import { Animal, State } from '../src/animal';
import {
  lessHealthState,
  Monkey,
  moreHealthState,
  monkeyLessHealthRandom,monkeyMoreHealthRandom,
} from '../src/monkey';
import { createRandom, monkeyHealthIncrease } from '../src/utility';

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
    var resultHealth: number = result.health;
    expect(resultHealth).toBeLessThanOrEqual(90);
    var result = monkeyLessHealthRandom(result);
    expect(result.health).toBeLessThanOrEqual(resultHealth);
    var expected = { tag: 'Alive' }; // Checks tag is Alive
    expect(result).toMatchObject(expected);
  });

  test('Monkey < 30 then state = Dead', () => {
    var currentState: State = { tag: 'Alive', health: 25 };
    var result = monkeyLessHealthRandom(currentState);
    var expected = { tag: 'Dead' }; // Checks tag is Dead
    expect(result).toMatchObject(expected);
  });

  test('Single Random feed.Multiple calls gives same value', () => {
    let random1 = createRandom();
    let result1 = random1();
    let result2 = random1();
    expect(result1).toEqual(result2); // 2 calls same function return equal
    let random2 = createRandom();
    let result3 = random2();
    expect(result1).not.toEqual(result3); // different function give different random value
  });

  test('Monkey max 100 allowed on increase', () => {
    let monkeyIncrease = createRandom() ;
    var currentState: State = { tag: 'Alive', health: 95 };
    var result = monkeyMoreHealthRandom(monkeyIncrease,currentState);
    console.log(result)
    expect(result.health).toEqual(100) ;
    var expected = { tag: 'Alive' }; // Checks tag is Alive
    expect(result).toMatchObject(expected);
  });

});
