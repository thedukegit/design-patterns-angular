import {LightColor} from "./light-color.enum";
import {Sound} from "./sound.enum";
import {Signal} from "@angular/core";

export interface StateInterface {
  color: LightColor;
  sound: Sound;
  timer: Signal<number>;

  next(): StateInterface;

  changeLight(): void;
}
