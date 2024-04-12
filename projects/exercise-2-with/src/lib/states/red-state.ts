import {TrafficLight} from "../models/traffic-light";
import {StateInterface} from "../interfaces/state.interface";
import {LightColor} from "../light-color.enum";
import {Sound} from "../sound.enum";

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

  public get timer(): number {
    return 5000;
  }

  public changeLight(): void {
    this.trafficLight.state = this.trafficLight.getGreenState();
  }

}
