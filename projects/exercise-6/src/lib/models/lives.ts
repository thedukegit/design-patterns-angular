import { Ui } from './ui';

export class Lives extends Ui {
  private lives: number = 3;

  public render(): string {
    return `Lives: ${this.value}`;
  }

  public addLife(): void {
    this.lives++;
    this.setValue(this.lives.toString());
  }

  public removeLife(): void {
    this.lives--;
    this.setValue(this.lives.toString());
  }
}
