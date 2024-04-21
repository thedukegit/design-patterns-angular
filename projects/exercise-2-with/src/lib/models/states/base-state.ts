import {StateInterface} from "../../util/state.interface";
import {Signal} from "@angular/core";
import {Sound} from "../../util/sound.enum";
import {LightColor} from "../../util/light-color.enum";
import {TrafficLight} from "../traffic-light";

export abstract class BaseState implements StateInterface {
  protected trafficLight: TrafficLight;

  public constructor(trafficLight: TrafficLight) {
    this.trafficLight = trafficLight;
  }

  abstract get sound(): Sound

  abstract get timer(): Signal<number>

  abstract get color(): LightColor

  abstract next(): StateInterface

  changeLight(): void {
    console.log('changing to: ', this.color);
    setTimeout(() => {
      this.trafficLight.state = this.next();
      this.trafficLight.changeLight();
    }, this.timer());
  }
}
