import { Component } from '@angular/core';
import { Asteroid } from '../models/asteroid';

@Component({
  selector: 'lib-web-game',
  standalone: true,
  imports: [],
  providers: [],
  templateUrl: `./web-game.component.html`,
  styleUrl: `./web-game.component.scss`,
})
export class WebGameComponent {
  protected asteroids: Asteroid[] = [];

  constructor() {
    this.gameLoop();
  }

  public gameLoop(): void {
    this.createAsteroids();
    this.moveAsteroids();
  }

  private createAsteroids(): void {
    if (this.asteroids.length == 0) {
      // no asteroids yet or all asteroids destroyed, so lets create an equal amount of them
    }
  }

  // you dont need to change this code.
  private moveAsteroids(): void {
    this.asteroids.forEach((asteroid: Asteroid) => {
      asteroid.move();
    });
  }
}
