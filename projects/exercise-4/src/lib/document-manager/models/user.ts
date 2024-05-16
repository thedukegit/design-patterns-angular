export class User {
  public readonly id: number;
  public readonly name: string;
  public readonly accessLevel: number;

  public constructor(id: number, name: string, accessLevel: number) {
    this.id = id;
    this.name = name;
    this.accessLevel = accessLevel;
  }
}
