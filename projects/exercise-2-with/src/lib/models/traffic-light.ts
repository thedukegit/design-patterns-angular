import {Injectable} from '@angular/core';
import {StateInterface} from "../util/state.interface";
import {RedState} from "./states/red-state";

@Injectable({
  providedIn: 'root'
})
export class TrafficLight {

  private currentState: StateInterface = new RedState(this);

  public constructor() {
  }

  public get state(): StateInterface {
    return this.currentState;
  }

  public set state(state: StateInterface) {
    this.currentState = state;
  }

  public changeLight() {
    this.currentState.changeLight();
  }

}
