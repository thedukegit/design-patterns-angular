import { Player } from './player';
import { Enemy } from './enemy';
import { Globals } from './globals';

export abstract class Level {
  public name: string = '';
  public player: Player;
  public enemies: Enemy[] = [];
  protected globals: Globals;

  public constructor(player: Player) {
    this.player = player;
    this.globals = Globals.getInstance();
  }

  abstract update(): void;

  abstract render(): string;

  public isFinished(): boolean {
    return this.globals.score.get() === 100 ?? false;
  }

  public shoot() {
    this.globals.score.increase();
  }

  public changeLives() {
    if (Math.random() > 0.5) {
      this.globals.lives.addLife();
    } else {
      this.globals.lives.removeLife();
    }
  }
}
