import { Captain } from "../domain/captain";
import { AstroidHunter } from "../domain/ship/astroid-hunter";
import { FleetCommander } from "../domain/ship/fleet-commander";
import { TaskForceCommander } from "../domain/ship/task-force-commander";
import { UnitCommander } from "../domain/ship/unit-commander";

export class FleetProvider {
  public provide(): FleetCommander {

    const grey = new Captain("Captain Bartholomew Greybeard", 60);
    const ironhand = new Captain("Captain Isabella 'Ironhand' Drake", 35);
    const storm = new Captain("Captain Cedric Stormbreaker", 40);
    const horatio = new Captain("Captain Horatio Flintlock", 42);
    const brine = new Captain("Captain Tobias Brine", 41);
    const orion = new Captain("Captain Orion Starfall", 41);
    const darkwater = new Captain("Captain Wren Darkwater", 48);
    const blackstar = new Captain("Captain Elias Blackstar", 48);
    const vex = new Captain("Captain Theron Vex", 53);
    const solbright = new Captain("Captain Aeliana Solbright", 39);
    const pulse = new Captain("Captain Liora 'Pulse' Nyx", 58);
    const moonblade = new Captain("Captain Syra Moonblade", 60);
    const boots = new Captain("Captain Beatrix 'Boots' Windwhip", 41);
    const steelshade = new Captain("Captain Darius 'Steelshade' Varn", 47);
    const shadowgale = new Captain("Captain Seraphina 'Shadowgale' Veil", 32);

    const fleetCommander = new FleetCommander("Fleet Commander", grey, [
      new TaskForceCommander("Task Force Commander 1", ironhand, [
        new UnitCommander("Unit Commander 1", storm, [
          new AstroidHunter("Astroid Hunter 1", horatio),
          new AstroidHunter("Astroid Hunter 2", brine)
        ]),
        new UnitCommander("Unit Commander 2", orion, [
          new AstroidHunter("Astroid Hunter 3", darkwater),
          new AstroidHunter("Astroid Hunter 4", blackstar)
        ])
      ]),
      new TaskForceCommander("Task Force Commander 2", vex, [
        new UnitCommander("Unit Commander 3", solbright, [
          new AstroidHunter("Astroid Hunter 5", pulse),
          new AstroidHunter("Astroid Hunter 6", moonblade)
        ]),
        new UnitCommander("Unit Commander 4", boots, [
          new AstroidHunter("Astroid Hunter 7", steelshade),
          new AstroidHunter("Astroid Hunter 8", shadowgale)
        ])
      ])
    ]);


    return fleetCommander;
  }


}
