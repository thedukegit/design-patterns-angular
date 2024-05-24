import { FireAbilityInterface } from './fire-ability.interface';

export class RocketFiring implements FireAbilityInterface {
  fire(): string {
    return 'aim at asteroid and fire rockets';
  }
}
