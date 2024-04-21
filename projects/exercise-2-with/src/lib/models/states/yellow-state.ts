import {StateInterface} from "../../util/state.interface";
import {LightColor} from "../../util/light-color.enum";
import {Sound} from "../../util/sound.enum";
import {signal, Signal} from "@angular/core";
import {RedState} from "./red-state";
import {BaseState} from "./base-state";

export class YellowState extends BaseState {

  public override get color(): LightColor {
    return LightColor.Yellow;
  }

  public override get sound(): Sound {
    return Sound.TokTok;
  }

  public override get timer(): Signal<number> {
    return signal(1000);
  }

  public override next(): StateInterface {
    return new RedState(this.trafficLight);
  }
}
