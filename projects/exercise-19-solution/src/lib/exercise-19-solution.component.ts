import {Component} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {ShipFacade} from "./models/ship.facade";

export enum HolidayType {
    XMASS = 'Christmas',
    NYE = 'New Years Eve',
    FOJ = 'Fourth of July',
    NOPE = 'No Holiday'
}

@Component({
    selector: 'lib-exercise-19-solution',
    standalone: true,
    imports: [
        MatButton
    ],
    templateUrl: './exercise-19-solution.component.html',
    styles: ``
})
export class Exercise19SolutionComponent {
    protected holidayType: HolidayType = HolidayType.NOPE;
    protected readonly HolidayType = HolidayType;
    private readonly ship: ShipFacade = new ShipFacade();

    protected setHolidayType(holidayType: HolidayType): void {
        this.holidayType = holidayType;
    }

    protected fire(): void {
        this.ship.fire(this.holidayType);
    }


}
