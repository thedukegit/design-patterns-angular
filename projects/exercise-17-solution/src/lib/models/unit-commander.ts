import {ComponentBase} from "./component.base";

export class UnitCommander extends ComponentBase {
  protected override children: ComponentBase[];

  private readonly name = 'Unit Commander';

  public constructor(children?: ComponentBase[]) {
    super();
    this.children = children ?? [];
  }

  public override render(): string {
    return '<br>Unit Commander';
  }


  public classifyAsteroids(): void {
    console.log('Classify asteroids');
  }

  public override getName(): string {
    return this.name;
  }
}
