import {Component} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {VipCommander} from "./models/vip-commander";
import {BasicCommander} from "./models/basic-commander";
import {FreeLoader} from "./models/free-loader";

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
    switch (tier) {
      case 'VIP':
        const vipCommander = new VipCommander(amount);
        this.price = vipCommander.getTotal(specialDiscount);
        break;
      case 'BASIC':
        const basicCommander = new BasicCommander(amount);
        this.price = basicCommander.getTotal(specialDiscount);
        break;
      default:
        const freeLoader = new FreeLoader(amount);
        this.price = freeLoader.getTotal(specialDiscount);
    }
  }

  setSpecialDiscount(discount: number) {
    this.specialDiscount = discount;
  }
}
