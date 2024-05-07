import {Army} from "./army";

export class Cavalry extends Army {
  giveWeapons() {
    this.progress.push('[From concrete cavalry class]: Giving swords and horses');
    this.progress.push('');
  }
}
