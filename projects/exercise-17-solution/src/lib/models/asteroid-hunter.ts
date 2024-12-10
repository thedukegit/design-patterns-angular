import {ComponentBase} from "./component.base";

export class AsteroidHunter extends ComponentBase {
  protected override children: ComponentBase[] = [];
  private readonly name = 'Asteroid Hunter';

  public override render(): string {
    return '<br>Asteroid Hunter';
  }

  public override add(): void {
    throw new Error("Cannot add children to an asteroid hunter.");
  }

  public targetAsteroid(): void {
    console.log('Targeting asteroid');
  }

  public getName(): string {
    return this.name;
  }
}
