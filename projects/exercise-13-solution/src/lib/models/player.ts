import {Mediator} from "./mediator";

export class Player {
  public name: string;
  private target: string = '';
  private mediator: Mediator;

  public constructor(name: string) {
    this.name = name;
    this.mediator = new Mediator();
  }

  public getTarget(): string {
    return this.target;
  }

  public setTarget(target: string): void {
    this.target = target;
    this.mediator.mediate(this);

  }
}
