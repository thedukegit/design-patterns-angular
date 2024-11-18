import {Component} from '@angular/core';
import {BulletFlyweightFactory, SizeEnum} from "./models/bullet-flyweight.factory";
import {Bullet} from "./models/bullet";

@Component({
  selector: 'lib-exercise-15-solution',
  standalone: true,
  imports: [],
  templateUrl: './exercise-15-solution.component.html',
  styles: ``
})
export class Exercise15SolutionComponent {
  private factory: BulletFlyweightFactory = new BulletFlyweightFactory();
  protected readonly bullets: Bullet[] = [];
  private readonly flyweight = this.factory.getBulletFlyweight(SizeEnum.SMALL);

  protected createBullet(): void {
    // a real space ship wouldnt just fire in all directions at random speeds...
    const speed = Math.random() * 100; // m/s
    const direction = Math.random() * 360; // degrees
    const bullet = new Bullet(this.flyweight, speed, direction);
    this.bullets.unshift(bullet);
  }

  protected changeFlyweight(): void {
    this.flyweight.setSoundAndSprite('new sound', 'new sprite');
  }
}
