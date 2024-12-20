import {Component, Input} from "@angular/core";
import {Ship} from "../domain/ship/ship";

@Component({
  selector: 'lib-ship',
  standalone: true,
  templateUrl: './ship.component.html'
})
export class ShipComponent {
  @Input() ship!: Ship;
}
