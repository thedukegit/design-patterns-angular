import {Component} from '@angular/core';
import {Ship} from "./models/ship";
import {MatButton} from "@angular/material/button";
import {FourthOfJuly} from "./models/holiday-behaviour/fourth-of-july";
import {Button} from "./models/button";
import {OrdinaryDay} from "./models/holiday-behaviour/ordinary-day";

@Component({
  selector: 'lib-exercise-19',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './exercise-19.component.html',
  styles: ``
})
export class Exercise19Component {
  protected ship: Ship;
  protected button: Button;

  public constructor() {
    this.ship = new Ship();
    this.button = new Button(new OrdinaryDay(this.ship));
  }


  protected setHoliday(holiday: string): void {
    switch (holiday) {
      case 'fourth-of-july':
        this.button.setBehaviour(new FourthOfJuly(this.ship));
        break;
      default:
        this.button.setBehaviour(new OrdinaryDay(this.ship));
        break;
    }
  }
}
