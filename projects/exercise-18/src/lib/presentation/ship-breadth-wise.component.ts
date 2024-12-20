import {Component, ComponentRef, Input, OnInit, viewChild, ViewContainerRef} from "@angular/core";
import {Ship} from "../domain/ship/ship";
import {JsonPipe} from "@angular/common";
import {ShipComponent} from "./ship.component";

@Component({
  selector: 'lib-breadth-wise-ship',
  standalone: true,
  templateUrl: './ship-breadth-wise.component.html',
  imports: [
    JsonPipe
  ]
})
export class ShipBreadthWiseComponent implements OnInit {
  @Input() ship!: Ship;
  protected queue: Ship[] = [];
  protected shipContainer = viewChild('shipContainer', {
    read: ViewContainerRef,
  });


  public ngOnInit(): void {
    const subordinates = this.ship.getSubordinates();
    this.queue.push(...subordinates);
    while (this.hasShip()) {
      const ship = this.giveShip();
      const componentRef: ComponentRef<ShipComponent> = this.shipContainer()?.createComponent(ShipComponent)!;
      componentRef.instance.ship = ship;
      this.queue.push(...ship.getSubordinates());

    }
  }

  public hasShip(): boolean {
    return this.queue.length > 0;
  }

  public giveShip(): Ship {
    return this.queue.shift()!;
  }

}
