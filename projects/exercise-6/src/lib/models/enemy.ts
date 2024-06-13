import { Renderable } from './renderable.interface';

export class Enemy implements Renderable {
  public render() {
    console.log('Enemy Render');
  }
}
