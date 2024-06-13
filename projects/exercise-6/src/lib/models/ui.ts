import { Renderable } from './renderable.interface';

export abstract class Ui implements Renderable {
  protected value: string = '';

  public setValue(value: string): void {
    this.value = value;
  }

  public abstract render(): void;
}
