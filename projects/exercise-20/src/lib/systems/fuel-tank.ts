export class FuelTank {
  private static fuelLevel: number = Math.round(Math.random() * 100); // number between 0 and 100
  public static level(): number {
    return FuelTank.fuelLevel;
  }

  public static add(amount: number): void {
    FuelTank.fuelLevel += amount;
  }
}
