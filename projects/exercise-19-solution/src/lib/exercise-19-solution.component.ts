import {Component} from '@angular/core';
import {Ship} from "./models/ship";
import {MatButton} from "@angular/material/button";
import {FourthOfJuly} from "./models/holiday-behaviour/fourth-of-july";
import {Button} from "./models/button";
import {OrdinaryDay} from "./models/holiday-behaviour/ordinary-day";
import {NewYearsEve} from "./models/holiday-behaviour/new-years-eve";
import {Christmas} from "./models/holiday-behaviour/christmas";

@Component({
    selector: 'lib-exercise-19',
    standalone: true,
    imports: [
        MatButton
    ],
    templateUrl: './exercise-19-solution.component.html',
    styles: ``
})
export class Exercise19SolutionComponent {
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
            case 'new-years-eve':
                this.button.setBehaviour(new NewYearsEve(this.ship));
                break;
            case 'christmas':
                this.button.setBehaviour(new Christmas(this.ship));
                break;
            default:
                this.button.setBehaviour(new OrdinaryDay(this.ship));
                break;
        }
    }
}
