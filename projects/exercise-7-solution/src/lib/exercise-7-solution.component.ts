import { Component, OnInit } from '@angular/core';
import { WebGameComponent } from './web-game/web-game.component';
import { DesktopGameComponent } from './desktop-game/desktop-game.component';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'lib-exercise-7-solution',
  standalone: true,
  imports: [WebGameComponent, DesktopGameComponent, MatTab, MatTabGroup],
  providers: [],
  templateUrl: `./exercise-7-solution.component.html`,
  styleUrl: `./exercise-7-solution.component.scss`,
})
export class Exercise7SolutionComponent implements OnInit {
  public ngOnInit(): void {}
}
