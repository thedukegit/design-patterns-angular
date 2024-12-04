import {Component, Input} from '@angular/core';
import {FleetCommander} from "./models/fleet-commander";
import {TaskForceCommanderComponent} from "./task-force-commander.component";

@Component({
  selector: 'fleet-commander',
  standalone: true,
  templateUrl: './fleet-commander.component.html',
  imports: [
    TaskForceCommanderComponent
  ],
})
export class FleetCommanderComponent {
  @Input() public fleetCommander!: FleetCommander;

  constructor() {
  }

  public ngOnInit() {

  }
}
