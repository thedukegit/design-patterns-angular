import {TrafficLight} from "../models/traffic-light";
import {StateInterface} from "../interfaces/state.interface";
import {LightColor} from "../light-color.enum";
import {Sound} from "../sound.enum";
import {signal, Signal} from "@angular/core";

export class RedState implements StateInterface {
  private trafficLight: TrafficLight

  public constructor(trafficLight: TrafficLight) {
    this.trafficLight = trafficLight;
  }

  public get color(): LightColor {
    return LightColor.Red;
  }

  public get sound(): Sound {
    return Sound.TikTik;
  }

  public get timer(): Signal<number> {
    return signal(4000);
  }

  public changeLight(): void {
    console.log('changing to: ', this.color);
    setTimeout(() => {
      this.trafficLight.state = this.trafficLight.getGreenState();
      this.trafficLight.changeLight();
    }, this.timer());
  }

}
