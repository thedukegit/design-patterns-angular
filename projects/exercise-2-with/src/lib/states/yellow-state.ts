import {StateInterface} from "../interfaces/state.interface";
import {LightColor} from "../light-color.enum";
import {TrafficLight} from "../models/traffic-light";
import {Sound} from "../sound.enum";

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


  public get timer(): number {
    return 1000;
  }

  public changeLight() {
    this.trafficLight.state = this.trafficLight.getRedState();
  }
}
