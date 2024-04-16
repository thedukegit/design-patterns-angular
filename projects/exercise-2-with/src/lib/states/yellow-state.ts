import {StateInterface} from "../interfaces/state.interface";
import {LightColor} from "../light-color.enum";
import {TrafficLight} from "../models/traffic-light";
import {Sound} from "../sound.enum";
import {signal, Signal} from "@angular/core";

export class YellowState implements StateInterface {
  private trafficLight: TrafficLight;

  public constructor(trafficLight: TrafficLight) {
    this.trafficLight = trafficLight;
  }

  public get color(): LightColor {
    return LightColor.Yellow;
  }

  public get sound(): Sound {
    return Sound.TokTok;
  }

  public get timer(): Signal<number> {
    return signal(1000);
  }

  public changeLight(): void {
    console.log('changing to: ', this.color);
    setTimeout(() => {
      this.trafficLight.state = this.trafficLight.getRedState();
      this.trafficLight.changeLight();
    }, this.timer());
  }
}
