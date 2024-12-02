import {VipCommander} from "./vip-commander";
import {BasicCommander} from "./basic-commander";
import {FreeLoader} from "./free-loader";
import {VisitorInterface} from "./visitor.interface";

export class BlackFridayVisitor implements VisitorInterface {

  public visitVipCommander(vip: VipCommander) {
    const vipDiscount = 0.15;
    return this.calculateSalesPrice(vip.getTotal(), vipDiscount);
  }

  public visitBasicCommander(basic: BasicCommander) {
    const basicDiscount = 0.07;
    return this.calculateSalesPrice(basic.getTotal(), basicDiscount);
  }

  public visitFreeLoader(freeLoader: FreeLoader) {
    const freeLoaderDiscount = 0.02;
    return this.calculateSalesPrice(freeLoader.getTotal(), freeLoaderDiscount);
  }

  private calculateSalesPrice(total: number, discount: number): number {
    return total * (1 - discount);
  }
}
