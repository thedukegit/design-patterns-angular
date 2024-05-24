import { Ship } from './ship';
import { HeavyFlying } from '../abilities/heavy-flying';
import { ClusterFiring } from '../abilities/cluster-firing';
import { RaiseShields } from '../abilities/raise-shields';

export class Dreadnought extends Ship {
  public override name = 'Dreadnought';

  public constructor() {
    super();
    this.flyAbility = new HeavyFlying();
    this.fireAbility = new ClusterFiring();
    this.raiseShieldsAbility = new RaiseShields();
  }
}
