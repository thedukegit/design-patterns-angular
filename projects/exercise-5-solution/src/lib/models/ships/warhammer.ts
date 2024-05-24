import { Ship } from './ship';
import { HeavyFlying } from '../abilities/heavy-flying';
import { RocketFiring } from '../abilities/rocket-firing';
import { RaiseShields } from '../abilities/raise-shields';

export class Warhammer extends Ship {
  public override name = 'Warhammer';

  constructor() {
    super();
    this.flyAbility = new HeavyFlying();
    this.fireAbility = new RocketFiring();
    this.raiseShieldsAbility = new RaiseShields();
  }
}
