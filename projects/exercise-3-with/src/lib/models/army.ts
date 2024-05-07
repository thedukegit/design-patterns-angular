export abstract class Army {
  public progress: Array<string> = [];

  build(): void {
    this.conscriptPeople();
    this.giveClothes();
    this.giveWeapons();
  }

  conscriptPeople(): void {
    this.progress.push('[From abstract army class]: Conscripting people');
  };

  giveClothes(): void {
    this.progress.push('[From abstract army class]: Giving clothes');
  }

  abstract giveWeapons(): void;
}
