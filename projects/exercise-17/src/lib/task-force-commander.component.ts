import {Component, Input} from "@angular/core";
import {TaskForceCommander} from "./models/task-force-commander";

@Component({
  selector: 'task-force-commander',
  standalone: true,
  templateUrl: './task-force-commander.component.html',
})
export class TaskForceCommanderComponent {
  @Input() public taskForceCommander!: TaskForceCommander;

}
