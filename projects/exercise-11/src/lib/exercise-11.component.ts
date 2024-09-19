import {Component, OnInit} from '@angular/core';
import {Ship} from "./models/ship";
import {MatButton} from "@angular/material/button";
import {JsonPipe} from "@angular/common";
import {SaveState} from "./models/save-state";

@Component({
  selector: 'lib-exercise-11',
  standalone: true,
  imports: [
    MatButton,
    JsonPipe
  ],
  templateUrl: './exercise-11.component.html',
  styles: ``
})
export class Exercise11Component implements OnInit {
  protected myShip: Ship | null;
  protected saveState: SaveState

  constructor() {
    this.myShip = new Ship();
    this.saveState = new SaveState();
  }

  ngOnInit(): void {
  }


  shields() {
    if (this.myShip)
      this.myShip.increaseShields();
  }

  save() {
    if (this.myShip)
      this.saveState.save(structuredClone(this.myShip));
  }

  destroy() {
    this.myShip = null;
  }

  reload() {
    this.myShip = this.saveState.ship;
  }
}
