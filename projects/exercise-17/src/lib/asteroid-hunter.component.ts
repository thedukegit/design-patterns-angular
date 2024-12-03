import {Component, Input} from "@angular/core";
import {AsteroidHunter} from "./models/asteroid-hunter";

@Component({
  selector: 'asteroid-hunter',
  standalone: true,
  templateUrl: './asteroid-hunter.component.html',
})
export class AsteroidHunterComponent {
  @Input() public asteroidHunter!: AsteroidHunter;

}
