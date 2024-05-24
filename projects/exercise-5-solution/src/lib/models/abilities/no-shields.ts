import { RaiseShieldsAbilityInterface } from './raise-shields-ability.interface';

export class NoShields implements RaiseShieldsAbilityInterface {
  raiseShields(): string {
    return 'no shields available';
  }
}
