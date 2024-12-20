import {Component} from '@angular/core';
import {FleetProvider} from "./infrastructure/fleet-provider";
import {ShipDepthWiseComponent} from "./presentation/ship-depth-wise.component";
import {ShipBreadthWiseComponent} from "./presentation/ship-breadth-wise.component";

@Component({
  selector: 'lib-exercise-18',
  standalone: true,
  imports: [
    ShipDepthWiseComponent,
    ShipBreadthWiseComponent
  ],
  templateUrl: './exercise-18.component.html',
  styles: ``
})
export class Exercise18Component {
  private provider = new FleetProvider();
  protected fleet = this.provider.provide();

}
