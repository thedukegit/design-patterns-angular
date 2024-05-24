import { Ship } from './ship';
import { NimbleFlying } from '../abilities/nimble-flying';
import { LaserFiring } from '../abilities/laser-firing';
import { NoShields } from '../abilities/no-shields';

export class Interceptor extends Ship {
  public override name = 'Interceptor';

  constructor() {
    super();
    this.flyAbility = new NimbleFlying();
    this.fireAbility = new LaserFiring();
    this.raiseShieldsAbility = new NoShields();
  }
}
