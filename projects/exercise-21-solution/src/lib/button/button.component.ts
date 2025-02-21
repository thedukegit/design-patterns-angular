import {Component, Input} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {CommandInterface} from "../models/command.interface";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() public label: string = '';
  @Input() public command!: CommandInterface;

  public clicked(): void {
    this.command.execute();
  }
}
