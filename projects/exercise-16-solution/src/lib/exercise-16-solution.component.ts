import {Component} from '@angular/core';
import {VipCommander} from "./models/vip-commander";
import {BasicCommander} from "./models/basic-commander";
import {FreeLoader} from "./models/free-loader";
import {BlackFridayVisitor} from "./models/black-friday-visitor";
import {JsonPipe} from "@angular/common";
import {TierDiscountVisitor} from "./models/tier-discount-visitor";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'lib-exercise-16-solution',
  standalone: true,
  imports: [
    JsonPipe,
    MatButton
  ],
  templateUrl: './exercise-16-solution.component.html',
})
export class Exercise16SolutionComponent {
  protected prices: Record<string, number> = {'vip': 0, 'basic': 0, 'free': 0};
  protected discount: string = '';


  protected calculateSkin(amount: number) {
    const vipCommander = new VipCommander(amount);
    const basicCommander = new BasicCommander(amount);
    const freeLoader = new FreeLoader(amount);
    switch (this.discount) {
      case 'black-friday':
        this.prices['vip'] = vipCommander.accept(new BlackFridayVisitor());
        this.prices['basic'] = basicCommander.accept(new BlackFridayVisitor());
        this.prices['free'] = freeLoader.accept(new BlackFridayVisitor());
        break;
      default:
        this.prices['vip'] = vipCommander.accept(new TierDiscountVisitor());
        this.prices['basic'] = basicCommander.accept(new TierDiscountVisitor());
        this.prices['free'] = freeLoader.accept(new TierDiscountVisitor());
    }
  }

  protected setDiscount(discount: string) {
    this.discount = discount;
  }
}
