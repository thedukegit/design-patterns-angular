import { Component } from '@angular/core';
import { Asteroid } from '../models/asteroid';
import { AsteroidFactory } from '../services/asteroid.factory';

@Component({
  selector: 'lib-desktop-game',
  standalone: true,
  imports: [],
  providers: [],
  templateUrl: `./desktop-game.component.html`,
  styleUrl: `./desktop-game.component.scss`,
})
export class DesktopGameComponent {
  protected asteroids: Asteroid[] = [];

  constructor() {
    this.gameLoop();
  }

  public gameLoop(): void {
    this.createAsteroids();
    this.moveAsteroids();
  }

  private createAsteroids(): void {
    const asteroidFactory = new AsteroidFactory();
    this.asteroids = asteroidFactory.createAsteroids(this.asteroids);
  }

  // you dont need to change this code.
  private moveAsteroids(): void {
    this.asteroids.forEach((asteroid: Asteroid) => {
      asteroid.move();
    });
  }
}
