import {StateInterface} from "../../util/state.interface";
import {LightColor} from "../../util/light-color.enum";
import {Sound} from "../../util/sound.enum";
import {signal, Signal} from "@angular/core";
import {BaseState} from "./base-state";
import {GreenState} from "./green-state";

export class RedState extends BaseState {
  // private trafficLight: TrafficLight
  //
  // public constructor(trafficLight: TrafficLight) {
  //   super();
  //   this.trafficLight = trafficLight;
  // }

  public override get color(): LightColor {
    return LightColor.Red;
  }

  public override get sound(): Sound {
    return Sound.TikTik;
  }

  public override get timer(): Signal<number> {
    return signal(4000);
  }

  public override next(): StateInterface {
    return new GreenState(this.trafficLight);
  }

}
