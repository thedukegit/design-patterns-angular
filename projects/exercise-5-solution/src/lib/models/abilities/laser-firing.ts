import { FireAbilityInterface } from './fire-ability.interface';

export class LaserFiring implements FireAbilityInterface {
  fire(): string {
    return 'aim at asteroid and fire lasers';
  }
}
