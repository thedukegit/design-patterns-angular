import {LightColor} from "../light-color.enum";
import {Sound} from "../sound.enum";

export interface StateInterface {
  color: LightColor;
  sound: Sound;
  timer: number;

  changeLight(): void;
}
