import {Component} from '@angular/core';
import {Ship} from "./models/ship";
import {JsonPipe} from "@angular/common";
import {Memento} from "./models/memento";

@Component({
  selector: 'lib-exercise-11-solution',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './exercise-11-solution.component.html',
  styles: ``
})
// this component acts as the Caretaker in the Memento design pattern
export class Exercise11SolutionComponent {
  protected myShip: Ship | null;

  protected saveState: Memento = {} as Memento; // here it holds the Memento object

  public constructor() {
    this.myShip = new Ship();
  }


  public shields(): void {
    if (this.myShip)
      this.myShip.increaseShields();
  }

  public save(): void {
    if (this.myShip)
      this.saveState = this.myShip.createMemento() // here it saves the state
  }

  public destroy(): void {
    this.myShip = null;
  }

  public reload(): void {
    if (!this.myShip) this.myShip = new Ship(); // recreate the ship if its destroyed
    this.myShip.shields = this.saveState.getState(); // here it restores the state
  }
}
