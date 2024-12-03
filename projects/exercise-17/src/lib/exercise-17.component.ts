import {Component} from '@angular/core';
import {FleetCommanderComponent} from "./fleet-commander.component";
import {FleetCommander} from './models/fleet-commander';
import {UnitCommander} from "./models/unit-commander";
import {AsteroidHunter} from "./models/asteroid-hunter";
import {TaskForceCommander} from "./models/task-force-commander";
import {TaskForceCommanderComponent} from "./task-force-commander.component";
import {UnitCommanderComponent} from "./unit-commander.component";
import {NgForOf} from "@angular/common";
import {AsteroidHunterComponent} from "./asteroid-hunter.component";

@Component({
  selector: 'lib-exercise-17',
  standalone: true,
  imports: [
    FleetCommanderComponent,
    TaskForceCommanderComponent,
    UnitCommanderComponent,
    NgForOf,
    AsteroidHunterComponent
  ],
  templateUrl: './exercise-17.component.html',
  styleUrl: './exercise-17.component.scss'
})
export class Exercise17Component {
  private unitCommander1 = new UnitCommander([new AsteroidHunter(), new AsteroidHunter()]);
  private unitCommander2 = new UnitCommander([new AsteroidHunter()]);
  private unitCommander3 = new UnitCommander([new AsteroidHunter(), new AsteroidHunter(), new AsteroidHunter()]);
  private unitCommander4 = new UnitCommander([new AsteroidHunter(), new AsteroidHunter()]);
  private taskForceCommander1 = new TaskForceCommander([this.unitCommander1, this.unitCommander2]);
  private taskForceCommander2 = new TaskForceCommander([this.unitCommander3, this.unitCommander4]);
  protected readonly fleetCommander = new FleetCommander([this.taskForceCommander1, this.taskForceCommander2]);

  public constructor() {
  }

}
