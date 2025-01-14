import {AmmunitionInterface} from "./ammunition.interface";
import {Bullet} from "./ammunition/bullet";
import {signal} from "@angular/core";
import {Fireworks} from "./ammunition/fireworks";
import {Confetti} from "./ammunition/confetti";
import {CandyCanes} from "./ammunition/candy-canes";

export class Ship {
  public firing = signal<AmmunitionInterface>(new Bullet());

  public fireBullets(): void {
    this.firing.update((_) => new Bullet())
  }

  public fireFireworks(): void {
    this.firing.update((_) => new Fireworks())
  }

  public fireConfetti(): void {
    this.firing.update((_) => new Confetti())
  }

  public fireCandyCanes(): void {
    this.firing.update((_) => new CandyCanes())
  }
}
