import {TrafficLight} from "../models/traffic-light";
import {StateInterface} from "../interfaces/state.interface";
import {LightColor} from "../light-color.enum";
import {Sound} from "../sound.enum";

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

  public get timer(): number {
    return 1500;
  }

  public changeLight(): void {
    this.trafficLight.state = this.trafficLight.getYellowState();
  }

}
