import { Command, CommandRunner, Option } from 'nest-commander';
import { AppService } from './app.service';
import { Animal, Monkey, Horse } from "./animal";

@Command({ name: 'hello', description: 'a hello command' })
export class HelloCommand extends CommandRunner {
  constructor(private readonly appService: AppService) {
    super();
  }

  async run(): Promise<void> {
    console.log(this.appService.getHello());
    let sam = new Monkey("Sammy the Python");
    let tom: Animal = new Horse("Tommy the Palomino");

    sam.move();

    sam.reduceHealth();
        console.log(sam.getHealth());
  }

  @Option({
    flags: '-n, --number [number]',
    description: 'A basic number parser',
  })
  parseNumber(val: string): number {
    return Number(val);
  }
}
