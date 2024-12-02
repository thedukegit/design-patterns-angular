import {VipCommander} from "./vip-commander";
import {BasicCommander} from "./basic-commander";
import {FreeLoader} from "./free-loader";

export interface VisitorInterface {
  visitVipCommander(vipCommander: VipCommander): number;

  visitBasicCommander(basicCommander: BasicCommander): number;

  visitFreeLoader(freeLoader: FreeLoader): number;
}
