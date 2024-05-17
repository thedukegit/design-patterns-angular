export abstract class Ship {
  public name: string = '';

  public fly(): string {
    return 'Turning on engines and moving in desired direction';
  }

  public fire(): string {
    return 'Aim at asteroid and fire weapons';
  }
}
