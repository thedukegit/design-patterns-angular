import {LightColor} from "../../util/light-color.enum";
import {Sound} from "../../util/sound.enum";
import {signal, Signal} from "@angular/core";
import {BaseState} from "./base-state";
import {YellowState} from "./yellow-state";
import {StateInterface} from "../../util/state.interface";

export class GreenState extends BaseState {

  public override get color(): LightColor {
    return LightColor.Green;
  }

  public override get sound(): Sound {
    return Sound.GoGoGo;
  }

  public override get timer(): Signal<number> {
    return signal(1500);
  }

  public override next(): StateInterface {
    return new YellowState(this.trafficLight);
  }

}
