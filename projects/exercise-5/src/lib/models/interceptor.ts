import { Ship } from './ship';

export class Interceptor extends Ship {
  public override name = 'Interceptor';

  constructor() {
    super();
  }

  public override shield(): string {
    return 'No shield available';
  }
}
