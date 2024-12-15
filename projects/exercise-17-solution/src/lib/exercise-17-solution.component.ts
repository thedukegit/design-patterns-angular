import {Component} from '@angular/core';
import {TaskForceCommander} from "./models/task-force-commander";
import {FleetCommander} from "./models/fleet-commander";
import {UnitCommander} from "./models/unit-commander";
import {AsteroidHunter} from "./models/asteroid-hunter";

@Component({
  selector: 'lib-exercise-17-solution',
  standalone: true,
  imports: [],
  templateUrl: './exercise-17-solution.component.html',
  styles: ``
})
export class Exercise17SolutionComponent {
  // private unitCommander1 = new UnitCommander([new AsteroidHunter(), new AsteroidHunter()]);
  // private unitCommander2 = new UnitCommander([new AsteroidHunter()]);
  // private unitCommander3 = new UnitCommander([new AsteroidHunter(), new AsteroidHunter(), new AsteroidHunter()]);
  // private unitCommander4 = new UnitCommander([new AsteroidHunter(), new AsteroidHunter()]);
  private taskForceCommander1 = new TaskForceCommander([new UnitCommander()]);
  private taskForceCommander2 = new TaskForceCommander();
  protected readonly fleetCommander = new FleetCommander([this.taskForceCommander1, this.taskForceCommander2, new AsteroidHunter()]);
}
