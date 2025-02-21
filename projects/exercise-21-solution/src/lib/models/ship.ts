export class Ship {
  // public firing = signal<AmmunitionInterface>(new Bullet());

  public fireBlasters(): void {
    console.log('Firing blasters');
    // this.firing.update((_) => new Bullet())
  }

  public hyperjump(): void {
    console.log('Hyperjumping');
    // this.firing.update((_) => new Fireworks())
  }

}
