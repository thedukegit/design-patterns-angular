import {Component} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {VipCommander} from "./models/vip-commander";
import {BasicCommander} from "./models/basic-commander";
import {FreeLoader} from "./models/free-loader";
import {Discount} from "./models/discount";

@Component({
  selector: 'lib-exercise-16',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './exercise-16.component.html',
  styles: ``
})
export class Exercise16Component {
  protected price = 0;
  protected specialDiscount = 0;

  protected buySkin(tier: string, amount: number, specialDiscount?: number) {
    let discount: Discount;
    switch (tier) {
      case 'VIP':
        const vipCommander = new VipCommander(amount);
        discount = new Discount(vipCommander);
        break;
      case 'BASIC':
        const basicCommander = new BasicCommander(amount);
        discount = new Discount(basicCommander);
        break;
      default:
        const freeLoader = new FreeLoader(amount);
        discount = new Discount(freeLoader);
    }
    return this.price = discount.calculateTotal(specialDiscount);
  }

  protected setSpecialDiscount(discount: number) {
    this.specialDiscount = discount;
  }
}
