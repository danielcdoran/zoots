import { Command, CommandRunner, Option } from 'nest-commander';
import { AppService } from './app.service';
import { Animal, Giraffe } from "./animal";
import { Monkey } from "./monkey";

@Command({ name: 'hello', description: 'a hello command' })
export class HelloCommand extends CommandRunner {
  constructor(private readonly appService: AppService) {
    super();
  }

  async run(): Promise<void> {


   
    let sam = new Monkey("Sammy the Python");
    let tom: Animal = new Giraffe("Tommy the Palomino");
    var objectArray: Array<Animal> = [sam, tom]
    var i: number
    for (i = 0; i < 10; i++) {
      console.log(i)
      for (let i=0 ; i <objectArray.length ; i++)
        objectArray[i] = objectArray[i].reduceHealth()
      objectArray.forEach(x => console.log(x))
    }


    // console.log(this.appService.getHello());
    // let sam = new Monkey("Sammy the Python");
    // let tom: Animal = new Giraffe("Tommy the Palomino");   
    // var objectArray: Array<Animal> = [sam] //, tom]
    // var i: number
    // for (i = 0; i < 10; i++) {
    //   console.log(i)
    //   for (let i=0 ; i <objectArray.length ; i++)
    //     objectArray[i].lessHealth({ tag: "AliveFeed"})
    //   objectArray.forEach(x => console.log(x))
    // }

     console.log(this.appService.getHello());
  }

  @Option({
    flags: '-n, --number [number]',
    description: 'A basic number parser',
  })
  parseNumber(val: string): number {
    return Number(val);
  }
}
