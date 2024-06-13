import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';
import { Level } from '../models/level.base';
import { SpaceLevel } from '../models/space-level';
import { MatButton } from '@angular/material/button';
import { Score } from '../models/score';
import { Lives } from '../models/lives';
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
  protected readonly score: Score = new Score();
  protected readonly lives: Lives = new Lives();
  private currentLevel: Level;

  public constructor() {
    this.currentLevel = new SpaceLevel(this.player);
    this.currentLevel.ui.push(this.score);
    this.currentLevel.ui.push(this.lives);
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

  protected shoot() {
    this.score.increase();
  }

  private startGameLoop(): void {
    let lastTimestamp = 0;
    const interval = 1000;

    const gameLoop = (timestamp: number) => {
      if (timestamp - lastTimestamp >= interval) {
        this.changeLives();
        lastTimestamp = timestamp;
      }
      if (this.score.get() === 100) {
        const newLevel = new EarthLevel(this.player);
        newLevel.ui.push(this.score);
        newLevel.ui.push(this.lives);
        this.loadLevel(newLevel);
      }
      requestAnimationFrame(gameLoop);
    };
    requestAnimationFrame(gameLoop);
  }

  private changeLives() {
    if (Math.random() > 0.5) {
      this.lives.addLife();
    } else {
      this.lives.removeLife();
    }
  }
}
