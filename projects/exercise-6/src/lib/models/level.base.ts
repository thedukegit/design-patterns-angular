import { Player } from './player';
import { Enemy } from './enemy';
import { Ui } from './ui';

export abstract class Level {
  public name: string = '';
  public player: Player;
  public enemies: Enemy[] = [];
  public ui: Ui[] = [];

  public constructor(player: Player) {
    this.player = player;
  }

  abstract update(): void;

  abstract render(): string;
}
