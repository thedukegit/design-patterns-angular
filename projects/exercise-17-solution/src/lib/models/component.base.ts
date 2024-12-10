import {ComponentInterface} from "./component.interface";

export abstract class ComponentBase implements ComponentInterface {
  protected abstract children: ComponentInterface[];

  protected abstract getName(): string;

  public render(): string {
    let renderString = `<br>${this.getName()}`;
    for (const child of this.children) {
      renderString += child.render();
    }
    return renderString;
  }

  public add(child: ComponentInterface): void {
    this.children.push(child);
  }
}
