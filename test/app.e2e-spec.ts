import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from './../src/app.module';
import { INestApplication } from '@nestjs/common';
import { Animal,State } from '../src/animal';
import { lessHealthState, Monkey, moreHealthState} from '../src/monkey';


describe('greet function', () => {
  it('Current MOnkeystate reduced', () => {
    const result = 'john' ;
    var currentState: State  =  { tag: "Alive", health: 100 };
    var monkey: Animal = new Monkey("name",currentState);
    monkey = monkey.reduceHealth() ;
    expect(monkey.currentState.health).toBeLessThan(100);
  });

  it('Less health', () => {
    var currentState: State  =  { tag: "Alive", health: 100 };
    var result = lessHealthState(currentState) ;
    expect(result.health).toBeLessThan(100);
  });

    it('Less health but not below 70', () => {
    var currentState: State  =  { tag: "Alive", health: 75 };
    var result = lessHealthState(currentState) ;
    expect(result.health).toBeLessThan(70);
    expect(result.tag).toEqual("Alive")
  });

    it('More health', () => {
    var currentState: State  =  { tag: "Alive", health: 70 };
    var result = moreHealthState(currentState) ;
    expect(result.health).toBeGreaterThan(83);
  });

      it('20% increase limited to 100', () => {
    var currentState: State  =  { tag: "Alive", health: 90 };
    var result = moreHealthState(currentState) ;
    expect(result.health).toBeGreaterThanOrEqual(100);
  });
});