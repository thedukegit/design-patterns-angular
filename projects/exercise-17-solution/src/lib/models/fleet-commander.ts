import {ComponentBase} from "./component.base";

export class FleetCommander extends ComponentBase {
  protected override children: ComponentBase[] = [];
  private readonly name = 'Fleet Commander';

  public constructor(children?: ComponentBase[]) {
    super();
    this.children = children ?? [];
  }

  public deployFleet(): void {
    console.log('Deploying fleet');
  }

  public override getName(): string {
    return this.name;
  }

  // public render(): ComponentRef<any> {
  //   return createComponent('fleet-commander');
  // }

  // public render(): string {
  //   let renderString = '<br>Fleet Commander';
  //   console.log(this.children);
  //   for (const child of this.children) {
  //     renderString += child.render();
  //   }
  //   return renderString;
  // }

  public override add(): void {

  }
}
