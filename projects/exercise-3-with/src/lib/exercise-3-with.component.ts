import {Component, OnInit} from '@angular/core';
import {Archers} from "./models/archers";
import {Cavalry} from "./models/cavalry";
import {Infantry} from "./models/infantry";

@Component({
  selector: 'lib-exercise-3-with',
  standalone: true,
  imports: [],
  templateUrl: './exercise-3-with.component.html',

})
export class Exercise3WithComponent implements OnInit {
  protected buildProgress: Array<string> = [];
  private archers: Archers;
  private cavalry: Cavalry;
  private infantry: Infantry;

  public constructor() {
    this.archers = new Archers();
    this.cavalry = new Cavalry()
    this.infantry = new Infantry()
  }

  public ngOnInit(): void {
    this.archers.build();
    this.cavalry.build();
    this.infantry.build();
    this.buildProgress.push(...this.archers.progress);
    this.buildProgress.push(...this.cavalry.progress);
    this.buildProgress.push(...this.infantry.progress);
  }

}
