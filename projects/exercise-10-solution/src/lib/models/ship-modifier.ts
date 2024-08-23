import { Ship } from './ship';

export class ShipModifier {
  protected ship: Ship;
  protected next: ShipModifier | null = null;

  public constructor(ship: Ship) {
    this.ship = ship;
  }

  public add(sm: ShipModifier): void {
    if (this.next) {
      this.next.add(sm);
    } else {
      this.next = sm;
    }
  }

  public handle(): void {
    if (this.next !== null) {
      this.next.handle();
    }
  }
}
