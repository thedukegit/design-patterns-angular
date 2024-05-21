import { Ship } from './ship';
import { FiringInterface } from './firing.interface';
import { FlyingInterface } from './flying.interface';

export class Interceptor
  extends Ship
  implements FlyingInterface, FiringInterface
{
  public override name = 'Interceptor';

  constructor() {
    super();
  }

  fire(): string {
    return 'aim at asteroid and fire lasers';
  }

  fly(): string {
    return 'turning on engines and perform loopings and corkscrews';
  }

  raiseShields(): string {
    return 'no shields available';
  }
}
