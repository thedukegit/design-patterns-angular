import {FleetCommander} from "../models/fleet-commander";

export class GameState {
  public constructor(public readonly fleetCommander: FleetCommander) {
  }
}
