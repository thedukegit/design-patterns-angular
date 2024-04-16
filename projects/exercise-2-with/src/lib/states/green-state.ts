import {TrafficLight} from "../models/traffic-light";
import {StateInterface} from "../interfaces/state.interface";
import {LightColor} from "../light-color.enum";
import {Sound} from "../sound.enum";
import {signal, Signal} from "@angular/core";

export class GreenState implements StateInterface {
  private trafficLight: TrafficLight

  public constructor(trafficLight: TrafficLight) {
    this.trafficLight = trafficLight;
  }

  public get color(): LightColor {
    return LightColor.Green;
  }

  public get sound(): Sound {
    return Sound.GoGoGo;
  }

  public get timer(): Signal<number> {
    return signal(1500);
  }

  public changeLight(): void {
    console.log('changing to: ', this.color);
    setTimeout(() => {
      this.trafficLight.state = this.trafficLight.getYellowState();
      this.trafficLight.changeLight();
    }, this.timer());
  }

}
