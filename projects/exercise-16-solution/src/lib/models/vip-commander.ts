import {TierInterface} from "./tier.interface";
import {VisitorInterface} from "./visitor.interface";

export class VipCommander implements TierInterface {
  private checkoutTotal: number = 0;
  private discount = 10;

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
    return visitor.visitVipCommander(this);
  }
}
