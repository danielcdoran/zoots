import { Command, CommandRunner, Option } from 'nest-commander';
import { AppService } from './app.service';
import { Animal } from "./animal";
import { Monkey } from "./monkey";
import { Giraffe } from "./giraffe";

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
    for (let j = 0; j < 10; j++) {
      for (let i = 0; i < objectArray.length; i++) {
        objectArray[i] = objectArray[i].increaseHealth()
        objectArray[i] = objectArray[i].reduceHealth()
              objectArray.forEach(x => console.log(x))
      }
    }
  }

  @Option({
    flags: '-n, --number [number]',
    description: 'A basic number parser',
  })
  parseNumber(val: string): number {
    return Number(val);
  }
}
