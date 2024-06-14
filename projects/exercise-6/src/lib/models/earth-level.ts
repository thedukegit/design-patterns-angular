import { Level } from './level.base';

export class EarthLevel extends Level {
  public override name = 'Earth Level';

  public render(): string {
    return `
    Level: ${this.name},
    player: ${this.player.render()},
    enemies: ${this.enemies.length},
    ${this.globals.score.render()}
    ${this.globals.lives.render()}
    `;
  }

  update(): void {}
}
