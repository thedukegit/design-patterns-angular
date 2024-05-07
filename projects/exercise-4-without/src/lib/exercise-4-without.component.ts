import {Component, OnInit, signal} from '@angular/core';
import {Helium} from "./models/helium";
import {Hydrogen} from "./models/hydrogen";

@Component({
  selector: 'lib-exercise-4-without',
  standalone: true,
  imports: [],
  templateUrl: 'exercise-4-without.component.html'
})
export class Exercise4WithoutComponent implements OnInit {
  protected powerLevel = signal(0);
  protected warning = signal('');

  public ngOnInit(): void {


    setInterval(() => {
      const hydrogen = new Hydrogen();
      const helium = new Helium();
      this.powerLevel.set(hydrogen.powerLevel + helium.powerLevel);
      console.log('Power level:', this.powerLevel());
      if (this.powerLevel() > 9000) {
        this.warning.set('It\'s over 9000!');
      } else {
        this.warning.set('');
      }
    }, 1000);


  }


}
