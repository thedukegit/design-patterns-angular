import {Component, HostListener} from '@angular/core';
import {ButtonComponent} from "./button/button.component";
import {CommandInterface} from "./models/command.interface";
import {FireBlastersCommand} from "./models/fire-blasters.command";
import {Ship} from "./models/ship";
import {HyperjumpCommand} from "./models/hyperjump.command";
import {UnknownCommand} from "./models/unknown.command";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";


@Component({
  selector: 'lib-exercise-21-solution',
  standalone: true,
  imports: [
    ButtonComponent,
    MatFormField,
    MatSelect,
    MatOption,
    MatLabel
  ],
  templateUrl: './exercise-21-solution.component.html',
})
export class Exercise21SolutionComponent {
  protected ship: Ship = new Ship();
  protected commands: Record<string, CommandInterface> = {
    'fireBlasters': new FireBlastersCommand(this.ship),
    'hyperjump': new HyperjumpCommand(this.ship)
  }
  protected options = [{label: 'Fire blasters', value: 'fireBlasters'}, {label: 'Hyperjump', value: 'hyperjump'}];
  protected command1: CommandInterface = new UnknownCommand();
  protected label1: string = 'Select command';
  protected command2: CommandInterface = new UnknownCommand();
  protected label2: string = 'Select command';

  @HostListener('window:keydown.control.b')
  public button1(): void {
    this.command1.execute();
  }

  @HostListener('window:keydown.control.h')
  public button2(): void {
    this.command2.execute();
  }

  protected setCommand1(command: any): void {
    this.command1 = this.commands[command];
    const newLabel = this.options.find(option => option.value === command)?.label;
    if (newLabel) {
      this.label1 = newLabel;
    }
  }

  protected setCommand2(command: any): void {
    this.command2 = this.commands[command];
    const newLabel = this.options.find(option => option.value === command)?.label;
    if (newLabel) {
      this.label2 = newLabel;
    }
  }
}
