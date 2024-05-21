export abstract class Ship {
  public name: string = '';

  abstract fly(): string;

  abstract fire(): string;

  abstract raiseShields(): string;
}
