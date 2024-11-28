import {TierInterface} from "./tier.interface";

export class FreeLoader implements TierInterface {
  private checkoutTotal: number = 0
  private discount: number = 0;

  public constructor(total: number) {
    this.checkoutTotal = total;
  }

  public getTotal(): number {
    return this.checkoutTotal;
  }

  public getDiscount(): number {
    return this.discount;
  }
}
