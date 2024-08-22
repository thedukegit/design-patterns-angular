import { Component } from '@angular/core';
import { Window, WindowHandler } from '../models/window/window';

@Component({
  selector: 'lib-exercise-9-solution',
  standalone: true,
  imports: [],
  template: ` <p>{{ main() }}</p> `,
  styles: ``,
})
export class Exercise9SolutionComponent {
  // the 'new WindowHandler();' is the only bit of code that needs to change when porting this game to another operating system
  private window: Window = new WindowHandler(); // in case of Windows
  // private window: Window = new LinuxToWindowsAdapter(new LinuxWindowHandler()); // in case of Linux

  public main(): string {
    // Imagine that the render call to the window is called dozens of times throughout the game code.
    return this.window.render(
      'ASTEROID GAME RUNNING',
      'Awesome Asteroids',
      false,
    );
  }
}
