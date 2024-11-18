import {PrototypeInterface} from "./prototype.interface";

export class Asteroid implements PrototypeInterface {
  constructor(public name: string, public type?: string) {
    this.type = 'Chrondite';
  }

  public clone(): Asteroid {
    return {...this};
  }

}
