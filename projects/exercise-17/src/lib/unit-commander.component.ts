import {Component, Input} from "@angular/core";
import {UnitCommander} from "./models/unit-commander";

@Component({
  selector: 'unit-commander',
  standalone: true,
  templateUrl: './unit-commander.component.html',
})
export class UnitCommanderComponent {
  @Input() public unitCommander!: UnitCommander;

  public ngOnInit(): void {

  }

}
