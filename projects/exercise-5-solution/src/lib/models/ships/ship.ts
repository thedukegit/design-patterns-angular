import { FlyAbilityInterface } from '../abilities/fly-ability.interface';
import { FireAbilityInterface } from '../abilities/fire-ability.interface';
import { RaiseShieldsAbilityInterface } from '../abilities/raise-shields-ability.interface';

export abstract class Ship {
  flyAbility!: FlyAbilityInterface;
  fireAbility!: FireAbilityInterface;
  raiseShieldsAbility!: RaiseShieldsAbilityInterface;

  public name: string = '';

  performFlyAbility(): string {
    return this.flyAbility.fly();
  }

  performFireAbility(): string {
    return this.fireAbility.fire();
  }

  performRaiseShieldsAbility(): string {
    return this.raiseShieldsAbility.raiseShields();
  }
}
