import {Component, HostListener} from '@angular/core';
import {ButtonComponent} from "./button/button.component";
import {CommandInterface} from "./models/command.interface";
import {FireBlastersCommand} from "./models/fire-blasters.command";
import {Ship} from "./models/ship";
import {HyperjumpCommand} from "./models/hyperjump.command";

@Component({
  selector: 'lib-exercise-21-solution',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './exercise-21-solution.component.html',
})
export class Exercise21SolutionComponent {
  protected ship: Ship = new Ship();
  // create a couple of commands
  protected fireBlasterCommand: CommandInterface = new FireBlastersCommand(this.ship);
  protected hyperjumpCommand: CommandInterface = new HyperjumpCommand(this.ship);

  @HostListener('window:keydown.control.b')
  public fireBlaster(): void {
    this.fireBlasterCommand.execute();
  }

  @HostListener('window:keydown.control.h')
  public hyperjump(): void {
    this.hyperjumpCommand.execute();
  }
}
