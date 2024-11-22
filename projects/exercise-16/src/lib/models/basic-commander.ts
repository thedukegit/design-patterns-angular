export class BasicCommander {
  private checkoutTotal: number = 0
  private discount: number = 5;

  public constructor(total: number) {
    this.checkoutTotal = total;
  }

  public getTotal(specialDiscount?: number): number {
    if (specialDiscount) {
      return this.checkoutTotal * ((100 - specialDiscount) / 100);
    }
    return this.checkoutTotal * ((100 - this.discount) / 100);
  }
}
