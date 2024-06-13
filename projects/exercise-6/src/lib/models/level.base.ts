import { Player } from './player';
import { Enemy } from './enemy';
import { Score } from './score';
import { Lives } from './lives';

export abstract class Level {
  public static score: Score = new Score();
  public static lives: Lives = new Lives();
  public name: string = '';
  public player: Player;
  public enemies: Enemy[] = [];

  public constructor(player: Player) {
    this.player = player;
  }

  abstract update(): void;

  abstract render(): string;

  public isFinished(): boolean {
    return Level.score.get() === 100 ?? false;
  }

  public shoot() {
    Level.score.increase();
  }

  public changeLives() {
    if (Math.random() > 0.5) {
      Level.lives.addLife();
    } else {
      Level.lives.removeLife();
    }
  }
}
