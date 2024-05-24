import { FlyAbilityInterface } from './fly-ability.interface';

export class HeavyFlying implements FlyAbilityInterface {
  fly(): string {
    return 'Turning on engines and moving in a straight line';
  }
}
