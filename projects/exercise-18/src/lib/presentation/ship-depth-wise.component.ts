import {Component, Input} from "@angular/core";
import {Ship} from "../domain/ship/ship";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'lib-depth-wise-ship',
  standalone: true,
  templateUrl: './ship-depth-wise.component.html',
  imports: [
    JsonPipe
  ]
})
export class ShipDepthWiseComponent {
  @Input() ship!: Ship;
}
