import { Level } from './level.base';

export class SpaceLevel extends Level {
  public override name = 'Space Level';

  public render(): string {
    console.log(this.ui[0].render());
    return `
    Level: ${this.name},
    player: ${this.player.render()},
    enemies: ${this.enemies.length},
    ${this.ui[0].render()}
    ${this.ui[1].render()}
    `;
  }

  update(): void {}
}
