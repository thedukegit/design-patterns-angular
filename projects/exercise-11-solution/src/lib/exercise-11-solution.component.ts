import {Component} from '@angular/core';
import {Ship} from "./models/ship";
import {JsonPipe} from "@angular/common";
import {Memento} from "./models/memento";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'lib-exercise-11-solution',
  standalone: true,
  imports: [
    JsonPipe,
    MatButton
  ],
  templateUrl: './exercise-11-solution.component.html',
  styles: ``
})
// this component acts as the Caretaker in the Memento design pattern
export class Exercise11SolutionComponent {
  protected myShip: Ship | null;

  protected savedStates: Array<Memento> = []; // here it holds the Memento objects

  public constructor() {
    this.myShip = new Ship();
  }


  public shields(): void {
    if (this.myShip)
      this.myShip.increaseShields();
  }

  public save(): void {
    if (this.myShip)
      this.savedStates.push(this.myShip.createMemento()) // here it saves the state
  }

  public destroy(): void {
    this.myShip = null;
  }

  public reload(index: number): void {
    if (!this.myShip) this.myShip = new Ship(); // recreate the ship if its destroyed
    this.myShip.shields = this.savedStates[index].getState(); // here it restores the state
  }
}
