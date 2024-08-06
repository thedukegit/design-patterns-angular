import { SmallAsteroid } from '../models/small-asteroid';
import { MediumAsteroid } from '../models/medium-asteroid';
import { LargeAsteroid } from '../models/large-asteroid';
import { Asteroid } from '../models/asteroid';

export interface SpaceObjectsFactory {
  createAsteroids(asteroids: Array<Asteroid>): Array<Asteroid>;
}

export class AsteroidFactory implements SpaceObjectsFactory {
  public createAsteroids(asteroids: Array<Asteroid>): Array<Asteroid> {
    if (asteroids.length == 0) {
      // no asteroids yet or all asteroids destroyed, so lets create an equal amount of them
      asteroids.push(new SmallAsteroid());
      asteroids.push(new MediumAsteroid());
      asteroids.push(new LargeAsteroid());
    }
    return asteroids;
  }
}
