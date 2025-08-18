import { Command, CommandRunner, Option } from 'nest-commander';
import { AppService } from './app.service';
import { Animal, Snake, Horse } from "./animal";

@Command({ name: 'hello', description: 'a hello command' })
export class HelloCommand extends CommandRunner {
  constructor(private readonly appService: AppService) {
    super();
  }

  async run(): Promise<void> {
    console.log(this.appService.getHello());
    let sam = new Snake("Sammy the Python");
    let tom: Animal = new Horse("Tommy the Palomino");

    sam.move();
    tom.move(34);
  }

  @Option({
    flags: '-n, --number [number]',
    description: 'A basic number parser',
  })
  parseNumber(val: string): number {
    return Number(val);
  }
}
