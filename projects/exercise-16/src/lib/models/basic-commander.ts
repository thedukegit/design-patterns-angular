import {TierInterface} from "./tier.interface";

export class BasicCommander implements TierInterface {
  private checkoutTotal: number = 0
  private discount: number = 5;

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
