import { FlyAbilityInterface } from './fly-ability.interface';

export class NimbleFlying implements FlyAbilityInterface {
  fly(): string {
    return 'turning on engines and perform loopings and corkscrews';
  }
}
