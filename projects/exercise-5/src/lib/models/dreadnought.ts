import { Ship } from './ship';
import { RaiseShieldsInterface } from './raise-shields.interface';
import { FiringInterface } from './firing.interface';
import { FlyingInterface } from './flying.interface';

export class Dreadnought
  extends Ship
  implements FlyingInterface, FiringInterface, RaiseShieldsInterface
{
  public override name = 'Dreadnought';

  public constructor() {
    super();
  }

  fire(): string {
    return 'aim at asteroid and deploy heavy warhead cluster bombs';
  }

  fly(): string {
    return 'turning on engines and moving in a straight line';
  }

  raiseShields(): string {
    return 'Turn on shield generator and raise shields';
  }
}
