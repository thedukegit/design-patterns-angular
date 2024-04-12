import {Component, inject, OnInit} from '@angular/core';
import {NgClass} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {TrafficLight} from "./models/traffic-light";

@Component({
  selector: 'lib-exercise-2-with',
  standalone: true,
  imports: [
    NgClass,
    MatButton
  ],
  templateUrl: 'exercise-2-with.component.html',
  styleUrls: ['exercise-2-with.component.scss']
})
export class Exercise2WithComponent implements OnInit {

  protected trafficLight: TrafficLight = inject(TrafficLight);

  public ngOnInit(): void {
    setInterval(() => {
      this.changeLight();
    }, 3000); // switch light every 3 seconds
  }

  protected changeLight() {
    this.trafficLight.changeLight();
  }
}
