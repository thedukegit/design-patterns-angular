import { Renderable } from './renderable.interface';

export class Player implements Renderable {
  private readonly name: string = '';

  public constructor(name: string) {
    this.name = name;
  }

  public render(): string {
    return this.name;
  }
}
