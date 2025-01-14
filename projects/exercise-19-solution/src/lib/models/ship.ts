import {AmmunitionInterface} from "./ammunition.interface";
import {Bullet} from "./ammunition/bullet";
import {signal} from "@angular/core";
import {Fireworks} from "./ammunition/fireworks";

export class Ship {
  public firing = signal<AmmunitionInterface>(new Bullet());

  public fireFireworks(): void {
    this.firing.update((_) => new Fireworks())
  }

  public fireBullets(): void {
    this.firing.update((_) => new Bullet())
  }

}
