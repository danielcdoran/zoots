import { Command, CommandRunner, Option } from 'nest-commander';
import { AppService } from './app.service';
import { Animal } from "./animal";
import { Monkey , monkeyLessHealthState, monkeyMoreHealthState,monkeyLessHealthRandom} from "./monkey";
import { Giraffe } from "./giraffe";
import { ChangeHealthState,createRandom,monkeyHealthIncrease} from "./utility"

@Command({ name: 'hello', description: 'a hello command' })
export class HelloCommand extends CommandRunner {
  constructor(private readonly appService: AppService) {
    super();
  }

  async run(): Promise<void> {
    console.log(this.appService.getHello());
    let sam = new Monkey("Sammy the Python", { tag: "Alive", health: 100 });
    let tom: Animal = new Giraffe("Tommy the Palomino", { tag: "Alive", health: 100 });
    var objectArray: Array<Animal> = [sam, tom]
    var i: number
    var feedArray: Array<monkeyHealthIncrease> = [createRandom(),createRandom()]
    for (let j = 0; j < 10; j++) {
      for (let i = 0; i < objectArray.length; i++) {
        objectArray[i] = objectArray[i].increaseHealth(monkeyMoreHealthState)
        objectArray[i] = objectArray[i].reduceHealth(monkeyLessHealthRandom)
      }
                    objectArray.forEach(x => console.log(x))
    }



    console.log(Math.random()) ; 
  
}
  

  @Option({
    flags: '-n, --number [number]',
    description: 'A basic number parser',
  })
  parseNumber(val: string): number {
    return Number(val);
  }
}
