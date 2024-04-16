import {Injectable} from '@angular/core';
import {StateInterface} from "../interfaces/state.interface";
import {RedState} from "../states/red-state";
import {GreenState} from "../states/green-state";
import {YellowState} from "../states/yellow-state";

@Injectable({
  providedIn: 'root'
})
export class TrafficLight {

  private redState: StateInterface = new RedState(this);
  private yellowState: StateInterface = new YellowState(this);
  private greenState: StateInterface = new GreenState(this);
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

  public getRedState(): StateInterface {
    return this.redState;
  }

  public getYellowState(): StateInterface {
    return this.yellowState;
  }

  public getGreenState(): StateInterface {
    return this.greenState;
  }

}
