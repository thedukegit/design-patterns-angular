import { FireAbilityInterface } from './fire-ability.interface';

export class ClusterFiring implements FireAbilityInterface {
  fire(): string {
    return 'aim at asteroid and deploy heavy warhead cluster bombs';
  }
}
