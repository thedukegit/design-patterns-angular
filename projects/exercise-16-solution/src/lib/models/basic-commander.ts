import {TierInterface} from "./tier.interface";
import {VisitorInterface} from "./visitor.interface";

export class BasicCommander implements TierInterface {
  private checkoutTotal: number = 0
  private discount: number = 5;

  public constructor(total: number) {
    this.checkoutTotal = total;
  }

  public getTotal(): number {
    return this.checkoutTotal;
  }

  public getSalesPrice(): number {
    return this.discount;
  }

  public accept(visitor: VisitorInterface): number {
    return visitor.visitBasicCommander(this);
  }
}
