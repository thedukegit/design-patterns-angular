import {Army} from "./army";

export class Archers extends Army {
  giveWeapons(): void {
    this.progress.push('[From concrete archers class]: Giving bows and arrows');
    this.progress.push('');
  }
}
