export class Captain {

  public constructor(private name: string, private age: number) {
  }

  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age;
  }

  public toString(): string {
    return `${this.name} (${this.age})`;
  }
}
