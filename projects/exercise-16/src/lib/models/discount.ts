import {TierInterface} from "./tier.interface";

export class Discount {
  public constructor(private tier: TierInterface) {
  }

  public calculateTotal(specialDiscount?: number): number {
    if (specialDiscount) {
      return this.tier.getTotal() * ((100 - specialDiscount) / 100);
    }
    return this.tier.getTotal() * ((100 - this.tier.getDiscount()) / 100);
  }
}
