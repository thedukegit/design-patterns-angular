import {Army} from "./army";

export class Infantry extends Army {
  giveWeapons() {
    this.progress.push('[From concrete infantry class]: Giving swords and shields');
    this.progress.push('');
  }
}
