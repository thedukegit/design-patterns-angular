import {CommandInterface} from "./command.interface";

export class UnknownCommand implements CommandInterface {

  public execute(): void {
    console.log('Unknown command');
  }
}
