import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from './../src/app.module';
import { INestApplication } from '@nestjs/common';
import { Animal,State } from '../src/animal';
import { Monkey} from '../src/monkey';


describe('greet function', () => {
  it('should return a greeting with the given name', () => {
    const result = 'john' ;
    var currentState: State  =  { tag: "Alive", health: 100 };
    var monkey: Animal = new Monkey("name",currentState);
    monkey = monkey.reduceHealth() ;
    expect(monkey.currentState.health).toBeLessThan(100);
  });

});