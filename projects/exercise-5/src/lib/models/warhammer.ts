import { Ship } from './ship';
import { RaiseShieldsInterface } from './raise-shields.interface';
import { FlyingInterface } from './flying.interface';
import { FiringInterface } from './firing.interface';

export class Warhammer
  extends Ship
  implements FlyingInterface, FiringInterface, RaiseShieldsInterface
{
  public override name = 'Warhammer';

  constructor() {
    super();
  }

  fire(): string {
    return 'aim at asteroid and fire rockets';
  }

  fly(): string {
    return 'turning on engines and moving in a straight line';
  }

  raiseShields(): string {
    return 'Turn on shield generator and raise shields';
  }
}
