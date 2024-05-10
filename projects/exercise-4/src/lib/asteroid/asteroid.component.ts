import { Component } from '@angular/core';
import { Asteroid } from './models/asteroid';
import { AsteroidManager } from './models/asteroid-manager';
import { JsonPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'lib-asteroid',
  standalone: true,
  imports: [JsonPipe, MatButton],
  templateUrl: './asteroid.component.html',
  styleUrl: './asteroid.component.css',
})
export class AsteroidComponent {
  // size: number;
  // speed: number;
  protected asteroid: Asteroid | undefined = undefined;

  protected createRandom(): void {
    this.asteroid = AsteroidManager.createRandom();
  }

  protected createSmall(): void {
    this.asteroid = AsteroidManager.createSmall();
  }

  protected createMedium(): void {
    this.asteroid = AsteroidManager.createMedium();
  }

  protected createLarge(): void {
    this.asteroid = AsteroidManager.createLarge();
  }
}
