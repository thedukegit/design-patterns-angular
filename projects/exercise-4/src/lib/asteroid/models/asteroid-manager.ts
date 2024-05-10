import { Asteroid } from './asteroid';

export class AsteroidManager {
  static createSmall() {
    return Asteroid.create(1, 300);
  }

  static createMedium() {
    return Asteroid.create(2, 200);
  }

  static createLarge() {
    return Asteroid.create(1, 100);
  }

  static createRandom() {
    return Asteroid.create(
      Math.ceil(Math.random() * 3),
      Math.ceil(Math.random() * 300),
    );
  }
}
