import { Ui } from './ui';

export class Score extends Ui {
  private score: number = 0;

  public render(): string {
    return `Score: ${this.value}`;
  }

  public get(): number {
    return this.score;
  }

  public increase(): void {
    this.score += 10;
    this.setValue(this.score.toString());
  }
}
