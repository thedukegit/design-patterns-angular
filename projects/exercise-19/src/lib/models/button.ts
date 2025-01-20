import {HolidayBehaviourInterface} from "./holiday-behaviour.interface";

export class Button {
  private behaviour: HolidayBehaviourInterface;

  public constructor(behaviour: HolidayBehaviourInterface) {
    this.behaviour = behaviour;
  }

  public setBehaviour(behaviour: HolidayBehaviourInterface): void {
    this.behaviour = behaviour;
  }

  public clicked(): void {
    this.behaviour.getIntoHolidaySpirit();
  }
}
