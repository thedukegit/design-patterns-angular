import { RaiseShieldsAbilityInterface } from './raise-shields-ability.interface';

export class RaiseShields implements RaiseShieldsAbilityInterface {
  raiseShields(): string {
    return 'Turn on shield generator and raise shields';
  }
}
