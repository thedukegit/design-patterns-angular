import {ComponentBase} from "./component.base";

export class TaskForceCommander extends ComponentBase {
  protected override children: ComponentBase[] = [];
  private readonly name = 'Task Force Commander';

  public constructor(children?: ComponentBase[]) {
    super();
    this.children = children ?? [];
  }

  public mapAsteroids(): void {
    console.log('Map asteroids');
  }

  public override getName(): string {
    return this.name;
  }

  // public render(): string {
  //   let renderString = `<br>Task Force Commander`;
  //   for (const child of this.children) {
  //     renderString += child.render();
  //   }
  //   return renderString;
  // }
}
