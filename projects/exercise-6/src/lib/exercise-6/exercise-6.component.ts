import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';
import { Level } from '../models/level.base';
import { SpaceLevel } from '../models/space-level';
import { MatButton } from '@angular/material/button';
import { EarthLevel } from '../models/earth-level';

@Component({
  selector: 'lib-exercise-6',
  standalone: true,
  imports: [MatButton],
  templateUrl: './exercise-6.component.html',
  styleUrl: './exercise-6.component.css',
})
export class Exercise6Component implements OnInit {
  protected readonly player: Player = new Player('Marlin');
  private currentLevel: Level;

  public constructor() {
    this.currentLevel = new SpaceLevel(this.player);
  }

  public get level(): Level {
    return this.currentLevel;
  }

  public ngOnInit(): void {
    console.log(this.level);
    this.startGameLoop();
  }

  public loadLevel(level: Level) {
    this.currentLevel = level;
  }

  protected shoot(): void {
    this.currentLevel.shoot();
  }

  private startGameLoop(): void {
    let lastTimestamp = 0;
    const interval = 1000;

    const gameLoop = (timestamp: number) => {
      if (timestamp - lastTimestamp >= interval) {
        this.currentLevel.changeLives(); //simulate gaining and losing lives
        lastTimestamp = timestamp;
      }
      if (this.currentLevel.isFinished()) {
        const newLevel = new EarthLevel(this.player);
        this.loadLevel(newLevel);
      }
      requestAnimationFrame(gameLoop);
    };
    requestAnimationFrame(gameLoop);
  }
}
